import React, { useEffect, useState } from 'react'
import { GlobalWorkerOptions, getDocument } from 'pdfjs-dist'
import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.min?url'

// Styles
import { PdfScroll, LoadingText, ErrorText } from './PdfViewer.style'

GlobalWorkerOptions.workerSrc = pdfjsWorker

// Dayong: lightweight pdf.js renderer for inline, scrollable PDFs
export const PdfViewer: React.FC<{ file: string }> = ({ file }) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [pages, setPages] = useState<Array<string>>([])

  // Dayong: load PDF via pdf.js and convert pages to images for wide browser support
  useEffect(() => {
    let cancelled = false

    const renderPdf = async () => {
      setLoading(true)
      setError(null)
      setPages([])

      let loadingTask: ReturnType<typeof getDocument> | null = null

      try {
        loadingTask = getDocument(file)
        const pdf = await loadingTask.promise
        const renderedPages: Array<string> = []

        for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber += 1) {
          const page = await pdf.getPage(pageNumber)
          const viewport = page.getViewport({ scale: 1.2 })
          const canvas = document.createElement('canvas')
          const context = canvas.getContext('2d')

          if (!context) {
            continue
          }

          canvas.height = viewport.height
          canvas.width = viewport.width

          await page.render({ canvasContext: context, viewport }).promise

          if (!cancelled) {
            renderedPages.push(canvas.toDataURL('image/png'))
          }
        }

        if (!cancelled) {
          setPages(renderedPages)
        }
      } catch (err) {
        if (!cancelled) {
          setError('Impossible de charger le PDF.')
        }
      } finally {
        if (loadingTask) {
          await loadingTask.destroy()
        }
        if (!cancelled) {
          setLoading(false)
        }
      }
    }

    renderPdf()

    return () => {
      cancelled = true
    }
  }, [file])

  return (
    <PdfScroll aria-busy={loading} aria-live='polite'>
      {loading && <LoadingText>Chargement du PDF…</LoadingText>}
      {error && <ErrorText>{error}</ErrorText>}
      {!loading && !error &&
        pages.map((src, idx) => <img key={idx.toString()} src={src} alt={`PDF page ${idx + 1}`} />)}
    </PdfScroll>
  )
}

export default PdfViewer

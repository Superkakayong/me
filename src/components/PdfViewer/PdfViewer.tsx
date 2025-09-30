import React, { useEffect, useRef, useState } from 'react'
import { GlobalWorkerOptions, getDocument } from 'pdfjs-dist'
import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.min?url'

// Styles
import { PdfScroll, LoadingText, ErrorText, ScrollHint } from './PdfViewer.style'

GlobalWorkerOptions.workerSrc = pdfjsWorker

// Dayong: lightweight pdf.js renderer for inline, scrollable PDFs
export const PdfViewer: React.FC<{ file: string }> = ({ file }) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [pages, setPages] = useState<Array<string>>([])
  const [showHint, setShowHint] = useState(false)
  const containerRef = useRef<HTMLDivElement | null>(null)

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

  // Dayong: show scroll hint once pages are ready, hide after interaction/time
  useEffect(() => {
    if (loading || error || pages.length === 0) return

    setShowHint(true)
    const el = containerRef.current
    if (!el) return

    const hide = () => setShowHint(false)

    el.addEventListener('wheel', hide, { once: true })
    el.addEventListener('touchstart', hide, { once: true })
    el.addEventListener('scroll', hide, { once: true })

    return () => {
      el.removeEventListener('wheel', hide)
      el.removeEventListener('touchstart', hide)
      el.removeEventListener('scroll', hide)
    }
  }, [loading, error, pages])

  return (
    <PdfScroll ref={containerRef} aria-busy={loading} aria-live='polite'>
      {loading && <LoadingText>Chargement du PDF…</LoadingText>}
      {error && <ErrorText>{error}</ErrorText>}
      {!loading && !error &&
        pages.map((src, idx) => <img key={idx.toString()} src={src} alt={`PDF page ${idx + 1}`} />)}
      {showHint && !loading && !error && (
        <ScrollHint>
          <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path d='M12 5v14m0 0-4-4m4 4 4-4' stroke='currentColor' strokeWidth='1.6' strokeLinecap='round' strokeLinejoin='round' />
          </svg>
          Scroll
        </ScrollHint>
      )}
    </PdfScroll>
  )
}

export default PdfViewer

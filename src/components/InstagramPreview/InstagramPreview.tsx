import React from 'react'
import { InstaContainer, InstaFrame, FallbackNotice } from './InstagramPreview.style'

// Dayong: 解析 Instagram 分享链接中的短码
const getShortCode = (url: string): string | null => {
  try {
    const parsed = new URL(url)
    const parts = parsed.pathname.split('/').filter(Boolean)
    const pIndex = parts.indexOf('p')
    if (pIndex !== -1 && parts[pIndex + 1]) {
      return parts[pIndex + 1]
    }
    if (parts.length >= 1) {
      return parts[0]
    }
  } catch (err) {
    return null
  }
  return null
}

type Props = {
  url: string
}

export const InstagramPreview: React.FC<Props> = ({ url }) => {
  const shortCode = getShortCode(url)

  if (!shortCode) {
    return (
      <FallbackNotice>
        Cannot Load Instagram Videos. Please Try Again Later.
      </FallbackNotice>
    )
  }

  const embedUrl = `https://www.instagram.com/p/${shortCode}/embed`

  return (
    <InstaContainer>
      <InstaFrame
        src={embedUrl}
        allow='autoplay; clipboard-write; encrypted-media; picture-in-picture'
        allowFullScreen
        loading='lazy'
        title='Instagram preview'
      />
    </InstaContainer>
  )
}

export default InstagramPreview

type DescriptionType = {
  title: string
  desc: string
  side: 'left' | 'right'
}

export type ProjectType = {
  id: number
  title: string
  imgPath: string
  mainsTag: Array<string>
  secondsTags: Array<string>
  filter: string
  imgAbout: string
  client: Array<string>
  role: Array<string>
  credits: Array<string>
  description: Array<DescriptionType>
  renderFinal: boolean
  hrefButtonRenderFinal?: string
  typeRenderFinal: string
  imagePathRenderFinal?: string
  videoPathRenderFinal?: string
  /** optional poster image URL to use as video cover */
  videoPoster?: string
  renderFinalArray: boolean
  renderFinalContent?: Array<Array<string>>
}

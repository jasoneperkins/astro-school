export interface Newsletter {
  _type: 'newsletter'
  title: string
  publishDate: string
  pdfFile?: {
    asset: {
      url: string
    }
  }
}

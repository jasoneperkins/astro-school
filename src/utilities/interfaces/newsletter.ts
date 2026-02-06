export interface Newsletter {
  _type: 'Newsletter'
  title: string
  publishDate: string
  pdfFile?: {
    asset: {
      url: string
    }
  }
}

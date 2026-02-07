import type { Info } from '@interfaces/info'
import type { Section } from '@interfaces/section'
import type { Seo } from '@interfaces/seo'

export interface Newsletter {
  _type: 'Newsletter'
  info: Info
  pdfFile?: {
    asset: {
      url: string
    }
  }
  content: Section[]
  seo?: Seo
}

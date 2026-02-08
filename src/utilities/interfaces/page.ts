import type { Info } from '@interfaces/info'
import type { Section } from '@interfaces/section'
import type { Seo } from '@interfaces/seo'
import type { Social } from '@interfaces/social'

export interface Page {
  _type: 'Page'
  info: Info
  content: Section[]
  seo?: Seo
  social?: Social
}

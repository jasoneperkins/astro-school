import type { Info } from '@interfaces/info'
import type { Section } from '@interfaces/section'

export interface Page {
  _type: 'Page'
  info: Info
  content: Section[]
}

import type { Info } from '@interfaces/info'
import type { Section } from '@interfaces/section'
import type { Seo } from '@interfaces/seo'

export interface Classroom {
  _type: 'Classroom'
  info: Info
  content: Section[]
  seo?: Seo
}

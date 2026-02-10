import type { Info } from '@interfaces/info'
import type { Seo } from '@interfaces/seo'
import type { CustomImage } from '@interfaces/customImage'
import type { VocabularyCard } from '@interfaces/vocabularyCard'

export interface Newsletter {
  _type: 'Newsletter'
  info: Info
  content: {
    text: string
    carousel: CustomImage[]
  }
  vocabularyCards: VocabularyCard[]
  seo?: Seo
  social?: any // Added social to match schema
}

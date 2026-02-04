// Document Imports
import classroom from '@documents/classroom'
import newsletter from '@documents/newsletter'
import page from '@documents/page'
import identity from '@documents/identity'

// Object Imports
import contentSection from '@objects/contentSection'
import hero from '@objects/hero'
import pageInfo from '@objects/pageInfo'
import simpleHeading from '@objects/simpleHeading'
import socials from '@objects/socials'
import customImage from '@objects/customImage'

// Interface Imports
import type { Classroom } from '@interfaces/classroom'
import type { ContentSection } from '@interfaces/contentSection'
import type { Hero } from '@interfaces/hero'
import type { Identity } from '@interfaces/identity'
import type { Newsletter } from '@interfaces/newsletter'
import type { PageInfo } from '@interfaces/pageInfo'
import type { SanityImage } from '@interfaces/sanityImage'
import type { SimpleHeading } from '@interfaces/simpleHeading'

const documentTypes = [page, classroom, newsletter, identity]
const objectTypes = [
  contentSection,
  hero,
  pageInfo,
  simpleHeading,
  socials,
  customImage
]

export const schemaTypes = [...objectTypes, ...documentTypes]
export type {
  Classroom,
  ContentSection,
  Hero,
  Identity,
  Newsletter,
  PageInfo,
  SanityImage,
  SimpleHeading
}

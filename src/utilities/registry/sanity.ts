// Document Imports
import classroom from '@documents/classroom'
import newsletter from '@documents/newsletter'
import page from '@documents/page'

// Object Imports
import contentSection from '@objects/contentSection'
import heroSection from '@objects/heroSection'
import simpleHeading from '@objects/simpleHeading'

// Interface Imports
import type { Classroom } from '@interfaces/classroom'
import type { ContentSection } from '@interfaces/contentSection'
import type { HeroSection } from '@interfaces/heroSection'
import type { Newsletter } from '@interfaces/newsletter'
import type { SanityImage } from '@interfaces/sanityImage'
import type { SimpleHeading } from '@interfaces/simpleHeading'

const objectTypes = [contentSection, heroSection, simpleHeading]
const documentTypes = [page, classroom, newsletter]

export const schemaTypes = [...objectTypes, ...documentTypes]
export type {
  Classroom,
  ContentSection,
  HeroSection,
  Newsletter,
  SanityImage,
  SimpleHeading
}

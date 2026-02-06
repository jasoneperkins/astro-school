// Document Imports
import classroom from '@documents/classroom'
import identity from '@documents/identity'
import newsletter from '@documents/newsletter'
import page from '@documents/page'

// Interface Imports
import type { Classroom } from '@interfaces/classroom'
import type { Heading } from '@interfaces/heading'
import type { Identity } from '@interfaces/identity'
import type { Info } from '@interfaces/info'
import type { Newsletter } from '@interfaces/newsletter'
import type { SanityImage } from '@interfaces/sanityImage'
import type { Section } from '@interfaces/section'

// Object Imports
import customImage from '@objects/customImage'
import heading from '@objects/heading'
import info from '@objects/info'
import section from '@objects/section'
import socials from '@objects/socials'

const documentTypes = [classroom, identity, newsletter, page]
const objectTypes = [customImage, heading, info, section, socials]

export const schemaTypes = [...objectTypes, ...documentTypes]
export type {
  Classroom,
  Heading,
  Identity,
  Info,
  Newsletter,
  SanityImage,
  Section
}

// Document Imports
import Classroom from '@documents/classroom'
import Identity from '@documents/identity'
import Newsletter from '@documents/newsletter'
import Page from '@documents/page'

// Interface Imports
import type { Classroom as ClassroomInterface } from '@interfaces/classroom'
import type { Heading as HeadingInterface } from '@interfaces/heading'
import type { Identity as IdentityInterface } from '@interfaces/identity'
import type { Info as InfoInterface } from '@interfaces/info'
import type { Newsletter as NewsletterInterface } from '@interfaces/newsletter'
import type { CustomImage as CustomImageInterface } from '@interfaces/customImage'
import type { Section as SectionInterface } from '@interfaces/section'

// Object Imports
import CustomImage from '@objects/customImage'
import Heading from '@objects/heading'
import Info from '@objects/info'
import Section from '@objects/section'

const documentTypes = [Classroom, Identity, Newsletter, Page]
const objectTypes = [CustomImage, Heading, Info, Section]

export const schemaTypes = [...objectTypes, ...documentTypes]
export type {
  ClassroomInterface as Classroom,
  HeadingInterface as Heading,
  IdentityInterface as Identity,
  InfoInterface as Info,
  NewsletterInterface as Newsletter,
  CustomImageInterface as CustomImage,
  SectionInterface as Section
}

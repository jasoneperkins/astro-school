// Documents
import Classroom from '../../src/utilities/documents/classroom'
import Identity from '../../src/utilities/documents/identity'
import Newsletter from '../../src/utilities/documents/newsletter'
import Page from '../../src/utilities/documents/page'

// Objects
import AssetExtension from '../../src/utilities/objects/assetExtension'
import CustomImage from '../../src/utilities/objects/customImage'
import Heading from '../../src/utilities/objects/heading'
import Icon from '../../src/utilities/objects/icon'
import IconCard from '../../src/utilities/objects/iconCard'
import Info from '../../src/utilities/objects/info'
import Section from '../../src/utilities/objects/section'
import Seo from '../../src/utilities/objects/seo'
import Social from '../../src/utilities/objects/social'
import EventPoster from '../../src/utilities/objects/eventPoster'
import VocabularyCard from '../../src/utilities/objects/vocabularyCard'

const documentTypes = [Classroom, Identity, Newsletter, Page]
const objectTypes = [
  AssetExtension,
  CustomImage,
  EventPoster,
  Heading,
  Icon,
  IconCard,
  Info,
  Section,
  Seo,
  Social,
  VocabularyCard,
]

export const schemaTypes = [...documentTypes, ...objectTypes]

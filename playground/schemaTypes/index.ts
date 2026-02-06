// Documents
import Classroom from '../../src/utilities/documents/classroom'
import Identity from '../../src/utilities/documents/identity'
import Newsletter from '../../src/utilities/documents/newsletter'
import Page from '../../src/utilities/documents/page'

// Objects
import CustomImage from '../../src/utilities/objects/customImage'
import Heading from '../../src/utilities/objects/heading'
import Info from '../../src/utilities/objects/info'
import Section from '../../src/utilities/objects/section'

const documentTypes = [Classroom, Identity, Newsletter, Page]
const objectTypes = [CustomImage, Heading, Info, Section]

export const schemaTypes = [...documentTypes, ...objectTypes]

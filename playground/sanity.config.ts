// temple-beit-hayam/sanity.config.ts
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'

// 1. Import Documents (Sidebar items)
import page from '../src/utilities/documents/page'
import identity from '../src/utilities/documents/identity'
import classroom from '../src/utilities/documents/classroom'
import newsletter from '../src/utilities/documents/newsletter'

// 2. Import Objects (The missing pieces causing your errors)
import pageInfo from '../src/utilities/objects/pageInfo'
import hero from '../src/utilities/objects/hero'
import contentSection from '../src/utilities/objects/contentSection'
import simpleHeading from '../src/utilities/objects/simpleHeading'
import socials from '../src/utilities/objects/socials'

export default defineConfig({
  name: 'default',
  title: 'ECLC, Stuart Florida',
  projectId: 'nn95ygkm',
  dataset: 'production',
  plugins: [structureTool()],
  basePath: '/playground',
  schema: {
    // 3. You MUST include both Documents AND Objects in this array
    types: [
      // Documents
      page,
      identity,
      classroom,
      newsletter,
      // Objects
      pageInfo,
      hero,
      contentSection,
      simpleHeading,
      socials,
    ],
  },
})

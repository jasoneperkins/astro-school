import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './schemaTypes' // Import the unified array

export default defineConfig({
  name: 'default',
  title: 'ECLC, Stuart Florida',
  projectId: 'nn95ygkm',
  dataset: 'production',
  plugins: [structureTool()],
  basePath: '/playground',
  schema: {
    types: schemaTypes, // Use the imported array
  },
})

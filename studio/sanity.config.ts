import {defineConfig} from 'sanity'
import {media} from 'sanity-plugin-media'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'ECLC, Stuart Florida',
  projectId: 'nn95ygkm',
  dataset: 'production',
  plugins: [structureTool(), media()],
  basePath: '/playground',
  schema: {
    types: schemaTypes,
  },
})

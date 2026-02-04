import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from '@registry/sanity'

export default defineConfig({
  name: 'default',
  title: 'ECLC, Stuart Florida',
  projectId: 'nn95ygkm',
  dataset: 'production',
  plugins: [structureTool()],
  schema: {
    types: schemaTypes
  }
})

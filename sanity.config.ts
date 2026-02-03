import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from '@registry/sanity'

export default defineConfig({
  name: 'default',
  title: 'Temple Beit HaYam',
  projectId: 'nn95ygkm',
  dataset: 'production',
  plugins: [structureTool()],
  schema: {
    types: schemaTypes
  }
})

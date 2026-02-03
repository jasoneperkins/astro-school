import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from '@types/sanity'

export default defineConfig({
  name: 'default',
  title: 'Temple Beit HaYam',
  projectId: 'nn95ygkm', // From your astro.config.mjs
  dataset: 'production',
  plugins: [structureTool()],
  schema: {
    types: schemaTypes
  }
})

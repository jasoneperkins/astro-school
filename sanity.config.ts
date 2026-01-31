import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { presentationTool } from 'sanity/presentation'
import { schemaTypes } from './studio/schemas/index'
import config from './studio/sanity.config'

const projectId = process.env.SANITY_STUDIO_PROJECT_ID || 'nn95ygkm'
const dataset = process.env.PUBLIC_SANITY_DATASET || 'production'

export default defineConfig(config)

import { createClient } from '@sanity/client'
import fs from 'fs'
import path from 'path'

// Manually parse .env file
const envPath = path.join(process.cwd(), '.env')
const envConfig = fs
  .readFileSync(envPath, 'utf8')
  .split('\n')
  .reduce((acc, line) => {
    const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/)
    if (match) {
      const key = match[1]
      let value = match[2] || ''
      // Remove quotes if present
      if (value.startsWith('"') && value.endsWith('"'))
        value = value.slice(1, -1)
      if (value.startsWith("'") && value.endsWith("'"))
        value = value.slice(1, -1)
      acc[key] = value
    }
    return acc
  }, {})

const { PUBLIC_SANITY_PROJECT_ID, PUBLIC_SANITY_DATASET, SANITY_API_TOKEN } =
  envConfig

if (!PUBLIC_SANITY_PROJECT_ID || !PUBLIC_SANITY_DATASET || !SANITY_API_TOKEN) {
  console.error('Error: Missing Sanity configuration in .env file.')
  console.log('Found keys:', Object.keys(envConfig))
  process.exit(1)
}

const client = createClient({
  projectId: PUBLIC_SANITY_PROJECT_ID,
  dataset: PUBLIC_SANITY_DATASET,
  token: SANITY_API_TOKEN,
  useCdn: false,
  apiVersion: '2023-01-01' // Use a recent API version
})

const imagesDir = path.join(process.cwd(), 'src', 'assets', 'images')

const uploadImages = async () => {
  try {
    const files = fs.readdirSync(imagesDir)
    const imageFiles = files.filter((file) =>
      ['.jpg', '.jpeg', '.png', '.webp', '.gif', '.svg'].includes(
        path.extname(file).toLowerCase()
      )
    )

    console.log(`Found ${imageFiles.length} images to upload...`)

    for (const fileName of imageFiles) {
      const filePath = path.join(imagesDir, fileName)
      console.log(`Uploading ${fileName}...`)

      try {
        const asset = await client.assets.upload(
          'image',
          fs.createReadStream(filePath),
          {
            filename: fileName
          }
        )
        console.log(`✅ Success: ${fileName} (ID: ${asset._id})`)
      } catch (error) {
        console.error(`❌ Failed to upload ${fileName}:`, error.message)
      }
    }

    console.log('\nAll uploads complete!')
  } catch (error) {
    console.error('Error reading images directory:', error.message)
  }
}

uploadImages()

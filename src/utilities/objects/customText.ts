import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'CustomText',
  title: 'Custom Text',
  type: 'object',
  fields: [
    defineField({
      name: 'text',
      title: 'Body Text',
      type: 'text',
      rows: 10,
      description: 'Enter the main text content. Use multiple paragraphs.'
    }),
    defineField({
      name: 'carousel',
      title: 'Image Carousel',
      type: 'array',
      of: [{ type: 'CustomImage' }],
      description: 'Add images to be displayed in a carousel.'
    })
  ]
})

import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'CustomImage',
  title: 'Image with Alt Text',
  type: 'image',
  fields: [
    defineField({
      name: 'alt',
      type: 'string',
      title: 'Alt Text',
      description:
        'Optional: Describe the image for accessibility. Leave blank for decorative images.'
    })
  ]
})

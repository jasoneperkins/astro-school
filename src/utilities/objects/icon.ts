import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'Icon',
  title: 'SVG Icon',
  type: 'image',
  options: {
    accept: '.svg'
  },
  fields: [
    defineField({
      name: 'alt',
      type: 'string',
      title: 'Alt Text',
      description:
        'Used for accessibility. Describe the icon if it is not decorative.'
    })
  ]
})

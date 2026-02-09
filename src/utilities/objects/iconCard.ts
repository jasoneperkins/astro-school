import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'IconCard',
  title: 'Icon Card',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string'
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3
    }),
    defineField({
      name: 'color',
      title: 'Color Accent',
      type: 'string',
      options: {
        list: [
          { title: 'Blue', value: 'blue' },
          { title: 'Red', value: 'red' },
          { title: 'Green', value: 'green' },
          { title: 'Orange', value: 'orange' }
        ]
      },
      initialValue: 'blue'
    }),
    defineField({
      name: 'icon',
      title: 'Sanity Icon (SVG)',
      type: 'Icon'
    })
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description'
    }
  }
})

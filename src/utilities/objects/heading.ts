import { defineType, defineField, type Rule } from 'sanity'

export default defineType({
  name: 'Heading',
  title: 'Content Heading',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Main Title',
      type: 'string',
      validation: (Rule: Rule) => Rule.required()
    }),
    defineField({
      name: 'subTitle',
      title: 'Subtitle',
      type: 'string'
    }),
    defineField({
      name: 'showTitleFirst',
      title: 'Display title above subtitle?',
      type: 'boolean',
      initialValue: false,
      description:
        'If toggled off, the subtitle will appear as an overline (above the main title).'
    })
  ]
})

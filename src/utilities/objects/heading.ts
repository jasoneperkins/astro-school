import { type Rule } from 'sanity'

export default {
  name: 'Heading',
  title: 'Content Heading',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Main Title',
      type: 'string',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'subTitle',
      title: 'Subtitle',
      type: 'string'
    },
    {
      name: 'showTitleFirst',
      title: 'Display title above subtitle?',
      type: 'boolean',
      initialValue: false,
      description:
        'If toggled off, the subtitle will appear as an overline (above the main title).'
    }
  ]
}

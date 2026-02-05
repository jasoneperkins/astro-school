import { type Rule } from 'sanity'

export default {
  name: 'simpleHeading',
  title: 'Simple Heading',
  type: 'object',
  fields: [
    {
      name: 'heading',
      title: 'Main Heading',
      type: 'string',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'subheading',
      title: 'Subheading',
      type: 'string'
    },
    {
      name: 'showHeadingFirst',
      title: 'Display heading above subheading?',
      type: 'boolean',
      initialValue: false,
      description:
        'If toggled off, the subheading will appear as an overline (above the main heading).'
    }
  ]
}

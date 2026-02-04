import { altField } from '@constants/altField'
import { type Rule } from 'sanity'

export default {
  name: 'hero',
  title: 'Hero Section',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Main Title',
      type: 'string',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'subheading',
      title: 'Subheading (Script Font)',
      type: 'string',
      description: 'The text that appears in the large script font.'
    },
    {
      name: 'body',
      title: 'Intro Text',
      type: 'text',
      rows: 3
    },
    {
      name: 'heroImages',
      title: 'Floating Hero Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [altField]
        }
      ],
      validation: (Rule: Rule) =>
        Rule.max(4).error(
          'The homepage design supports a maximum of 4 floating images.'
        )
    }
  ]
}

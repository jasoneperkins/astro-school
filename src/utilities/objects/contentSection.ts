import { type Rule } from 'sanity'

export default {
  name: 'contentSection',
  title: 'Content Section',
  type: 'object',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'simpleHeading'
    },
    {
      name: 'sectionId',
      title: 'Section ID / Slug',
      type: 'slug',
      description:
        'Used for anchor links. Generate this from the heading above.',
      options: {
        // This tells Sanity to look inside the heading object for the string
        source: (doc: any, options: any) => options.parent?.heading?.heading,
        maxLength: 96
      },
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'body',
      title: 'Body Text',
      type: 'array',
      of: [{ type: 'block' }]
    },
    {
      name: 'images',
      title: 'Section Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative Text',
              validation: (Rule: Rule) => Rule.required()
            }
          ]
        }
      ]
    }
  ]
}

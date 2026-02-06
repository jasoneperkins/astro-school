import { type Rule } from 'sanity'

export default {
  name: 'section',
  title: 'Content Section',
  type: 'object',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'heading'
    },
    {
      name: 'slug',
      title: 'Section ID / Slug',
      type: 'slug',
      description: 'Used for anchor links. Generate this from the title above.',
      options: {
        source: (doc: any, options: any) => options.parent?.heading?.title,
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
      of: [{ type: 'customImage' }]
    }
  ],
  preview: {
    select: {
      title: 'heading.title'
    },
    prepare({ title }: { title: string }) {
      return {
        title: title || 'Untitled Section'
      }
    }
  }
}

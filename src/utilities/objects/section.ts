import { defineType, defineField, type Rule } from 'sanity'

export default defineType({
  name: 'Section',
  title: 'Content Section',
  type: 'object',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule: Rule) => Rule.required()
    }),
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'Heading'
    }),
    defineField({
      name: 'slug',
      title: 'Section ID / Slug',
      type: 'slug',
      description: 'Used for anchor links. Generate this from the title above.',
      options: {
        source: (doc: any, options: any) => options.parent?.heading?.title,
        maxLength: 96
      },
      validation: (Rule: Rule) => Rule.required()
    }),
    defineField({
      name: 'showHeader',
      title: 'Show Section Header',
      type: 'boolean',
      initialValue: true,
      description:
        'If disabled, the header will be hidden but still available for screen readers.'
    }),
    defineField({
      name: 'body',
      title: 'Body Text',
      type: 'array',
      of: [{ type: 'block' }]
    }),
    defineField({
      name: 'images',
      title: 'Section Images',
      type: 'array',
      of: [{ type: 'CustomImage' }]
    })
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
})

import { defineType, defineField, type Rule } from 'sanity'

export default defineType({
  name: 'Section',
  title: 'Content Section',
  type: 'object',
  groups: [
    { name: 'content', title: 'Content', default: true },
    { name: 'images', title: 'Images' },
    { name: 'advanced', title: 'Advanced' }
  ],
  fields: [
    defineField({
      name: 'name',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          { title: 'Content', value: 'content' },
          { title: 'Advantages', value: 'advantages' },
          { title: 'Benefits', value: 'benefits' },
          { title: 'Call to Action', value: 'call-to-action' },
          { title: 'Events', value: 'events' },
          { title: 'FAQ', value: 'faq' },
          { title: 'Gallery', value: 'gallery' },
          { title: 'News', value: 'news' },
          { title: 'Services', value: 'services' },
          { title: 'Steps', value: 'steps' },
          { title: 'Summary', value: 'summary' },
          { title: 'Solutions', value: 'solutions' },
          { title: 'Testimonials', value: 'testimonials' }
        ],
        layout: 'dropdown'
      },
      initialValue: 'content',
      validation: (Rule: Rule) => Rule.required()
    }),
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'Heading',
      group: 'content'
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
      validation: (Rule: Rule) => Rule.required(),
      group: 'content'
    }),
    defineField({
      name: 'showHeader',
      title: 'Show Section Header',
      type: 'boolean',
      initialValue: true,
      description:
        'If disabled, the header will be hidden but still available for screen readers.',
      group: 'content'
    }),
    defineField({
      name: 'body',
      title: 'Body Text',
      type: 'array',
      of: [{ type: 'block' }],
      group: 'content'
    }),
    defineField({
      name: 'images',
      title: 'Section Images',
      type: 'array',
      of: [{ type: 'CustomImage' }],
      group: 'images'
    }),
    defineField({
      name: 'cards',
      title: 'Icon Cards',
      type: 'array',
      of: [{ type: 'IconCard' }],
      group: 'advanced'
    }),
    defineField({
      name: 'cardAlign',
      title: 'Card Alignment',
      type: 'string',
      options: {
        list: [
          { title: 'Left', value: 'left' },
          { title: 'Center', value: 'center' }
        ]
      },
      initialValue: 'left',
      group: 'advanced'
    })
  ],
  preview: {
    select: {
      title: 'heading.title'
    },
    prepare(selection: any) {
      const { title } = selection
      return {
        title: title || 'Untitled Section'
      }
    }
  }
})

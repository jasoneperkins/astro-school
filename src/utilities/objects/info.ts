import { defineType, defineField, type Rule } from 'sanity'

export default defineType({
  name: 'Info',
  title: 'Page Information',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Used for H1 headings and internal reference.',
      hidden: ({ document }) => document?._type === 'Newsletter',
      validation: (Rule) =>
        Rule.custom((value, context) => {
          if (context.document?._type === 'Newsletter') return true
          return value ? true : 'Title is required'
        })
    }),
    defineField({
      name: 'week',
      title: 'Newsletter Week',
      type: 'date',
      hidden: ({ document }) => document?._type !== 'Newsletter',
      description: 'Select the Monday for this newsletter.',
      validation: (Rule) =>
        Rule.custom((value, context) => {
          if (context.document?._type !== 'Newsletter') return true
          if (!value) return 'Date is required'
          const date = new Date(value)
          const day = date.getUTCDay()
          return day === 1 ? true : 'Newsletters must start on a Monday'
        })
    }),
    defineField({
      name: 'subTitle',
      title: 'Subtitle',
      type: 'string',
      description: 'Hidden branding subtitle.',
      hidden: true,
      initialValue: ({ document }) => {
        if (document?._type === 'Newsletter') {
          return 'The ECLC Newsletter for the Week of'
        }
        return ''
      }
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'The URL path for this page.',
      options: {
        source: (doc: any) => {
          if (doc._type === 'Newsletter') {
            return doc.info?.week
          }
          return doc.info?.title
        },
        maxLength: 96
      },
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'publishDate',
      title: 'Publish Date',
      type: 'date',
      initialValue: new Date().toISOString().split('T')[0],
      hidden: ({ document }) => document?._type === 'Newsletter', // Hide for newsletters as we use title
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'images',
      title: 'Page Images',
      type: 'array',
      of: [{ type: 'CustomImage' }],
      validation: (Rule) => Rule.max(15),
      description:
        'The first image is the Main/Hero image. Others are for galleries.'
    }),
    defineField({
      name: 'author',
      title: 'Content Author',
      type: 'string',
      initialValue: 'ECLC Staff'
    }),
    defineField({
      name: 'age',
      title: 'Classroom Age',
      type: 'number',
      description: 'Used for sorting classrooms in navigation.',
      hidden: ({ document }) => document?._type !== 'Classroom'
    })
  ]
})

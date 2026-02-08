import { defineType, defineField, type Rule } from 'sanity'

export default defineType({
  name: 'Info',
  title: 'Page Information',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Internal Title',
      type: 'string',
      description: 'Used for H1 headings and internal reference.',
      validation: (Rule: Rule) => Rule.required()
    }),
    defineField({
      name: 'subTitle',
      title: 'Subtitle',
      type: 'string',
      description:
        'The text that appears above the main title in certain pages.'
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'The URL path for this page.',
      options: {
        source: (doc: any) => doc.info?.title, // Update source to look inside info object
        maxLength: 96
      },
      validation: (Rule: Rule) => Rule.required()
    }),
    defineField({
      name: 'publishDate',
      title: 'Publish Date',
      type: 'date',
      initialValue: new Date().toISOString().split('T')[0],
      validation: (Rule: Rule) => Rule.required()
    }),
    defineField({
      name: 'images',
      title: 'Page Images',
      type: 'array',
      of: [{ type: 'CustomImage' }],
      validation: (Rule: Rule) => Rule.max(15),
      description:
        'The first image is the Main/Hero image. Others are for galleries.'
    }),
    defineField({
      name: 'author',
      title: 'Content Author',
      type: 'string',
      initialValue: 'ECLC Staff'
    })
  ]
})

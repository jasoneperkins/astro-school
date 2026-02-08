import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'social',
  title: 'Social Sharing',
  type: 'object',
  groups: [
    { name: 'facebook', title: 'Facebook / OG', default: true },
    { name: 'twitter', title: 'Twitter' }
  ],
  fields: [
    defineField({
      name: 'shareTitle',
      title: 'Facebook Title',
      description: 'Overrides SEO Meta Title for social cards.',
      type: 'string',
      group: 'facebook'
    }),
    defineField({
      name: 'shareDescription',
      title: 'Facebook Description',
      description: 'Overrides SEO Meta Description for social cards.',
      type: 'text',
      rows: 3,
      group: 'facebook'
    }),
    defineField({
      name: 'shareImage',
      title: 'Facebook Image',
      type: 'CustomImage',
      description: 'Recommended: 1200x630px',
      group: 'facebook'
    }),
    defineField({
      name: 'twitterTitle',
      title: 'Twitter Title',
      type: 'string',
      group: 'twitter'
    }),
    defineField({
      name: 'twitterDescription',
      title: 'Twitter Description',
      type: 'text',
      rows: 3,
      group: 'twitter'
    }),
    defineField({
      name: 'twitterImage',
      title: 'Twitter Image',
      type: 'CustomImage',
      description: 'Recommended: 1200x600px',
      group: 'twitter'
    }),
    defineField({
      name: 'twitterCardType',
      title: 'Card Type',
      type: 'string',
      options: {
        list: [
          { title: 'Large Image', value: 'summary_large_image' },
          { title: 'Summary', value: 'summary' }
        ]
      },
      initialValue: 'summary_large_image',
      group: 'twitter'
    })
  ]
})

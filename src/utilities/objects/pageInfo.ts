import { type Rule } from 'sanity'

export default {
  name: 'pageInfo',
  title: 'Page Information',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Page Title',
      type: 'string',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'description',
      title: 'Meta Description',
      type: 'text',
      rows: 3,
      validation: (Rule: Rule) =>
        Rule.max(160).warning(
          'Longer descriptions will be truncated by search engines.'
        )
    },
    {
      name: 'mainImage',
      title: 'Share Image (OpenGraph)',
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt Text',
          validation: (Rule: Rule) => Rule.required()
        }
      ]
    },
    {
      name: 'author',
      title: 'Content Creator',
      type: 'string'
    }
  ]
}

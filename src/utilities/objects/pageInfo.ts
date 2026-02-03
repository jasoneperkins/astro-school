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
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Used to generate the URL for this page.',
      options: {
        source: 'title', // Automatically generates the slug based on the Page Title
        maxLength: 96
      },
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'subheading',
      title: 'Hero Subheading',
      type: 'string',
      description:
        'The text that appears above the main title in certain pages.'
    },
    {
      name: 'description',
      title: 'Page Description / Intro Text',
      type: 'text',
      rows: 3,
      description:
        'This serves as the page description in search engines and displays on the homepage.',
      validation: (Rule: Rule) =>
        Rule.max(160).warning(
          'Longer descriptions will be truncated by search engines.'
        )
    },
    {
      name: 'mainImage',
      title: 'Main Hero Image',
      type: 'image',
      description:
        'Background for standard pages; one of the floating images for the homepage.',
      options: { hotspot: true }
    },
    {
      name: 'extraHeroImages',
      title: 'Additional Hero Images',
      type: 'array',
      of: [{ type: 'image' }],
      validation: (Rule: Rule) => Rule.max(3),
      description:
        'Used only for the homepage floating layout (Main Image + these 3).'
    },
    {
      name: 'author',
      title: 'Content Creator',
      type: 'string',
      initialValue: 'ECLC Staff'
    }
  ]
}

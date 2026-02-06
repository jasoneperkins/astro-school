import { type Rule } from 'sanity'

export default {
  name: 'info',
  title: 'Page Information',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'subTitle',
      title: 'Subtitle',
      type: 'string',
      description:
        'The text that appears above the main title in certain pages.'
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
      name: 'description',
      title: 'Description / Intro Text',
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
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{ type: 'customImage' }],
      validation: (Rule: Rule) => Rule.max(15),
      description:
        'The first will be the main image. The rest are used for floating images and carousels.'
    },
    {
      name: 'author',
      title: 'Content Author',
      type: 'string',
      initialValue: 'ECLC Staff'
    },
    {
      name: 'seoTitle',
      title: 'SEO Title Override',
      type: 'string',
      description:
        'Optional: Overrides the page title in the browser tab. Use this to keep titles short for Google.',
      validation: (Rule: Rule) =>
        Rule.max(60).warning(
          'Titles longer than 60 characters may be truncated by Google.'
        )
    }
  ]
}

import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'seo',
  title: 'SEO',
  type: 'object',
  fields: [
    defineField({
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      description:
        'Overwrites the default page title. Recommended: 50-60 characters.',
      validation: (Rule) =>
        Rule.max(60).warning('Longer titles may be truncated.')
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      rows: 3,
      description:
        'Overwrites the default description. Recommended: 150-160 characters.',
      validation: (Rule) =>
        Rule.max(160).warning('Longer descriptions may be truncated.')
    }),
    defineField({
      name: 'shareImage',
      title: 'Social Share Image',
      type: 'image',
      description: 'Image used for social media previews.',
      options: { hotspot: true }
    })
  ]
})

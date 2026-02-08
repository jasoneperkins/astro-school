import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'seo',
  title: 'SEO',
  type: 'object',
  groups: [
    { name: 'meta', title: 'Meta Tags', default: true },
    { name: 'advanced', title: 'Advanced & Robots' },
    { name: 'analysis', title: 'Keywords' }
  ],
  fields: [
    defineField({
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      group: 'meta',
      validation: (Rule) =>
        Rule.max(60).warning('Longer titles may be truncated.')
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      rows: 3,
      group: 'meta',
      validation: (Rule) =>
        Rule.max(160).warning('Longer descriptions may be truncated.')
    }),
    defineField({
      name: 'breadcrumbsTitle',
      title: 'Breadcrumbs Title',
      type: 'string',
      group: 'meta',
      description:
        'Short title for breadcrumbs (defaults to Meta Title if empty).'
    }),
    defineField({
      name: 'canonicalUrl',
      title: 'Canonical URL',
      type: 'url',
      group: 'advanced'
    }),
    defineField({
      name: 'noIndex',
      title: 'No Index',
      type: 'boolean',
      initialValue: false,
      group: 'advanced'
    }),
    defineField({
      name: 'noFollow',
      title: 'No Follow',
      type: 'boolean',
      initialValue: false,
      group: 'advanced'
    }),
    defineField({
      name: 'schemaType',
      title: 'Schema Type',
      type: 'string',
      options: {
        list: [
          { title: 'WebPage', value: 'WebPage' },
          { title: 'Article', value: 'Article' },
          { title: 'FAQPage', value: 'FAQPage' },
          { title: 'ContactPage', value: 'ContactPage' }
        ]
      },
      initialValue: 'WebPage',
      group: 'advanced'
    })
  ]
})

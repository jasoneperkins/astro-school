import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'seo',
  title: 'SEO & Social',
  type: 'object',
  groups: [
    { name: 'meta', title: 'Meta Tags', default: true },
    { name: 'openGraph', title: 'Facebook / Open Graph' },
    { name: 'twitter', title: 'Twitter Card' },
    { name: 'advanced', title: 'Advanced & Robot' },
    { name: 'analysis', title: 'Analysis & Keywords' }
  ],
  fields: [
    // --- BASIC META ---
    defineField({
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      group: 'meta',
      validation: (Rule) =>
        Rule.max(60).warning('Longer titles may be truncated by Google.')
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
      description: 'A shorter title used in breadcrumb paths (optional).',
      type: 'string',
      group: 'meta'
    }),

    // --- FACEBOOK / OPEN GRAPH ---
    defineField({
      name: 'shareTitle',
      title: 'Facebook Title',
      description: 'Overrides Meta Title for Facebook.',
      type: 'string',
      group: 'openGraph'
    }),
    defineField({
      name: 'shareDescription',
      title: 'Facebook Description',
      description: 'Overrides Meta Description for Facebook.',
      type: 'text',
      rows: 3,
      group: 'openGraph'
    }),
    defineField({
      name: 'shareImage',
      title: 'Facebook Image',
      type: 'CustomImage',
      description: 'Recommended size: 1200x630px',
      group: 'openGraph'
    }),

    // --- TWITTER CARD ---
    defineField({
      name: 'twitterTitle',
      title: 'Twitter Title',
      description: 'Overrides Meta Title for Twitter.',
      type: 'string',
      group: 'twitter'
    }),
    defineField({
      name: 'twitterDescription',
      title: 'Twitter Description',
      description: 'Overrides Meta Description for Twitter.',
      type: 'text',
      rows: 3,
      group: 'twitter'
    }),
    defineField({
      name: 'twitterImage',
      title: 'Twitter Image',
      type: 'CustomImage',
      description: 'Recommended size: 1200x600px (or 1:1 for summary cards)',
      group: 'twitter'
    }),
    defineField({
      name: 'twitterCardType',
      title: 'Twitter Card Type',
      type: 'string',
      options: {
        list: [
          {
            title: 'Summary Large Image (Default)',
            value: 'summary_large_image'
          },
          { title: 'Summary', value: 'summary' }
        ]
      },
      initialValue: 'summary_large_image',
      group: 'twitter'
    }),

    // --- ANALYSIS & KEYWORDS ---
    defineField({
      name: 'focusKeyword',
      title: 'Focus Keyword',
      type: 'string',
      description:
        'The main keyword this page is targeting (for internal use).',
      group: 'analysis'
    }),
    defineField({
      name: 'synonyms',
      title: 'Keyword Synonyms',
      type: 'string',
      description: 'Comma-separated related keywords.',
      group: 'analysis'
    }),

    // --- ADVANCED / TECHNICAL SEO ---
    defineField({
      name: 'canonicalUrl',
      title: 'Canonical URL',
      type: 'url',
      description: 'Override the canonical URL if this content is syndicated.',
      group: 'advanced'
    }),
    defineField({
      name: 'schemaType',
      title: 'Schema.org Type',
      type: 'string',
      description: 'The specific JSON-LD type for this page.',
      options: {
        list: [
          { title: 'WebPage (Default)', value: 'WebPage' },
          { title: 'Article', value: 'Article' },
          { title: 'FAQPage', value: 'FAQPage' },
          { title: 'AboutPage', value: 'AboutPage' },
          { title: 'ContactPage', value: 'ContactPage' }
        ]
      },
      initialValue: 'WebPage',
      group: 'advanced'
    }),
    defineField({
      name: 'noIndex',
      title: 'No Index',
      type: 'boolean',
      initialValue: false,
      description: 'Hide this page from search engines.',
      group: 'advanced'
    }),
    defineField({
      name: 'noFollow',
      title: 'No Follow',
      type: 'boolean',
      initialValue: false,
      description: 'Tell crawlers not to follow links on this page.',
      group: 'advanced'
    })
  ]
})

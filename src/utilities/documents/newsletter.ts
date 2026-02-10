import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'Newsletter',
  title: 'Newsletter',
  type: 'document',
  groups: [
    { name: 'newsletter_info', title: 'Newsletter Info', default: true },
    { name: 'newsletter_content', title: 'Newsletter Content' },
    { name: 'seo', title: 'SEO' },
    { name: 'social', title: 'Social' }
  ],
  fields: [
    defineField({
      name: 'info',
      title: 'Classroom Information',
      type: 'Info',
      group: 'newsletter_info'
    }),
    defineField({
      name: 'content',
      title: 'Newsletter Content',
      type: 'object',
      fields: [
        defineField({
          name: 'text',
          title: 'Newsletter Text',
          type: 'text',
          rows: 10,
          description:
            'Enter the main text for the newsletter. Use multiple paragraphs.'
        }),
        defineField({
          name: 'carousel',
          title: 'Image Carousel',
          type: 'array',
          of: [{ type: 'CustomImage' }],
          description: 'Add images to be displayed in a carousel.'
        })
      ],
      group: 'newsletter_content'
    }),
    defineField({
      name: 'vocabularyCards',
      title: 'Jewish Vocabulary Cards',
      type: 'array',
      of: [{ type: 'VocabularyCard' }],
      group: 'newsletter_content'
    }),
    defineField({
      name: 'seo',
      title: 'SEO Overrides',
      type: 'seo',
      group: 'seo'
    }),
    defineField({
      name: 'social',
      title: 'Social Sharing',
      type: 'social',
      group: 'social'
    })
  ],
  preview: {
    select: {
      week: 'info.week',
      slug: 'info.slug.current'
    },
    prepare(selection: any) {
      const { week, slug } = selection
      if (!week) return { title: 'New Newsletter', subtitle: slug || '' }

      const date = new Date(week)
      const formattedDate = date.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
        timeZone: 'UTC'
      })

      return {
        title: formattedDate,
        subtitle: slug ? `/newsletters/${slug}` : 'No slug set'
      }
    }
  }
})

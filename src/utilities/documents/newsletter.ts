import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'Newsletter',
  title: 'Newsletter',
  type: 'document',
  groups: [
    { name: 'info', title: 'Newsletter Info', default: true },
    { name: 'content', title: 'Newsletter Content' },
    { name: 'seo', title: 'SEO' },
    { name: 'social', title: 'Social' }
  ],
  fields: [
    defineField({
      name: 'info',
      title: 'Classroom Information',
      type: 'Info',
      group: 'info'
    }),
    defineField({
      name: 'content',
      title: 'Newsletter Content',
      type: 'CustomText',
      group: 'content'
    }),
    defineField({
      name: 'vocabularyCards',
      title: 'Jewish Vocabulary Cards',
      type: 'array',
      of: [{ type: 'VocabularyCard' }],
      group: 'content'
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

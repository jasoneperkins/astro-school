export default {
  name: 'Page',
  type: 'document',
  title: 'Page',
  groups: [
    { name: 'info', title: 'Info', default: true },
    { name: 'content', title: 'Content' },
    { name: 'seo', title: 'SEO' },
    { name: 'social', title: 'Social' }
  ],
  fields: [
    {
      name: 'info',
      title: 'Page Information',
      type: 'Info',
      group: 'info'
    },
    {
      name: 'content',
      title: 'Content Sections',
      type: 'array',
      of: [{ type: 'Section' }],
      group: 'content'
    },
    {
      name: 'seo',
      title: 'Search Engine Optimization',
      type: 'seo',
      group: 'seo'
    },
    {
      name: 'social',
      title: 'Social Sharing',
      type: 'social',
      group: 'social'
    }
  ],
  preview: {
    select: {
      title: 'info.title',
      subtitle: 'info.slug.current'
    },
    prepare(selection: { title?: string; subtitle?: string }) {
      const { title, subtitle } = selection
      return {
        title: title || 'Untitled Page',
        subtitle: subtitle ? `/${subtitle}` : 'No slug set'
      }
    }
  }
}

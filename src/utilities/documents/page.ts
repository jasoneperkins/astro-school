export default {
  name: 'Page',
  type: 'document',
  title: 'Page',
  groups: [
    { name: 'info', title: 'Page Info', default: true },
    { name: 'content', title: 'Page Content' },
    { name: 'seo', title: 'SEO & Social' }
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
      title: 'SEO Overrides',
      type: 'seo',
      group: 'seo'
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

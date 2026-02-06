export default {
  name: 'Page',
  type: 'document',
  title: 'Page',
  fields: [
    {
      name: 'info',
      title: 'Page Information',
      type: 'info'
    },
    {
      name: 'content',
      title: 'Content Sections',
      type: 'array',
      of: [{ type: 'Section' }]
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

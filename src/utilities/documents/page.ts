export default {
  name: 'page',
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
      of: [{ type: 'content' }]
    }
  ],
  preview: {
    selection: {
      title: 'info.title',
      subtitle: 'info.slug.current'
    },
    prepare(selection) {
      const { title, subtitle } = selection
      return {
        title: title || 'Untitled Page',
        subtitle: subtitle ? `/${subtitle}` : 'No slug set'
      }
    }
  }
}

export default {
  name: 'page',
  type: 'document',
  title: 'Page',
  fields: [
    {
      name: 'pageInfo',
      title: 'Page Information',
      type: 'pageInfo'
    },
    {
      name: 'content',
      title: 'Page Sections',
      type: 'array',
      of: [{ type: 'heroSection' }, { type: 'contentSection' }]
    }
  ],
  preview: {
    select: {
      title: 'pageInfo.title',
      subtitle: 'pageInfo.slug.current'
    },
    prepare({ title, subtitle }) {
      return {
        title: title || 'Untitled Page',
        subtitle: subtitle ? `/${subtitle}` : 'No slug set'
      }
    }
  }
}

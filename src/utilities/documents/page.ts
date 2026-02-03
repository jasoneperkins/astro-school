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
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: (doc: any) => doc.pageInfo?.title
      }
    },
    {
      name: 'content',
      title: 'Page Sections',
      type: 'array',
      of: [{ type: 'heroSection' }, { type: 'contentSection' }]
    }
  ]
}

export default {
  name: 'page',
  type: 'document',
  title: 'Page',
  fields: [
    { name: 'title', type: 'string', title: 'Title' },
    { name: 'slug', type: 'slug', title: 'Slug', options: { source: 'title' } },
    {
      name: 'heroImage',
      type: 'image',
      title: 'Hero Image',
      options: { hotspot: true }
    }
  ]
}

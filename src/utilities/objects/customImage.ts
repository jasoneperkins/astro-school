export default {
  name: 'customImage',
  title: 'Image with Alt Text',
  type: 'image',
  fields: [
    {
      name: 'alt',
      type: 'string',
      title: 'Alternative Text',
      validation: (Rule: any) => Rule.required()
    }
  ]
}

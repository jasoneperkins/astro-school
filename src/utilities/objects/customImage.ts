export default {
  name: 'customImage',
  title: 'Image with Alt Text',
  type: 'image',
  fields: [
    {
      name: 'alt',
      type: 'string',
      title: 'Alternative Text',
      description:
        'Optional: Describe the image for accessibility. Leave blank for decorative images.'
    }
  ]
}

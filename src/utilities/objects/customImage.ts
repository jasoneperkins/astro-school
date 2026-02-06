export default {
  name: 'CustomImage',
  title: 'Image with Alt Text',
  type: 'image',
  fields: [
    {
      name: 'alt',
      type: 'string',
      title: 'Alt Text',
      description:
        'Optional: Describe the image for accessibility. Leave blank for decorative images.'
    }
  ]
}

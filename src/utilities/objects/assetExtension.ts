import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'sanity.imageAsset',
  type: 'document',
  fields: [
    defineField({
      name: 'altText',
      type: 'string',
      title: 'Global Alt Text',
      description:
        'The alternative text for this image (globally applied). Use this for general accessibility.'
    })
  ]
})

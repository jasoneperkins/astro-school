import { altField } from '../constants/altField'
import { type Rule } from 'sanity'

export default {
  name: 'classroom',
  title: 'Classroom',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Classroom Name',
      type: 'string',
      description: 'e.g., Toddlers, VPK, or Infants',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'mainImage',
      title: 'Main Photo',
      type: 'image',
      options: {
        hotspot: true //
      },
      fields: [altField]
    }
  ]
}

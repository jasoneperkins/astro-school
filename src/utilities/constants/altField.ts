import { type Rule } from 'sanity'

export const altField = {
  name: 'alt',
  type: 'string',
  title: 'Alternative Text',
  description: 'Describe the image for screen readers.',
  validation: (Rule: Rule) => Rule.required()
}

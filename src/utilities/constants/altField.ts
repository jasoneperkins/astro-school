import { type Rule } from 'sanity'

export const altField = {
  name: 'alt',
  type: 'string',
  title: 'Alternative Text',
  validation: (Rule: Rule) =>
    Rule.warning('Should be empty for decorative images')
}

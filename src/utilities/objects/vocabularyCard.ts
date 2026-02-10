import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'VocabularyCard',
  title: 'Vocabulary Card',
  type: 'object',
  fields: [
    defineField({
      name: 'word',
      title: 'Word / Phrase',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'definition',
      title: 'Definition / Translation',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required()
    })
  ]
})

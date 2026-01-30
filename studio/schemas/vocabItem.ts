import { defineType, defineField } from 'sanity'

export default defineType({
	name: 'vocabItem',
	title: 'Vocabulary Item',
	type: 'object',
	fields: [
		defineField({
			name: 'word',
			type: 'string',
			title: 'Word/Term'
		}),
		defineField({
			name: 'definition',
			type: 'text',
			title: 'Definition'
		})
	]
})

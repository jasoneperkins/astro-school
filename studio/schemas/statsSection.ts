import { defineType, defineField } from 'sanity'

export default defineType({
	name: 'statsSection',
	title: 'Stats Section',
	type: 'object',
	fields: [
		defineField({
			name: 'stats',
			title: 'Statistics',
			type: 'array',
			of: [{ type: 'statItem' }]
		})
	]
})

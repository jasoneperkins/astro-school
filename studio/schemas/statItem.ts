import { defineType, defineField } from 'sanity'

export default defineType({
	name: 'statItem',
	title: 'Stat Item',
	type: 'object',
	fields: [
		defineField({
			name: 'label',
			type: 'string',
			title: 'Label (e.g., Students)'
		}),
		defineField({
			name: 'value',
			type: 'string',
			title: 'Value (e.g., 50+)'
		})
	]
})

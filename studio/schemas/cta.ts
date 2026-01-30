import { defineType, defineField } from 'sanity'

export default defineType({
	name: 'cta',
	title: 'Call to Action',
	type: 'object',
	fields: [
		defineField({
			name: 'title',
			title: 'Button Title',
			type: 'string'
		}),
		defineField({
			name: 'url',
			title: 'URL',
			type: 'string',
			description:
				'Where should this button go? (e.g., /contact or https://google.com)'
		}),
		defineField({
			name: 'style',
			title: 'Button Style',
			type: 'string',
			options: {
				list: [
					{ title: 'Primary (Blue)', value: 'primary' },
					{ title: 'Secondary (Outline)', value: 'secondary' }
				]
			}
		})
	]
})

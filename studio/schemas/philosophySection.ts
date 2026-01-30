import { defineType, defineField } from 'sanity'

export default defineType({
	name: 'philosophySection',
	title: 'Philosophy Section',
	type: 'object',
	fields: [
		defineField({ name: 'tagline', type: 'string' }),
		defineField({ name: 'title', type: 'string' }),
		defineField({ name: 'description', type: 'text' }),
		defineField({ name: 'image', type: 'image', options: { hotspot: true } }),
		defineField({ name: 'imageLeft', type: 'boolean', initialValue: false })
	]
})

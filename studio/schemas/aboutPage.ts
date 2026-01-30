import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'aboutPage',
	title: 'About Page',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			title: 'Page Title',
			type: 'string',
			initialValue: 'About Us'
		}),
		defineField({
			name: 'sections',
			title: 'Page Sections',
			type: 'array',
			of: [{ type: 'philosophySection' }, { type: 'statsSection' }]
		})
	]
})

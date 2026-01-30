import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'testimonial',
	title: 'Testimonials',
	type: 'document',
	fields: [
		defineField({
			name: 'author',
			type: 'string',
			title: 'Name'
		}),
		defineField({
			name: 'role',
			type: 'string',
			title: 'Role',
			description: 'e.g., Parent of 5th Grader, Alumnus'
		}),
		defineField({
			name: 'quote',
			type: 'text',
			title: 'The Quote'
		}),
		defineField({
			name: 'featured',
			type: 'boolean',
			title: 'Show on Homepage?',
			initialValue: false
		})
	]
})

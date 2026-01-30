import { defineType, defineField } from 'sanity'

export default defineType({
	name: 'classroom',
	title: 'Classroom',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			title: 'Classroom Name',
			type: 'string',
			validation: (Rule) => Rule.required()
		}),
		defineField({
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: { source: 'title' },
			validation: (Rule) => Rule.required()
		}),
		defineField({
			name: 'ageRange',
			title: 'Age Range',
			type: 'string',
			description: 'e.g., 18 - 30 Months'
		}),
		defineField({
			name: 'philosophy',
			title: 'Classroom Philosophy',
			type: 'text' // Using 'text' for a simple paragraph
		}),
		defineField({
			name: 'featuredCarousel',
			title: 'Classroom Gallery',
			type: 'carousel',
			description: 'Add a swipeable gallery of photos for this classroom.'
		}),
		defineField({
			name: 'dayInTheLife',
			title: 'A Day in the Life',
			type: 'array',
			of: [{ type: 'scheduleItem' }]
		}),
		defineField({
			name: 'curriculumHighlights',
			title: 'Curriculum Highlights',
			type: 'array',
			of: [{ type: 'string' }]
		})
	]
})

import { defineType, defineField } from 'sanity'

export const classroom = defineType({
	name: 'classroom',
	title: 'Classroom Pages',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			title: 'Class Name',
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
			name: 'philosophy',
			title: 'Class Philosophy',
			type: 'text'
		}),
		// Integrate the carousel here
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
			of: [
				{
					type: 'object',
					name: 'scheduleItem',
					fields: [
						{ name: 'activity', type: 'string', title: 'Activity Name' },
						{ name: 'description', type: 'text', title: 'Description' }
					]
				}
			]
		}),
		defineField({
			name: 'curriculumHighlights',
			title: 'Curriculum Highlights',
			type: 'array',
			of: [{ type: 'string' }]
		})
	]
})

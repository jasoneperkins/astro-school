import { defineType, defineField } from 'sanity'

export const newsletter = defineType({
	name: 'newsletter',
	title: 'Newsletters',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			title: 'Issue Title',
			type: 'string',
			validation: (Rule) => Rule.required()
		}),
		defineField({
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: (doc) => {
					const date = doc.publishedAt
						? new Date(doc.publishedAt as string)
						: new Date()
					const year = date.getFullYear()
					const month = String(date.getMonth() + 1).padStart(2, '0')
					const day = String(date.getDate()).padStart(2, '0')

					return `${year}-${month}-${day}`
				},
				maxLength: 96
			},
			validation: (Rule) => Rule.required()
		}),
		defineField({
			name: 'publishedAt',
			title: 'Published At',
			type: 'datetime',
			initialValue: () => new Date().toISOString()
		}),
		defineField({
			name: 'mainImage',
			title: 'Cover Image',
			type: 'image',
			options: { hotspot: true }
		}),
		defineField({
			name: 'body',
			title: 'Content',
			type: 'array',
			of: [{ type: 'block' }, { type: 'image' }, { type: 'cta' }] // Allows rich text and images
		}),
		defineField({
			name: 'vocabularyList',
			title: 'Vocabulary List',
			type: 'array',
			description: 'Add key terms and their definitions for this issue',
			of: [
				{
					type: 'object',
					name: 'vocabItem',
					fields: [
						{ name: 'term', type: 'string', title: 'Term' },
						{ name: 'definition', type: 'string', title: 'Definition' }
					]
				}
			]
		}),
		defineField({
			name: 'featuredCarousel',
			title: 'Featured Carousel',
			type: 'carousel',
			description: 'A swipeable gallery for this specific newsletter issue.'
		})
	]
})

import { defineType, defineField } from 'sanity'

export const carousel = defineType({
	name: 'carousel',
	title: 'Image Carousel',
	type: 'object',
	fields: [
		defineField({
			name: 'images',
			type: 'array',
			title: 'Slides',
			of: [
				{
					type: 'image',
					options: { hotspot: true },
					fields: [{ name: 'caption', type: 'string', title: 'Caption' }]
				}
			]
		})
	]
})

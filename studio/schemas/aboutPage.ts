import { defineField, defineType } from 'sanity'

export const aboutPage = defineType({
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
			of: [
				{
					type: 'object',
					name: 'philosophySection',
					title: 'Philosophy/Story Section',
					fields: [
						defineField({
							name: 'tagline',
							type: 'string',
							title: 'Small Tagline'
						}),
						defineField({
							name: 'title',
							type: 'string',
							title: 'Main Heading'
						}),
						defineField({
							name: 'description',
							type: 'text',
							title: 'Description Text'
						}),
						defineField({
							name: 'image',
							type: 'image',
							options: { hotspot: true },
							title: 'Section Image'
						}),
						defineField({
							name: 'imageLeft',
							type: 'boolean',
							title: 'Show image on the left?',
							initialValue: false
						})
					]
				},
				{
					type: 'object',
					name: 'statsSection',
					title: 'Stats Grid',
					fields: [
						defineField({
							name: 'stats',
							type: 'array',
							of: [
								{
									type: 'object',
									fields: [
										defineField({ name: 'label', type: 'string' }),
										defineField({ name: 'value', type: 'string' })
									]
								}
							]
						})
					]
				}
			]
		})
	]
})

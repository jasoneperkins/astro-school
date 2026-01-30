import { defineType, defineField } from 'sanity'

export default defineType({
	name: 'scheduleItem',
	title: 'Schedule Item',
	type: 'object',
	fields: [
		defineField({
			name: 'activity',
			type: 'string',
			title: 'Activity Name (e.g., Morning Circle)'
		}),
		defineField({
			name: 'description',
			type: 'text',
			title: 'Description'
		})
	]
})

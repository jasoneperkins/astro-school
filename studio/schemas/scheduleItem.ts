import { defineType, defineField } from 'sanity'

export default defineType({
	name: 'scheduleItem',
	title: 'Schedule Item',
	type: 'object',
	fields: [
		defineField({
			name: 'time',
			type: 'string',
			title: 'Time (e.g., 9:00 AM)'
		}),
		defineField({
			name: 'activity',
			type: 'string',
			title: 'Activity Name'
		}),
		defineField({
			name: 'description',
			type: 'text',
			title: 'Description'
		})
	]
})

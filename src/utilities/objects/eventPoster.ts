import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'EventPoster',
  title: 'Event Poster',
  type: 'object',
  fields: [
    defineField({
      name: 'image',
      title: 'Poster Image',
      type: 'CustomImage',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'string',
      description: 'A brief description of the event.'
    }),
    defineField({
      name: 'eventDate',
      title: 'Event Date',
      type: 'date',
      description: 'The date of the event. Used for automatic filtering.',
      validation: (Rule) => Rule.required()
    })
  ],
  preview: {
    select: {
      title: 'caption',
      date: 'eventDate',
      media: 'image'
    },
    prepare(selection) {
      const { title, date, media } = selection
      return {
        title: title || 'Untitled Event',
        subtitle: date || 'No date set',
        media
      }
    }
  }
})

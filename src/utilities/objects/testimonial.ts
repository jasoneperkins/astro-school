import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'Testimonial',
  title: 'Testimonial',
  type: 'object',
  fields: [
    defineField({
      name: 'quote',
      title: 'Quote',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'author',
      title: 'Author Name',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'title',
      title: 'Author Title / Context',
      type: 'string',
      description: 'e.g., "Parent of 3-year-old"',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'rating',
      title: 'Star Rating',
      type: 'number',
      initialValue: 5,
      options: {
        list: [1, 2, 3, 4, 5]
      },
      validation: (Rule) => Rule.required().min(1).max(5)
    }),
    defineField({
      name: 'image',
      title: 'Author Image',
      type: 'CustomImage'
    })
  ],
  preview: {
    select: {
      title: 'author',
      subtitle: 'title',
      media: 'image'
    }
  }
})

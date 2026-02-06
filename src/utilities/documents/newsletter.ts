import { type Rule } from 'sanity'

export default {
  name: 'Newsletter',
  title: 'Newsletter',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Newsletter Title',
      type: 'string',
      description: 'e.g., Weekly Update - February 3rd',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'publishDate',
      title: 'Publish Date',
      type: 'date',
      initialValue: new Date().toISOString().split('T')[0],
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'pdfFile',
      title: 'PDF Attachment',
      type: 'file',
      options: {
        accept: '.pdf'
      },
      description:
        'Upload the PDF version of the newsletter for parents to download.'
    }
  ]
}

import { type Rule } from 'sanity'

export default {
  name: 'Newsletter',
  title: 'Newsletter',
  type: 'document',
  groups: [
    { name: 'info', title: 'Page Info', default: true },
    { name: 'content', title: 'Page Content' },
    { name: 'seo', title: 'SEO & Social' },
    { name: 'social', title: 'Social' }
  ],
  fields: [
    {
      name: 'info',
      title: 'Classroom Information',
      type: 'Info',
      group: 'info'
    },
    {
      name: 'pdfFile',
      title: 'PDF Attachment',
      type: 'file',
      options: { accept: '.pdf' },
      description: 'Upload the PDF version for parents to download.',
      group: 'info'
    },
    {
      name: 'content',
      title: 'Content Sections',
      type: 'array',
      of: [{ type: 'Section' }],
      group: 'content'
    },
    {
      name: 'seo',
      title: 'SEO Overrides',
      type: 'seo',
      group: 'seo'
    },
    {
      name: 'social',
      title: 'Social Sharing',
      type: 'social',
      group: 'social'
    }
  ],
  preview: {
    select: {
      title: 'info.title',
      subtitle: 'info.slug.current'
    },
    prepare(selection: { title?: string; subtitle?: string }) {
      const { title, subtitle } = selection
      return {
        title: title || 'Untitled Page',
        subtitle: subtitle ? `/${subtitle}` : 'No slug set'
      }
    }
  }
}

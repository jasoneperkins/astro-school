import { defineType, defineField, type Rule } from 'sanity'

export default defineType({
  name: 'Identity',
  title: 'Identity / Contact Info',
  type: 'document',
  groups: [
    { name: 'identity', title: 'Business Details', default: true },
    { name: 'contact', title: 'Contact Details' },
    { name: 'socials', title: 'Social Media' }
  ],
  fields: [
    defineField({
      name: 'name',
      title: 'Organization Name',
      type: 'string',
      group: 'identity',
      initialValue: 'Early Childhood Learning Center'
    }),
    defineField({
      name: 'logo',
      title: 'Organization Logo',
      type: 'CustomImage',
      group: 'identity'
    }),
    defineField({
      name: 'email',
      title: 'Contact Email',
      type: 'string',
      group: 'contact',
      validation: (Rule: Rule) => Rule.email()
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      group: 'contact',
      validation: (Rule: Rule) =>
        Rule.regex(/^[0-9+\-\s()]+$/, {
          name: 'phone number'
        }).warning('Use only digits, spaces, +, -, and parentheses')
    }),
    defineField({
      name: 'address',
      title: 'Physical Address',
      type: 'text',
      rows: 3,
      group: 'contact'
    }),
    defineField({
      name: 'officeHours',
      title: 'Office Hours',
      type: 'string',
      description: 'e.g., Monday – Friday, 8:00 AM – 4:00 PM',
      initialValue: 'Mon-Fri: 8:00 AM - 5:30 PM',
      group: 'contact'
    }),
    defineField({
      name: 'licenseNumber',
      title: 'State License Number',
      type: 'string',
      description: 'DCF License #',
      group: 'contact'
    }),
    defineField({
      name: 'facebook',
      type: 'url',
      title: 'Facebook',
      group: 'socials'
    }),
    defineField({
      name: 'instagram',
      type: 'url',
      title: 'Instagram',
      group: 'socials'
    }),
    defineField({
      name: 'twitter',
      type: 'url',
      title: 'Twitter',
      group: 'socials'
    }),
    defineField({
      name: 'linkedin',
      type: 'url',
      title: 'LinkedIn',
      group: 'socials'
    }),
    defineField({
      name: 'youtube',
      type: 'url',
      title: 'YouTube',
      group: 'socials'
    }),
    defineField({
      name: 'tiktok',
      type: 'url',
      title: 'TikTok',
      group: 'socials'
    }),
    defineField({
      name: 'pinterest',
      type: 'url',
      title: 'Pinterest',
      group: 'socials'
    })
  ]
})

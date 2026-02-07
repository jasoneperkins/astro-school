import { type Rule } from 'sanity'

export default {
  name: 'Identity',
  title: 'Identity / Contact Info',
  type: 'document',
  groups: [
    { name: 'contact', title: 'Contact Details' },
    { name: 'seo', title: 'SEO Defaults' },
    { name: 'socials', title: 'Social Media' }
  ],
  fields: [
    {
      name: 'name',
      title: 'Organization Name',
      type: 'string',
      group: 'contact',
      initialValue: 'Early Childhood Learning Center'
    },
    {
      name: 'logo',
      title: 'Organization Logo',
      type: 'CustomImage'
    },
    {
      name: 'email',
      title: 'Contact Email',
      type: 'string',
      group: 'contact',
      validation: (Rule: Rule) => Rule.email()
    },
    {
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      group: 'contact',
      validation: (Rule: Rule) =>
        Rule.regex(/^[0-9+\-\s()]+$/, {
          name: 'phone number'
        }).warning('Use only digits, spaces, +, -, and parentheses')
    },
    {
      name: 'address',
      title: 'Physical Address',
      type: 'text',
      rows: 3,
      group: 'contact'
    },
    {
      name: 'officeHours',
      title: 'Office Hours',
      type: 'string',
      description: 'e.g., Monday – Friday, 8:00 AM – 4:00 PM',
      initialValue: 'Mon-Fri: 8:00 AM - 5:30 PM',
      group: 'contact'
    },
    {
      name: 'licenseNumber',
      title: 'State License Number',
      type: 'string',
      description: 'DCF License #'
    },
    { name: 'facebook', type: 'url', title: 'Facebook', group: 'socials' },
    { name: 'instagram', type: 'url', title: 'Instagram', group: 'socials' },
    { name: 'twitter', type: 'url', title: 'Twitter', group: 'socials' },
    { name: 'linkedin', type: 'url', title: 'LinkedIn', group: 'socials' },
    { name: 'youtube', type: 'url', title: 'YouTube', group: 'socials' },
    { name: 'tiktok', type: 'url', title: 'TikTok', group: 'socials' },
    { name: 'pinterest', type: 'url', title: 'Pinterest', group: 'socials' },
    {
      name: 'defaultSeo',
      title: 'Default SEO',
      type: 'seo', // Uses the object we made in Step 1
      group: 'seo',
      description: 'Used for any page that does not have its own SEO set.'
    }
  ]
}

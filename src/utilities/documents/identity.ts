import { type Rule } from 'sanity'

export default {
  name: 'identity',
  title: 'Identity / Contact Info',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Organization Name',
      type: 'string',
      initialValue: 'Early Childhood Learning Center'
    },
    {
      name: 'email',
      title: 'Contact Email',
      type: 'string',
      validation: (Rule: Rule) => Rule.email()
    },
    {
      name: 'phone',
      title: 'Phone Number',
      type: 'string'
    },
    {
      name: 'address',
      title: 'Physical Address',
      type: 'text',
      rows: 3
    },
    {
      name: 'officeHours',
      title: 'Office Hours',
      type: 'string',
      description: 'e.g., Monday – Friday, 8:00 AM – 4:00 PM',
      initialValue: 'Mon-Fri: 8:00 AM - 5:30 PM'
    },
    {
      name: 'licenseNumber',
      title: 'State License Number',
      type: 'string',
      description: 'DCF License #'
    },
    {
      name: 'socials',
      title: 'Social Media Accounts',
      type: 'socials'
    }
  ]
}

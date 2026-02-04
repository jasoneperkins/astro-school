import { type Rule } from 'sanity'

export default {
  name: 'socials',
  title: 'Social Media',
  type: 'object',
  fields: [
    { name: 'facebook', type: 'url', title: 'Facebook' },
    { name: 'instagram', type: 'url', title: 'Instagram' }
  ]
}

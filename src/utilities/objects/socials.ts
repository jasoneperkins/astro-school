import { type Rule } from 'sanity'

export default {
  name: 'socials',
  title: 'Social Media Accounts',
  type: 'object',
  fields: [
    { name: 'facebook', type: 'url', title: 'Facebook' },
    { name: 'instagram', type: 'url', title: 'Instagram' },
    { name: 'twitter', type: 'url', title: 'Twitter' },
    { name: 'linkedin', type: 'url', title: 'LinkedIn' },
    { name: 'youtube', type: 'url', title: 'YouTube' },
    { name: 'tiktok', type: 'url', title: 'TikTok' },
    { name: 'pinterest', type: 'url', title: 'Pinterest' },
    { name: 'linkedin', type: 'url', title: 'LinkedIn' }
  ]
}

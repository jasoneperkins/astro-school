// src/actions/index.ts
import { defineAction } from 'astro:actions'
import { z } from 'astro:schema'

export const server = {
  contactForm: defineAction({
    accept: 'form',
    input: z.object({
      parentName: z.string(),
      email: z.string().email(),
      sourceContext: z.string(),
      message: z.string()
    }),
    handler: async (input, context) => {
      const { Resend } = await import('resend')
      const runtime = context.locals.runtime

      // Access the secret you just set in Wrangler
      const resend = new Resend(runtime.env.RESEND_API_KEY)

      try {
        await Promise.all([
          // Email to Miss Cindy
          resend.emails.send({
            from: 'ECLC Leads <leads@eclcstuart.com>',
            to: 'misscindy@tbhfl.org',
            subject: `New Lead: ${input.parentName}`,
            text: `Parent: ${input.parentName}\nEmail: ${input.email}\nContext: ${input.sourceContext}\n\n${input.message}`
          }),
          // Thank You to Parent (This will now work!)
          resend.emails.send({
            from: 'Early Childhood Learning Center <leads@eclcstuart.com>',
            to: input.email,
            subject: "We've received your inquiry!",
            text: `Shalom ${input.parentName},\n\nThank you for reaching out. Miss Cindy has received your message and will be in touch with you shortly.\n\nWarmly,\nECLC Staff`
          })
        ])

        return { success: true }
      } catch (error) {
        console.error('Resend Error:', error)
        return { success: false }
      }
    }
  })
}

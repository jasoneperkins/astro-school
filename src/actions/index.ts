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
      const { EmailMessage } = await import('cloudflare:email')
      const { createMimeMessage } = await import('mimetext')
      const runtime = context.locals.runtime

      if (!runtime?.env?.LEADS_EMAIL) {
        throw new Error('Email service not found in runtime.')
      }

      const adminMsg = createMimeMessage()
      adminMsg.setSender({ name: 'ECLC Website', addr: 'leads@eclcstuart.com' })
      adminMsg.setRecipient('misscindy@tbhfl.org')
      adminMsg.setSubject(`New Website Lead: ${input.parentName}`)
      adminMsg.addMessage({
        contentType: 'text/plain',
        data: `New Lead Details:\n\nParent: ${input.parentName}\nEmail: ${input.email}\nPage: ${input.sourceContext}\n\nMessage:\n${input.message}`
      })

      const parentMsg = createMimeMessage()
      parentMsg.setSender({
        name: 'Early Childhood Learning Center',
        addr: 'leads@eclcstuart.com'
      })
      parentMsg.setRecipient(input.email)
      parentMsg.setSubject(`We've received your inquiry!`)
      parentMsg.addMessage({
        contentType: 'text/plain',
        data: `Shalom ${input.parentName},\n\nThank you for reaching out to the Early Childhood Learning Center. We have received your message regarding "${input.sourceContext}" and Miss Cindy will be in touch with you shortly.\n\nWarmly,\nECLC Staff`
      })

      try {
        await Promise.all([
          runtime.env.LEADS_EMAIL.send(
            new EmailMessage(
              'leads@eclcstuart.com',
              'misscindy@tbhfl.org',
              adminMsg.asRaw()
            )
          ),
          runtime.env.LEADS_EMAIL.send(
            new EmailMessage(
              'leads@eclcstuart.com',
              input.email,
              parentMsg.asRaw()
            )
          )
        ])

        return { success: true }
      } catch (err) {
        console.error('Email dispatch failed:', err)
        return { success: false }
      }
    }
  })
}

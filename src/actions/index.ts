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
      // Dynamic imports prevent Vite from choking during build/dev
      const { EmailMessage } = await import('cloudflare:email')
      const { createMimeMessage } = await import('mimetext')

      const runtime = context.locals.runtime

      if (!runtime?.env?.LEADS_EMAIL) {
        throw new Error('Email service is not available in this environment.')
      }

      const msg = createMimeMessage()
      msg.setSender({ name: 'ECLC Leads', addr: 'leads@eclcstuart.com' })
      msg.setRecipient('misscindy@tbhfl.org')
      msg.setSubject(`New Lead: ${input.parentName}`)
      msg.addMessage({
        contentType: 'text/plain',
        data: `Parent: ${input.parentName}\nEmail: ${input.email}\nContext: ${input.sourceContext}\n\n${input.message}`
      })

      const emailResponse = new EmailMessage(
        'leads@eclcstuart.com',
        'misscindy@tbhfl.org',
        msg.asRaw()
      )

      await runtime.env.LEADS_EMAIL.send(emailResponse)
      return { success: true }
    }
  })
}

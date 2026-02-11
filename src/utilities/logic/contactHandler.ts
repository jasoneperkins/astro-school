import { actions } from 'astro:actions'

export const contactHandler = () => ({
  state: 'idle',
  mode: 'message' as 'message' | 'tour',
  toggleMode() {
    this.mode = this.mode === 'message' ? 'tour' : 'message'
    this.state = 'idle'
  },
  async submitForm(e: SubmitEvent) {
    this.state = 'loading'
    try {
      const target = e.target as HTMLFormElement
      const formData = new FormData(target)

      const { data, error } = await actions.contactForm(formData)

      if (data?.success) {
        this.state = 'success'
      } else {
        this.state = 'error'
        console.error('Action Error:', error)
      }
    } catch (err) {
      this.state = 'error'
      console.error('Client Error:', err)
    }
  }
})

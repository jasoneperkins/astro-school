import type { Alpine } from 'alpinejs'
import { contactHandler } from '@logic/contactHandler'

import collapse from '@alpinejs/collapse'

export default (Alpine: Alpine) => {
  Alpine.plugin(collapse)
  Alpine.data('contactHandler', contactHandler)
}

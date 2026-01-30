import PortableTextCTA from '@components/PortableTextCTA.astro'
import PortableTextCarousel from '@components/PortableTextCarousel.astro'

export const portableTextComponents = {
	type: {
		cta: PortableTextCTA,
		carousel: PortableTextCarousel
	},
	marks: {
		link: ({ children, value }) => {
			const rel = !value.href.startsWith('/')
				? 'noreferrer noopener'
				: undefined
			const target = !value.href.startsWith('/') ? '_blank' : undefined
			return `<a href="${value.href}" rel="${rel}" target="${target}" class="text-blue-600 underline">${children}</a>`
		}
	}
}

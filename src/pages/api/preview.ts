import type { APIRoute } from 'astro'
import { validatePreviewUrl } from '@sanity/preview-url-secret'
import { client } from '@lib/sanity.service'

export const GET: APIRoute = async ({ request, cookies, redirect }) => {
	const { searchParams } = new URL(request.url)
	const slug = searchParams.get('slug') || '/'

	const clientWithToken = client.withConfig({
		token: import.meta.env.SANITY_API_TOKEN
	})

	const { isValid, redirectTo = slug } = await validatePreviewUrl(
		clientWithToken,
		request.url
	)

	if (!isValid) {
		return new Response('Invalid secret', { status: 401 })
	}

	cookies.set('__prerender_bypass', 'true', {
		path: '/',
		httpOnly: true,
		sameSite: 'none',
		secure: true
	})

	return redirect(redirectTo)
}

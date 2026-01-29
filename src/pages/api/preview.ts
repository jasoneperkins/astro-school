import type { APIRoute } from 'astro'

export const GET: APIRoute = async ({ request, redirect }) => {
	const { searchParams } = new URL(request.url)
	const secret = searchParams.get('secret')
	const slug = searchParams.get('slug') || '/'

	if (secret !== import.meta.env.SANITY_PREVIEW_SECRET) {
		return new Response('Invalid secret', { status: 401 })
	}

	// In a real app, you might set a "preview_mode" cookie here
	// For now, we redirect to the requested page
	return redirect(slug)
}

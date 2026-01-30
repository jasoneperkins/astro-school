export interface SanityImage {
	_type: 'image'
	asset: {
		_ref: string
		_type: 'reference'
	}
	alt?: string
}

export interface Classroom {
	title: string
	slug: string
	mainImage: SanityImage
	description: any[] // PortableText array
	ageRange: string
	icon: string
}

export interface Newsletter {
	title: string
	slug: string
	publishedAt: string
	mainImage: SanityImage
	// body is a Portable Text array
	body: any[]
	// Custom fields for the learning center
	vocabularyList?: Array<{
		term: string
		definition: string
	}>
	featuredCarousel?: {
		images: SanityImage[]
	}
}

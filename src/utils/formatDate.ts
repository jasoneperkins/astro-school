// src/utils/formatDate.ts

/**
 * Formats a Sanity ISO date string into a human-readable format.
 * @param dateString - The ISO date string from Sanity
 * @returns A formatted string like "January 29, 2026"
 */
export function formatDate(dateString: string | undefined): string {
	if (!dateString) return 'No Date'

	const date = new Date(dateString)

	return date.toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		timeZone: 'UTC'
	})
}

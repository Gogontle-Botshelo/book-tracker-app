import { json } from '@sveltejs/kit';

export async function GET({ url }) {
	try {
		const query = url.searchParams.get('q');
		if (!query) {
			return json({ books: [] });
		}

		const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}`);
		if (!response.ok) {
			throw new Error('Failed to fetch books');
		}
		const data = await response.json();
		return json({ books: data.items || [] });
	} catch (error) {
		console.error('Search API error:', error);
		return json({ books: [], error: 'Failed to fetch books' }, { status: 500 });
	}
}
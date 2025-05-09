import { json } from '@sveltejs/kit';

export async function GET({ url }) {
	try {
		const query = url.searchParams.get('q');
		if (!query) {
			console.log('No query provided');
			return json({ books: [] });
		}

		const apiKey = process.env.GOOGLE_BOOKS_API_KEY || '';
		const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}${apiKey ? `&key=${apiKey}` : ''}`;
		console.log('Fetching:', apiUrl);
		const response = await fetch(apiUrl);
		if (!response.ok) {
			throw new Error(`HTTP error ${response.status}`);
		}
		const data = await response.json();
		console.log('API response:', data.items?.length || 0, 'items');
		return json({ books: data.items || [] });
	} catch (error) {
		console.error('Search API error:', error);
		return json({ books: [], error: 'Failed to fetch books' }, { status: 500 });
	}
}
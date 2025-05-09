import { db } from '$lib/db';
import { books } from '$lib/db/schema';

export async function load() {
	try {
		const allBooks = db.select().from(books).all();
		return { books: allBooks };
	} catch (error) {
		console.error('Error loading books:', error);
		return {
			books: [],
			error: 'Failed to load books from database'
		};
	}
}
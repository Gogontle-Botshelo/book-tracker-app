import { db } from '$lib/db';
import { books } from '$lib/db/schema';

export async function load() {
	const allBooks = db.select().from(books).all();
	return { books: allBooks };
}
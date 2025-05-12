// src/routes/+page.server.js
import { initializeBookForm } from '$lib/utils';
import { db } from '$lib/index';
import { books } from '$lib/schema';
import { desc } from 'drizzle-orm';

export const load = async () => {
	let booksData;
	try {
		booksData = await db.select().from(books).orderBy(desc(books.addedDate)).all();
		console.log('booksData:', booksData);
	} catch (error) {
		console.error('Error fetching books:', error);
		booksData = [];
	}
	const serializedBooks = Array.isArray(booksData) ? booksData.map(book => ({
		...book,
		addedDate: book.addedDate.toISOString ? book.addedDate.toISOString() : book.addedDate
	})) : [];

	const { form } = await initializeBookForm();
	return {
		books: serializedBooks,
		form
	};
};

export const actions = {
	default: async ({ request, locals }) => {
		return addBook({ request, db: locals.db }); // ...but only used in actions object
	}
};
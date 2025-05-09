import { json } from '@sveltejs/kit';
import { db } from '$lib/db';
import { books } from '$lib/db/schema';
import { eq } from 'drizzle-orm';

export async function POST({ params }) {
	try {
		const bookId = parseInt(params.id);
		console.log('Attempting to delete book with ID:', bookId);
		if (isNaN(bookId)) {
			console.error('Invalid book ID:', params.id);
			return json({ error: 'Invalid book ID' }, { status: 400 });
		}

		const result = await db.delete(books).where(eq(books.id, bookId)).run();
		result.changes = undefined;
		console.log('Delete result:', result);
		if (result.changes === 0) {
			console.warn('No book found with ID:', bookId);
			return json({ error: 'Book not found' }, { status: 404 });
		}

		return json({ success: true });
	} catch (error) {
		console.error('Delete book error:', error);
		return json({ error: `Failed to delete book: ${error.message}` }, { status: 500 });
	}
}
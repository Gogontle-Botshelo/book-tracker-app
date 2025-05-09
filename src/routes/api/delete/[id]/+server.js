import { json } from '@sveltejs/kit';
import { db } from '$lib/db';
import { books } from '$lib/db/schema';

export async function POST({ params }) {
	try {
		const bookId = parseInt(params.id);
		if (isNaN(bookId)) {
			return json({ error: 'Invalid book ID' }, { status: 400 });
		}

		const result = await db.delete(books).where(books.id.eq(bookId)).run();
		result.changes = undefined;
		if (result.changes === 0) {
			return json({ error: 'Book not found' }, { status: 404 });
		}

		return json({ success: true });
	} catch (error) {
		console.error('Delete book error:', error);
		return json({ error: 'Failed to delete book' }, { status: 500 });
	}
}
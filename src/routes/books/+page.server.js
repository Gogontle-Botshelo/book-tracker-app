import dbModule from '$lib/db';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    try {
        const db = await dbModule.init();
        const books = await db.prepare('SELECT * FROM books').all();
        console.log('Fetched books:', books);
        const validBooks = Array.isArray(books) ? books.filter(book => book && book.title) : [];
        return { books: validBooks };
    } catch (error) {
        console.error('Error fetching books:', error);
        return { books: [] };
    }
}
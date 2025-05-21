import axios from 'axios';

/**
 * @typedef {Object} OpenLibraryDoc
 * @property {string} title
 * @property {string[]} [author_name]
 */

/**
 * @typedef {Object} OpenLibraryResponse
 * @property {OpenLibraryDoc[]} docs
 */

/** @type {import('./$types').RequestHandler} */
export async function GET({ url }) {
    const query = url.searchParams.get('query');
    if (!query) {
        return new Response(JSON.stringify([]), { status: 400 });
    }
    try {
        const response = await axios.get(`https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`);
        /** @type {OpenLibraryResponse} */
        const data = response.data;
        if (!Array.isArray(data.docs)) {
            return new Response(JSON.stringify([]), { status: 500 });
        }
        const books = data.docs.slice(0, 5).map(doc => ({
            title: doc.title || 'Unknown Title',
            author: Array.isArray(doc.author_name) && doc.author_name.length > 0 ? doc.author_name[0] : 'Unknown'
        }));
        return new Response(JSON.stringify(books), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify([]), { status: 500 });
    }
}

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
    const db = (await import('$lib/db')).default;
    const { title, author, status, date_added } = await request.json();
    console.log('Adding book:', { title, author, status, date_added });
    try {
        await db.prepare('INSERT INTO books (title, author, status, date_added) VALUES (?, ?, ?, ?)').run(
          title,
          author,
          status,
          date_added
        );
        console.log('Book added successfully');
        return new Response(null, { status: 200 });
    } catch (error) {
        console.error('Error adding book:', error);
        return new Response(null, { status: 500 });
    }
}
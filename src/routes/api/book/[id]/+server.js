/** @type {import('./$types').RequestHandler} */
export async function PATCH({ params, request }) {
    const dbModule = await import('$lib/db');
    const db = dbModule.default; // Use default export directly
    const { status } = await request.json();
    try {
        await db.prepare('UPDATE books SET status = ? WHERE id = ?').run(status, params.id);
        return new Response(null, { status: 200 });
    } catch (error) {
        console.error('Error updating book:', error);
        return new Response(null, { status: 500 });
    }
}

/** @type {import('./$types').RequestHandler} */
export async function DELETE({ params }) {
    const dbModule = await import('$lib/db');
    const db = dbModule.default; // Use default export directly
    try {
        await db.prepare('DELETE FROM books WHERE id = ?').run(params.id);
        return new Response(null, { status: 200 });
    } catch (error) {
        console.error('Error deleting book:', error);
        return new Response(null, { status: 500 });
    }
}
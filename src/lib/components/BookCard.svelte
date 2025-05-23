<script>
    export let book;
    export let onDelete;
    import { format } from 'date-fns';

    async function handleDelete() {
        const response = await fetch(`/api/book/${book.id}`, { method: 'DELETE' });
        if (response.ok) {
            onDelete(book.id);
        }
    }
</script>

{#if book}
    <div class="book-card">
        <h3>{book.title}</h3>
        <p>Author: {book.author || 'Unknown'}</p>
        <p>Status: {book.status}</p>
        <p>Added: {format(new Date(book.date_added), 'PPP')}</p>
        <button type="button" class="delete" on:click={handleDelete} aria-label={`Delete ${book.title}`}>
            Delete
        </button>
    </div>
{:else}
    <p>Invalid book data</p>
{/if}
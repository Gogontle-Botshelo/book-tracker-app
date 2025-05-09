<script>
	export let book;
	import { invalidateAll } from '$app/navigation';

	async function deleteBook() {
		if (!book.id) {
			alert('Error: Book ID is missing');
			return;
		}
		if (confirm(`Are you sure you want to delete "${book.title || book.volumeInfo?.title || 'this book'}"?`)) {
			try {
				console.log('Deleting book with ID:', book.id);
				const response = await fetch(`/api/delete/${book.id}`, {
					method: 'POST'
				});
				if (!response.ok) {
					const errorData = await response.json();
					throw new Error(errorData.error || 'Failed to delete book');
				}
				await invalidateAll();
			} catch (error) {
				console.error('Delete error:', error);
				alert(`Error deleting book: ${error.message}`);
			}
		}
	}
</script>

{#if book}
	<div class="book-card fade-in">
		<h3>{book.volumeInfo?.title || book.title || 'Untitled'}</h3>
		<p class="author">Author: {book.volumeInfo?.authors?.join(', ') || book.author || 'Unknown'}</p>
		<p class="status">Status: {book.status || 'N/A'}</p>
		<p class="added">Added: {book.addedDate || 'N/A'}</p>
		{#if book.id}
			<button class="delete-btn" on:click={deleteBook}>Delete</button>
		{/if}
	</div>
{/if}

<style>
    .book-card {
        background-color: var(--secondary);
        border-radius: 10px;
        padding: 2rem;
        margin: 1.5rem 0;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    .book-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
    }
    h3 {
        font-family: 'Dancing Script', cursive;
        font-size: 1.5rem;
        margin-bottom: 0.75rem;
        color: var(--dark);
    }
    .author, .status, .added {
        font-size: 0.875rem;
        margin-bottom: 0.5rem;
        color: var(--dark);
    }
    .delete-btn {
        background-color: #A52A2A;
        font-family: 'Dancing Script', cursive;
        margin-top: 1rem;
        color: var(--light);
    }
    .delete-btn:hover {
        background-color: #8B1E1E;
        transform: translateY(-2px);
    }
</style>
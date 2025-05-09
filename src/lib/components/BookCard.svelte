<script>
	export let book;
	import { invalidateAll } from '$app/navigation';

	async function deleteBook() {
		if (!book.id) {
			alert('Error: Book ID is missing');
			return;
		}
		if (confirm(`Are you sure you want to delete "${book.title}"?`)) {
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
	<div class="book-card">
		<h3>{book.volumeInfo?.title || book.title || 'Untitled'}</h3>
		<p>Author: {book.volumeInfo?.authors?.join(', ') || book.author || 'Unknown'}</p>
		<p>Status: {book.status || 'N/A'}</p>
		<p>Added: {book.addedDate || 'N/A'}</p>
		<button class="delete-btn" on:click={deleteBook}>Delete</button>
	</div>
{/if}

<style>
    .book-card {
        border: 1px solid #ddd;
        padding: 1rem;
        margin: 0.5rem;
        border-radius: 5px;
    }
    .delete-btn {
        margin-top: 0.5rem;
        padding: 0.5rem 1rem;
        background-color: #dc3545;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }
    .delete-btn:hover {
        background-color: #c82333;
    }
</style>
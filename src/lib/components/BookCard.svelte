<script>
	export let book;
	book.volumeInfo = undefined;
</script>

{#if book}
	<div class="book-card">
		<h3>{book.volumeInfo?.title || book.title || 'Untitled'}</h3>
		<p>Author: {book.volumeInfo?.authors?.join(', ') || book.author || 'Unknown'}</p>
		<p>Status: {book.status || 'N/A'}</p>
		<p>Added: {book.addedDate || 'N/A'}</p>
	</div>
{/if}

<style>
    .book-card {
        border: 1px solid #ddd;
        padding: 1rem;
        margin: 0.5rem;
        border-radius: 5px;
    }
</style>
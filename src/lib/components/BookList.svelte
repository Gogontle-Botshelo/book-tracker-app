<script>
	import BookCard from '$lib/components/BookCard.svelte';

	export let books;
</script>

{#if books?.length}
	<div class="book-list">
		{#each books as book (book.id || book.googleBooksId)}
			<BookCard book={book} />
		{/each}
	</div>
{:else}
	<p class="no-books">No books to display.</p>
{/if}

<style>
    .book-list {
        display: grid;
        gap: 1.5rem;
        margin: 2rem 0;
    }
    .no-books {
        font-family: 'Raleway', sans-serif;
        font-size: 1rem;
        color: var(--dark);
        text-align: center;
        margin: 2rem 0;
    }
</style>
<script>
	import BookCard from '$lib/components/BookCard.svelte';

	export let books;
	// Filter out undefined or invalid books
	$: validBooks = books?.filter(book => book && (book.title || book.volumeInfo?.title)) || [];
</script>

<div class="book-list">
	{#each validBooks as book}
		<BookCard {book} />
	{/each}
</div>

<style>
    .book-list {
        display: grid;
        gap: 1rem;
    }
</style>
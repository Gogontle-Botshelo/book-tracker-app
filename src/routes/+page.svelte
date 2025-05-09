<script>
	export let data;
</script>

<h1>Book Tracker</h1>
{#if data.error}
	<p style="color: red;">{data.error}</p>
{:else if data.books.length}
	{#each data.books as book}
		<div>{book.title} by {book.author} ({book.status})</div>
	{/each}
{:else}
	<p>No books added yet.</p>
{/if}

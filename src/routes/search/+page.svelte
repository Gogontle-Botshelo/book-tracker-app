<script>
	import SearchBar from '$lib/components/SearchBar.svelte';
	import BookList from '$lib/components/BookList.svelte';

	export let data;
</script>

<div class="container fade-in">
	<h1>Search Books</h1>
	<SearchBar />
	{#if data.error}
		<p class="error">Error: {data.error}</p>
	{:else if data.books?.length}
		<BookList books={data.books} />
	{:else}
		<p class="no-results">No results found.</p>
	{/if}
</div>

<style>
    .error, .no-results {
        color: #dc3545;
        margin: 1.5rem 0;
        font-family: 'Raleway', sans-serif;
    }
</style>
<script>
	import SearchBar from '$lib/components/SearchBar.svelte';
	import BookList from '$lib/components/BookList.svelte';

	export let data;
</script>

<h1>Search Books</h1>
<SearchBar />
{#if data.error}
	<p style="color: red;">Error: {data.error}</p>
{:else if data.books?.length}
	<BookList books={data.books} />
{:else}
	<p>No results found.</p>
{/if}
<script>
	import BookList from '$lib/components/BookList.svelte';
	import StatusFilter from '$lib/components/StatusFilter.svelte';
	export let data;
</script>

<div class="container fade-in">
	<h1>Book Tracker</h1>
	{#if data.error}
		<p class="error">Error: {data.error}</p>
	{:else}
		<StatusFilter />
		<BookList books={data.books} />
	{/if}
</div>

<style>
    .error {
        color: #dc3545;
        margin: 1.5rem 0;
        font-family: 'Raleway', sans-serif;
    }
</style>
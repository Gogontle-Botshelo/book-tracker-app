<script>
	import BookList from '$lib/components/BookList.svelte';
	import StatusFilter from '$lib/components/StatusFilter.svelte';
	export let data;
</script>

<h1>Book Tracker</h1>
{#if data.error}
	<p style="color: red;">{data.error}</p>
{:else}
	<StatusFilter />
	<BookList books={data.books} />
{/if}

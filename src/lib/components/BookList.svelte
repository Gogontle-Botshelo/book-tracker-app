<script>
	export let books;
</script>

<ul>
	{#each books as book}
		<li>{book.title} by {book.author} - {book.status}</li>
	{/each}
</ul>

<style>
    ul {
        list-style: none;
        padding: 0;
    }
    li {
        margin: 5px 0;
    }
</style>
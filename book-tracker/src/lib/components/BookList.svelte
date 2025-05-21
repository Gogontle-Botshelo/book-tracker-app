<script>
    import BookCard from '$lib/components/BookCard.svelte';

    export let books;
    // Create a reactive copy of books to update locally
    let bookList = Array.isArray(books) ? books.filter(book => book != null) : [];

    // Update bookList when books prop changes
    $: bookList = Array.isArray(books) ? books.filter(book => book != null) : [];

    function handleDelete(bookId) {
        // Remove the book from the local list
        bookList = bookList.filter(book => book.id !== bookId);
    }
</script>

{#if Array.isArray(bookList)}
    {#each bookList as book}
        {#if book}
            <BookCard {book} onDelete={handleDelete} />
        {:else}
            <p>Skipping invalid book entry</p>
        {/if}
    {:else}
        <p>No books found.</p>
    {/each}
{:else}
    <p>Invalid books data</p>
{/if}
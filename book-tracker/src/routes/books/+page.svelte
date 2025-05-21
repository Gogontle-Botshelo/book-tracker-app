<script>
    export let data;
    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import BookList from '$lib/components/BookList.svelte';
    import StatusFilter from '$lib/components/StatusFilter.svelte';
    import LoadingSpinner from '$lib/components/LoadingSpinner.svelte';
    let filteredBooks = Array.isArray(data.books) ? data.books.filter(book => book != null) : [];
    let loading = false;
    let error = null;

    // Update filteredBooks when data.books changes
    $: filteredBooks = Array.isArray(data.books) ? data.books.filter(book => book != null) : [];

    function handleFilter(status) {
        loading = true;
        try {
            filteredBooks = Array.isArray(data.books)
              ? status === 'All'
                ? data.books.filter(book => book != null)
                : data.books.filter(book => book != null && book.status === status)
              : [];
        } catch (e) {
            error = 'Error filtering books: ' + e.message;
            filteredBooks = [];
        }
        setTimeout(() => (loading = false), 500);
    }

</script>

<Header />
<div class="container">
    <h2>My Books</h2>
    <StatusFilter onFilter={handleFilter} />
    {#if error}
        <p style="color: red;">{error}</p>
    {:else if loading}
        <LoadingSpinner />
    {:else}
        <BookList books={filteredBooks} />
    {/if}
</div>
<Footer />
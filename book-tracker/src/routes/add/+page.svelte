<script>
    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import SearchForm from '$lib/components/SearchForm.svelte';
    import BookForm from '$lib/components/BookForm.svelte';
    import LoadingSpinner from '$lib/components/LoadingSpinner.svelte';
    let searchResults = [];
    let selectedBook = null;
    let loading = false;
    let message = '';

    async function handleSearch(query) {
        loading = true;
        try {
            const response = await fetch(`/api/books?query=${encodeURIComponent(query)}`);
            searchResults = await response.json();
        } catch (error) {
            message = 'Error searching books';
        }
        loading = false;
    }

    async function handleSubmit(book) {
        loading = true;
        try {
            const response = await fetch('/api/books', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...book, date_added: new Date().toISOString() })
            });
            if (response.ok) {
                message = 'Book added successfully!';
                selectedBook = null;
                searchResults = [];
            } else {
                message = 'Error adding book';
            }
        } catch (error) {
            message = 'Error adding book';
        }
        loading = false;
    }
</script>

<Header />
<div class="container">
    <h2>Add a Book</h2>
    <SearchForm onSearch={handleSearch} />
    {#if loading}
        <LoadingSpinner />
    {:else if message}
        <p>{message}</p>
    {/if}
    {#each searchResults as book}
        <button
          type="button"
          class="book-card"
          on:click={() => (selectedBook = book)}
        >
            <h3>{book.title}</h3>
            <p>Author: {book.author || 'Unknown'}</p>
        </button>
    {/each}
    {#if selectedBook}
        <h3>Add "{selectedBook.title}"</h3>
        <BookForm book={selectedBook} onSubmit={handleSubmit} />
    {/if}
</div>
<Footer />
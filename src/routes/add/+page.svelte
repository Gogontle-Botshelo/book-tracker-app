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
        message = '';
        try {
            const response = await fetch(`/api/books?query=${encodeURIComponent(query)}`);
            if (response.ok) {
                searchResults = await response.json();
                if (!Array.isArray(searchResults) || searchResults.length === 0) {
                    message = 'No books found';
                    searchResults = [];
                }
            } else {
                message = 'Error searching books';
                searchResults = [];
            }
        } catch (error) {
            message = 'Error searching books: ' + error.message;
            searchResults = [];
        }
        loading = false;
    }

    function handleSelect(book) {
        selectedBook = book;
        searchResults = [];
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
            message = 'Error adding book: ' + error.message;
        }
        loading = false;
    }
</script>

<Header />
<div class="container">
    <h2>Add a Book</h2>
    {#if message}
        <p style="color: {message.includes('Error') ? 'red' : 'green'};">{message}</p>
    {/if}
    {#if loading}
        <LoadingSpinner />
    {:else if selectedBook}
        <BookForm {selectedBook} onSubmit={handleSubmit} />
    {:else}
        <SearchForm onSearch={handleSearch} />
        {#if searchResults.length > 0}
            <div>
                {#each searchResults as book}
                    <button type="button" class="search-result" on:click={() => handleSelect(book)}>
                        <span class="title">{book.title}</span>
                        <span class="author">by {book.author}</span>
                        <span class="release-date">({book.releaseDate})</span>
                    </button>
                {/each}
            </div>
        {/if}
    {/if}
</div>
<Footer />
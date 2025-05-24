<script>
    export let onSearch;
    let query = '';

    function handleSubmit(event) {
        event.preventDefault();
        if (query.trim()) {
            onSearch(query);
        }
    }
</script>

<form on:submit={handleSubmit}>
    <input
      type="text"
      bind:value={query}
      placeholder="Search for a book..."
      aria-label="Search for a book"
    />
    <button type="submit">Search</button>
</form>
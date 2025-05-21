<script>
    export let onSearch;
    let query = '';
</script>

<form on:submit|preventDefault={() => onSearch(query)}>
    <input type="text" bind:value={query} placeholder="Search for a book..." required />
    <button type="submit">Search</button>
</form>
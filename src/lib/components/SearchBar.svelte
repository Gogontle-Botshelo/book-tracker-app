<script>
	export let onSearch;
	let searchQuery = '';

	function handleInput(event) {
		onSearch(event.target.value);
	}
</script>

<div class="search-bar">
	<input type="text" bind:value={searchQuery} on:input={handleInput} placeholder="Search for books..." />
</div>

<style>
    .search-bar {
        margin: 10px 0;
    }
    input {
        padding: 5px;
        width: 200px;
    }
</style>
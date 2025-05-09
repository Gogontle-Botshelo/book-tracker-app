<script>
	export let value = '';
	export let onSearch;
</script>

<div class="search-bar">
	<input
		type="text"
		bind:value
		placeholder="Search books..."
		on:input={() => onSearch(value)}
	/>
</div>

<style lang="scss">
  .search-bar {
    padding: 1rem;
  }
  input {
    width: 100%;
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
</style>
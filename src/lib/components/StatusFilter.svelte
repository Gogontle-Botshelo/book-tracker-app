<script>
	export let selectedStatus = 'all';
	export let onChange;
</script>

<div class="status-filter">
	<label for="status">Filter by Status:</label>
	<select id="status" bind:value={selectedStatus} on:change={onChange}>
		<option value="all">All</option>
		<option value="read">Read</option>
		<option value="reading">Reading</option>
		<option value="want_to_read">Want to Read</option>
	</select>
</div>

<style lang="scss">
  .status-filter {
    padding: 1rem;
  }
  select {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
</style>
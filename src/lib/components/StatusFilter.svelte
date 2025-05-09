<script>
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	let status = $page.url.searchParams.get('status') || 'all';

	async function filterBooks() {
		const url = status === 'all' ? '/' : `/?status=${status}`;
		await goto(url);
	}
</script>

<div class="filter fade-in">
	<label for="status-filter">Filter by Status:</label>
	<select id="status-filter" bind:value={status} on:change={filterBooks}>
		<option value="all">All</option>
		<option value="read">Read</option>
		<option value="reading">Reading</option>
		<option value="want_to_read">Want to Read</option>
	</select>
</div>

<style>
    .filter {
        margin: 1.5rem 0;
        display: flex;
        align-items: center;
        gap: 1rem;
        max-width: 300px;
    }
    label {
        font-family: 'Dancing Script', cursive;
        font-size: 1.25rem;
        color: var(--dark);
    }
    select {
        background-color: var(--secondary);
        border: 1px solid var(--accent);
        padding: 0.5rem;
        border-radius: 8px;
        font-family: 'Raleway', sans-serif;
        font-size: 1rem;
        transition: border-color 0.3s ease, box-shadow 0.3s ease;
    }
    select:focus {
        border-color: var(--primary);
        box-shadow: 0 0 8px rgba(193, 154, 107, 0.3);
    }
</style>
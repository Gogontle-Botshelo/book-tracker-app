<script>
	import { goto } from '$app/navigation';
	let query = '';

	async function search() {
		if (query.trim()) {
			console.log('Submitting search:', query);
			await goto(`/search?q=${encodeURIComponent(query)}`);
		} else {
			console.log('Empty query');
		}
	}
</script>

<form on:submit|preventDefault={search} class="search-form fade-in">
	<input type="text" bind:value={query} placeholder="Search for books..." />
	<button type="submit">Search</button>
</form>

<style>
    .search-form {
        display: flex;
        gap: 0.75rem;
        margin: 2rem auto;
        max-width: 500px;
        background: var(--secondary);
        padding: 1rem;
        border-radius: 10px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }
    input {
        flex: 1;
        border: 1px solid var(--accent);
    }
    button {
        background-color: var(--primary);
        font-family: 'Dancing Script', cursive;
    }
</style>
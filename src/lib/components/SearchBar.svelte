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

<form on:submit|preventDefault={search}>
	<input type="text" bind:value={query} placeholder="Search for books..." />
	<button type="submit">Search</button>
</form>

<style>
    form {
        display: flex;
        gap: 0.5rem;
        margin: 1rem 0;
    }
    input {
        padding: 0.5rem;
        border: 1px solid #ddd;
        border-radius: 4px;
        flex: 1;
    }
    button {
        padding: 0.5rem 1rem;
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }
    button:hover {
        background-color: #0056b3;
    }
</style>
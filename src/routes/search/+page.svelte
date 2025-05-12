<script>
	import { superForm } from 'sveltekit-superforms';
	import { goto } from '$app/navigation';

	export let data;
	const { form, errors, enhance } = superForm(data.form);

	async function selectBook(book) {
		await goto('/add', {
			data: { selectedBook: book }
		});
	}
</script>

<h1>Search Books</h1>
<form method="POST" action="?/searchBooks" use:enhance>
	<input
		name="query"
		bind:value={$form.query}
		placeholder="Search for books..."
	/>
	<button type="submit">Search</button>
	{#if $errors.query}<span class="error">{$errors.query}</span>{/if}
</form>

{#if $form.submitting}
	<p>Searching...</p>
{:else if data.externalBooks?.length}
	<div class="results">
		<h2>Search Results</h2>
		<ul>
			{#each data.externalBooks as book}
				<li>
					<strong>{book.title}</strong> by {book.author}
					<button on:click={() => selectBook(book)}>Select</button>
				</li>
			{/each}
		</ul>
	</div>
{:else if $form.submitted}
	<p>No books found. Try a different search.</p>
{/if}

<style>
    .error { color: red; }
    .results { margin-top: 2rem; }
    ul { list-style: none; padding: 0; }
    li {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin: 0.5rem 0;
    }
</style>
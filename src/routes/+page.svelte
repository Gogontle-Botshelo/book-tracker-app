<script>
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import BookList from '$lib/components/BookList.svelte';
	import BookCard from '$lib/components/BookCard.svelte';
	import FormInput from '$lib/components/FormInput.svelte';
	import { superForm } from 'sveltekit-superforms/client';
	export let data;
	const { form } = superForm(data.form); // Convert form to a store
</script>

<Header />

<h1>Book Tracker</h1>

<form method="POST" action="?/addBook" use:form.enhance>
	<FormInput label="Title" name="title" value={form.title} placeholder="Enter book title..." />
	<FormInput label="Author" name="author" value={form.author} placeholder="Enter author name..." />
	<div>
		<label for="status">Status</label>
		<select id="status" name="status" bind:value={form.status}>
			<option value="To Read">To Read</option>
			<option value="Reading">Reading</option>
			<option value="Completed">Completed</option>
		</select>
	</div>
	<button type="submit">Add Book</button>
</form>

{#if data.books?.length}
	<BookList>
		{#each data.books as book}
			<BookCard {book} />
		{/each}
	</BookList>
{:else}
	<p>No books added yet.</p>
{/if}

<Footer />

<style>
    h1 {
        color: var(--secondary);
    }
    form {
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin: 20px 0;
    }
    button {
        padding: 5px 10px;
    }
</style>
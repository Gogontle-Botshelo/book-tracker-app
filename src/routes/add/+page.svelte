<!-- src/routes/add/+page.svelte -->
<script>
	import { superForm } from 'sveltekit-superforms';
	export let data;
	const { form, errors, enhance } = superForm(data.form);
</script>

<form method="POST" use:enhance>
	<label>
		Title
		<input name="title" bind:value={$form.title}>
		{#if $errors.title}<span class="error">{$errors.title}</span>{/if}
	</label>

	<label>
		Author
		<input name="author" bind:value={$form.author}>
		{#if $errors.author}<span class="error">{$errors.author}</span>{/if}
	</label>

	<label>
		Status
		<select name="status" bind:value={$form.status}>
			{#each ['unread', 'reading', 'finished'] as status}
				<option value={status}>{status}</option>
			{/each}
		</select>
	</label>

	<button type="submit">Add Book</button>
</form>

<style>

    form {
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin: 20px 0;
    }
    input,
    select {
        padding: 5px;
    }
    button {
        padding: 5px 10px;
    }
</style>
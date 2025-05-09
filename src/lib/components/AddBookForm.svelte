<script>
	import { superForm } from 'sveltekit-superforms';
	export let form;
	export let success = false;

	const { form: formData, enhance } = superForm(form);
</script>

<form method="POST" use:enhance class="add-book-form">
	{#if success}
		<p class="success">Book added successfully!</p>
	{/if}

	<div class="form-group">
		<label for="title">Title</label>
		<input
			type="text"
			id="title"
			name="title"
			bind:value={$formData.title}
			placeholder="Book title"
		/>
		{#if form.errors.title}
			<span class="error">{form.errors.title}</span>
		{/if}
	</div>

	<div class="form-group">
		<label for="author">Author</label>
		<input
			type="text"
			id="author"
			name="author"
			bind:value={$formData.author}
			placeholder="Book author"
		/>
		{#if form.errors.author}
			<span class="error">{form.errors.author}</span>
		{/if}
	</div>

	<div class="form-group">
		<label for="status">Status</label>
		<select id="status" name="status" bind:value={$formData.status}>
			<option value="read">Read</option>
			<option value="reading">Reading</option>
			<option value="want_to_read">Want to Read</option>
		</select>
	</div>

	<button type="submit">Add Book</button>
</form>

<style lang="scss">
  .add-book-form {
    max-width: 400px;
    margin: 2rem auto;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  .form-group {
    margin-bottom: 1rem;
  }
  label {
    display: block;
    margin-bottom: 0.5rem;
  }
  input,
  select {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  button {
    background-color: #333;
    color: white;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  .success {
    color: green;
    margin-bottom: 1rem;
  }
  .error {
    color: red;
    font-size: 0.8rem;
  }
</style>
<script>
	let title = '';
	let author = '';
	let status = 'reading';
	let error = '';

	async function addBook() {
		try {
			const response = await fetch('/api/add', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ title, author, status })
			});

			if (!response.ok) {
				const errorData = await response.json();
				throw new Error(errorData.error || 'Failed to add book');
			}

			title = '';
			author = '';
			status = 'reading';
			error = '';
			alert('Book added successfully!');
		} catch (err) {
			error = err.message;
		}
	}
</script>

<form on:submit|preventDefault={addBook} class="fade-in">
	<h2>Add a New Book</h2>
	{#if error}
		<p class="error">{error}</p>
	{/if}
	<div class="form-group">
		<label for="title">Title</label>
		<input id="title" type="text" bind:value={title} placeholder="Enter book title" required />
	</div>
	<div class="form-group">
		<label for="author">Author</label>
		<input id="author" type="text" bind:value={author} placeholder="Enter author name" required />
	</div>
	<div class="form-group">
		<label for="status">Status</label>
		<select id="status" bind:value={status}>
			<option value="read">Read</option>
			<option value="reading">Reading</option>
			<option value="want_to_read">Want to Read</option>
		</select>
	</div>
	<button type="submit">Add Book</button>
</form>

<style>
    form {
        max-width: 500px;
        margin: 2rem auto;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        background: var(--secondary);
        padding: 2rem;
        border-radius: 10px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }
    h2 {
        font-family: 'Dancing Script', cursive;
        font-size: 1.75rem;
        text-align: center;
        color: var(--dark);
    }
    .form-group {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }
    label {
        font-family: 'Raleway', sans-serif;
        font-size: 1rem;
        color: var(--dark);
    }
    input, select {
        background-color: var(--light);
        border: 1px solid var(--accent);
    }
    button {
        background-color: var(--primary);
        font-family: 'Dancing Script', cursive;
        font-size: 1.1rem;
    }
    .error {
        color: #dc3545;
        font-family: 'Raleway', sans-serif;
        text-align: center;
    }
</style>
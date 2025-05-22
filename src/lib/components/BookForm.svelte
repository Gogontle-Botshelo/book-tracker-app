<script>
    export let book;
    export let onSubmit;
    let title = book?.title || '';
    let author = book?.author || '';
    let status = book?.status || 'Want to Read';
</script>

<form on:submit|preventDefault={() => onSubmit({ title, author, status })}>
    <input type="text" bind:value={title} placeholder="Book Title" required />
    <input type="text" bind:value={author} placeholder="Author" />
    <select bind:value={status}>
        <option value="Read">Read</option>
        <option value="Reading">Reading</option>
        <option value="Want to Read">Want to Read</option>
    </select>
    <button type="submit">Add Book</button>
</form>
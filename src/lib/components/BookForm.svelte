<script>
    export let selectedBook;
    export let onSubmit;
    let status = 'Want to Read';

    function handleSubmit(event) {
        event.preventDefault();
        onSubmit({ ...selectedBook, status });
    }
</script>

<form on:submit={handleSubmit}>
    <p>Selected Book: {selectedBook.title} by {selectedBook.author}</p>
    <label for="status">Status:</label>
    <select id="status" bind:value={status}>
        <option value="Read">Read</option>
        <option value="Reading">Reading</option>
        <option value="Want to Read">Want to Read</option>
    </select>
    <button type="submit">Add Book</button>
</form>
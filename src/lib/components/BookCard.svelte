<script>
	export let book;
</script>

<div class="card">
	<h3>{book.title}</h3>
	<p>by {book.author}</p>
	<span class="status">{book.status}</span>
</div>

<style>
    .card {
        border: 1px solid var(--accent);
        padding: 10px;
        margin: 5px 0;
    }
    .status {
        background: var(--secondary);
        color: white;
        padding: 2px 5px;
    }
</style>
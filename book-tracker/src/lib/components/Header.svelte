<script>
    import { goto } from '$app/navigation';
</script>

<div class="header">
    <h1>Book Tracker</h1>
    <nav>
        <a href="/" on:click={() => goto('/')}>Home</a>
        <a href="/books" on:click={() => goto('/books')}>Books</a>
        <a href="/add" on:click={() => goto('/add')}>Add Book</a>
    </nav>
</div>
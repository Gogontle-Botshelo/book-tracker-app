<script>
	import { page } from '$app/stores';
</script>

<header>
	<h1>Book Tracker</h1>
	<nav>
		<a href="/" class:active={$page?.url?.pathname === '/'}>Home</a>
		<a href="/add" class:active={$page?.url?.pathname === '/add'}>Add Book</a>
		<a href="/search" class:active={$page?.url?.pathname === '/search'}>Search Books</a>
	</nav>
</header>

<style>
    header {
        background: var(--secondary);
        color: white;
        padding: 10px;
    }

    nav {
        display: flex;
        gap: 15px;
    }

    a {
        color: white;
        text-decoration: none;
    }

    a.active {
        font-weight: bold;
        text-decoration: underline;
    }
</style>
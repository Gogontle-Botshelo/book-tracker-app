<script>
	// noinspection SvelteDeprecatedSymbol
	import { page } from '$app/stores';
</script>

<nav>
	<a href="/" class:active={$page.url.pathname === '/'}>Home</a>
	<a href="/search" class:active={$page.url.pathname === '/search'}>Search</a>
	<a href="/add" class:active={$page.url.pathname === '/add'}>Add Book</a>
</nav>

<style>
    nav {
        display: flex;
        gap: 1rem;
        padding: 1rem;
        background-color: #f8f8f8;
        border-bottom: 1px solid #ddd;
    }
    a {
        text-decoration: none;
        color: #333;
    }
    a.active {
        font-weight: bold;
        color: #007bff;
    }
</style>
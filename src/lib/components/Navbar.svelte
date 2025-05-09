<nav class="navbar fade-in">
	<div class="container">
		<a href="/" class="brand">Book Tracker</a>
		<ul>
			<li><a href="/">Home</a></li>
			<li><a href="/search">Search</a></li>
			<li><a href="/add">Add Book</a></li>
		</ul>
	</div>
</nav>

<style>
    .navbar {
        background-color: var(--primary);
        padding: 1.5rem 0;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }
    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .brand {
        font-family: 'Great Vibes', cursive;
        font-size: 2rem;
        font-weight: 400;
        color: var(--light);
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    }
    ul {
        display: flex;
        list-style: none;
        gap: 2rem;
    }
    a {
        color: var(--light);
        font-family: 'Dancing Script', cursive;
        font-size: 1.25rem;
        transition: color 0.3s ease, transform 0.2s ease;
    }
    a:hover {
        color: var(--secondary);
        transform: translateY(-2px);
    }
</style>
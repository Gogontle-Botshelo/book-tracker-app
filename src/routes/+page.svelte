<script>
    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';
</script>

<Header />
<div class="container home-container">
    <h1>Welcome to Book Tracker</h1>
    <p class="intro-text">
        Keep track of your reading journey! Search for books to add to your collection, mark them as read, reading, or to-read, and manage your list with ease.
    </p>
    <div class="cta-buttons">
        <a href="/add" class="cta-button">Add a Book</a>
        <a href="/books" class="cta-button">View Your Books</a>
    </div>
</div>
<Footer />

<style>
    .home-container {
        text-align: center;
        padding: 30px 15px;
    }

    h1 {
        font-size: 2rem;
        color: #4A4A4A;
        margin-bottom: 15px;
    }

    .intro-text {
        font-size: 1.1rem;
        margin-bottom: 20px;
        color: #7A7A7A;
        max-width: 600px;
        margin-left: auto;
        margin-right: auto;
    }

    .cta-buttons {
        display: flex;
        gap: 15px;
        justify-content: center;
    }

    .cta-button {
        background-color: #FF9999;
        color: white;
        padding: 10px 20px;
        border-radius: 5px;
        text-decoration: none;
        font-size: 1rem;
    }

    .cta-button:hover {
        background-color: #FF6666;
    }

    @media (max-width: 480px) {
        h1 {
            font-size: 1.5rem;
        }

        .intro-text {
            font-size: 1rem;
        }

        .cta-buttons {
            flex-direction: column;
            gap: 10px;
        }

        .cta-button {
            padding: 8px 15px;
            font-size: 0.9rem;
        }
    }
</style>
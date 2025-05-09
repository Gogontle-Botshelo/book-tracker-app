<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '../app.scss';
</script>

<Navbar />
<slot />
<Footer></Footer>
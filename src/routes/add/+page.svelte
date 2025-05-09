<script>
	import AddBookForm from '$lib/components/AddBookForm.svelte';
	export let data;
</script>

<h1>Add a Book</h1>
<AddBookForm form={data.form} success={data.success} />
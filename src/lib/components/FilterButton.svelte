<script>
	export let status;
	export let onClick;
</script>

<button on:click={() => onClick(status)}>{status}</button>

<style>
    button {
        padding: 5px 10px;
        margin: 0 5px;
    }
</style>
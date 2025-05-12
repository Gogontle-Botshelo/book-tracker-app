<script>
	export let value;
	export let placeholder;
</script>

<input bind:value type="text" {placeholder} />

<style>
    input {
        padding: 5px;
        margin: 5px 0;
    }
</style>
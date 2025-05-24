<script>
	import { Circle2 } from 'svelte-loading-spinners';
</script>

<div class="spinner-wrapper">
	<Circle2 size="60" color="#2c3e50" unit="px" duration="0.8s" />
</div>

<style>
    .spinner-wrapper {
        margin: 20px auto;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 60px;
    }
</style>
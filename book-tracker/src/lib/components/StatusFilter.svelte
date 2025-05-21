<script>
    export let onFilter;
    let status = 'All';
</script>

<select bind:value={status} on:change={() => onFilter(status)}>
    <option value="All">All</option>
    <option value="Read">Read</option>
    <option value="Reading">Reading</option>
    <option value="Want to Read">Want to Read</option>
</select>
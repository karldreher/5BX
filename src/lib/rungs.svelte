<script>
    let rungs = [...Array(55).keys()];
    let selection;
</script>

<select bind:value={selection} id='rungSelector'>
	{#each rungs as rung}
	<option value={rung}>{rung}</option>
	{/each}
</select><p>this value updates! {selection}</p>
<script>
    let rungs = [...Array(55).keys()];
    
    async function getRung() {

        const result = await fetch("rung/get1");
        
    }
    
</script>


<select id='rungSelector'>
	{#each rungs as rung}
	<option value={rung}>{rung}</option>
	{/each}
</select>

<button on:click={getRung()}>Click</button>
{#each result as r}
<h2 id='display'>{r}</h2>
{/each}

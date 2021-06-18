<script>
    let rungs = [...Array(55).keys()];
    let selection;
    async function getData(value){
        const endpoint = "/rung/" + value
        const data = await fetch(endpoint);
        const jsonData = await data.json();

        if (data.ok) {
            console.log(jsonData)
			return jsonData;
		} else {
            console.log("error fetching from endpoint")
			throw new Error(data);
		}
    }

    $: promise = getData(selection)

</script>

<select bind:value={selection} id='rungSelector'>
	{#each rungs as rung}
	<option value={rung}>{rung}</option>
	{/each}
</select><p>this value updates! {selection}</p>

{#await promise}
    <p>awaiting data..</p>
{:then result}
    {#each result.result as r}
    <h2 id='display'>{r.rung}</h2>
    {/each}
{:catch error}
    <p style="color: red">{error.message}</p>
{/await}


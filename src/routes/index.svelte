<script>
    import Rungs from '$lib/rungs.svelte'

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
    //testing only, needs to come from selection
    let value = 3
    let promise = getData(value)

</script>


<Rungs />

{#await promise}
    <p>awaiting data..</p>
{:then result}
    {#each result.result as r}
    <h2 id='display'>{r.rung}</h2>
    {/each}
{:catch error}
    <p style="color: red">{error.message}</p>
{/await}


<script>
    import Rungs from '$lib/rungs.svelte'
    async function getData(){
        const data = await fetch("/api");
        const jsonData = await data.json();

        if (data.ok) {
            console.log(jsonData)
			return jsonData;
		} else {
            console.log("error fetching from endpoint")
			throw new Error(data);
		}
    }
    
    let promise = getData()

</script>


<Rungs />

{#await promise}
    <p>awaiting data..</p>
{:then result}
    {#each result as r}
    <h2 id='display'>{r.rung}</h2>
    {/each}
{:catch error}
    <p style="color: red">{error.message}</p>
{/await}


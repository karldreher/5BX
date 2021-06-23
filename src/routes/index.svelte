<script>
    import { fade } from "svelte/transition";

    let rungs = [...Array(55).keys()];
    let selection;
    async function getData(value) {
        const endpoint = "/rung/" + value;
        const data = await fetch(endpoint);
        const jsonData = await data.json();

        if (data.ok) {
            console.log(jsonData);
            return jsonData;
        } else {
            console.log("error fetching from endpoint");
            throw new Error(data);
        }
    }

    $: promise = getData(selection);
</script>

<div id="top">5bx</div>
<hr id="break" />
<div id="form">
    {#await promise}
        <p>awaiting data..</p>
    {:then result}
        {#each result.result as r}
            <table transition:fade>
                <tr>
                    <td class="field">Rung:</td>
                    <td class="result">{r.rung}</td>
                </tr>
                <tr>
                    <td class="field">Bend:</td>
                    <td class="result">{r.bend}</td>
                </tr>
                <tr>
                    <td class="field">Situp:</td>
                    <td class="result">{r.situp}</td>
                </tr>
                <tr>
                    <td class="field">Leg Lifts:</td>
                    <td class="result">{r.leglift}</td>
                </tr>
                <tr>
                    <td class="field">Push-ups:</td>
                    <td class="result">{r.pushup}</td>
                </tr>
                <tr>
                    <td class="field">Run and Jump:</td>
                    <td class="result">{r.runandjump}</td>
                </tr>
            </table>
        {/each}
    {:catch error}
        <p style="color: red">{error.message}</p>
    {/await}

    <label for="rungSelector" />
    <select bind:value={selection} id="rungSelector">
        {#each rungs as rung}
            <option value={rung}>Rung {rung}</option>
        {/each}
    </select>
</div>

<style>
    * {
        font-family: sans-serif;
    }

    #top {
        font-size: xxx-large;
    }

    .field {
        font-size: x-large;
        margin-bottom: 2%;
        border-bottom: 1px dotted black;
    }

    .result {
        font-size: x-large;
        font-weight: 800;
        padding-left: 2em;
        background-color: white;
        width: 30vw;
        border: solid 0.5px black;
    }

    #break {
        border: 1px solid red;
    }

    #form {
        border-radius: 5px;
        background-color: #f2f2f2;
        padding: 20px;
    }

    #rungSelector {
        width: 50%;
        padding: 12px 20px;
        margin-top: 5rem;
        margin-left: auto;
        display: inline-block;
        border: 1px solid #fff;
        border-radius: 40px;
        box-shadow: 1px 2px 5px 1px grey;
        box-sizing: border-box;
        font-size: x-large;
    }
</style>

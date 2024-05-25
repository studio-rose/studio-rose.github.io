<script>
    import RadarChart from "$lib/RadarChart.svelte";
    import CharacterInfoBox from "$lib/CharacterInfoBox.svelte";
    import SvelteMarkdown from 'svelte-markdown'

    export let data;
    let {attributes, moniker, name, primary_color, secondary_color, overview, history, abilities} = data.character;

</script>


<!-- Name, Moniker -->
<p>{name}</p>
<p>{moniker}</p>

<hr />


<div class="character-content">
    <div style:float="right">
        <CharacterInfoBox attribute_data={attributes}
                          primary_color={primary_color}
                          secondary_color={secondary_color}
                          character={data.character} />
    </div>


    {#await import(`$lib/character_markdown/${data.character.markdown_path}.md?raw`) then {default: source}}
        <SvelteMarkdown {source} />
        <br/>
    {/await}

</div>




<!-- Character sprite, character photo -->
<!-- Data (birthday, age, height, weight, favorite color, aliases) -->

<!-- About -->
<!-- History -->
<!-- Abilities -->

<!-- Trivia -->
<!-- ?Other? -->



<style>
    .character-content {
        margin: 20px;
    }

</style>

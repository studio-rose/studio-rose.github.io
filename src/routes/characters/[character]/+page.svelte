<script>
    import RadarChart from "$lib/RadarChart.svelte";
    import CharacterInfoBox from "$lib/CharacterInfoBox.svelte";

    export let data;
    let {attributes, moniker, name, primary_color, secondary_color, overview, history, abilities} = data.character;

</script>


<!-- Name, Moniker -->
<p>{name}</p>
<p>{moniker}</p>

<hr />


<div class="character-content">
    <div style:float="left">
        <CharacterInfoBox attribute_data={attributes}
                          primary_color={primary_color}
                          secondary_color={secondary_color} />
    </div>


    <h3>Overview</h3>
    <div class="overview">
        <p>{@html overview}</p>
    </div>

    <h3>History</h3>
    <div class="history">
        <p>{@html history}</p>
    </div>

    <h3>Abilities</h3>
    <div class="abilities">
        <p>{@html abilities}</p>
    </div>
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

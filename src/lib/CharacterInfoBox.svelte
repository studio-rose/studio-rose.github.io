<script>
    import RadarChart from "$lib/RadarChart.svelte";

    export let attribute_data;
    export let primary_color;
    export let secondary_color;
    export let character;

</script>


<div class="content">
    {#await import(`$lib/character_images/${character.sprite_path}.png`) then { default: src }}
        <img {src} alt="Sprite" />
        <br/>
    {/await}

    <span>Full Name: {character.name}</span>
    <br/>
    <span>Height: {character.height}</span>
    <br/>
    <span>Weight: {character.weight}</span>
    <br/>
    <span>Age: {character.age}</span>
    <br/>
    <span>Birthday: {character.birthday}</span>
    <br/>
    <span>Color: {character.secondary_color}</span>
    <br/>
    <span>Aliases: None</span>

    <div class="radar">
        <RadarChart attribute_data={attribute_data}
                    primary_color={primary_color}
                    secondary_color={secondary_color} />
    </div>
</div>

<style>
    .content {
        padding: 4px;
        width: 200px;
        height: 400px;
        border: 1px solid white;
    }

    .radar {
        width:80%;
        margin:auto;
    }
</style>
<script>
    import RadarChart from "$lib/RadarChart.svelte";

    export let attribute_data;
    export let primary_color;
    export let secondary_color;
    export let character;

    $: ({characteristics={}, trivia={}, arcana={}, attributes={}} = character);
    $: (attribute_data = {
        "keys": Object.keys(attributes),
        "values": Object.values(attributes)
    })
</script>


<div class="content">
    <!--
    {#await import(`$lib/character_images/${character.sprite_path}.png`) then { default: src }}
        <img {src} alt="Sprite" /><br/>
    {/await}
    -->

    <div class="info-section">
        <div class="centered">
            <span>---{character.name}---</span>
        </div>
    </div>

    <div class="centered">
        <hr/><span>Characteristics</span><hr/>
    </div>


    <div class="info-section">
        <span>Age</span> <span class="right">{characteristics.age}</span><br/>
        <span>Race</span> <span class="right"> {characteristics.race}</span><br/>
        <span>Gender</span> <span class="right"> {characteristics.gender}</span><br/>
        <span>Hair Color</span> <span class="right"> {characteristics.hair_color}</span><br/>
        <span>Eye Color</span> <span class="right"> {characteristics.eye_color}</span><br/>
        <span>Height</span> <span class="right"> {characteristics.height}</span><br/>
        <span>Weight</span> <span class="right"> {characteristics.weight}</span><br/>
    </div>

    <div class="centered">
        <hr/><span>Trivia</span><hr/>
    </div>

    <div class="info-section">
        <span>Birthday</span> <span class="right">{trivia.birthday}</span><br/>
        <span>Color</span> <span class="right">{trivia.color}</span><br/>
        <span>Song</span> <span class="right">{trivia.song}</span><br/>
    </div>


    <div class="centered">
        <hr/><span>Arcana</span><hr/>
    </div>

    <div class="info-section">
        <span>Status</span> <span class="right">{arcana.status}</span><br/>
        <span>Tarot</span> <span class="right">{arcana.tarot} ({arcana.rank})</span><br/>
        <span>Relic</span> <span class="right">{arcana.relic}</span><br/>
    </div>

    <div class="centered">
        <hr/><span>Relationships</span><hr/>
    </div>

    <div class="centered">
        <hr/><span>Aliases</span><hr/>
    </div>

    <div class="radar">
        <RadarChart attribute_data={attribute_data}
                    primary_color={primary_color}
                    secondary_color={secondary_color} />
    </div>
</div>

<style>
    .content {
        width: 200px;
        border: 2px solid #ffccdd;
    }

    .radar {
        width:80%;
        margin:auto;
        padding:8px;
    }

    span {

    }

    hr {
        padding: 0px;
    }

    .info-section {
        margin:4px;
        padding:4px;
    }

    .centered {
        text-align: center;
    }

    .right{
        float:right;
    }
</style>
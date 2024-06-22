<script>
    import RadarChart from "$lib/character_components/RadarChart.svelte";

    export let data;

    let primary_color = "#ffffff";
    let forms = [];
    let attribute_data = {};
    let selected_form = null;
    const traits = ["Strength", "Agility", "Intelligence", "Talisman", "Magic", "Constitution"];

    $: ({name, characteristics={}, trivia={}, arcana={}, attributes={}} = data.character);
    $: (forms = Object.keys(attributes));
    $: (attribute_data =
        Object.fromEntries(Object.entries(attributes).map(([k, v]) => [k, {
            "values": traits.map(q => v[q]),
            "description": v["Description"]
        }]))
    );
    $: (primary_color = data.character.primary_color + "88");

    $: selected_form = Object.keys(attribute_data)[0];

</script>


<div class="container">
    <div class="trivia-content">
        <!--
        {#await import(`$lib/character_images/${character.sprite_path}.png`) then { default: src }}
            <img {src} alt="Sprite" /><br/>
        {/await}
        -->
        <div class="info-section">
            <div class="centered">
                <span>&#171;&#171; {name} &#187;&#187;</span>
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
    </div>

    <div class="stats-charts">
        <div class="form-selection">
            {#each forms as form}
                <button on:click={()=>{selected_form = form}}>{form}</button>
            {/each}
        </div>
        <div class="radar">
            <div class="radar-container">
                {#if selected_form}
                    <h2 class="form-title">{selected_form}</h2>
                    <RadarChart traits={traits}
                                values={attribute_data[selected_form]["values"]}
                                primary_color={primary_color}/>
                    <div class="description">{attribute_data[selected_form]["description"]}</div>
                {/if}
            </div>

        </div>
    </div>
</div>



<style>
    .trivia-content {
        min-width: 200px;
        border: 2px solid #ffccdd;
        background-color: #111;
        margin:auto;
    }

    .container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }

    .radar {
        padding:8px;
    }

    hr {
        padding: 0;
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

    .stats-charts{
        margin:0 auto;
    }

    .radar-container{
        width:400px;
        margin: auto;
        display: flex;
        flex-direction: column;
    }
    .description {
        width:100%;
    }
    .form-title {
        text-align: center;
    }
    .form-selection{
        width:100%;
        margin-top: 0;
        height: 40px;
        display:flex;
        justify-content: center;
    }

    button {
        padding: 8px;
        margin: 0;
        font-size: 1.2em;
        color: white;
        text-align: center;
        display:inline-block;
        background-color: #1a1a20;
        border:2px solid white;
    }

</style>
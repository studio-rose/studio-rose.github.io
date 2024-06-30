<script>
    import {base} from "$app/paths";
    import { page } from '$app/stores';
    import {fly, fade } from 'svelte/transition';
    import {onMount} from "svelte";

    export let data;
    $: ({name, arcana, primary_color, secondary_color} = data.character);

    let displayed_tab = "Overview";
    $: (displayed_tab = $page.url.pathname.split("/").pop());

    let runes = Array.from({length: 32}, v => "&#x16" + Math.floor(Math.random() * 5 + 10).toString(16) + Math.floor(Math.random() * 16).toString(16) + ";").join("");
    let test_value = 0;
    $: test_value = data.character.id;

</script>


<div class="character-page">

    <!-- Name, Moniker -->
    <div class="character-name">
        {#key test_value}
            <h2 in:fly={{ delay: 0, duration: 1000, x: -100, opacity: 0.0 }}>{name}</h2>
            <!-- hr style="--bar-color: {primary_color}"/ -->
            <div in:fade={{ delay: 200, duration: 800 }} class="notranslate highlighted-runes">{@html runes}</div>

            <h3 in:fly={{ delay: 0, duration: 1000, x: 100, opacity: 0.0 }}>{arcana.tarot}</h3>
        {/key}
        <br/>
    </div>

    <div class="character-content">
        <div class="tabs">
            {#each ["Overview", "History", "Trivia", "Gallery"] as tab}
                <a href="{base}/characters/{data.character.id}/{tab.toLowerCase()}"
                   class:highlighted={displayed_tab.toLowerCase()===tab.toLowerCase()}
                   data-sveltekit-noscroll>
                    {tab}
                </a>
            {/each}
        </div>

        <div class="content">
            <slot></slot>
        </div>

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
    .character-page {
        display:flex;
        flex-direction: column;
        margin: 8px;
        flex-basis:100%;
        background-image: repeating-linear-gradient(135deg, #fff8, #fff8 200px, #1118 200px, #1118),
                        repeating-linear-gradient(-160deg, #fff8, #fff8 500px, #1118 500px, #1118);
        background-image: unset;
    }

    .character-content {
        width:95%;
        border: 2px solid #000000;
        margin:auto;
        overflow:auto;
        background-color:#111;
    }

    .character-name {
        display:flex;
        align-items: center;
        flex-direction: column;
        margin: 64px;
    }

    .character-name h2 {
        padding: 0px;
        margin: 0px;
        font-size: 3em;
    }
    .character-name h3 {
        padding: 0px;
        margin: 0px;
        font-size: 2em;
    }

    a {
        all:unset;
        padding: 16px;
        margin: 0;
        min-width:80px;
        font-size: 1.2em;
        color: white;
        text-align: center;
        display:inline-block;
        background-color: #1a1a20;
        border-right:4px solid black;
    }

    .highlighted {
        border-bottom: 4px solid white;
    }

    a:hover {
        background-color: #2a2a40;;
    }

    .tabs {
        width:100%;
        margin:0;
        padding:0;
        display:flex;
        flex-wrap: wrap;
    }

    .content {
        margin: 8px;
        padding:4px;
        border: 2px solid #0c0c0c;
        overflow:auto;
    }

    .highlighted-runes{
        color: lightpink;
        text-shadow: 0 0 4px lightpink;
        white-space: nowrap;
    }

</style>

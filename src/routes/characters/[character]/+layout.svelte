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

            <h3 in:fly={{ delay: 0, duration: 1000, x: 100, opacity: 0.0 }}
                style:--moniker-color={primary_color}>
                {arcana.tarot}
            </h3>
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
        border: 2px solid var(--content-border-color);
        margin:auto;
        overflow:auto;
        background-color: var(--base-content-color);
    }

    .character-name {
        display:flex;
        align-items: center;
        flex-direction: column;
        margin: 64px auto;
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
        color: var(--moniker-color);
    }

    a {
        all:unset;
        padding: 16px 16px;
        margin: 0;
        min-width:80px;
        font-size: 1.2em;
        color: white;
        text-align: center;
        display:inline-block;
        border:none;
    }

    .highlighted {
        border-bottom: 4px solid var(--tab-highlight-color);
    }

    .tabs a:hover {
        background-color: var(--tab-hover-color);
    }

    .tabs {
        width:100%;
        margin:0;
        padding:0;
        display:flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    .content {
        margin: 0 8px 8px 8px;
        padding:4px;
        border: 2px solid var(--content-border-color);
        overflow:auto;
    }

    .highlighted-runes{
        color: white;
        text-shadow: 0 0 4px black;
        white-space: nowrap;
    }

</style>

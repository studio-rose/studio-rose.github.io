<script>
    import {base} from "$app/paths";

    export let data;
    $: ({name, arcana, primary_color, secondary_color} = data.character);
    import { page } from '$app/stores';

    let displayed_tab = "Overview";
    $: (displayed_tab = get_leaf_node());

    function get_leaf_node(){
        const segments = $page.url.pathname.split("/");
        return segments.pop() || segments.pop();
    }

</script>


<div class="character-page">

    <!-- Name, Moniker -->
    <div class="character-name">
        <h2>{name}</h2>
        <hr style="--bar-color: {secondary_color}"/>
        <span>{arcana.tarot}</span>
        <br/>
    </div>

    <div class="character-content">
        <div class="tabs">
            {#each ["Overview", "Trivia", "Gallery"] as tab}
                <a href="{base}/characters/{data.character.id}/{tab.toLowerCase()}" class:highlighted={displayed_tab.toLowerCase()===tab.toLowerCase()}>{tab}</a>
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
    }

    .character-content {
        width:95%;
        border: 2px solid #fff;
        margin:auto;
        overflow:auto;
        background-color:#111;
    }

    .character-name {
        display:flex;
        align-items: center;
        flex-direction: column;
    }

    .character-name h2 {
        padding: 0px;
        margin: 0px;
    }

    .character-name hr {
        width: 50%;
        border:none;
        margin:4px;

        border-bottom: 1px solid var(--bar-color);
        box-shadow: 0 0 4px 0 var(--bar-color);
    }

    :global(p)  {
        color: #dddddd;
        line-height: 1.5rem;
    }

    a {
        all:unset;
        padding: 8px;
        margin: 0;
        min-width:80px;
        min-height: 50px;
        font-size: 1.2em;
        color: white;
        text-align: center;
        display:inline-block;
        background-color: #1a1a20;
        border:none;
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
    }

    .content {
        margin: 8px;
        padding:4px;
        border: 2px solid #fff;
        overflow:auto;
    }

</style>

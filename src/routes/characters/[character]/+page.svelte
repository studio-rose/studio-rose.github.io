<script>
    import RadarChart from "$lib/RadarChart.svelte";
    import CharacterInfoBox from "$lib/CharacterInfoBox.svelte";
    import SvelteMarkdown from 'svelte-markdown';
    import GithubSlugger from 'github-slugger'

    const slugger = new GithubSlugger();
    export let data;
    $: ({attributes, moniker, name, primary_color, secondary_color} = data.character);

    let headers = [];
    function on_markdown_parsed(event) {
        let headings = event.detail.tokens.filter(h => h.type === "heading");
        let new_headers = [];

        for (const h of headings) {
            if (h.depth === 2) {
                h.children = [];
                new_headers.push(h);
            }else if(h.depth === 4){
                new_headers.slice(-1)[0].children.push(h);
            }
        }
        headers = new_headers;
    }

    function normalize_id(str) {
        return slugger.slug(str);
    }

</script>


<div class="character-page">

    <div class="character-content">

        <!-- Name, Moniker -->
        <div class="character-name">
            <h3>{name}</h3>
            <hr style="--bar-color: {secondary_color}"/>
            <span>{moniker}</span>
            <br/>
        </div>

        <div class="table-of-contents">
            <span>Table of Contents</span>
            <br />
            <ul>
                {#each headers as heading}
                    <li>
                        <a href="#{normalize_id(heading.text)}">{heading.text}</a>
                    </li>
                    {#if heading.children.length }
                        <ul>
                            {#each heading.children as child_heading}
                                <li>
                                    <a href="#{normalize_id(child_heading.text)}">{child_heading.text}</a>
                                </li>
                            {/each}
                        </ul>
                    {/if}
                {/each}
            </ul>
        </div>

        <div style:float="right">
            <CharacterInfoBox attribute_data={attributes}
                              primary_color={primary_color}
                              secondary_color={secondary_color}
                              character={data.character} />
        </div>


        {#await import(`$lib/character_markdown/${data.character.markdown_path}.md?raw`) then {default: source}}
            <SvelteMarkdown {source} on:parsed={on_markdown_parsed}/>
            <br/>
        {/await}

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
        margin: auto;
        padding: 8px;
        width:70%;
        border: 1px solid white;
        overflow:auto;
    }

    .table-of-contents {
        border: 1px solid white;
        padding: 8px;
        display: inline-block;
        background-color:#1a1a20;
    }

    .table-of-contents a {
        color:white;
        text-decoration: none;
    }


    .character-page {
        flex-grow: 1;
    }

    .character-name{
        display:flex;
        align-items: center;
        flex-direction: column;
    }

    .character-name h3{
        padding: 0px;
        margin: 0px;
    }

    .character-name hr {
        width: 50%;
        border:none;

        border-bottom: 1px solid var(--bar-color);
        box-shadow: 0 0 4px 0 var(--bar-color);
    }

</style>

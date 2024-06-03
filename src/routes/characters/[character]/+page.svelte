<script>
    import CharacterInfoBox from "$lib/CharacterInfoBox.svelte";
    import {marked} from 'marked';
    import GithubSlugger from 'github-slugger'


    const slugger = new GithubSlugger();
    export let data;
    $: ({name, arcana, primary_color, secondary_color} = data.character);

    let headers = [];

    const walkTokens = (token) => {
        if(token.type === "heading") {
            let header_info = {
                text: token.text,
                depth: token.depth,
                children: []
            }
            if (header_info.depth === 2) {
                headers.push(header_info);
            } else if (token.depth === 4) {
                headers.at(-1).children.push(header_info)
            }
        }
        headers = headers;
    };

    let renderer = new marked.Renderer();
    renderer.heading = function(text, level, raw) {
        let anchor = normalize_id(raw);
        return '<h' + level + ' id="' + anchor + '">' + text + '</h' + level + '>\n';
    };

    function postprocess(html) {
        headers = headers;
        slugger.reset();
        return html;
    }

    function preprocess(markdown) {
        headers = [];
        slugger.reset();
        return markdown;
    }

    marked.setOptions({renderer: renderer});
    marked.use({ walkTokens, async:false, hooks: { preprocess, postprocess }  });

    function normalize_id(str) {
        return slugger.slug(str);
    }

</script>


<div class="character-page">

    <div class="character-markdown">

        <!-- Name, Moniker -->
        <div class="character-name">
            <h2>{name}</h2>
            <hr style="--bar-color: {secondary_color}"/>
            <span>{arcana.tarot}</span>
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

        {#await import(`$lib/character_markdown/${data.character.markdown_path}.md?raw`) then {default: source}}
            {@html marked(source)}
            <!-- <SvelteMarkdown {source} on:parsed={on_markdown_parsed}/> -->
            <br/>
        {/await}

    </div>


    <div class="character-info">
        <CharacterInfoBox primary_color={primary_color}
                          secondary_color={secondary_color}
                          character={data.character} />
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
        margin: 8px;
        flex-basis:100%;
    }

    .character-markdown {
        padding: 8px;
        width:60%;
        border: 1px solid white;
        overflow:auto;
        background-color:black;
    }

    .character-info {
        margin-right:auto;
        margin-left:auto;
    }

    .table-of-contents {
        border: 1px solid white;
        padding: 8px;
        display: inline-block;
        background-color:#1a1a20;
        float:left;
        margin: 16px;
    }

    .table-of-contents a {
        color:white;
        text-decoration: none;
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

    ul {
        list-style-type: "\2B17";
    }
    li::marker{
        color: white;
        padding: 0;
        transition: .3s;
    }
    li:hover::marker {
        color:pink;
    }

    li > a {
        padding-left: 0;
        transition: .4s;
    }

    li:hover > a {
        padding-left: 8px;
    }

</style>

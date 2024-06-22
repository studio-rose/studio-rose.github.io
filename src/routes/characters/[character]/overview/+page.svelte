<script>
    import {marked} from 'marked';
    import {baseUrl} from "marked-base-url";
    import {slug} from "github-slugger";
    import {base} from "$app/paths";
    import {page} from "$app/stores";

    import TableOfContents from "$lib/character_components/TableOfContents.svelte";

    export let data;
    let markdown_path;
    $: (markdown_path = data.character.id);


    let headers = [];

    const walkTokens = (token) => {
        if(token.type === "heading") {
            let header_info = {
                text: token.text,
                href: normalize_id(token.text),
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
        return html;
    }

    function preprocess(markdown) {
        headers = [];
        return markdown;
    }

    marked.setOptions({renderer: renderer});
    marked.use({ walkTokens, async:false, hooks: { preprocess, postprocess }  });
    marked.use(baseUrl($page.url.origin));

    function normalize_id(str) {
        return slug(str);
    }

</script>


<div class="character-markdown">
    <TableOfContents headers={headers} />
    {@html marked(data.markdown.default)}
    <br/>

</div>

<style>
    .character-markdown :global(p)  {
        color: #dddddd;
        line-height: 1.5rem;
        margin-left: 16px;
    }

    .character-markdown :global(h2)  {
        margin-bottom:0;
        border-bottom: 1px solid white;
        overflow: hidden;
    }

    .character-markdown :global(h4)  {
        margin-bottom:0;
        font-weight: bold;
    }
</style>


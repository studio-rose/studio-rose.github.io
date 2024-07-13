<script>
    import {marked} from 'marked';
    import {baseUrl} from "marked-base-url";
    import {slug} from "github-slugger";
    import {page} from "$app/stores";

    import TableOfContents from "$lib/components/TableOfContents.svelte";

    import {CustomColorExt} from "$lib/components/MarkedJSColorExtension.svelte";

    export let markdown_data;

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
        let header = '<h' + level + ' id="' + anchor + '">' + text + '</h' + level + '>\n';
        if(level === 2){
            header += '<hr />';
        }
        return header;
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
    marked.use({extensions: [CustomColorExt]});

    function normalize_id(str) {
        return slug(str);
    }

</script>


<div class="markdown">
    <TableOfContents headers={headers} />
    {@html marked(markdown_data)}
    <br/>

</div>

<style>
    .markdown {
        padding: 32px;
    }

    .markdown :global(p)  {
        color: #dddddd;
        line-height: 1.5rem;
    }

    .markdown :global(h2)  {
        margin-bottom:0;
        font-weight: bold;
        font-size: 1.8rem;
    }

    .markdown :global(h4)  {
        margin-bottom: 0;
        font-weight: bold;
        font-size: 1.2rem;
    }

    .markdown :global(ul)  {
        padding-left: 32px;
        margin: 0px;
    }

    .markdown :global(a:link), :global(a:visited)  {
        color: white;
    }
    .markdown :global(a:hover), :global(a:active)  {
        color: cornflowerblue;
    }
</style>


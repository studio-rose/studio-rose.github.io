<script>
    import { slide } from "svelte/transition";
    import expand_arrow from "$lib/icons/expand-arrow.svg";

    export let headers;

    let toc_expanded = true;
</script>

<div class="table-of-contents">
    <span>Table of Contents</span>
    <button style="float:right; margin-left:100px" on:click={()=>{toc_expanded = !toc_expanded}}>
        <img src={expand_arrow} alt="expand-arrow" class:img-flipped={!toc_expanded}/>
    </button>
    <br />
    {#if toc_expanded}
        <ul transition:slide={{ duration: 300 }}>
            {#each headers as heading}
                <li>
                    <a href="#{heading.href}">{heading.text}</a>
                </li>
                {#if heading.children.length }
                    <ul>
                        {#each heading.children as child_heading}
                            <li>
                                <a href="#{child_heading.href}">{child_heading.text}</a>
                            </li>
                        {/each}
                    </ul>
                {/if}
            {/each}
        </ul>
    {/if}
</div>

<style>
    .table-of-contents {
        border: 1px solid white;
        padding: 8px;
        background-color:#1a1a20;
        float:left;
        margin: 16px;
        margin-right: 32px;
    }

    .table-of-contents a {
        color:white;
        text-decoration: none;
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
    button {
        all:unset;
        width:1.5em;
    }

    img {
        transition: .3s;
    }
    .img-flipped {
        transform: rotate(180deg);
    }
</style>
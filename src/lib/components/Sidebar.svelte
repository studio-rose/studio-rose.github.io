<script>
    import {base} from "$app/paths";
    import {slide, fade} from 'svelte/transition';
    import { display_sidebar, arcana_color } from '$lib/stores.js';

    let character_links = [
        {link: "silver", name: "Silver"},
        {link: "echo", name: "Echo"},
        {link: "narcissus", name: "Narcissus"},
        {link: "pandora", name: "Pandora"},
        {link: "melody", name: "Melody"},
        {link: "horus", name: "Horus"},
        {link: "anubis", name: "Anubis"},
        {link: "kamui", name: "Kamui"},
        {link: "hammurabi", name: "Hammurabi"},
    ];

    let event_links = [
        {link: "n/a", name: "The Shattering of True Dagon"},
        {link: "n/a", name: "The Fall of the Arcana"},
        {link: "n/a", name: "The Emperor's Penance"},
        {link: "n/a", name: "1000 Years of Silence"},
        {link: "n/a", name: "The Awakening"},
        {link: "n/a", name: "Grotto of the Moon"},
        {link: "n/a", name: "Wrath of the Devil"},
        {link: "n/a", name: "The False Magician"},
        {link: "n/a", name: "The Four Towers"},
        {link: "n/a", name: "Judgement"},
        {link: "n/a", name: "Back to the Beginning"},
        {link: "n/a", name: "Eight v. Dagon"},
    ];
</script>


{#if $display_sidebar}
    <button transition:fade={{delay: 0, duration: 100}}
            on:click={()=>{display_sidebar.set(false)}}
            class="modal">

    </button>
    <nav style:--sidebar-arcana-color={$arcana_color} transition:slide={{delay: 0, duration: 400, axis: 'x'}}>
        <ul>
            {#each character_links as link}
                <li><a on:click={()=>{display_sidebar.set(false)}} href="{base}/characters/{link.link}">{link.name}</a></li>
            {/each}
        </ul>

        <!--
        <u>Events</u><br/>
        <ul>
            {#each event_links as link}
                <li><a href="{base}">{link.name}</a></li>
            {/each}
        </ul>
        -->
    </nav>
{/if}

<style>
    nav {
        background-color: var(--sidebar-color);
        padding: 16px;
        padding-top: 100px;
        position: fixed;
        top: 0;
        height: 100vh;
        border-right: 4px solid var(--sidebar-accent-color);
        /* border-right: 4px solid var(--sidebar-arcana-color); */
        font-size: 1.5em;
        width: 300px;
    }

    ul {
        margin: 0;
        padding-left: 16px;
        list-style-type: var(--bullet-icon);

    }

    li > a {
        padding-left: 0;
        transition: .4s;
    }

    li:hover > a {
        padding-left: 8px;
        color: var(--sidebar-accent-color);
    }

    a {
        transition: 0.3s;
        white-space: nowrap;
    }

    a:link, a:visited {
        color: white;
        text-decoration: none;
        display: inline-block;
    }

    .modal {
        all: unset;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: 100vh;
        background-color: rgba(0, 0, 0, .5);
    }

</style>
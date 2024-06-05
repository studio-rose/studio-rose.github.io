<script>
    import { base } from "$app/paths";
    import {slide, fade} from 'svelte/transition';
    let display_sidebar = false;

    let character_links = [
        {link:"silver", name:"Silver"},
        {link:"echo", name:"Echo"},
        {link:"narcissus", name:"Narcissus"},
        {link:"pandora", name:"Pandora"},
        {link:"melody", name:"Melody"},
        {link:"horus", name:"Horus"},
        {link:"anubis", name:"Anubis"},
        {link:"kamui", name:"Kamui"},
        {link:"hammurabi", name:"Hammurabi"},
    ]
</script>


{#if display_sidebar}
    <button transition:fade={{delay: 0, duration: 100}}
         on:click={()=>{display_sidebar = false}}
         class="modal">

    </button>
    <nav transition:slide={{delay: 0, duration: 400, axis: 'x'}}>
        <u>Characters</u><br/>
        <ul>
        {#each character_links as link}
            <li><a href="{base}/characters/{link.link}">{link.name}</a></li>
        {/each}
        </ul>

        <u>Events</u><br/>
        <ul>
            The Shattering of True Dagon <br/>
            The Fall of the Arcana <br/>
            The Emperor's Penance <br/>
            1000 Years of Silence <br/>
            The Awakening <br/>

            Grotto of the Moon <br/>
            Wrath of the Devil <br/>
            The False Magician <br/>
            The Four Towers <br/>
            Judgement <br/>

            Back to the Beginning <br/>
            Eight v. Dagon <br/>

        </ul>
    </nav>
{/if}
    <input type="checkbox" bind:checked={display_sidebar} style="position:fixed; top:0px"/>



<style>
    nav {
        background-color: #444444;
        width: 200px;
        padding:16px;
        position:fixed;
        top:0;
        height:100vh;
        border-right: 4px solid #222222;
    }

    ul {
        margin:0;
        padding-left:16px;
    }

    a {
        transition: 0.3s;
    }

    a:link, a:visited {
        color: white;
        text-align: center;
        text-decoration: none;
        display: inline-block;
    }

    a:hover, a:active {
        background-color: #5e5e6e;
    }

    .modal {
        all:unset;
        position:fixed;
        top:0;
        left:0;
        right:0;
        height:100vh;
        background-color:rgba(0,0,0,.5);
    }

</style>
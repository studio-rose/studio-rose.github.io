<script>
    import { base } from "$app/paths";
    import {slide, fade} from 'svelte/transition';
    let display_sidebar = false;
</script>


{#if display_sidebar}
    <button transition:fade={{delay: 0, duration: 100}}
         on:click={()=>{display_sidebar = false}}
         class="modal">

    </button>
    <nav transition:slide={{delay: 0, duration: 400, axis: 'x'}}>
        <u>Navigation</u>
        <br/>
        <a href="{base}/characters/silver">Silver</a><br/>
        <a href="{base}/characters/echo">Echo</a><br/>
        <a href="{base}/characters/narcissus">Narcissus</a><br/>
        <a href="{base}/characters/pandora">Pandora</a><br/>
        <a href="{base}/characters/melody">Melody</a><br/>
        <a href="{base}/characters/horus">Horus</a><br/>
        <a href="{base}/characters/anubis">Anubis</a><br/>
        <a href="{base}/characters/kamui">Kamui</a><br/>
        <a href="{base}/characters/hammurabi">Hammurabi</a><br/>
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
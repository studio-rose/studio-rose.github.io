<script>
    import { base } from "$app/paths";
</script>

<nav>
    Navigation
    <br/>
    <a href="{base}/characters/melody">Melody</a><br/>
    <a href="{base}/characters/pandora">Pandora</a><br/>
    <a href="{base}/characters/anubis">Anubis</a><br/>
</nav>

<style>
    nav {
        padding: 16px;
        background-color: #444444;
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

</style>
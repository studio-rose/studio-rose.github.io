<script>
    import { base } from "$app/paths";
</script>

<nav>
    Navigation
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
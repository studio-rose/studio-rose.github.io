<script>
    import logo from '$lib/icons/icon.svg'
    import icon_email from '$lib/icons/email.svg'
    import icon_reddit from '$lib/icons/reddit.svg'
    import icon_twitter from '$lib/icons/twitter.svg'
</script>

<header class>
    <div class="content">
        <img src={logo} alt="logo"/>
        <span>Team Eos and Astraeus</span>

        <img src={icon_email} alt="email" class="icon right-align"/>
        <img src={icon_reddit} alt="reddit" class="icon"/>
        <img src={icon_twitter} alt="twitter" class="icon"/>
    </div>
</header>

<style>
    div {
        display: flex;
        align-items: center;
    }

    .content {
        width:100%;
        background-color: var(--main-color-3);
    }

    img {
        padding: 4px;
        image-rendering: pixelated;
    }

    span {
        font-weight: bold;
        font-size: 1.5em;
        text-shadow: 0 0 4px black, 0 0 4px black, 0 0 4px black, 0 0 4px black;
    }

    header {
        border-top: 2px solid grey;
    }
    /*
    header::after {
        content: "";
        background: linear-gradient(var(--main-color-3), #000000aa);
        width: 100%;
        height: 4px;
        position: absolute;
    }
     */

    .right-align {
        margin-left: auto;
    }

    .icon {
        height:16px;
    }
</style>

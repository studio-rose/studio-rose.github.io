<script>
    import logo from '$lib/images/echo.png'
    import icon_email from '$lib/icons/email.svg'
    import icon_reddit from '$lib/icons/reddit.svg'
    import icon_twitter from '$lib/icons/twitter.svg'
</script>

<header class>
    <div class="content">
        <img src={logo} alt="logo"/>
        <span>Eos and Astraeus (Name TBD) Studio</span>

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
        padding: 8px;
        image-rendering: pixelated;
    }

    header {
        border-top: 2px solid cornflowerblue;
    }
    header::after {
        content: "";
        background: linear-gradient(var(--main-color-3), #000000aa);
        width: 100%;
        height: 4px;
        position: absolute;
    }

    .right-align {
        margin-left: auto;
    }

    .icon {
        height:16px;
    }
</style>

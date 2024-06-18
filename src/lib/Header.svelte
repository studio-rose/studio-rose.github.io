<script>
    import logo from '$lib/icons/icon.svg'
    import icon_menu from '$lib/icons/menu.svg'
    import icon_email from '$lib/icons/email.svg'
    import icon_reddit from '$lib/icons/reddit.svg'
    import icon_twitter from '$lib/icons/twitter.svg'
    import { display_sidebar } from '$lib/stores.js';
</script>

<header class>
    <div class="content">
        <button on:click={()=>{display_sidebar.set(true)}}>
            <img class="menu-icon" src={icon_menu} alt="menu"/>
        </button>

        <img class="logo" src={logo} alt="logo"/>
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
        position:relative;
    }

    .menu-icon {
        height: 64px;
        padding-right: 64px;
    }


    span {
        font-weight: bold;
        font-size: 1.5em;
    }

    header {
        border-top: 2px solid grey;
        border:none;
        /*position:fixed;*/
        top:0;
        left:0;
        right:0;
    }

    .right-align {
        margin-left: auto;
    }

    .icon {
        height:16px;
    }

    button {
        all: unset;
    }
</style>

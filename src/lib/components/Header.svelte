<script>
    import StudioLogo from '$lib/icons/studio-logo.svelte'
    import Icon_menu from '$lib/icons/menu.svelte'
    import icon_email from '$lib/icons/email.svg'
    import icon_reddit from '$lib/icons/reddit.svg'
    import icon_twitter from '$lib/icons/twitter.svg'
    import {arcana_color, display_sidebar} from '$lib/stores.js';

    let condition = false;
</script>

<header class>
    <div class="content">
        <button class="menu-icon-top" on:click={()=>{display_sidebar.set(!$display_sidebar);}}>
            <Icon_menu class="menu-icon" condition={$display_sidebar} />
        </button>


        <span>Studio Eos & Astraeus</span>
        <div class="spacer"></div>
        <StudioLogo --center-icon-color={$arcana_color} />

        <!--
        <div class="icon right-align">
            <img src={icon_email} alt="email"/>
        </div>

        <div class="icon">
            <img src={icon_reddit} alt="reddit" />
        </div>

        <div class="icon">
            <img src={icon_twitter} alt="twitter"/>
        </div>
        -->
    </div>
</header>

<style>
    .content {
        display: flex;
        align-items: center;
        width: 100%;
        height: 100%;
        background-color: var(--header-color);
        position: relative;
        padding: 8px;
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
        height: 100px;
    }

    button {
        all: unset;
        height: 32px;
        padding: 8px;
    }

    .menu-icon-top{
        z-index: 100;
    }

    .spacer{
        flex-grow: 1;
    }


</style>

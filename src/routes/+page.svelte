<script>

    import {base} from "$app/paths";

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

    let relic_links = [
        {link: "n/a", name: "The Book"},
        {link: "n/a", name: "The Bow"},
        {link: "n/a", name: "The Key"},
        {link: "n/a", name: "The Spear"},
        {link: "n/a", name: "The Robes"},
        {link: "n/a", name: "The Lovers"},
        {link: "n/a", name: "The Dash"},
        {link: "n/a", name: "The Gavel"},
        {link: "n/a", name: "The Map"},
        /*
        {link: "n/a", name: "The Roulette"},
        {link: "n/a", name: "The Hammer"},
        {link: "n/a", name: "The Noose"},
        {link: "n/a", name: "The Scythe"},
        {link: "n/a", name: "The Grail"},
        {link: "n/a", name: "The Weapon"},
        {link: "n/a", name: "The Chalice"},
        {link: "n/a", name: "The Flower"},
        {link: "n/a", name: "The Mirror"},
        {link: "n/a", name: "The Aegis"},
        {link: "n/a", name: "The Scales"},
        {link: "n/a", name: "Eos and Astraeus"}
        */
    ];

</script>


<div class="main-content">
    <div class="tee-title">The Echo Effect</div>
    <div> Explore the world of Magic, uncover the mystery of the Arcana, and break the Curse </div>
    <div> <i>"In a time long past, the Knight promised he would return"</i> </div>

    <div class="spacer"></div>

    <div class="sections">
        <fieldset class="section">
            <legend>Characters</legend>
            <ul>
                {#each character_links as link}
                    <li><a href="{base}/characters/{link.link}">{link.name}</a></li>
                {/each}
            </ul>
        </fieldset>

        <fieldset class="section">
            <legend>Events</legend>

            <ul>
                {#each event_links as link}
                    <li><a href="{base}/">{link.name}</a></li>
                {/each}
            </ul>

        </fieldset>


        <fieldset class="section">
            <legend>Relics</legend>

            <ul>
                {#each relic_links as link}
                    <li><a href="{base}/">{link.name}</a></li>
                {/each}
            </ul>
        </fieldset>
    </div>

    <div class="spacer"></div>
</div>


<style>
    .main-content {
        width:100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .tee-title {
        font-family: "Ikaros", serif;
        font-size: 3em;
        margin: 64px 0 32px 0;
        color: var(--title-color);
    }

    .spacer{
        margin: 32px;
    }

    .sections {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }

    .section {
        width: 200px;
        height: 400px;
        border: 2px solid white;
        margin: 8px;
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
</style>
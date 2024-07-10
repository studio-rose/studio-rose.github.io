<script>
    import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import Sidebar from "$lib/components/Sidebar.svelte";
</script>

<div class="all">
    <Header />

    <div class="sidebar-container">
        <Sidebar/>
        <slot />
    </div>

    <Footer />
</div>

<style>
    .all {
        background-color: var(--base-color);
    }
    .sidebar-container {
        display:flex;
        flex-direction: row;
    }

    :global(:root){
        --background-color: #1C1C1C;
        --header-color: #303030;
        --footer-color: #303030;

        --base-content-color: #303030;
        --content-border-color: #858585;

        --tab-hover-color: #404040;
        --tab-highlight-color: white;

        --toc-background-color: #303030;
        --toc-border-color: #858585;
        --toc-marker-color: white;

        --sidebar-color: #1C1C1C;
        --sidebar-accent-color: #A0A0F0;

        --trivia-background-color: #303030;
        --trivia-accent-color: #858585;
        --trivia-border-color: #858585;

        --radar-button-color: #404040;
        --radar-button-border-color: #858585;

        --bullet-icon: "\2B17  ";

        --title-color: #A0A0F0;
    }

</style>
<script>
    import Header from "$lib/Header.svelte";
    import Footer from "$lib/Footer.svelte";
    import Sidebar from "$lib/Sidebar.svelte";
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
        background-color: #0c0c0c;
    }
    .sidebar-container {
        display:flex;
        flex-direction: row;
    }
</style>
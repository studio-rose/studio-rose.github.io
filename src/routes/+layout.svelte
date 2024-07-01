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
        background-color: #0c0c0c;
    }
    .sidebar-container {
        display:flex;
        flex-direction: row;
    }
</style>
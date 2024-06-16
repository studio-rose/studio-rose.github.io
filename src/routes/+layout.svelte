<script>
    import Header from "$lib/Header.svelte";
    import Footer from "$lib/Footer.svelte";
    import Sidebar from "$lib/Sidebar.svelte";
</script>

<Header />

<div class="sidebar-container">
    <Sidebar/>
    <slot />
</div>

<Footer />


<style>
    .sidebar-container {
        display:flex;
        flex-direction: row;
    }
</style>
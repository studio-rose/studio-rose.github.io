<script>
    import Sidebar from "$lib/Sidebar.svelte";
</script>

<div class="flex-container">
    <Sidebar/>
    <slot />
</div>


<style>
    .flex-container {
        display:flex;
        flex-direction: row;
    }
</style>
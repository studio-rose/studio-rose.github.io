<script>
    import SimpleMarkdownLayout from "$lib/character_components/SimpleMarkdownLayout.svelte";

    export let data;
</script>


<SimpleMarkdownLayout markdown_data={data.history} />

<style>

</style>

<script>
    export let data;

</script>

<div class="container">
    {#each Object.values(data.image_data) as entry}
    <div class="image">
        <img src={entry.default} alt="Alt" />
    </div>
    {/each}
</div>

<style>
    .container {
        margin: 8px;
        display:flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 16px;
    }

    .image {
        width:200px;
        height: 200px;
        border:4px solid white;
        display:flex;
        justify-content: center;
    }
    img {
        image-rendering: pixelated;
    }

</style>
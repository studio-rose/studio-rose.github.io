<script>
    import RadarChart from "$lib/RadarChart.svelte";

    export let attribute_data = [];
    export let primary_color;
    export let secondary_color;

</script>


<div class="content">
    <div class="radar">
        <RadarChart attribute_data={attribute_data}
                    primary_color={primary_color}
                    secondary_color={secondary_color} />
    </div>
</div>

<style>
    .content {
        width: 200px;
        height: 400px;
        border: 1px solid white;
    }

    .radar {
        width:50%;
    }
</style>
<script>
    import { Radar } from 'svelte-chartjs';

    import {
        Chart as ChartJS,
        Title,
        Tooltip,
        Legend,
        PointElement,
        RadialLinearScale,
        LineElement,
        Filler
    } from 'chart.js';

    ChartJS.register(
        Title,
        Tooltip,
        Legend,
        PointElement,
        RadialLinearScale,
        LineElement,
        Filler
    );
    export let attribute_data;
    export let primary_color;
    export let secondary_color;

    let radar_data = {};

    const options = {
        responsive: true,
        scales: {
            r: {
                suggestedMin: 0,
                suggestedMax: 5,
                ticks: {
                    stepSize: 1,
                    display: false
                },
                grid: {
                    color: "#ffffffff"
                },
                pointLabels: {
                    color: 'white'
                }
            },
        },
        plugins: {
            legend: {
                display: false
            }
        },
        elements: {
            line: {
                borderWidth: 1.0
            }
        },
        fill:true,
    };

    $: (radar_data = {
        labels: attribute_data.keys,
        datasets: [
            {
                lineWidth: 4.0,
                backgroundColor: primary_color,
                borderColor: "#ffffffff",
                pointBackgroundColor: secondary_color,
                data: attribute_data.values,

            }
        ],
    });

</script>

<div class="radar-container">
    <Radar data={radar_data} options={options} />
    <div class="description">Base Form: Melody's default state is extremely weak physically, but makes up for the difference in constitution and magic power</div>
</div>

<style>
    .radar-container{
        width:60%;
        margin:auto;
    }
    .description {
        width:100%;
    }
</style>

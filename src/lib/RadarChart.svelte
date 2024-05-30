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

<Radar data={radar_data} options={options} />


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
    export let primary_color;
    export let traits = [];
    export let values = [];

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
        labels: traits,
        datasets: [
            {
                lineWidth: 4.0,
                backgroundColor: primary_color,
                borderColor: "#ffffffff",
                pointBackgroundColor: primary_color,
                data: values,

            }
        ],
    });

</script>

<Radar data={radar_data} options={options} />


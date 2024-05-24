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

    let options = {
        responsive: true,
        scales: {
            r: {
                suggestedMin: 0,
                suggestedMax: 5,
                ticks: {
                    stepSize: 1,
                    display: false
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

    let radar_data = {
        labels: [
            'STR', 'AGI', 'DEX', 'INT', 'WIS', 'ARC',
        ],
        datasets: [
            {
                lineWidth: 4.0,
                backgroundColor: primary_color,
                borderColor: secondary_color,
                pointBackgroundColor: secondary_color,
                data: attribute_data,
            }
        ],
    };

</script>

<Radar data={radar_data} options={options} />


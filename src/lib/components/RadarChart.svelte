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

    const tier_mapping = {
        0: "E",
        0.5: "E+",
        1: "D",
        1.5: "D+",
        2: "C",
        2.5: "C+",
        3: "B",
        3.5: "B+",
        4: "A",
        4.5: "A+",
        5: "S",
        5.5: "S+",
        6: "S++"
    }

    let data_points = [];
    $: data_points = values;
    $: {radar_data.datasets[0].data = values;}

    const options = {
        responsive: true,
        scales: {
            r: {
                suggestedMin: 0,
                suggestedMax: 6,
                ticks: {
                    stepSize: 1,
                    display: false,
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
            },
            tooltip: {
                callbacks: {
                    label: function(context){
                        return tier_mapping[context.parsed.r];
                    }
                },
                bodyAlign: 'center',
                displayColors: false,
            }
        },
        elements: {
            line: {
                borderWidth: 1.0
            }
        },
        fill:true,
    };

    radar_data = {
        labels: traits,
        datasets: [
            {
                lineWidth: 4.0,
                backgroundColor: primary_color,
                borderColor: "#ffffffff",
                pointBackgroundColor: primary_color,
                pointRadius: 6,
                pointHitRadius: 6,
                pointHoverRadius: 8,
                data: data_points,

            }
        ],
    };

</script>

<Radar data={radar_data} options={options} />


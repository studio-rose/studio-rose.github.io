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
    export let primary_color = "#ffffffaa";
    export let traits = [];
    export let values = [];


    let radar_data = {};

    const number_to_tier_mapping = new Map(Object.entries({
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
    }));

    const tier_to_number_mapping  = new Map(Array.from(number_to_tier_mapping, a => [...a].reverse()));

    $: data_points = map_tiers_to_numbers(values);
    $: radar_data.datasets[0].data = map_tiers_to_numbers(values);

    function map_tiers_to_numbers(v){
        return v.map(t => Number(tier_to_number_mapping.get(t)));
    }

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
                        console.log(context.parsed.r);
                        return number_to_tier_mapping.get(context.parsed.r.toString());
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


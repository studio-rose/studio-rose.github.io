<script>
    export let label = "N/A";
    export const page_link = "N/A";
    function generate_hexagon(height, center){
        let ret = "";
        let pi_over_3 = Math.PI / 3;
        for(let i = 0; i < 6; i++){
            let angle = i * pi_over_3;
            let x_coordinate = center[0] + Math.sin(angle) * height;
            let y_coordinate = center[1] + Math.cos(angle) * height;
            ret += x_coordinate.toFixed(2) + " " + y_coordinate.toFixed(2) + " ";
        }
        return ret;
    }
</script>

<svg viewbox="0 0 100 100">
    <polygon class="outer-hexagon" points={generate_hexagon(50, [50, 50])}></polygon>
    <polygon class="inner-hexagon" points={generate_hexagon(45, [50, 50])}></polygon>
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">{label}</text>
</svg>


<style>
    svg {
        transition: 1.0s;
    }
    svg:hover {
        filter: drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.5));
    }

    text {
        fill: black;
    }

    .outer-hexagon {
        transition: 1.0s;
        color: #1a1a20;
        transform-origin: 50% 50%;
    }

    .inner-hexagon {
        transition: 1.0s;
        fill:#fcdf;
        transform-origin: 50% 50%;
        scale: 1;
    }

    svg:hover .outer-hexagon {
        transform: rotate(180deg);
    }

    svg:hover .inner-hexagon {
        transform: rotate(180deg);
        fill:cornflowerblue;
        scale: 1;
    }


</style>
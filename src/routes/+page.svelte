<script>
    import {base} from "$app/paths";


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

<h2>Arcana</h2>
<div>
    <a href="{base}/characters/silver">Silver</a><br/>
    <a href="{base}/characters/echo">Echo</a><br/>
    <a href="{base}/characters/narcissus">Narcissus</a><br/>
    <a href="{base}/characters/pandora">Pandora</a><br/>
    <a href="{base}/characters/melody">Melody</a><br/>
    <a href="{base}/characters/horus">Horus</a><br/>
    <a href="{base}/characters/anubis">Anubis</a><br/>
    <a href="{base}/characters/kamui">Kamui</a><br/>
    <a href="{base}/characters/hammurabi">Hammurabi</a><br/>
</div>

<svg width="87" height="100" viewbox="0 0 87 100">
    <polygon fill="currentColor" points={generate_hexagon(50, [44, 50])}></polygon>
    <polygon class="test-path" fill="#000" points={generate_hexagon(45, [44, 50])}></polygon>
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">Attributes</text>
</svg>


<hr/>

<style>
    svg {
        height:100px;
        width:100px;
        filter: drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.5));
    }
    svg polygon {
        transition: 1.0s;
        color: #aaaaaaff;
        transform-origin: 50% 50%;
    }
    svg:hover polygon {
        transform: rotate(180deg);
        color: #0004;
    }

    .test-path{
        fill:#fcd;
        scale: 0;
    }

    svg:hover .test-path {
        fill:#fcd;
        scale: 100%;
    }


</style>

<!--
<h2>Relics</h2>
<div>
    <a href="{base}/relics#bow">Bow</a><br/>
</div>


<hr/>

<h2>Chronology</h2>
<div>
    <a href="{base}/timeline/the-fall">The Fall</a><br/>
    <a href="{base}/timeline/cycle-1">Cycle 1</a><br/>
</div>
-->
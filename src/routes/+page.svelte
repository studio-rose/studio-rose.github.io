<script>
    import {base} from "$app/paths";
    import Hexagon from "$lib/Hexagon.svelte";


    function generate_hexagon(height, center){
        let ret = "";
        let pi_over_3 = Math.PI / 3;
        for(let i = 0; i < 6; i++){
            let angle = i * pi_over_3;
            let x_coordinate = center[0] + Math.cos(angle) * height;
            let y_coordinate = center[1] + Math.sin(angle) * height;
            ret += x_coordinate.toFixed(2) + " " + y_coordinate.toFixed(2) + " ";
        }
        return ret;
    }


</script>

<!--h2>Arcana</h2>
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
</div -->




<div class="container">
    <style>
        .hexagon-holder {
            display:flex;
            flex-flow: column nowrap;
            justify-content: center;
            border:0px solid white;
            max-width:50%;
            margin: 8px auto;
            aspect-ratio: 1;
            position:relative;
        }
        .hexagon-row {
            border:0px solid red;
            display: flex;
            justify-content: center;
            flex-shrink: 0;
            width: 100%;
            height: 30%;
            margin: 0px 0px;
        }
        .hexagon {
            border:0px solid blue;
            width:30%;
            aspect-ratio: 1;
            flex-shrink: 0;
            margin: 0px 10px;
            z-index:1;
        }
        .hex {
            padding:20%;

        }
        .centered {
            text-align: center;
            margin: auto;
        }
    </style>
    <div class="hexagon-holder">

        <div style="width:100%;height:100%;position:absolute;  width:83%; height:83%; left: 50%; top:50%; transform: translate(-50%, -50%);">
            <svg viewbox="0 0 104 104" style="position:relative;filter: drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.5)); transform-origin: 52 52; transform: rotate(90deg);" >
                <polygon fill="#0000" stroke="black" stroke-width="2px" points={generate_hexagon(50, [52, 52])}></polygon>
            </svg>
        </div>

        <div style="width:100%;height:100%;position:absolute;  width:80%; height:80%; left: 50%; top:50%; transform: translate(-50%, -50%);">
            <svg viewbox="0 0 104 104" style="position:relative;" >
                <polygon fill="#0000" stroke="black" stroke-width="2px" points={generate_hexagon(50, [52, 52])}></polygon>
            </svg>
        </div>

        <div class="hexagon-row">
            <div class="hexagon"><div class="hex"><Hexagon label="Overview"/></div></div>
            <div class="hexagon"><div class="hex"><Hexagon label="Abilities"/></div></div>
        </div>
        <div class="hexagon-row">
            <div class="hexagon"><div class="hex"><Hexagon label="History"/></div></div>
            <div class="hexagon" style="display:flex">
                <div class="centered">
                    Melody
                    <hr/>
                </div>
            </div>
            <div class="hexagon"><div class="hex"><Hexagon label="Gallery"/></div></div>
        </div>
        <div class="hexagon-row">
            <div class="hexagon"><div class="hex"><Hexagon label="Trivia"/></div></div>
            <div class="hexagon"><div class="hex"><Hexagon label="Attributes"/></div></div>
        </div>
    </div>
</div>





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
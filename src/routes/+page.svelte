<script>
    import {base} from "$app/paths";
    import Hexagon from "$lib/Hexagon.svelte";



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
            border:1px solid white;
            width: 40%;
            margin: 8px;
            aspect-ratio: 1;
        }
        .hexagon-row {
            border:0px solid red;
            display: flex;
            justify-content: center;
            flex-shrink: 0;
            width: 100%;
            height: 30%;
            margin: 8px 0px;
        }
        .hexagon {
            border:0px solid blue;
            width:30%;
            aspect-ratio: 1;
            flex-shrink: 0;
            margin: 0px 8px;
        }
        .hex {
            padding:0%;
        }
        .centered {
            text-align: center;
            margin: auto;
        }
    </style>
    <div class="hexagon-holder">
        <div class="hexagon-row">
            <div class="hexagon"><div class="hex"><Hexagon label="Overview"/></div></div>
            <div class="hexagon"><div class="hex"><Hexagon label="Abilities"/></div></div>
        </div>
        <div class="hexagon-row">
            <div class="hexagon"><div class="hex"><Hexagon label="History"/></div></div>
            <div class="hexagon" style="display:flex">
                <div class="centered">
                    <span>Melody</span>
                    <hr/>
                    The Magician</div>
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
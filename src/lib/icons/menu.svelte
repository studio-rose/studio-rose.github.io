<script>
    export let condition = false;
</script>

<svg style="height: 100%" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" class="svg">
    <g fill="#000">
        <rect height="2" rx=".95" width="18" x="0" y="8" class:middle={condition} class="transformable"/>
        <rect height="2" rx=".95" width="18" x="0" y="13"  class:bottom={condition}  class="transformable"/>
        <rect height="2" rx=".95" width="18" x="0" y="3"  class:top={condition}  class="transformable"/>
    </g>
</svg>

<style>
    .transformable {
        fill: white;
        transition: .3s;
        transform-box: content-box;
        transform-origin: center;
    }
    .middle {
        transform-box: content-box;
        transform-origin: center;
        transform: rotate(90deg);
    }

    .top {
        transform-box: content-box;
        transform-origin: center;
        transform: translateY(5px) rotate(-30deg);
    }
    .bottom {
        transform-box: content-box;
        transform-origin: center;
        transform: translateY(-5px) rotate(30deg);
    }

</style>
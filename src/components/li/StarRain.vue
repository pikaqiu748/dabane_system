<!--流星雨-->
<template>
  <div>
    <div class="stars" v-for="item in 2" :key="item">
      <div class="star" v-for="star in 30" :key="`${star}star`"></div>
      <div class="shooting" v-for="shoot in 250" :key="`${shoot}shoot`"></div>
    </div>
  </div>
</template>


<script>
export default {
  name: "StarRain"
}
</script>


<style scoped lang='scss' >
// .window {
//     position: absolute;
//     width: 100%;
//     height: 100%;
//     // background: linear-gradient(-45deg, #0a1433 0%, #222b3f 100%);
//     overflow: hidden;
//     z-index: 0;
// }

.star {
    position: absolute;
    width: 2px;
    height: 2px;

    @for $i from 1 through 250 {
        $light: random(255);
        &:nth-child(#{$i}) {
            top: random(100) + 0%;
            left: random(100) + 0%;
            background: rgb($light, $light, $light);
        }
    }
}

.stars {
    position: absolute;
    width: 100%;
    height: 100%;
    animation: slide 30000ms linear infinite;

    &:nth-child(2) {
        left: 100%;
    }
}

.shooting {
    position: absolute;
    width: 50px;
    height: 1px;
    background: linear-gradient(90deg, rgba(#fff, 1), rgba(#fff, 0));
    background: linear-gradient(90deg, rgba(#0093e9, 1) 0%, rgba(#80d0c7, 0) 100%);
    opacity: 0;
    animation: shooting 5000ms linear infinite;

    @for $i from 1 through 50 {
        &:nth-child(#{$i}) {
            top: random(100) + 0%;
            left: random(100) + 0%;
            animation-delay: random(9999) * 1ms;
        }
    }
}

@keyframes shooting {
    0% {
        opacity: 0;
        transform: rotateZ(-30deg) translateX(0) scaleX(0);
    }

    25% {
        opacity: 1;
        transform: rotateZ(-30deg) transalteX(-200%) scaleX(1);
    }

    50% {
        opacity: 0;
        transform: rotateZ(-30deg) translateX(-400%) scaleX(2);
    }

    100% {
        opacity: 0;
        transform: rotateZ(-30deg) translateX(-400%) scaleX(2);
    }
}

@keyframes slide {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(-100%);
    }
}
</style>

  

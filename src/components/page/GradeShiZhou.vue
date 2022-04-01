<template>
  <div class="display">
    <div class="gradeline01">
      <grade-line-01 />
    </div>
    <div class="gradeline02">
      <grade-line-02 />
    </div>
    <div class="gradeline03">
      <grade-line-03 />
    </div>
    <div class="gradeline04">
      <grade-line-04 />
    </div>
    <div class="gradeline05">
      <grade-line-05 />
    </div>
    <div class="gradeline06">
      <grade-line-06 />
    </div>
  </div>
</template>
<script>
import GradeLine01 from '../guo/GradeLine01.vue'
import GradeLine02 from '../guo/GradeLine02.vue'
import GradeLine03 from '../guo/GradeLine03.vue'
import GradeLine04 from '../guo/GradeLine04.vue'
import GradeLine05 from '../guo/GradeLine05.vue'
import GradeLine06 from '../guo/GradeLine06.vue'
export default {
  name: "GradeShiZhou",
  components: {
    GradeLine01,
    GradeLine02,
    GradeLine03,
    GradeLine04,
    GradeLine05,
    GradeLine06
  },
}
</script>
<style lang="scss" scoped>
.display {
    width: 100%;
    height: 100%;
    position: absolute;
    overflow: hidden;
    overflow-y: auto;
    background-color: #506587;
}
.gradeline01 {
    margin-top: 10px;
    margin-bottom: 10px;
}
.gradeline02 {
    margin-bottom: 10px;
}
.gradeline03 {
    margin-bottom: 10px;
}
.gradeline04 {
    margin-bottom: 10px;
}
.gradeline05 {
    margin-bottom: 10px;
}
.gradeline06 {
    margin-bottom: 10px;
}
</style>
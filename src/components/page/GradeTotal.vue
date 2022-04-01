<template>
  <div class="bgc">
    <div class='display'>
      <grade-pie-01 class="pie01" />
      <grade-pie-02 class="pie02" />
    </div>
    <br />
    <grade-bar-01 /><br />
    <grade-bar-02 />
  </div>
</template>
<script>
import GradePie01 from '../guo/GradePie01.vue';
import GradePie02 from '../guo/GradePie02.vue';
import GradeBar01 from '../guo/GradeBar01.vue';
import GradeBar02 from '../guo/GradeBar02.vue';
export default {
  name: "GradeTotal",
  components: {
    GradePie01,
    GradePie02,
    GradeBar01,
    GradeBar02
  },
}
</script>
<style lang="scss" scoped>
.bgc {
    background-color: #506587;
    width: 96%;
}

.display {
    display: flex;
}

.pie01 {
    width: 50%;
}

.pie02 {
    width: 50%;
    
}
</style>
<template>
  <div class="display">
    <div class="line01"><school-line-01 /></div>
    <div class="line02"><school-line-02 /></div>
    <div class="line03"><school-line-03 /></div>
    <div class="line04"><school-line-04 /></div>
    <div class="line05"><school-line-05 /></div>
    <div class="line06"><school-line-06 /></div>
  </div>
</template>
<script>
import SchoolLine01 from '../guo/SchoolLine01.vue';
import SchoolLine02 from '../guo/SchoolLine02.vue';
import SchoolLine03 from '../guo/SchoolLine03.vue';
import SchoolLine04 from '../guo/SchoolLine04.vue';
import SchoolLine05 from '../guo/SchoolLine05.vue';
import SchoolLine06 from '../guo/SchoolLine06.vue';
export default {
  name: "SchoolShiZhou",
  components: {
    SchoolLine01,
    SchoolLine02,
    SchoolLine03,
    SchoolLine04,
    SchoolLine05,
    SchoolLine06
  },
}
</script>
<style lang="scss" scoped>
.display{
  width: 100%;
  height: 100%;
  position:absolute;
  overflow: hidden;
  overflow-y: auto;
  background-color: #506587;
}
.line01{
  margin-bottom: 10px;
}
.line02{
  margin-bottom: 10px;
}
.line03{
  margin-bottom: 10px;
}
.line04{
  margin-bottom: 10px;
}
.line05{
  margin-bottom: 10px;
}
</style>
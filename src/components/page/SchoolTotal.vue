<template>
  <div class='bgc'>
    <div class="display">
      <school-big-pie-01 class='bigpie' />
      <school-super-big-pie-01 class='superpie' />
    </div>
    <br/>
    <school-big-bar-01 /><br />
    <school-super-big-bar-01 />
  </div>
</template>
<script>
import SchoolBigBar01 from '../guo/SchoolBigBar01.vue';
import SchoolSuperBigBar01 from '../guo/SchoolSuperBigBar01.vue';
import SchoolBigPie01 from '../guo/SchoolBigPie01.vue';
import SchoolSuperBigPie01 from '../guo/SchoolSuperBigPie01.vue';
export default {
  name: "SchoolTotal",
  components: {
    SchoolBigPie01,
    SchoolSuperBigPie01,
    SchoolBigBar01,
    SchoolSuperBigBar01
  },
}
</script>
<style lang="scss" scoped>
.bgc {
    background-color: #506587;
    width:96%
}
.display {
    display: flex;
}
.bigpie {
    width: 50%;
}
.superpie {
    width: 50%;
}
</style>
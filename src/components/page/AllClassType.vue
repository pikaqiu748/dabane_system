<template>
  <div style='background-color:rgba(50,65,87);width:96%'>
    <zhu-zhuang-02 /><br />
    <zhu-zhuang-03 /><br />
    <zhu-zhuang-04 /><br />
    <zhu-zhuang-05 /><br />
    <zhu-zhuang-06 />
    <!-- <di-tu /> -->
  </div>
</template>

<script>
import DiTu from '../li/DiTu.vue'
import ZhuZhuang02 from '../li/ZhuZhuang02.vue'
import ZhuZhuang03 from '../li/ZhuZhuang03.vue'
import ZhuZhuang04 from '../li/ZhuZhuang04.vue'
import ZhuZhuang05 from '../li/ZhuZhuang05.vue'
import ZhuZhuang06 from '../li/ZhuZhuang06.vue'

export default {
  name: "AllClassType",
  components: {
    ZhuZhuang02,
    ZhuZhuang03,
    ZhuZhuang04,
    ZhuZhuang05,
    ZhuZhuang06,
    DiTu,
  },
}

</script>

<style scoped>
.bgp {
    background-image: url('../../assets/img/a5.png');
    opacity: 1;
}

* {
    margin: 0;
    padding: 0;
}
</style>

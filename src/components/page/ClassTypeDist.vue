<template>
  <div style='background-color:rgba(50,65,87);width:96%'>
    <zhu-zhuang /><br />
    <zhu-zhuang-01 /><br />
    <zhexian-01 /><br />
    <zhe-xian /><br />
    <!-- <bian-kuang/><br/> -->
    <zhexian-03 /><br />
    <zhexian-04 /><br />

  </div>
</template>

<script>
import ZheXian from '../li/ZheXian.vue';
import Zhexian01 from '../li/ZheXian01.vue'
import Zhexian03 from '../li/ZheXian03.vue'
import Zhexian04 from '../li/ZheXian04.vue'
import ZhuZhuang from '../li/ZhuZhuang.vue'
import ZhuZhuang01 from '../li/ZhuZhuang01'
import BianKuang from '../li/BianKuang.vue'
export default {
  name: "ClassTypeDist",
  data () {
    return {
      data: {}
    }
  },
  components: {
    ZhuZhuang,
    ZhuZhuang01,
    ZheXian,
    Zhexian01,
    Zhexian03,
    Zhexian04,
    BianKuang
  },
  methods: {

  },
  created () {

  }
}

</script>

<style scoped>
.bgp {
    background-image: url('../../assets/img/a5.png');
    opacity: 1;
}
/* * {
    margin: 0;
    padding: 0;
} */
.display {
    display: flex;
    flex-wrap: wrap;
    /* gap: 20px 5px; */
}
.img {
    background-image: url('../../assets/img/bg-1.png');
}
</style>

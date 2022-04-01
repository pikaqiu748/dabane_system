<template>
  <div>
    <zhexian_1></zhexian_1>
    <zhexian_2></zhexian_2>
  </div>
</template>

<script>
// import ToSchoolYearshizhou from '../Enda/ToSchoolYearshizhou.vue'
// import ToSchoolYearzhengti from '../Enda/ToSchoolYearzhengti.vue'
import zhexian_1 from '../Enda/ZhuZhuangALL'
import zhexian_2 from '../Enda/ZhuZhuangALL01'

export default {
  name: "ToSchoolYearzhengti",
  data () {
    return {
      data: {}
    }
  },

  components: {
    zhexian_1,
    zhexian_2,
    
  },

  methods: {

  },
  created () {

  }
}

</script>

<style scoped>
.bgp {
    background-image: url('../../assets/img/a16.png');
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

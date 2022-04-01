<template>
  <div id="china_map" :style="{ width: width, height: '400px' }"></div>
</template>

<script>
import echarts from "echarts";
import 'echarts/node_modules/zrender/lib/'
import "../../../node_modules/echarts/map/js/china.js"; // 引入中国地图数据
import '../../../node_modules/echarts/'
export default {
  name: "HuiBei"
}
</script>

<style scoped>
</style>
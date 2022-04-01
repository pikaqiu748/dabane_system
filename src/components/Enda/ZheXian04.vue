<template>
  <div id="zhexian04" style="width: 100%;height: 330px;"></div>
</template>

<script>
const echarts = require("echarts")

import 'echarts/theme/blue.js'
export default {
  name: "ClassTypeDist",
  data () {
    return {
      superpuxiao2019: [51, 80, 54, 84, 408, 0, 508, 24, 178, 64, 55, 14, 378, 12, 13, 121, 339],
      superpuxiao2018: [909, 243, 342, 706, 887, 0, 1118, 15, 379, 115, 184, 128, 829, 80, 399, 255, 1388],
    }
  },
  methods: {
    getEchart () {

      let myChart = echarts.init(document.getElementById('zhexian04'), 'dark');
      let itemStyle = {
        normal: {
          label: {
            show: true, //开启显示
            position: 'top', //在上方显示
            textStyle: { //数值样式
              color: 'pink',
              fontSize: 11
            }
          },
        }
      }
      let option = {
        title: {
          text: '超大班额班级类型分布',
          subtext: '普通小学班'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          x: 'right',
          data: ['2020', '2019', '2018']
        },
        toolbox: {
          show: true,
          orient: 'vertical',
          y: 'center',
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true }
          },
        },
        calculable: true,
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: ["咸宁", "仙桃", "十堰", "荆州", "孝感", "神农架", "恩施州", "鄂州", "武汉", "潜江", "荆门", "天门", "黄冈", "宜昌", "黄石", "随州", "襄阳"],
            axisLabel: {
              interval: 0
            }
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '2020',
            type: 'line',
            // stack: '总量',
            data: [4, 110, 70, 66, 460, 0, 490, 32, 144, 50, 32, 10, 400, 0, 6, 137, 362],
            itemStyle: itemStyle,

          },
          {
            name: '2019',
            type: 'line',
            // stack: '总量',
            data: this.superpuxiao2019,
            itemStyle: itemStyle

          },
          {
            name: '2018',
            type: 'line',
            // stack: '总量',
            data: this.superpuxiao2018,
            itemStyle: itemStyle

          },

        ]
      };

      myChart.setOption(option, true);
    }
  },
  mounted () {
    this.getEchart()
  }
}

</script>


<style scoped>
</style>

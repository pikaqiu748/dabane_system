<template>
  <div id="zhexian_121" style="width: 100%;height: 330px;"></div>
</template>

<script>
const echarts = require("echarts")

import 'echarts/theme/blue.js'
export default {
  name: "ToSchoolYearshizhou",
  data () {
    return {
      bigpuxiao2019: [599, 261, 744, 717, 720, 1, 616, 34, 1068, 127, 334, 90, 1066, 321, 231, 253, 931],
      bigpuxiao2018: [706, 405, 1173, 1220, 946, 1, 842, 28, 1641, 192, 538, 265, 1466, 517, 715, 638, 1388],
    }
  },
  methods: {
    getEchart () {

      let myChart = echarts.init(document.getElementById('zhexian_121'), 'dark');
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
          text: '超大班额入学年份市州分布',
          subtext: '近三年情况'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          x: 'right',
          data: ['2020|小学', '2020|初中','2019|小学','2019|初中','2018|小学', '2018|初中']
          //data: ['2020|小学', '2020|初中','2019|小学','2019|初中','2018|小学', '2018|初中']
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
            name: '2020|小学',
            type: 'line',
            // stack: '总量',
            data: [1600, 300, 800, 400, 900, 0, 700, 40, 1000, 100, 200, 50, 1400, 20, 100, 30, 100],
            itemStyle: itemStyle
          },
          {
            name: '2020|初中',
            type: 'line',
            // stack: '总量',
            data: [100, 300, 800, 400, 900, 0, 700, 40, 1000, 100, 200, 50, 1400, 20, 100, 30, 100],
            itemStyle: itemStyle
          },
          
          {
            name: '2019|小学',
            type: 'line',
            // stack: '总量',
            data: [497, 399, 883, 500, 969, 0, 702, 45, 1156, 151, 280, 57, 1445, 262, 182, 339, 1041],
            itemStyle: itemStyle
          },
          {
            name: '2019|初中',
            type: 'line',
            // stack: '总量',
            data: [897, 499, 983, 600, 1069, 0, 902, 25, 1016, 251, 380, 67, 1645, 362, 282, 239, 899],
            itemStyle: itemStyle
          },
          {
            name: '2018|小学',
            type: 'line',
            // stack: '总量',
            data: [997, 399, 588, 222, 111, 6, 999, 11, 1522, 66, 200, 37, 1111, 200, 135, 346, 1222],
            itemStyle: itemStyle
          },
          {
            name: '2018|初中',
            type: 'line',
            // stack: '总量',
            data: this.bigpuxiao2019,
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

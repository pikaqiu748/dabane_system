<template>
  <div id="zhexian03" style="width: 100%;height: 330px;"></div>
</template>

<script>
const echarts = require("echarts")

import 'echarts/theme/blue.js'
export default {
  name: "ClassTypeDist",
  data () {
    return {
      superpuchu2019: [258, 28, 72, 134, 110, 0, 253, 45, 43, 4, 15, 34, 232, 0, 59, 71, 231],
      superpuchu2018: [510, 62, 107, 333, 262, 1, 518, 2, 94, 9, 69, 105, 334, 10, 116, 69, 604],
    }
  },
  methods: {
    getEchart () {

      let myChart = echarts.init(document.getElementById('zhexian03'), 'dark');
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
          subtext: '普通初中班'
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
            data: [44, 15, 35, 25, 142, 0, 142, 27, 35, 1, 1, 0, 207, 0, 1, 47, 102],
            itemStyle: itemStyle,

          },
          {
            name: '2019',
            type: 'line',
            // stack: '总量',
            data: this.superpuchu2019,
            itemStyle: itemStyle

          },
          {
            name: '2018',
            type: 'line',
            // stack: '总量',
            data: this.superpuchu2018,
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

<template>
  <div id="zhexian007" style="width: 100%;height: 330px;"></div>
</template>

<script>
const echarts = require("echarts")

import 'echarts/theme/blue.js'
export default {
  name: "ToSchoolYearzhengti",
  data () {
    return {
      bigpuxiao2019: [599, 261, 744, 717, 720, 1, 616, 34, 1068, 127, 334, 90, 1066, 321, 231, 253, 931],
      bigpuxiao2018: [706, 405, 1173, 1220, 946, 1, 842, 28, 1641, 192, 538, 265, 1466, 517, 715, 638, 1388],
    }
  },
  methods: {
    getEchart () {

      let myChart = echarts.init(document.getElementById('zhexian_007'), 'dark');
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
          //subtext: '普通小学班'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          x: 'right',
          data: ['2020|小学学', '2020|初中','2019|小学','2019|初中','2018|小学', '2018|初中']
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
            name: '2020',
            type: 'line',
            // stack: '总量',
            data: [497, 399, 883, 500, 969, 0, 702, 45, 1156, 151, 280, 57, 1445, 262, 182, 339, 1041],
            itemStyle: itemStyle

          },
          {
            name: '2019',
            type: 'line',
            // stack: '总量',
            data: this.bigpuxiao2019,
            itemStyle: itemStyle

          },
          {
            name: '2018',
            type: 'line',
            // stack: '总量',
            data:this.bigpuxiao2018,
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

<template>
  <div id="gradebar02" style="width: 100%;height: 330px;"></div>
</template>

<script>
const echarts = require("echarts")
import { getSuperBigGrade2018, getSuperBigGrade2019, getSuperBigGrade2020 } from '../../api/request'

import 'echarts/theme/blue.js'
export default {
  name: "GradeBar02",
  data() {
    return {
      gradeType: [],
      superbiggrade2018: [],
      superbiggrade2019: [],
      superbiggrade2020: []
    }
  },

  mounted() {
    this.getSuperBigGrade2018()
    this.getSuperBigGrade2019()
    this.getSuperBigGrade2020()
  },

  methods: {

    getSuperBigGrade2018() {
      getSuperBigGrade2018().then(res => {
        //console.log(res)
        this.superbiggrade2018 = Object.values(res.data.data)
        this.gradeType = Object.keys(res.data.data)
        //console.log(this.bigschool2018)
        //console.log(this.schoolType)
        this.getEchart(this.superbiggrade2018, this.superbiggrade2019, this.superbiggrade2020, this.supergradeType)
      })
    },

    getSuperBigGrade2019() {
      getSuperBigGrade2019().then(res => {
        this.superbiggrade2019 = Object.values(res.data.data)
        this.getEchart(this.superbiggrade2018, this.superbiggrade2019, this.superbiggrade2020, this.supergradeType)
      })
    },

    getSuperBigGrade2020() {
      getSuperBigGrade2020().then(res => {
        this.superbiggrade2020 = Object.values(res.data.data)
        this.getEchart(this.superbiggrade2018, this.superbiggrade2019, this.superbiggrade2020, this.supergradeType)
      })
    },

    getEchart(superbiggrade2018, superbiggrade2019, superbiggrade2020, gradeType) {
      let myChart = echarts.init(document.getElementById('gradebar02'), 'dark');
      let itemStyle = {
        normal: {
          label: {
            show: true, //开启显示
            position: 'top', //在上方显示
            textStyle: { //数值样式
              color: 'pink',
              fontSize: 11
            },
          },
        }
      }

      let option = {
        title: {
          text: '超大班额年级类型分布',
          subtext: '近三年对比'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          x: 'right',
          data: ['2018', '2019', '2020']
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
            boundaryGap: true,
            data: gradeType,
            axisLabel: {
              interval: 0
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            axisLabel: {
              formatter: '{value}(个)'
            }
          }
        ],
        series: [
          {
            name: '2018',
            type: 'bar',
            barWidth: 30,
            // stack: '总量',
            data: superbiggrade2018,
            itemStyle: itemStyle,
            barCateGoryGap: 1,
          },
          {
            name: '2019',
            type: 'bar',
            barWidth: 30,
            // stack: '总量',
            data: superbiggrade2019,
            itemStyle: itemStyle
          },
          {
            name: '2020',
            type: 'bar',
            // stack: '总量',
            barWidth: 30,
            data: superbiggrade2020,
            itemStyle: itemStyle,

          }

        ]
      };

      myChart.setOption(option, true);
    }
  },
}
</script>
<style scoped>
</style>

<template>
  <div id="gradebar01" style="width: 100%;height: 330px;"></div>
</template>

<script>
const echarts = require("echarts")
import { getBigGrade2018, getBigGrade2019, getBigGrade2020} from '../../api/request'

import 'echarts/theme/blue.js'
export default {
  name: "GradeBar01",
  data() {
    return {
      gradeType: [],
      biggrade2018: [],
      biggrade2019: [],
      biggrade2020: []
    }
  },

  mounted() {
    this.getBigGrade2018()
    this.getBigGrade2019()
    this.getBigGrade2020()
  },

  methods: {
    getBigGrade2018() {
      getBigGrade2018().then(res => {
        //console.log(res)
        this.biggrade2018 = Object.values(res.data.data)
        this.gradeType = Object.keys(res.data.data)
        //console.log(this.bigschool2018)
        //console.log(this.schoolType)
        this.getEchart(this.biggrade2018, this.biggrade2019, this.biggrade2020, this.gradeType)
      })
    },

    getBigGrade2019() {
      getBigGrade2019().then(res => {
        this.biggrade2019 = Object.values(res.data.data)
        this.getEchart(this.biggrade2018, this.biggrade2019, this.biggrade2020, this.gradeType)
      })
    },

    getBigGrade2020() {
      getBigGrade2020().then(res => {
        this.biggrade2020 = Object.values(res.data.data)
        this.getEchart(this.biggrade2018, this.biggrade2019, this.biggrade2020, this.gradeType)
      })
    },

    getEchart(biggrade2018, biggrade2019, biggrade2020, gradeType) {
      let myChart = echarts.init(document.getElementById('gradebar01'), 'dark');
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
          text: '大班额年级类型分布',
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
            data: biggrade2018,
            itemStyle: itemStyle,
            barCateGoryGap: 1,
          },
          {
            name: '2019',
            type: 'bar',
            barWidth: 30,
            // stack: '总量',
            data: biggrade2019,
            itemStyle: itemStyle
          },
          {
            name: '2020',
            type: 'bar',
            // stack: '总量',
            barWidth: 30,
            data: biggrade2020,
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

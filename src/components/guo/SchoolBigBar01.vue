<template>
  <div id="schoolbigbar01" style="width: 100%;height: 330px;"></div>
</template>

<script>
const echarts = require("echarts")
import { getBigSchool2018, getBigSchool2019, getBigSchool2020 } from '../../api/request'

import 'echarts/theme/blue.js'
export default {
  name: "SchoolBigBar01",
  data() {
    return {
      schoolType: [],
      bigschool2018: [],
      bigschool2019: [],
      bigschool2020: []
    }
  },

  mounted() {
    this.getBigSchool2018()
    this.getBigSchool2019()
    this.getBigSchool2020()
  },

  methods: {

    getBigSchool2018() {
      getBigSchool2018().then(res => {
        //console.log(res)
        this.bigschool2018 = Object.values(res.data.data)
        this.schoolType = Object.keys(res.data.data)
        //console.log(this.bigschool2018)
        //console.log(this.schoolType)
        this.getEchart(this.bigschool2018, this.bigschool2019, this.bigschool2020, this.schoolType)
      })
    },

    getBigSchool2019() {
      getBigSchool2019().then(res => {
        this.bigschool2019 = Object.values(res.data.data)
        this.getEchart(this.bigschool2018, this.bigschool2019, this.bigschool2020, this.schoolType)
      })
    },

    getBigSchool2020() {
      getBigSchool2020().then(res => {
        this.bigschool2020 = Object.values(res.data.data)
        this.getEchart(this.bigschool2018, this.bigschool2019, this.bigschool2020, this.schoolType)
      })
    },

    getEchart(bigschool2018, bigschool2019, bigschool2020, schoolType) {
      let myChart = echarts.init(document.getElementById('schoolbigbar01'), 'dark');
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
          text: '大班额学校类型分布',
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
            data: schoolType,
            axisLabel: {
              interval: 0
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            axisLabel: {
              formatter: '{value}(所)'
            }
          }
        ],
        series: [
           {
            name: '2018',
            type: 'bar',
            barWidth: 30,
            // stack: '总量',
            data: bigschool2018,
            itemStyle: itemStyle,
            barCateGoryGap: 1,
          },
          {
            name: '2019',
            type: 'bar',
            barWidth: 30,
            // stack: '总量',
            data: bigschool2019,
            itemStyle: itemStyle
          },
          {
            name: '2020',
            type: 'bar',
            // stack: '总量',
            barWidth: 30,
            data: bigschool2020,
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

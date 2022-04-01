<template>
  <div id="ZhuZhuangALL01" style="width: 100%;height: 330px;"></div>
</template>

<script>
const echarts = require("echarts")
import { getSuperAllClassType, getBigAllClassType, getBigAllClassType2019, getSuperAllClassType2019, getBigAllClassType2018, getSuperAllClassType2018 } from '../../api/request'

import 'echarts/theme/blue.js'
export default {
  name: "ClassTypeDist",
  data () {
    return {
      superall2018: [306,382],
      superall2019: [309,307],
      superall2020: [100,135],

    }
  },

  created () {
    this.getSuperAllClassType2018()
    this.getSuperAllClassType2019()

    this.getBigAllClassType2018()
    this.getBigAllClassType2019()

    this.getBigAllClassType()
    this.getSuperAllClassType()
  },

  methods: {
    async getSuperAllClassType2018 () {
      const res = await getSuperAllClassType2018()
      // console.log('super all 2018', res.data.data)
    },

    async getSuperAllClassType2019 () {
      const res = await getSuperAllClassType2019()
      // console.log('super all 2019', res.data.data)
    },

    async getBigAllClassType2019 () {
      const res = await getBigAllClassType2019()
      // console.log('big all 2019', res.data.data)
    },

    async getBigAllClassType2018 () {
      const res = await getBigAllClassType2018()
      // console.log('big all 2018', res.data.data)
    },

    async getSuperAllClassType () {
      const res = await getSuperAllClassType()
      // console.log('super all 2020', res.data.data)
    },

    async getBigAllClassType () {
      const res = await getBigAllClassType()
      // console.log('big all 2020', res.data.data)
    },

    getEchart () {

      let myChart = echarts.init(document.getElementById('ZhuZhuangALL01'), 'dark');
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
          text: '超大班额班级类型分布',
          subtext: '近三年情况'
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
            data: [ '小学', '初中'],
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
            name: '2018',
            type: 'bar',
            barWidth: 30,
            // stack: '总量',
            data: this.superall2018,
            itemStyle: itemStyle,
            barCateGoryGap: 1,
          },
          {
            name: '2019',
            type: 'bar',
            barWidth: 30,
            // stack: '总量',
            data: this.superall2019,
            itemStyle: itemStyle

          },          
          {
            name: '2020',
            type: 'bar',
            // stack: '总量',
            barWidth: 30,
            data: this.superall2020,
            itemStyle: itemStyle,

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

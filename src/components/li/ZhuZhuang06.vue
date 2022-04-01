<template>
  <div id="zhuzhuang06" style="width: 100%;height: 330px;"></div>
</template>

<script>
const echarts = require("echarts")
import { getBigAllClassType, getBigAllClassType2019, getBigAllClassType2018 } from '../../api/request'

import 'echarts/theme/blue.js'
export default {
  name: "ClassTypeDist",
  data () {
    return {
      bigall2019: [],
      bigall2018: [],
      bigall2020: []
    }
  },

  mounted(){
    this.getBigAllClassType2018()
    this.getBigAllClassType2019()
    this.getBigAllClassType()
  },

  methods: {

    getBigAllClassType2018 () {
      // console.log('haha2018')
      var classType = ['少数民族小学班', '少数民族初中班', '普通小学班', '普通初中班']
      getBigAllClassType2018().then(res => {
        for (let item of classType) {
          this.bigall2018.push(res.data.data[item])
        }
        // console.log('2018',this.bigall2018)
        this.getEchart(this.bigall2018, this.bigall2019, this.bigall2020)
      })
      // console.log('big all 2018', res.data.data)

    },

    getBigAllClassType2019 () {
      var classType = ['少数民族小学班', '少数民族初中班', '普通小学班', '普通初中班']
      getBigAllClassType2019().then(res => {
        for (let item of classType) {
          this.bigall2019.push(res.data.data[item])
        }
        this.getEchart(this.bigall2018, this.bigall2019, this.bigall2020)
      })


      // console.log('big all 2019', res.data.data)
    },
    getBigAllClassType () {
      var classType = ['少数民族小学班', '少数民族初中班', '普通小学班', '普通初中班']
      getBigAllClassType().then(res => {
        for (let item of classType) {
          this.bigall2020.push(res.data.data[item])
        }
        // console.log('bigall', this.bigall2020)

        this.getEchart(this.bigall2018, this.bigall2019, this.bigall2020)
      })
    },

    getEchart (bigAll2018,bigAll2019,bigAll2020) {

      let myChart = echarts.init(document.getElementById('zhuzhuang06'), 'dark');
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
          text: '大班额班级类型分布',
          subtext: '近三年对比'
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
            boundaryGap: true,
            data:['少数民族小学班', '少数民族初中班', '普通小学班', '普通初中班'],
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
            name: '2020',
            type: 'bar',
            // stack: '总量',
            barWidth: 30,
            data: bigAll2020,
            itemStyle: itemStyle,

          },
          {
            name: '2019',
            type: 'bar',
            barWidth: 30,
            // stack: '总量',
            data: bigAll2019,
            itemStyle: itemStyle

          },
          {
            name: '2018',
            type: 'bar',
            barWidth: 30,
            // stack: '总量',
            data: bigAll2018,
            itemStyle: itemStyle,
            barCateGoryGap: 1,
          },

        ]
      };

      myChart.setOption(option, true);
    }
  },
 
}

</script>


<style scoped>
</style>

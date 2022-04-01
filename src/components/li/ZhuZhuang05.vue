<template>
  <div id="zhuzhuang05" style="width: 100%;height: 330px;"></div>
</template>

<script>
const echarts = require("echarts")
import { getSuperAllClassType, getSuperAllClassType2019, getSuperAllClassType2018 } from '../../api/request'

import 'echarts/theme/blue.js'
export default {
  name: "ClassTypeDist",
  data () {
    return {
      superall2019: [],
      superall2018: [],
      superall2020: [],
    }
  },


  mounted () {
    // console.log('ahha')
    this.getSuperAllClassType2018()
    this.getSuperAllClassType2019()
    this.getSuperAllClassType()
  },

  methods: {
    getSuperAllClassType2018 () {
      var classType = ['少数民族小学班', '少数民族初中班', '普通小学班', '普通初中班']
      getSuperAllClassType2018().then(res => {
        for (let item of classType) {
          this.superall2018.push(res.data.data[item])
        }
        // console.log('2018',this.superall2018)
        this.getEchart(this.superall2018, this.superall2019, this.superall2020)
      })
    },

    getSuperAllClassType2019 () {
      var classType = ['少数民族小学班', '少数民族初中班', '普通小学班', '普通初中班']
      getSuperAllClassType2019().then(res => {
        for (let item of classType) {
          this.superall2019.push(res.data.data[item])
        }
        this.getEchart(this.superall2018, this.superall2019, this.superall2020)
      })
      // console.log('super all 2019', res.data.data)
    },
    getSuperAllClassType () {
      var classType = ['少数民族小学班', '少数民族初中班', '普通小学班', '普通初中班']
      getSuperAllClassType().then(res => {
        console.log(res.data.data)
        for (let item of classType) {
          this.superall2020.push(res.data.data[item])
        }
        // console.log('superall', this.superall2020)
        this.getEchart(classType,this.superall2018, this.superall2019, this.superall2020)
      })
    },

    getEchart (classType,superall2018, superall2019, superall2020) {
      // console.log('haha')
      let myChart = echarts.init(document.getElementById('zhuzhuang05'), 'dark');
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
            data: classType,
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
            data: superall2020,
            itemStyle: itemStyle,

          },
          {
            name: '2019',
            type: 'bar',
            barWidth: 30,
            // stack: '总量',
            data: superall2019,
            itemStyle: itemStyle

          },
          {
            name: '2018',
            type: 'bar',
            barWidth: 30,
            // stack: '总量',
            data: superall2018,
            itemStyle: itemStyle,
            // barCateGoryGap: 1,
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

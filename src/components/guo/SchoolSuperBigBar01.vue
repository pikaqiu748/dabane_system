<template>
  <div id="schoolsuperbigbar01" style="width: 100%;height: 330px;"></div>
</template>

<script>
const echarts = require("echarts")
import { getSuperBigSchool2018, getSuperBigSchool2019, getSuperBigSchool2020 } from '../../api/request'
import 'echarts/theme/blue.js'
export default {
  name: "SchoolSuperBigBar01",
  data() {
    return {
      schoolType: [],
      superbigschool2018: [],
      superbigschool2019: [],
      superbigschool2020: []
    }
  },

  created() {
    this.getSuperBigSchool2018()
    this.getSuperBigSchool2019()
    this.getSuperBigSchool2020()
  },

  methods: {

    getSuperBigSchool2018() {
      getSuperBigSchool2018().then(res => {
        console.log(res)
        this.superbigschool2018=Object.values(res.data.data)
        this.schoolType=Object.keys(res.data.data)
        this.getEchart(this.superbigschool2018,this.superbigschool2019,this.superbigschool2020,this.schoolType)
        //
      })
    },

    getSuperBigSchool2019() {
      getSuperBigSchool2019().then(res => {
        this.superbigschool2019=Object.values(res.data.data)
        this.getEchart(this.superbigschool2018,this.superbigschool2019,this.superbigschool2020,this.schoolType)
      })
    },

    getSuperBigSchool2020() {
      getSuperBigSchool2020().then(res => {
        this.superbigschool2020=Object.values(res.data.data)
        this.getEchart(this.superbigschool2018,this.superbigschool2019,this.superbigschool2020,this.schoolType)
      })
    },

    getEchart(superbigschool2018, superbigschool2019, superbigschool2020,schoolType) {
      let myChart = echarts.init(document.getElementById('schoolsuperbigbar01'), 'dark');
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
          text: '超大班额学校类型分布',
          subtext: '近三年对比'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          x: 'right',
          data: ['2018','2019','2020']
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
            data: superbigschool2018,
            itemStyle: itemStyle,
            barCateGoryGap: 1,
          },
            {
              name: '2019',
              type: 'bar',
              barWidth: 30,
              // stack: '总量',
              data: superbigschool2019,
              itemStyle: itemStyle
            },
            {
              name: '2020',
              type: 'bar',
              // stack: '总量',
              barWidth: 30,
              data: superbigschool2020,
              itemStyle: itemStyle,

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

<template>
  <div id="zhexian03" style="width: 100%;height: 330px;"></div>
</template>

<script>
const echarts = require("echarts")
import { getSuperShiZhouClassType2018, getSuperShiZhouClassType2019, getSuperShiZhouClssType } from '../../api/request.js'
import 'echarts/theme/blue.js'
export default {
  name: "ClassTypeDist",
  data () {
    return {
      superpuchu2019: [],
      superpuchu2018: [],
      superpuchu2020: []
    }
  },

  mounted () {
    this.getSuperShiZhouClassType2018()
    this.getSuperShiZhouClassType2019()
    this.getSuperShiZhouClassType()
  },

  methods: {
    getSuperShiZhouClassType2018 () {
      getSuperShiZhouClassType2018().then(res => {
        var temp = res.data.data
        var temp_data = []
        var temp_keys = []
        // console.log('haha', temp)
        for (let i = 0; i < 17; i++) {
          temp_data.push(Object.values(temp[i]))
          temp_keys.push(Object.keys(temp[i])[0])
        }

        for (let i = 0; i < 17; i++) {

          this.superpuchu2018.push(temp_data[i][0]['普通初中班'])
        }
        this.getEchart(this.superpuchu2018, this.superpuchu2019, this.superpuchu2020)
      })

      // console.log('2018 super', res_data)
    },

    getSuperShiZhouClassType2019 () {
      getSuperShiZhouClassType2019().then(res => {
        var temp = res.data.data
        var temp_data = []
        var temp_keys = []
        // console.log('haha', temp)
        for (let i = 0; i < 17; i++) {
          temp_data.push(Object.values(temp[i]))
          temp_keys.push(Object.keys(temp[i])[0])
        }

        for (let i = 0; i < 17; i++) {

          this.superpuchu2019.push(temp_data[i][0]['普通初中班'])
        }
        this.getEchart(this.superpuchu2018, this.superpuchu2019, this.superpuchu2020)

      })

    },

    getSuperShiZhouClassType () {
      getSuperShiZhouClssType().then(res => {
        var temp = res.data.data
        var temp_data = []
        var temp_keys = []
        // console.log('haha', temp)
        for (let i = 0; i < 17; i++) {
          temp_data.push(Object.values(temp[i]))
          temp_keys.push(Object.keys(temp[i])[0])
        }

        for (let i = 0; i < 17; i++) {

          this.superpuchu2020.push(temp_data[i][0]['普通初中班'])
        }
        this.getEchart(this.superpuchu2018, this.superpuchu2019, this.superpuchu2020)

      })

    },


    getEchart (superpuchu2018, superpuchu2019, superpuchu2020) {

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
            boundaryGap: true,
            data: ["咸宁", "仙桃", "十堰", "荆州", "孝感", "神农架", "土家族", "鄂州", "武汉", "潜江", "荆门", "天门", "黄冈", "宜昌", "黄石", "随州", "襄阳"],
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
            type: 'line',
            // stack: '总量',
            data: superpuchu2020,
            itemStyle: itemStyle,

          },
          {
            name: '2019',
            type: 'line',
            // stack: '总量',
            data: superpuchu2019,
            itemStyle: itemStyle

          },
          {
            name: '2018',
            type: 'line',
            // stack: '总量',
            data: superpuchu2018,
            itemStyle: itemStyle

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

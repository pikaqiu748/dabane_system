<template>
  <div id="zhexian04" style="width: 100%;height: 330px;"></div>
</template>

<script>
const echarts = require("echarts")

import { getSuperShiZhouClassType2018, getSuperShiZhouClassType2019, getSuperShiZhouClssType } from '../../api/request.js'

import 'echarts/theme/blue.js'

export default {
  name: "ClassTypeDist",
  data () {
    return {
      // superpuxiao2019: [51, 80, 54, 84, 408, 0, 508, 24, 178, 64, 55, 14, 378, 12, 13, 121, 339],
      // superpuxiao2018: [909, 243, 342, 706, 887, 0, 1118, 15, 379, 115, 184, 128, 829, 80, 399, 255, 1388],
      superpuxiao2018: [],
      superpuxiao2019: [],
      superpuxiao2020: [],
    }
  },

  mounted () {
    this.getThreeYearData()
  },

  

  methods: {
    getThreeYearData () {
      axios.all([getSuperShiZhouClassType2018, getSuperShiZhouClassType2019, getSuperShiZhouClssType]).then(
        axios.spread((res2018, res2019, res2020) => {
          const _this = this
          // -------------------data2018---------------
          res2018().then(res2018 => {
            // console.log('res2018', res2018)
            var temp_2018 = res2018.data.data
            var temp_data_2018 = []
            var temp_keys_2018 = []
            for (let i = 0; i < 17; i++) {
              temp_data_2018.push(Object.values(temp_2018[i]))
              temp_keys_2018.push(Object.keys(temp_2018[i])[0])
            }

            for (let i = 0; i < 17; i++) {
              this.superpuxiao2018.push(temp_data_2018[i][0]['普通小学班'])
            }
            _this.getEchart(_this.superpuxiao2018, _this.superpuxiao2019, _this.superpuxiao2020)
          })

          // -------------------daat2019--------------------------
          res2019().then(res2019 => {
            var temp_2019 = res2019.data.data
            var temp_data_2019 = []
            var temp_keys_2019 = []
            // console.log('haha', temp)
            for (let i = 0; i < 17; i++) {
              temp_data_2019.push(Object.values(temp_2019[i]))
              temp_keys_2019.push(Object.keys(temp_2019[i])[0])
            }
            for (let i = 0; i < 17; i++) {
              this.superpuxiao2019.push(temp_data_2019[i][0]['普通小学班'])
            }
            _this.getEchart(_this.superpuxiao2018, _this.superpuxiao2019, _this.superpuxiao2020)

          })
          // --------------------data2020----------------------
          res2020().then(res2020 => {
            var temp_2020 = res2020.data.data
            var temp_data_2020 = []
            var temp_keys_2020 = []
            // console.log('haha', temp)
            for (let i = 0; i < 17; i++) {
              temp_data_2020.push(Object.values(temp_2020[i]))
              temp_keys_2020.push(Object.keys(temp_2020[i])[0])
            }
            for (let i = 0; i < 17; i++) {
              this.superpuxiao2020.push(temp_data_2020[i][0]['普通小学班'])
            }
            _this.getEchart(_this.superpuxiao2018, _this.superpuxiao2019, _this.superpuxiao2020)

          })
        })
      )
    },

    getEchart (superallpuxiao2018, superallpuxiao2019, superallpuxiao2020) {
      // console.log('2018', superallpuxiao2018)
      let myChart = echarts.init(document.getElementById('zhexian04'), 'dark');
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
          subtext: '普通小学班'
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
            data: superallpuxiao2020,
            itemStyle: itemStyle,

          },
          {
            name: '2019',
            type: 'line',
            // stack: '总量',
            data: superallpuxiao2019,
            itemStyle: itemStyle

          },
          {
            name: '2018',
            type: 'line',
            // stack: '总量',
            data: superallpuxiao2018,
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

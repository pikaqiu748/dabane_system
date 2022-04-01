<template>
  <div id="zhexian" style="width: 100%;height: 330px;"></div>
</template>

<script>
import {getBigShiZhouClassType2019, getBigShiZhouClassType2018,getBigShiZhouClssType} from '../../api/request'

const echarts = require("echarts")
import 'echarts/theme/blue.js'
export default {
  name: "ClassTypeDist",
  data () {
    return {
      bigpuxiao2019: [],
      bigpuxiao2018: [],
      bigpuxiao2020: []
    }
  },

  mounted(){
    this.getBigShiZhouClassType2018()
    this.getBigShiZhouClassType2019()
    this.getBigShiZhouClassType()
  },
  methods: {

    getBigShiZhouClassType2018 () {
      getBigShiZhouClassType2018().then(res => {
        var temp = res.data.data
        var temp_data = []
        var temp_keys = []
        // console.log('haha', temp)
        for (let i = 0; i < 17; i++) {
          temp_data.push(Object.values(temp[i]))
          temp_keys.push(Object.keys(temp[i])[0])
        }

        for (let i = 0; i < 17; i++) {
          this.bigpuxiao2018.push(temp_data[i][0]['普通小学班'])
        }
        // console.log(this.bigpuxiao2018)
        this.getEchart(this.bigpuxiao2018, this.bigpuxiao2019,this.bigpuxiao2020)
      })
    },

    getBigShiZhouClassType2019 () {
      getBigShiZhouClassType2019().then(res => {
        var temp = res.data.data
        var temp_data = []
        var temp_keys = []
        // console.log('haha', temp)
        for (let i = 0; i < 17; i++) {
          temp_data.push(Object.values(temp[i]))
          temp_keys.push(Object.keys(temp[i])[0])
        }

        for (let i = 0; i < 17; i++) {
          this.bigpuxiao2019.push(temp_data[i][0]['普通小学班'])
        }
        this.getEchart(this.bigpuxiao2018, this.bigpuxiao2019,this.bigpuxiao2020)
      })
    },

    getBigShiZhouClassType () {
      getBigShiZhouClssType().then(res => {
        var temp = res.data.data
        var temp_data = []
        var temp_keys = []
        // console.log('haha', temp)
        for (let i = 0; i < 17; i++) {
          temp_data.push(Object.values(temp[i]))
          temp_keys.push(Object.keys(temp[i])[0])
        }

        for (let i = 0; i < 17; i++) {
          this.bigpuxiao2020.push(temp_data[i][0]['普通小学班'])
        }
        this.getEchart(this.bigpuxiao2018, this.bigpuxiao2019,this.bigpuxiao2020)
      })
    },

    getEchart (bigpuxiao2018,bigpuxiao2019,bigpuxiao2020) {

      let myChart = echarts.init(document.getElementById('zhexian'), 'dark');
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
          text: '大班额班级类型分布',
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
            data: bigpuxiao2020,
            itemStyle: itemStyle

          },
          {
            name: '2019',
            type: 'line',
            // stack: '总量',
            data: bigpuxiao2019,
            itemStyle: itemStyle

          },
          {
            name: '2018',
            type: 'line',
            // stack: '总量',
            data: bigpuxiao2018,
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

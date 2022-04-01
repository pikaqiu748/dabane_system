<template>
  <div id="zhexian01" style="width: 100%;height: 330px;"></div>
</template>

<script>
const echarts = require("echarts")
import { getBigShiZhouClassType2019, getBigShiZhouClassType2018, getSuperShiZhouClassType2019, getSuperShiZhouClassType2018 } from '../../api/request'
import 'echarts/theme/blue.js'
export default {
  name: "ClassTypeDist",
  data () {
    return {
      bigpuxiao2019: [599, 261, 744, 717, 720, 1, 616, 34, 1068, 127, 334, 90, 1066, 321, 231, 253, 931],
      bigpuchu2019: [302, 94, 286, 453, 256, 5, 483, 61, 380, 108, 120, 63, 742, 56, 236, 145, 502],

      superpuxiao2019: [51, 80, 54, 84, 408, 0, 508, 24, 178, 64, 55, 14, 378, 12, 13, 121, 339],
      superpuchu2019: [258, 28, 72, 134, 110, 0, 253, 45, 43, 4, 15, 34, 232, 0, 59, 71, 231],

      bigpuxiao2018: [706, 405, 1173, 1220, 946, 1, 842, 28, 1641, 192, 538, 265, 1466, 517, 715, 638, 1388],
      bigpuchu2018: [589, 138, 562, 844, 621, 10, 893, 3, 630, 174, 247, 198, 1210, 148, 486, 287, 808],

      superpuxiao2018: [909, 243, 342, 706, 887, 0, 1118, 15, 379, 115, 184, 128, 829, 80, 399, 255, 1388],
      superpuchu2018: [510, 62, 107, 333, 262, 1, 518, 2, 94, 9, 69, 105, 334, 10, 116, 69, 604],

    }
  },
  created () {
    this.getSuperShiZhouClassType2019()
    this.getSuperShiZhouClassType2018()

    this.getBigShiZhouClassType2019()
    this.getBigShiZhouClassType2018()
  },
  methods: {
    async getSuperShiZhouClassType2019 () {
      const res = await getSuperShiZhouClassType2019()
      // console.log(res.data.data)
      var temp = res.data.data
      var temp_data = []
      var temp_keys = []
      // console.log('haha', temp)
      for (let i = 0; i < 17; i++) {
        temp_data.push(Object.values(temp[i]))
        temp_keys.push(Object.keys(temp[i])[0])
      }
      // console.log('value', temp_data)
      // console.log('key', temp_keys)
      var res_data = { shaoxiao: [], shaochu: [], puxiao: [], puchu: [] }
      for (let i = 0; i < 17; i++) {
        res_data['shaoxiao'].push(temp_data[i][0]['少数民族小学班'])
        res_data['shaochu'].push(temp_data[i][0]['少数民族初中班'])
        res_data['puxiao'].push(temp_data[i][0]['普通小学班'])
        res_data['puchu'].push(temp_data[i][0]['普通初中班'])
        // this.shaoxiao.push(temp_data[i][0]['少数民族小学班'])
        // this.shaochu.push(temp_data[i][0]['少数民族初中班'])
        // this.puxiao.push(temp_data[i][0]['普通小学班'])
        // this.puchu.push(temp_data[i][0]['普通初中班'])
      }
      // console.log('2019 super', res_data)
    },
    async getSuperShiZhouClassType2018 () {
      const res = await getSuperShiZhouClassType2018()
      var temp = res.data.data
      var temp_data = []
      var temp_keys = []
      // console.log('haha', temp)
      for (let i = 0; i < 17; i++) {
        temp_data.push(Object.values(temp[i]))
        temp_keys.push(Object.keys(temp[i])[0])
      }
      // console.log('value', temp_data)
      // console.log('key', temp_keys)
      var res_data = { shaoxiao: [], shaochu: [], puxiao: [], puchu: [] }
      for (let i = 0; i < 17; i++) {
        res_data['shaoxiao'].push(temp_data[i][0]['少数民族小学班'])
        res_data['shaochu'].push(temp_data[i][0]['少数民族初中班'])
        res_data['puxiao'].push(temp_data[i][0]['普通小学班'])
        res_data['puchu'].push(temp_data[i][0]['普通初中班'])
        // this.shaoxiao.push(temp_data[i][0]['少数民族小学班'])
        // this.shaochu.push(temp_data[i][0]['少数民族初中班'])
        // this.puxiao.push(temp_data[i][0]['普通小学班'])
        // this.puchu.push(temp_data[i][0]['普通初中班'])
      }
      // console.log('2018 super', res_data)
    },
    async getBigShiZhouClassType2019 () {
      const res = await getBigShiZhouClassType2019()
      var temp = res.data.data
      var temp_data = []
      var temp_keys = []
      // console.log('haha', temp)
      for (let i = 0; i < 17; i++) {
        temp_data.push(Object.values(temp[i]))
        temp_keys.push(Object.keys(temp[i])[0])
      }
      // console.log('value', temp_data)
      // console.log('key', temp_keys)
      var res_data = { shaoxiao: [], shaochu: [], puxiao: [], puchu: [] }
      for (let i = 0; i < 17; i++) {
        res_data['shaoxiao'].push(temp_data[i][0]['少数民族小学班'])
        res_data['shaochu'].push(temp_data[i][0]['少数民族初中班'])
        res_data['puxiao'].push(temp_data[i][0]['普通小学班'])
        res_data['puchu'].push(temp_data[i][0]['普通初中班'])
        // this.shaoxiao.push(temp_data[i][0]['少数民族小学班'])
        // this.shaochu.push(temp_data[i][0]['少数民族初中班'])
        // this.puxiao.push(temp_data[i][0]['普通小学班'])
        // this.puchu.push(temp_data[i][0]['普通初中班'])
      }
      // console.log('big 2019', res_data)
    },


    async getBigShiZhouClassType2018 () {
      const res = await getBigShiZhouClassType2018()
      var temp = res.data.data
      var temp_data = []
      var temp_keys = []
      // console.log('haha', temp)
      for (let i = 0; i < 17; i++) {
        temp_data.push(Object.values(temp[i]))
        temp_keys.push(Object.keys(temp[i])[0])
      }
      // console.log('value', temp_data)
      // console.log('key', temp_keys)
      var res_data = { shaoxiao: [], shaochu: [], puxiao: [], puchu: [] }
      for (let i = 0; i < 17; i++) {
        res_data['shaoxiao'].push(temp_data[i][0]['少数民族小学班'])
        res_data['shaochu'].push(temp_data[i][0]['少数民族初中班'])
        res_data['puxiao'].push(temp_data[i][0]['普通小学班'])
        res_data['puchu'].push(temp_data[i][0]['普通初中班'])
        // this.shaoxiao.push(temp_data[i][0]['少数民族小学班'])
        // this.shaochu.push(temp_data[i][0]['少数民族初中班'])
        // this.puxiao.push(temp_data[i][0]['普通小学班'])
        // this.puchu.push(temp_data[i][0]['普通初中班'])
      }
      // console.log('2018 big', res_data)
    },

    getEchart () {

      let myChart = echarts.init(document.getElementById('zhexian01'), 'dark');
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
            boundaryGap: false,
            data: ["咸宁", "仙桃", "十堰", "荆州", "孝感", "神农架", "恩施州", "鄂州", "武汉", "潜江", "荆门", "天门", "黄冈", "宜昌", "黄石", "随州", "襄阳"],
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
            name: '2020',
            type: 'line',
            // stack: '总量',
            data: [292, 162, 357, 346, 435, 1, 371, 107, 485, 86, 58, 1, 1128, 17, 113, 208, 529],
            itemStyle: itemStyle,

          },
          {
            name: '2019',
            type: 'line',
            // stack: '总量',
            data: this.bigpuchu2019,
            itemStyle: itemStyle

          },
          {
            name: '2018',
            type: 'line',
            // stack: '总量',
            data: this.bigpuchu2018,
            itemStyle: itemStyle

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

<template>
  <div id="zhuzhuang01" style="width: 100%;height: 330px;"></div>
</template>

<script>
import { getSuperShiZhouClssType } from '../../api/request'
const echarts = require('echarts')
export default {
  name: "ClassTypeDist",
  data () {
    return {
      shaoxiao: [],
      shaochu: [],
      puxiao: [],
      puchu: [],
      classType: [],
      cities: []
    }
  },

  mounted () {
    this.getSuperShiZhouClssType()
  },

  methods: {
    getSuperShiZhouClssType () {
      getSuperShiZhouClssType().then(res => {
        var temp = res.data.data
        var temp_data = []
        var temp_keys = []
        // console.log('haha', temp)
        for (let i = 0; i < 17; i++) {
          temp_data.push(Object.values(temp[i]))
          temp_keys.push(Object.keys(temp[i])[0])
        }
        this.cities = temp_keys
        // 所有班级类型
        this.classType = Object.keys(temp_data[0][0])
        for (let i = 0; i < 17; i++) {
          this.shaoxiao.push(temp_data[i][0][this.classType[0]])
          this.shaochu.push(temp_data[i][0][this.classType[1]])
          this.puxiao.push(temp_data[i][0][this.classType[2]])
          this.puchu.push(temp_data[i][0][this.classType[3]])
        }
        this.getEchart(this.cities,this.classtype,this.shaoxiao, this.shaochu, this.puxiao, this.puchu)
      }).catch(err => {
        // alert('网络错误！！！！')
      })
      // console.log(res_data)
    },

    getEchart (cities,classtype,shaoxiao, shaochu, puxiao, puchu) {
      let myChart = echarts.init(document.getElementById('zhuzhuang01'), 'dark');
      // var zrColor = require('echarts/node_modules/zrender/lib/tool/color')
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
      var option = {
        title: {
          text: '超大班额班级类型分布',
          // subtext: '纯属虚构'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          x: 'right',
          data: classtype
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
          }
        },
        dataZoom: {
          show: true,
          start: 3
        },
        calculable: true,
        grid: {
          y: 80,
          y2: 65,
          x2: 40,
          width: "auto", //图例宽度

          // height: "100%", //图例高度
        },
        xAxis: [
          {
            type: 'category',
            data: cities,
            axisLabel: {
              interval: 0
            },
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
            name: '少数民族小学班',
            type: 'bar',
            data: shaoxiao,
            // itemStyle: itemStyle

          },
          {
            name: '少数民族初中班',
            type: 'bar',
            data: shaochu,
            // itemStyle: itemStyle
          },
          {
            name: '普通小学班',
            type: 'bar',
            data: puxiao,
            itemStyle: itemStyle,
            barGap: "80%"

          },
          {
            name: '普通初中班',
            type: 'bar',
            data: puchu,
            itemStyle: itemStyle,
            barGap: "80%"

          },
        ]
      };
      myChart.setOption(option, true);
    }
  },

}

</script>


<style scoped>
.bg {
    color: rgb(146, 54, 61);
}
</style>

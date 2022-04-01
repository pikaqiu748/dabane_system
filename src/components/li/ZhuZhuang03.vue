<template>
  <div id="zhuzhuang03" style="width: 100%;height: 330px;"></div>

</template>

<script>
const echarts = require('echarts')
import { getSuperAllClassType } from '../../api/request'
export default {
  name: "ClassTypeDist",

  data () {
    return {
      superClassData: [],
      classType:[]
    }
  },

  mounted () {
    // console.log('haha')
    this.getSuperAllClassType()
  },

  methods: {
    getSuperAllClassType () {
      // var classType = ['少数民族小学班', '少数民族初中班', '普通小学班', '普通初中班']
      getSuperAllClassType().then(res => {
        // console.log(res.data.data)
        this.classType = Object.keys(res.data.data)
        for (let item of this.classType) {
          this.superClassData.push(res.data.data[item])
        }
        this.getEchart(this.classType,this.superClassData)
      }
      )
      // console.log(this.superClassData)
    },

    getEchart (classType,superClassData) {
      // console.log('hahha')
      // console.log(superData)
      let myChart = echarts.init(document.getElementById('zhuzhuang03'), 'dark');
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
          text: '班级类型整体分布',
          subtext: '超大班额'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          x: 'right',
          data: ['超大班额']
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
        },
        xAxis: [
          {
            type: 'category',
            data: classType
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
            name: '超大班额',
            type: 'bar',
            data: superClassData,
            itemStyle: itemStyle,
            barWidth: 30,
          }
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

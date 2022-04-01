<template>
  <div id="hubeiChart" style="width: 780px;height: 540px;"></div>
</template>

<script>
// import { color } from 'echarts'
const echarts = require("echarts")
import hubeiJson from '../../../public/hubei'
echarts.registerMap('hubei', hubeiJson)

export default {
  name: "DiTu",

  components: {
  },

  mounted () {
    this.hubeiMap()
  },

  methods: {
    randomValue () {
      return Math.floor(Math.random() * (50 - 1 + 1) + 1)
    },

    hubeiMap () {
      var myChart = echarts.init(document.getElementById('hubeiChart'))
      let option = {
        title: {
          text: '全国各省份初中情况统计',
          left: '10%',
          textStyle: {
            color: 'rgba(0, 183, 255, 0.8)',
            fontSize: 20
          }
        },
        tooltip: {
          trigger: 'item',
          backgroundColor: 'rgba(	123,104,238,0.2)',//通过设置rgba调节背景颜色与透明度
          // color: 'red',
          borderWidth: '1',
          borderColor: 'gray',
          textStyle: {
            color: 'pink',
          },
          formatter: function (params) {
            var res = '';
            res += params['data'].name + '</br>';
            res += '大班额' + ' : ' + params['data'].value1 + '个</br>';
            res += '超大班额' + ' : ' + params['data'].value2 + '个';
            return res;
          }
        },

        series: [
          {
            type: 'map',
            mapType: 'hubei',
            selectedMode: 'single',
            roam: true,
            label:
            {
              normal:
              {
                show: true,
                // formatter: function (params) {
                //   return params.name + "\n" + params.value;    //地图上展示文字 + 数值
                // },
                textStyle:
                {
                  color: 'pink',
                  // fontSize: 2,
                  fontColor: '#FFF'
                },
              },

              emphasis:
              {
                show: true,
                // backgroundColor: "#4169E1",//提示标签背景颜色
                textStyle: { color: "	#FFF0F5" } //提示标签字体颜色
              },

            },
            itemStyle: {
              normal: {
                borderWidth: .5, //区域边框宽度
                // 边界颜色
                borderColor: 'rgba(0, 0, 0, 0.6)',
                // 地图颜色
                areaColor: 'rgba(10,106,255, 0.4)',

              },
              emphasis: {
                areaColor: '#5F9EA0',
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                shadowBlur: 20,
                borderWidth: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            },
            // 数据设置
            data:
              [
                { name: '咸宁市', value1: 333, value2: 444 /*,selected:true*/ },
                { name: '仙桃市', value1: 123, value2: 456 },
                { name: '十堰市', value1: 11, value2: 123 },
                { name: '荆州市', value1: 444, value2: 66 },
                { name: '孝感市', value1: 666, value2: 999 },
                { name: '神农架', value1: 555, value2: 444 },
                { name: '恩施州', value1: 432, value2: 789 },
                { name: '鄂州市', value1: 857, value2: 567 },
                { name: '武汉市', value1: 432, value2: 357 },
                { name: '潜江市', value1: 456, value2: 456},
                { name: '荆门市', value1: 654, value2: 432 },
                { name: '天门市', value1: 654, value2: 521 },
                { name: '黄冈市', value1: 645, value2: 621 },
                { name: '宜昌市', value1: 654, value2: 789 },
                { name: '黄石市', value1: 897, value2: 456 },
                { name: '随州市', value1: 999, value2: 444 },
                { name: '襄阳市', value1: 789, value2: 888 },
              ]
          },

        ]
      }
      myChart.setOption(option, true);

      var curIndex = 0
      var dataLen = option.series[0].data.length;
      setInterval(function () {
        myChart.dispatchAction({ type: 'downplay', seriesIndex: 0, dataIndex: curIndex });
        curIndex = (curIndex + 1) % dataLen

        myChart.dispatchAction({
          type: 'highlight', seriesIndex: 0, dataIndex: curIndex
        });

        myChart.dispatchAction({
          type: 'showTip',
          seriesIndex: 0,
          dataIndex: curIndex
        })

      }, 2000);
    }
  }
}
</script>

<style scoped>
</style>
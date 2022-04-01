<!--
 描述: 滚动弧形线
 作者: Jack Chen
 日期: 2020-04-20
-->

<template>
  <div class="wrap-container sn-container">
    <dv-border-box-10 class="sn-content"></dv-border-box-10>
    <div class="sn-content">
      <div class="sn-title">各省份班额最新消除情况
        <el-button type="primary" class="xiaoxue-btn">大班额</el-button>
        <el-button type="primary" class="chuzhong-btn" @click="change3">超大班额</el-button>
      </div>
      <div class="sn-body">
        <div class="wrap-container">
          <div class="chartsdom" id="youxia"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { GetprimaryDa } from 'api/yyshizhou.js'
import { GetprimaryDa19 } from 'api/yyshizhou.js';
const echarts = require("echarts")

export default {
  name: "scrollArc",
  data () {
    return {
      option: null,
      number: 0, // 播放所在下标
      timer: null,
      barnum: [],
      xname: [],
      linenum: {},
      num: [],
      result: 0,
      percentage: [],
      barnum1: [],
      xname1: ['仙桃市', '恩施州', '孝感市', '随州市', '潜江市', '黄冈市', '鄂州市', '武汉市', '荆门市', '十堰市', '宜昌市', '黄石市', '天门市', '荆州市', '襄阳市', '咸宁市'],
      linenum1: {},
      num1: [],
      result1: 0,
      percentage1: [],
      xiaochupercentage: [-22.78, -16.41, -14.38, -3.74, -17.63, -9.67, -2.02, 3.61, -4.64, -1.85, -11.28, 10.58, 17.36, 14.97, 18.5, 23.97]

    }
  },
  methods: {
    change3 () {
      this.$emit('pie');
    },
    getEcharts () {
      var myChart = echarts.init(document.getElementById('youxia'))
      let option = {
        tooltip: {
          trigger: 'axis',
          showContent: false,
          axisPointer: {
            type: 'shadow',
            shadowStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 1,
                color: '#5d83ff'
              }, {
                offset: 0,
                color: 'rgba(255, 255, 255, 0)'
              }])
            }
          },
        },
        color: ['#5d83ff'],
        grid: {
          top: 30,
          left: 20,
          right: 20,
          bottom: 20,
          containLabel: true //轴上的数值
        },
        xAxis: {
          type: 'category',
          data: this.xname1,
          boundaryGap: true,


          axisTick: {
            show: false
          },
          axisLabel: {
            formatter: '{value}',
            textStyle: {
              color: '#FFF'
            },

            interval: 0,
            rotate: 50,
          },
          axisLine: {
            lineStyle: {
              color: '#999',
            }
          },
        },
        yAxis: {
          type: 'value',
          axisLine: {
            show: true,
            lineStyle: {
              color: '#999'
            }
          },
          axisLabel: {
            formatter: '{value} %'
          }

        },
        series: [{
          name: '人数',
          type: 'line',
          data: this.xiaochupercentage,
          symbolSize: 10,
          label: {
            color: '#fff',
            show: true,
            formatter: function (data) {
              return data.value;
            }
          },

          emphasis: {
            label: {
              show: true,
              color: '#FF9224',
              fontSize: 20
            },
            itemStyle: {
              color: '#5d83ff',
              borderColor: '#fff',
              borderWidth: 2,
              opacity: 1
            },
          },
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#5d83ff'
              }, {
                offset: 1,
                color: 'rgba(0, 0, 0, 0)'
              }]),
            }
          },
          smooth: true,
        }]

      }
      myChart.setOption(option, true);
      window.addEventListener('resize', () => {
        myChart.resize();
      });

      this.timer = setInterval(() => {
        myChart.dispatchAction({
          type: 'showTip',
          seriesIndex: 0,
          dataIndex: this.number
        });

        this.number++;

        if (this.number > 17) {
          this.number = 0;
        }
      }, 3000);
    }
  },
  mounted () {
    this.getEcharts()

  }
};
</script>

<style lang="scss" scoped>
.sn-container {
    left: 1310px;
    top: 633px;
    width: 600px;
    height: 450px;
    .chartsdom {
        position: absolute;
        top: -10px;
        width: 600px;
        height: 103%;
    }
}
.xiaoxue-btn {
    position: absolute;
    min-width: 5px;
    min-height: 5px;
    border-radius: 15px;
    //background: transparent;
    left: 200px;
}
.chuzhong-btn {
    position: absolute;
    min-width: 5px;
    min-height: 5px;
    border-radius: 15px;
    background: transparent;
    left: 270px;
}
</style>

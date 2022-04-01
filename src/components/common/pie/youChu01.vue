<!--
 描述: 滚动弧形线
 作者: Jack Chen
 日期: 2020-04-20
-->

<template>
  <div class="wrap-container sn-container">
    <dv-border-box-10 class="sn-content"></dv-border-box-10>
    <div class="sn-content">
      <div class="sn-title">各省份初中班额消除比例情况
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
      xname1: ['潜江', '鄂州', '黄冈', '仙桃', '孝感', '随州', '武汉', '荆门', '宜昌', '十堰', '恩施州', '荆州', '黄石', '天门', '襄阳', '咸宁'],
      linenum1: {},
      num1: [],
      result1: 0,
      percentage1: [],
      xiaochupercentage: [-13.33, -11.55, -12.44, -22.50, -34.61, -55.99, -12.43, -21.65, 21.70,19.96, 15.96, 66.66, 48.05, 12.30, 11.22, 21.50]
    }
  },
  methods: {
    change3 () {
      this.$emit('pie');
    },
    getEcharts () {
      var myChart = echarts.init(document.getElementById('youxia'));
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
          // name: '百分比',
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
            show: true,
            formatter: function (data) {
              return data.value;
            },
            color: '#fff',
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
    /*接口获取数据 */
    // var myChart = echarts.init(document.getElementById('chart_arc'));
    // myChart.setOption({
    //   tooltip: {
    //     trigger: 'axis',
    //     showContent: false,
    //     axisPointer: {
    //       type: 'shadow',
    //       shadowStyle: {
    //         color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
    //           offset: 1,
    //           color: '#5d83ff'
    //         }, {
    //           offset: 0,
    //           color: 'rgba(255, 255, 255, 0)'
    //         }])
    //       }
    //     },
    //   },
    //   color: ['#5d83ff'],
    //   grid: {
    //     top: 30,
    //     left: 20,
    //     right: 20,
    //     bottom: 20,
    //     containLabel: true //轴上的数值
    //   },
    //   xAxis: {
    //     type: 'category',
    //     data: '',
    //     boundaryGap: true,


    //     axisTick: {
    //       show: false
    //     },
    //     axisLabel: {
    //       formatter: '{value}市',
    //       textStyle: {
    //         color: '#FFF'
    //       },

    //       interval: 0,
    //       rotate: 50,
    //     },
    //     axisLine: {
    //       lineStyle: {
    //         color: '#999',
    //       }
    //     },
    //   },
    //   yAxis: {
    //     type: 'value',
    //     axisLine: {
    //       show: true,
    //       lineStyle: {
    //         color: '#999'
    //       }
    //     },
    //     axisLabel: {
    //       formatter: '{value} %'
    //     }

    //   },
    //   series: [{
    //     name: '人数',
    //     type: 'line',
    //     data: '',
    //     symbolSize: 10,
    //     label: {
    //       show: true,
    //       formatter: function (data) {
    //         return data.value + '%';
    //       }
    //     },

    //     emphasis: {
    //       label: {
    //         show: true,
    //         color: '#FF9224',
    //         fontSize: 20
    //       },
    //       itemStyle: {
    //         color: '#5d83ff',
    //         borderColor: '#fff',
    //         borderWidth: 2,
    //         opacity: 1
    //       },
    //     },
    //     areaStyle: {
    //       normal: {
    //         color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
    //           offset: 0,
    //           color: '#5d83ff'
    //         }, {
    //           offset: 1,
    //           color: 'rgba(0, 0, 0, 0)'
    //         }]),
    //       }
    //     },
    //     smooth: true,
    //   }]
    // });
    /*-----------获取2020bar,line数据-----------------*/
    // GetprimaryDa().then(({ data }) => {
    //   this.barnum = Object.values(data.data);
    //   this.xname = Object.keys(data.data);
    //   // console.log(this.barnum);
    //    console.log(this.xname);
    //   for (let i = 0; i < this.barnum.length; i++) {
    //     this.result = this.result + this.barnum[i];

    //   }
    // console.log(this.result);
    // for (let i = 0; i < this.barnum.length; i++) {
    //   this.percentage[i] = this.barnum[i] / this.result * 100;
    //   this.percentage[i] = Math.round(this.percentage[i] * 101) / 100

    // }
    // console.log(this.percentage);
    //   GetprimaryDa19();
    // }).catch(err => {
    //   console.log(err)
    // });
    /*-----------获取2019bar,line数据-----------------*/
    // GetprimaryDa19().then(({ data }) => {
    //   this.barnum1 = Object.values(data.data);
    //   this.xname1 = Object.keys(data.data);
    //   // console.log(this.barnum1,'2019');
    //   // console.log(this.xname1,'2019');
    //   for (let i = 0; i < this.barnum1.length; i++) {
    //     this.result1 = this.result1 + this.barnum1[i];

    //   }
    //   // console.log(this.result1);
    //   for (let i = 0; i < this.barnum1.length; i++) {
    //     this.percentage1[i] = this.barnum1[i] / this.result1 * 100;
    //     this.percentage1[i] = Math.round(this.percentage1[i] * 100) / 100

    //   }
    //   // console.log(this.percentage1,'2019')
    //   for (let i = 0; i < this.percentage1.length; i++) {
    //     this.xiaochupercentage[i] = this.percentage1[i] - this.percentage[i]
    //     this.xiaochupercentage[i] = Math.round(this.xiaochupercentage[i] * 100) / 100

    //   }
    //    console.log(this.xiaochupercentage,'最终消除比例');
    //   myChart.setOption({
    //     xAxis: {
    //       data: this.xname1
    //     },
    //     series: [{
    //       data: this.xiaochupercentage
    //     }
    //     ]

    //   })

    // })
    this.getEcharts();

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
    left: 250px;
}
.chuzhong-btn {
    position: absolute;
    min-width: 5px;
    min-height: 5px;
    border-radius: 15px;
    background: transparent;
    left: 320px;
}
</style>

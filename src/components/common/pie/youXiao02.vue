<!--
 描述: 初中市州大班额比例增长分布图
 作者: Jack Chen
 日期: 2020-04-20
-->

<template>
  <div class="wrap-container sn-container">
    <dv-border-box-10 class="sn-content"></dv-border-box-10>
    <div class="sn-content">
      <div class="sn-title">各省份小学班额消除比例情况
        <el-button type="primary" class="xiaoxue-btn" @click="change3">大班额</el-button>
        <el-button type="primary" class="chuzhong-btn">超大班额</el-button>
      </div>
      <div class="sn-body">
        <div class="wrap-container">
          <div class="chartsdom" id="pie02"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { GetmiddleDa } from 'api/yyshizhou.js'
import { GetmiddleDa19 } from 'api/yyshizhou.js';
const echarts = require("echarts")

export default {
  name: "scrollArc",
  data () {
    return {
      option: null,
      number: 0, // 播放所在下标
      timer: null,
      barnum: [],
      xname: ['仙桃', '恩施', '孝感', '随州', '潜江', '黄冈', '鄂州', '武汉', '荆门', '十堰', '宜昌', '黄石', '天门', '荆州', '襄阳', '咸宁'],
      linenum: {},
      num: [],
      result: 0,
      percentage: [],
      barnum1: [],
      xname1: [],
      linenum1: {},
      num1: [],
      result1: 0,
      percentage1: [],
      xiaochupercentage: [-3.88, -3.56, -1.99, -4.11, -3.33, -2.22, -1.11, -1.12, -1.99, -0.11, 0.01, 1.85, 3.00, 0.98, 2.12, 4.24]
    }
  },
  methods: {
    change3 () {
      // console.log('haa')
      this.$emit('dapie');
    },
    getEcharts () {
      var myChart = echarts.init(document.getElementById('pie02'))
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
          data: this.xname,
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
            rotate: 30,
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
            show: true,
            color: '#fff',
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
    // GetmiddleDa().then(({ data }) => {
    //   this.barnum = Object.values(data.data);
    //   this.xname = Object.keys(data.data);
    // console.log(this.barnum);
    // console.log(this.xname);
    // for (let i = 0; i < this.barnum.length; i++) {
    //   this.result = this.result + this.barnum[i];

    // }
    // console.log(this.result);
    // for (let i = 0; i < this.barnum.length; i++) {
    //   this.percentage[i] = this.barnum[i] / this.result * 100;
    //   this.percentage[i] = Math.round(this.percentage[i] * 101) / 100

    // }
    // console.log(this.percentage);
    //   GetmiddleDa19();
    // }).catch(err => {
    //   console.log(err)
    // });
    /*-----------获取2019bar,line数据-----------------*/
    // GetmiddleDa19().then(({ data }) => {
    //   this.barnum1 = Object.values(data.data);
    //   this.xname1 = Object.keys(data.data);
    // console.log(this.barnum1,'2019');
    //  console.log(this.xname1,'2019');
    // for (let i = 0; i < this.barnum1.length; i++) {
    //   this.result1 = this.result1 + this.barnum1[i];

    // }
    // console.log(this.result1);
    // for (let i = 0; i < this.barnum1.length; i++) {
    //   this.percentage1[i] = this.barnum1[i] / this.result1 * 100;
    //   this.percentage1[i] = Math.round(this.percentage1[i] * 100) / 100

    // }
    // console.log(this.percentage1,'2019')
    // for (let i = 0; i < this.percentage1.length; i++) {
    //   this.xiaochupercentage[i] = this.percentage1[i] - this.percentage[i]
    //   this.xiaochupercentage[i] = Math.round(this.xiaochupercentage[i] * 100) / 100

    // }
    // console.log(this.xiaochupercentage,'最终消除比例');
    // myChart.setOption({
    //   xAxis: {
    //     data: this.xname1
    //   },
    //   series: [{
    //     data: this.xiaochupercentage
    //   }
    //   ]

    // })

    // })

    // window.addEventListener('resize', () => {
    //   myChart.resize();
    // });

    // this.timer = setInterval(() => {
    //   myChart.dispatchAction({
    //     type: 'showTip',
    //     seriesIndex: 0,
    //     dataIndex: this.number
    //   });

    //   this.number++;

    //   if (this.number > 17) {
    //     this.number = 0;
    //   }
    // }, 1000);
  }
}

  ;
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
    background: transparent;
    left: 250px;
}
.chuzhong-btn {
    position: absolute;
    min-width: 5px;
    min-height: 5px;
    border-radius: 15px;
    //background: transparent;
    left: 320px;
}
</style>

<!--
 描述: 柱饼组合联动
 作者: Jack Chen
 日期: 2020-04-30
-->

<template>
  <div class="wrap-container sn-container ">
    <dv-border-box-10 class="sn-content"></dv-border-box-10>
    <!-- <div class="resize">
      <span class="iconfont icon-close"></span>
    </div> -->
    <div class="sn-content ">
      <div class="sn-title">近三年初中大班额情况总览</div>
      <div class="sn-body">
        <div class="wrap-container">
          <div class="chartsdom" id="chart_bp"></div>
        </div>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
const echarts = require("echarts")

export default {
  name: "cakeLinkage",
  data () {
    return {
      option: null,
      dataMap: {},
      Xaxis: ['咸宁市', '仙桃市', '十堰市', '荆州市', '孝感市', '神农架', '恩施州', '鄂州市', '武汉市', '潜江市', '荆门市', '天门市', '黄冈市', '宜昌市', '黄石市', '随州市', '襄阳市']

    }
  },

  mounted () {
    this.getEchart();
  },

  methods: {


    dataFormatter (obj) {
      let pList = ['咸宁市', '仙桃市', '十堰市', '荆州市', '孝感市', '神农架', '恩施州', '鄂州市', '武汉市', '潜江市', '荆门市', '天门市', '黄冈市', '宜昌市', '黄石市', '随州市', '襄阳市'];
      let temp;
      for (let y = 2018; y <= 2020; y++) {
        let max = 0;
        let sum = 0;
        temp = obj[y];
        for (let i = 0, l = temp.length; i < l; i++) {
          max = Math.max(max, temp[i]);
          sum += temp[i];
          obj[y][i] = {
            name: pList[i],
            value: temp[i]
          };
        }
        obj[y + 'max'] = Math.floor(max / 100) * 100;
        obj[y + 'sum'] = sum;
      }
      return obj;
    },
    getEchart () {
      let myChart = echarts.init(document.getElementById('chart_bp'));
      let itemStyleJR = {
        color: '#d6d638'
      }
      let itemStyleZW = {
        color: '#00c86c'
      }
      let itemStyleYL = {
        color: '#07d8ff'
      }
      let itemStyleIT = {
        color: '#0c71cf'
      }

      this.dataMap.dataxianning = this.dataFormatter({

        2020: [50],
        2019: [112],
        2018: [130],

      });

      this.dataMap.dataxiantao = this.dataFormatter({
        2020: [77],
        2019: [32],
        2018: [53],
      });

      this.dataMap.datashiyan = this.dataFormatter({
        2020: [534],
        2019: [453],
        2018: [42],
      });

      this.dataMap.datajingzhou = this.dataFormatter({
        2020: [42],
        2019: [342],
        2018: [43],
      });
      this.dataMap.dataxiaogan = this.dataFormatter({
        2020: [432],
        2019: [312],
        2018: [432],
      });
      this.dataMap.datashennongjia = this.dataFormatter({
        2020: [312],
        2019: [56],
        2018: [645],
      });
      this.dataMap.dataenshizhou = this.dataFormatter({
        2020: [867],
        2019: [243],
        2018: [423],
      });
      this.dataMap.dataezhou = this.dataFormatter({
        2020: [15],
        2019: [52],
        2018: [40],
      });
      this.dataMap.datawuhan = this.dataFormatter({
        2020: [139],
        2019: [423],
        2018: [153],
      });
      this.dataMap.dataqianjiang = this.dataFormatter({
        2020: [144],
        2019: [19],
        2018: [423],
      });
      this.dataMap.datajingmen = this.dataFormatter({
        2020: [11],
        2019: [25],
        2018: [22],
      });
      this.dataMap.datatianmen = this.dataFormatter({
        2020: [534],
        2019: [7],
        2018: [756],
      });
      this.dataMap.datahuanggang = this.dataFormatter({
        2020: [423],
        2019: [789],
        2018: [867],
      });
      this.dataMap.datayichang = this.dataFormatter({
        2020: [42],
        2019: [423],
        2018: [423],
      });
      this.dataMap.datahuangshi = this.dataFormatter({
        2020: [453],
        2019: [867],
        2018: [867],
      });
      this.dataMap.datasuizhou = this.dataFormatter({
        2020: [60],
        2019: [72],
        2018: [76],
      });
      this.dataMap.dataxiangyang = this.dataFormatter({
        2020: [534],
        2019: [543],
        2018: [239],
      });


      this.option = {
        baseOption: {
          timeline: {
            axisType: 'category',
            autoPlay: true,
            playInterval: 2000,
            data: ['2018-01-01', '2019-01-01', '2020-01-01'],
            lineStyle: {
              color: '#179bf1'
            },
            left: 10,
            right: 1,
            bottom: 72,
            label: {
              color: '#2867a8',
              formatter (s) {
                return (new Date(s)).getFullYear();
              }
            },
            checkpointStyle: {
              color: '#01d8ff',
              symbolSize: 10,
              borderColor: 'rgba(1, 216, 255, 0.5)',
              borderWidth: 5,
            },
            controlStyle: {
              showPlayBtn: false,
              borderColor: '#01bde6',
              itemGap: 20
            },
            itemStyle: {
              // color: '#004b85',
              borderColor: '#004b85',
              borderWidth: 1,
              shadowColor: 'rgba(1, 216, 225, 0.5)',
              shadowBlur: 5
            },
            emphasis: {
              label: {
                color: '#01d8ff',
                show: false
              },
              checkpointStyle: {
                color: '#01d8ff',
                borderColor: 'rgba(1, 216, 255, 0.5)',
                borderWidth: 5,
              },
              controlStyle: {
                borderColor: 'rgba(1, 216, 255, 0.5)'
              },
              itemStyle: {
                color: '#01d8ff',
                borderColor: 'rgba(1, 216, 225, 0.5)',
                borderWidth: 5
              }
            }
          },
          // tooltip: {
          //   trigger: 'item'
          // },
          grid: {
            top: '10%',
            bottom: '30%',
            x1: 1,
            y2: 1,
            x2: 10
          },
          calculable: true,
          xAxis: [
            {
              type: 'category',
              data: this.Xaxis,
              axisLabel: {
                interval: 0,
                rotate: 50,
                textStyle: {
                  color: '#fff'
                }
              },
              axisLine: {
                show: true,
                lineStyle: {
                  color: '#2867a8',
                }
              },
              textStyle: {
                color: '#FFF'
              },
              splitLine: {
                show: false
              },
              axisTick: {
                show: false
              },

              // axisLabel: {
              //   textStyle: {
              //     color: '#FFF'
              //   }
              // }
            }],
          yAxis: [{
            type: 'value',
            name: '大班额数量（个）',
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: '#2867a8'
              }
            },
          }],
          series: [{
            name: '联盟链',
            type: 'bar',
            barMaxWidth: 15,
            // center: ['20%', '65%'],
            // seriesLayoutBy: 'row',
            label: {
              show: true,
              position: 'top',
              color: '#fff'
            },
            markPoint: {
              symbol: 'pin',
              itemStyle: {
                normal: {
                  color: '#eb9b44',
                  shadowColor: '#eb9b44',
                  shadowBlur: 15
                }
              },
              data: [
                { type: 'max', name: '最大值' },
                { type: 'min', name: '最小值' }
              ]
            }
            // label: {
            //   show: true,
            //   position: 'top'
            // },
          },
            // {
            //   name: '应用占比',
            //   type: 'pie',
            //   center: ['78%', '45%'],
            //   radius: '28%',
            //   z: 100
            // }
          ]
        },
        options: [{
          series: [
            {
              data: [
                {
                  name: '咸宁市',
                  value: this.dataMap.dataxianning['2018sum'],
                  itemStyle: itemStyleIT
                },
                {
                  name: '仙桃市',
                  value: this.dataMap.dataxiantao['2018sum'],
                  itemStyle: itemStyleIT
                },
                {
                  name: '十堰市',
                  value: this.dataMap.datashiyan['2018sum'],
                  itemStyle: itemStyleIT
                },
                {
                  name: '荆州市',
                  value: this.dataMap.datajingzhou['2018sum'],
                  itemStyle: itemStyleIT
                },
                {
                  name: '孝感市',
                  value: this.dataMap.dataxiaogan['2018sum'],
                  itemStyle: itemStyleIT
                },
                {
                  name: '神农架',
                  value: this.dataMap.datashennongjia['2018sum'],
                  itemStyle: itemStyleIT
                },
                {
                  name: '恩施州',
                  value: this.dataMap.dataenshizhou['2018sum'],
                  itemStyle: itemStyleIT
                },
                {
                  name: '鄂州市',
                  value: this.dataMap.dataezhou['2018sum'],
                  itemStyle: itemStyleIT
                },
                {
                  name: '武汉市',
                  value: this.dataMap.datawuhan['2018sum'],
                  itemStyle: itemStyleIT
                },
                {
                  name: '潜江市',
                  value: this.dataMap.dataqianjiang['2018sum'],
                  itemStyle: itemStyleIT
                },
                {
                  name: '荆门市',
                  value: this.dataMap.datajingmen['2018sum'],
                  itemStyle: itemStyleIT
                },
                {
                  name: '天门市',
                  value: this.dataMap.datatianmen['2018sum'],
                  itemStyle: itemStyleIT
                },
                {
                  name: '黄冈市',
                  value: this.dataMap.datahuanggang['2018sum'],
                  itemStyle: itemStyleIT
                },
                {
                  name: '宜昌市',
                  value: this.dataMap.datayichang['2018sum'],
                  itemStyle: itemStyleIT
                },
                {
                  name: '黄石市',
                  value: this.dataMap.datahuangshi['2018sum'],
                  itemStyle: itemStyleIT
                },
                {
                  name: '随州市',
                  value: this.dataMap.datasuizhou['2018sum'],
                  itemStyle: itemStyleIT
                },
                {
                  name: '襄阳市',
                  value: this.dataMap.dataxiangyang['2018sum'],
                  itemStyle: itemStyleIT
                },
              ]
            }
          ]
        }, {
          series: [
            {
              data: [
                {
                  name: '咸宁市',
                  value: this.dataMap.dataxianning['2019sum'],
                  itemStyle: itemStyleIT
                },
                {
                  name: '仙桃市',
                  value: this.dataMap.dataxiantao['2019sum'],
                  itemStyle: itemStyleIT
                },
                {
                  name: '十堰市',
                  value: this.dataMap.datashiyan['2019sum'],
                  itemStyle: itemStyleIT
                },
                {
                  name: '荆州市',
                  value: this.dataMap.datajingzhou['2019sum'],
                  itemStyle: itemStyleIT
                },
                {
                  name: '孝感市',
                  value: this.dataMap.dataxiaogan['2019sum'],
                  itemStyle: itemStyleIT
                },
                {
                  name: '神农架',
                  value: this.dataMap.datashennongjia['2019sum'],
                  itemStyle: itemStyleIT
                },
                {
                  name: '恩施州',
                  value: this.dataMap.dataenshizhou['2019sum'],
                  itemStyle: itemStyleIT
                },
                {
                  name: '鄂州市',
                  value: this.dataMap.dataezhou['2019sum'],
                  itemStyle: itemStyleIT
                },
                {
                  name: '武汉市',
                  value: this.dataMap.datawuhan['2019sum'],
                  itemStyle: itemStyleIT
                },
                {
                  name: '潜江市',
                  value: this.dataMap.dataqianjiang['2019sum'],
                  itemStyle: itemStyleIT
                },
                {
                  name: '荆门市',
                  value: this.dataMap.datajingmen['2019sum'],
                  itemStyle: itemStyleIT
                },
                {
                  name: '天门市',
                  value: this.dataMap.datatianmen['2019sum'],
                  itemStyle: itemStyleIT
                },
                {
                  name: '黄冈市',
                  value: this.dataMap.datahuanggang['2019sum'],
                  itemStyle: itemStyleIT
                },
                {
                  name: '宜昌市',
                  value: this.dataMap.datayichang['2019sum'],
                  itemStyle: itemStyleIT
                },
                {
                  name: '黄石市',
                  value: this.dataMap.datahuangshi['2019sum'],
                  itemStyle: itemStyleIT
                },
                {
                  name: '随州市',
                  value: this.dataMap.datasuizhou['2019sum'],
                  itemStyle: itemStyleIT
                },
                {
                  name: '襄阳市',
                  value: this.dataMap.dataxiangyang['2019sum'],
                  itemStyle: itemStyleIT
                },
              ],
            },
            {
              data: [
                {
                  name: '咸宁市',
                  value: this.dataMap.dataxianning['2020sum'],
                  itemStyle: itemStyleIT
                },
                {
                  name: '仙桃市',
                  value: this.dataMap.dataxiantao['2020sum'],
                  itemStyle: itemStyleIT
                },
                {
                  name: '十堰市',
                  value: this.dataMap.datashiyan['2020sum'],
                  itemStyle: itemStyleIT
                },
                {
                  name: '荆州市',
                  value: this.dataMap.datajingzhou['2020sum'],
                  itemStyle: itemStyleIT
                },
                {
                  name: '孝感市',
                  value: this.dataMap.dataxiaogan['2020sum'],
                  itemStyle: itemStyleIT
                },
                {
                  name: '神农架',
                  value: this.dataMap.datashennongjia['2020sum'],
                  itemStyle: itemStyleIT
                },
                {
                  name: '恩施州',
                  value: this.dataMap.dataenshizhou['2020sum'],
                  itemStyle: itemStyleIT
                },
                {
                  name: '鄂州市',
                  value: this.dataMap.dataezhou['2020sum'],
                  itemStyle: itemStyleIT
                },
                {
                  name: '武汉市',
                  value: this.dataMap.datawuhan['2020sum'],
                  itemStyle: itemStyleIT
                },
                {
                  name: '潜江市',
                  value: this.dataMap.dataqianjiang['2020sum'],
                  itemStyle: itemStyleIT
                },
                {
                  name: '荆门市',
                  value: this.dataMap.datajingmen['2020sum'],
                  itemStyle: itemStyleIT
                },
                {
                  name: '天门市',
                  value: this.dataMap.datatianmen['2020sum'],
                  itemStyle: itemStyleIT
                },
                {
                  name: '黄冈市',
                  value: this.dataMap.datahuanggang['2020sum'],
                  itemStyle: itemStyleIT
                },
                {
                  name: '宜昌市',
                  value: this.dataMap.datayichang['2020sum'],
                  itemStyle: itemStyleIT
                },
                {
                  name: '黄石市',
                  value: this.dataMap.datahuangshi['2020sum'],
                  itemStyle: itemStyleIT
                },
                {
                  name: '随州市',
                  value: this.dataMap.datasuizhou['2020sum'],
                  itemStyle: itemStyleIT
                },
                {
                  name: '襄阳市',
                  value: this.dataMap.dataxiangyang['2020sum'],
                  itemStyle: itemStyleIT
                },
              ]
            }
          ]
        }
        ]
      }

      myChart.setOption(this.option, true);

      window.addEventListener('resize', () => {
        myChart.resize();
      });
    }
  },
  beforeDestroy () {

  }
};
</script>

<style lang="scss" scoped>
.sn-container {
    // position: relative;
    left: 50px;
    top: 186px;
    width: 600px;
    height: 444px;
    .chartsdom {
        position: absolute;
        top: -25px;
        width: 550px;
        height: 500px;
    }
}
.resize {
    position: absolute;
    right: 20px;
    top: 20px;
    // background: red;
}
.fullscreen {
    position: fixed !important;
    top: 0 !important;
    left: 10!important;
    width: 100% !important;
    height: 100% !important;
    margin: 0!important;
    z-index: 100;
}
</style>

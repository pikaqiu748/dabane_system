<!--
 描述: 金字塔趋势
 作者: Jack Chen
 日期: 2020-04-18
-->

<template>
  <div class="wrap-container sn-container">
    <dv-border-box-10 class="sn-content"></dv-border-box-10>
    <div class="sn-content">
      <div class="sn-title">初中近三年超大班额数量对比分布图</div>
      <div class="sn-body">
        <div class="wrap-container">
          <div class="chartsdom" id="chart_ptrend"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const echarts = require("echarts")

export default {
  name: "pyramidTrend",
  data () {
    return {
      option: null,
      dataMap: {}
    }
  },
  mounted () {
    this.getEchart();
  },
  methods: {
    dataFormatter (obj) {
      let pList = ['咸宁市', '仙桃市', '十堰市', '荆州市', '孝感市', '神农架', '恩施州', '鄂州市', '武汉市', '潜江市', '荆门市', '天门市', '黄冈市', '宜昌市', '黄石市', '随州市', '襄阳市'];
      let temp;
      for (let x = 0; x < 3; x++) {
        let max = 0;
        let sum = 0;
        temp = obj[x];
        for (let i = 0, l = temp.length; i < l; i++) {
          max = Math.max(max, temp[i]);
          sum += temp[i];
          obj[x][i] = {
            name: pList[i],
            value: temp[i]
          };
        }
        obj[x + 'max'] = Math.floor(max / 100) * 100;
        obj[x + 'sum'] = sum;
      }
      return obj;
    },
    getEchart () {
      let myChart = echarts.init(document.getElementById('chart_ptrend'));
      let itemStyle = {
        barBorderRadius: [15, 0],
        color: '#0084ff'
      }

      this.dataMap.dataType = this.dataFormatter({
        2: [44,
          15,
          35,
          25,
          142,
          0,
          142,
          27,
          35,
          1,
          1,
          0,
          207,
          0,
          1,
          47,
          102
        ],
        1: [258,
          28,
          72,
          138,
          110,
          0,
          255,
          45,
          43,
          4,
          15,
          34,
          232,
          0,
          59,
          71,
          231
        ],
        0: [510,
          62,
          107,
          337,
          262,
          1,
          531,
          2,
          94,
          9,
          69,
          105,
          334,
          10,
          116,
          69,
          604,
        ],
      });

      this.option = {
        baseOption: {
          timeline: {
            axisType: 'category',
            autoPlay: true,
            playInterval: 2000,
            data: ['2018', '2019', '2020'],
            left: 80,
            right: 80,
            bottom: 30,
            lineStyle: {
              color: '#179bf1'
            },
            label: {
              color: '#fff'
            },
            checkpointStyle: {
              color: '#01d8ff',
              symbolSize: 10,
              borderColor: 'rgba(1, 216, 255, 0.5)',
              borderWidth: 5,
            },
            controlStyle: {
              show: false,
            },
            itemStyle: {
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
              itemStyle: {
                color: '#01d8ff',
                borderColor: 'rgba(1, 216, 225, 0.5)',
                borderWidth: 5
              }
            }
          },
          calculable: true,
          grid: {
            top: '10%',
            bottom: '28%',
            x1: 1,
            y2: 1,
            x2: 10
          },
          xAxis: [{
            type: 'category',
            axisLabel: {
              interval: 0,
              // formatter: function(value) {
              //   return value.split("").join("\n");
              // }
              rotate: 50,
              textStyle: {
                color: '#FFF'
              }

            },
            data: ['咸宁市', '仙桃市', '十堰市', '荆州市', '孝感市', '神农架', '恩施州', '鄂州市', '武汉市', '潜江市', '荆门市', '天门市', '黄冈市', '宜昌市', '黄石市', '随州市', '襄阳市'],
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: '#2867a8',
              }
            },
          }],
          yAxis: [{
            type: 'value',
            name: '数量',
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
            }
          }],
          series: [{
            name: '一类',
            type: 'bar',
            barWidth: 15,
            legendHoverLink: true,
            label: {
              show: true,
              position: 'top',
              color: '#fff'
            },
          }]
        },
        options: [{
          series: [{
            data: this.dataMap.dataType['0'],
            itemStyle: itemStyle
          }]
        }, {
          series: [{
            data: this.dataMap.dataType['1'],
            itemStyle: itemStyle
          }]
        }, {
          series: [{
            data: this.dataMap.dataType['2'],
            itemStyle: itemStyle
          }]
        }]
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
    left: 615px;
    top: 636px;
    width: 760px;
    height: 450px;
    .chartsdom {
        width: 750px;
        height: 432px;
    }
}
</style>

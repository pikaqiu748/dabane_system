<!--
 描述: 市州近三年超大班额数量对比分布图
 作者: Jack Chen
 日期: 2020-04-18
-->

<template>
  <div class="wrap-container sn-container">
    <dv-border-box-10 class="sn-content"></dv-border-box-10>
    <div class="sn-content">
      <div class="sn-title">近三年各省份初中班额比例分布
        <el-button type="primary" class="xiaoxue-btn" @click="change4">大班额</el-button>
        <el-button type="primary" class="chuzhong-btn">超大班额</el-button>
      </div>
      <div class="sn-body">
        <div class="wrap-container">
          <div class="chartsdom" id="zuoxia02"></div>
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
    change4 () {
      this.$emit('zuoxiachao')
    },
    dataFormatter (obj) {
      let pList = ['长沙', '湘潭', '株洲', '岳阳', '邵阳', '衡阳', '益阳', '娄底', '怀化', '湘西', '张家界', '郴州', '常德', '永州'];
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
      let myChart = echarts.init(document.getElementById('zuoxia02'));
      let itemStyle = {
        barBorderRadius: [15, 0],
        color: '#0084ff'
      }

      this.dataMap.dataType = this.dataFormatter({
        2: [6.55, 5.88, 6.93, 4.77, 6.47, 2.63, 3.14, 1.88, 1.68, 0.38, 0.51, 0.49, 0.09, 0.05, 0.00, 0.00],
        1: [3.88, 3.44, 2.78, 2.78, 4.48, 1.39, 8.69, 0.77, 1.86, 6.51, 3.70, 0.66, 1.59, 0.00, 0.00, 0.00, 2.77],
        0: [3.19, 3.40, 2.88, 0.00, 5.74, 8.00, 8.88, 0.00, 1.89, 7.28, 4.72, 0.55, 1.77, 1.66, 2.88, 0.00, 5.98],
      });

      this.option = {
        baseOption: {
          timeline: {
            axisType: 'category',
            autoPlay: true,
            playInterval: 4000,
            data: ['2018', '2019', '2020'],
            left: 50,
            right: 30,
            bottom: 20,
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
            data: ['孝感市', '恩施州', '黄冈市', '鄂州市', '随州市', '襄阳市', '仙桃市', '咸宁市', '十堰市', '荆州市', '武汉市', '潜江市', '荆门市', '黄石市', '宜昌市', '天门市'],
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
            name: '百分比',
            splitLine: {
              show: false
            },
            axisLabel: {
              formatter: '{value} %'
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
              color: '#fff',
              // formatter: function (data) {
              //   return data.value + '%';
              // }
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
    left: 10px;
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
    left: 265px;
}
.chuzhong-btn {
    position: absolute;
    min-width: 5px;
    min-height: 5px;
    border-radius: 15px;
    // background: transparent;
    left: 335px;
}
</style>

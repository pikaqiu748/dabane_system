<!--
 描述: 市州近三年超大班额数量对比分布图
 作者: Jack Chen
 日期: 2020-04-18
-->

<template>
  <div class="wrap-container sn-container">
    <dv-border-box-10 class="sn-content"></dv-border-box-10>
    <div class="sn-content">
      <div class="sn-title">近三年各省份小学班额数量分布
        <el-button type="primary" class="xiaoxue-btn">大班额</el-button>
        <el-button type="primary" class="chuzhong-btn" @click="change4">超大班额</el-button>
      </div>
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
    change4 () {
      this.$emit('change4')
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
      let myChart = echarts.init(document.getElementById('chart_ptrend'));
      let itemStyle = {
        barBorderRadius: [15, 0],
        color: '#0084ff'
      }

      this.dataMap.dataType = this.dataFormatter({
        2: [2000, 469, 1478, 88, 2292, 676, 1905, 331, 883, 666, 555, 1111, 222, 444, 662, 27],
        1: [882, 309, 883, 44, 1111, 222, 1236, 147, 666, 884, 881, 882, 220, 539, 116, 252],
        0: [666, 222, 666, 22, 984, 222, 1236, 203, 580, 456, 691, 753, 258, 369, 147, 228]
      });

      this.option = {
        baseOption: {
          timeline: {
            axisType: 'category',
            autoPlay: true,
            playInterval: 4000,
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
            left: '10%'
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
            data: ['黄冈市', '仙桃市', '孝感市', '鄂州市', '恩施州', '随州市', '襄阳市', '潜江市', '十堰市', '咸宁市', '荆州市', '武汉市', '黄石市', '荆门市', '宜昌市', '天门市'],
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
            barCategoryGap: '100%'
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
    left: 616px;
    top: 635px;
    width: 690px;
    height: 450px;
    .chartsdom {
        width: 750px;
        height: 432px;
        position: absolute;
        top: -10px;
    }
}
.xiaoxue-btn {
    position: absolute;
    min-width: 5px;
    min-height: 5px;
    border-radius: 15px;
    //background: transparent;
    left: 265px;
}
.chuzhong-btn {
    position: absolute;
    min-width: 5px;
    min-height: 5px;
    border-radius: 15px;
    background: transparent;
    left: 335px;
}
</style>

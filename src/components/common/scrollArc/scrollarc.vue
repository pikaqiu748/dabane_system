<!--
 描述: 滚动弧形线
 作者: Jack Chen
 日期: 2020-04-20
-->

<template>
  <div class="wrap-container sn-container">
    <dv-border-box-10 class="sn-content"></dv-border-box-10>
    <div class="sn-content">
      <div class="sn-title">市州小学大班额比例增长分布图</div>
      <div class="sn-body">
        <div class="wrap-container">
          <div class="chartsdom" id="chart_arc"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const echarts = require("echarts")

export default {
  name: "scrollArc",
  data () {
    return {
      option: null,
      number: 0, // 播放所在下标
      timer: null,
      xData: ['武汉市', '襄阳市', '仙桃市', '荆州市', '荆门市', '恩施州', '十堰市', '黄冈市', '荆门市', '随州市', '鄂州市', '宜昌市', '神农架', '潜江市', '咸宁市', '黄石市', '天门市'],
      data: [54, 86, 46, 77, 96, 89, 88, 23, 38, 33, 66, 98, 54, 36, 76, 34, 66,],

    }
  },
  mounted () {
    this.getEchart();
  },
  methods: {
    getEchart () {
      let myChart = echarts.init(document.getElementById('chart_arc'));
      this.option = {
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
          data: this.xData,
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
            show: false,
            lineStyle: {
              color: '#999'
            }
          },

        },
        series: [{
          name: '人数',
          type: 'line',
          data: this.data,
          symbolSize: 10,
          label: {
            show: true,
            formatter: function (data) {
              return data.value + '%';
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
      };
      myChart.setOption(this.option, true);

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

        if (this.number > this.data.length) {
          this.number = 0;
        }
      }, 1000);
    }
  },
  beforeDestroy () {
    clearInterval(this.timer);
  }
};
</script>

<style lang="scss" scoped>
.sn-container {
    left: 10px;
    top: 610px;
    width: 600px;
    height: 450px;
    .chartsdom {
        position: absolute;
        top: -10px;
        width: 600px;
        height: 103%;
    }
}
</style>

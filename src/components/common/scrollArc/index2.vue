<!--
 描述: 滚动弧形线
 作者: Jack Chen
 日期: 2020-04-20
-->

<template>
  <div class="wrap-container sn-container">
    <dv-border-box-10 class="sn-content"></dv-border-box-10>
    <div class="sn-content">
      <div class="sn-title">初中大班额比例增长分布图</div>
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
      xData: ['咸宁市', '仙桃市', '十堰市', '荆州市', '孝感市', '神农架', '恩施州', '鄂州市', '武汉市', '潜江市', '荆门市', '天门市', '黄冈市', '宜昌市', '黄石市', '随州市', '襄阳市'],
      data: [-0.80, 1.26, 0.93, -3.21, 3.31, -0.09, -3.47, 0.86, 1.49, -0.68, -1.56, -1.44, 6.77, -0.94, -3.08, 1.06, -0.41],
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
      }, 2000);
    }
  },
  beforeDestroy () {
    clearInterval(this.timer);
  }
};
</script>

<style lang="scss" scoped>
.sn-container {
    left: 50px;
    top: 636px;
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

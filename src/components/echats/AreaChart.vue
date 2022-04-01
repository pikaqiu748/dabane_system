<template>
  <div class="wrap-container sn-container">
    <dv-border-box-10 class="sn-content"></dv-border-box-10>
    <div class="sn-content">
      <div class="sn-title">市州小学超大班额比例分布图</div>
      <div class="sn-body">
        <div class="wrap-container">
          <div class="chartsdom1" id="AreaChart1" style="width: 850px;height: 500px;"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import * as echarts from 'echarts';
export default{
  components:{
    echarts

  },
  mounted(){
    var chartDom = document.getElementById('AreaChart1');
var myChart = echarts.init(chartDom);
var option;

setTimeout(function () {
  option = {
    legend: {},
    tooltip: {
      trigger: 'axis',
      showContent: false
    },
    dataset: {
      source: [
        ['product', '武汉市', '襄阳市', '仙桃市', '荆州市', '荆门市', '恩施州', '十堰市', '黄冈市', '荆门市', '随州市', '鄂州市', '宜昌市', '神农架', '潜江市', '咸宁市', '黄石市', '天门市'],
        ['武汉市', 56.5, 82.1, 88.7, 70.1, 53.4, 85.1,51.1, 51.4, 55.1, 53.3, 73.8, 68.7,40.1, 62.2, 69.5, 36.4, 45.2],
        ['襄阳市', 51.1, 51.4, 55.1, 53.3, 73.8, 68.7,40.1, 62.2, 69.5, 36.4, 45.2, 32.5,25.2, 37.1, 41.2, 18, 33.9, 49.1],
        ['宜昌市', 40.1, 62.2, 69.5, 36.4, 45.2, 32.5,56.5, 82.1, 88.7, 70.1, 53.4, 85.1, 51.1, 51.4, 55.1, 53.3, 73.8, 68.7],
        ['仙桃市', 25.2, 37.1, 41.2, 18, 33.9, 49.1,40.1, 62.2, 69.5, 36.4, 45.2, 32.5,51.1, 51.4, 55.1, 53.3, 73.8, 68.7]
      ]
    },
    xAxis: { 
      type: 'category',
      axisLabel:{
            interval:0,
            rotate: 50,
              textStyle: {
                color: '#FFF'
              }
        } 
    },
    yAxis: { gridIndex: 0 },
    grid: { top: '55%' },
    series: [
      {
        type: 'line',
        smooth: true,
        seriesLayoutBy: 'row',
        emphasis: { focus: 'series' }
      },
      {
        type: 'line',
        smooth: true,
        seriesLayoutBy: 'row',
        emphasis: { focus: 'series' }
      },
      {
        type: 'line',
        smooth: true,
        seriesLayoutBy: 'row',
        emphasis: { focus: 'series' }
      },
      {
        type: 'line',
        smooth: true,
        seriesLayoutBy: 'row',
        emphasis: { focus: 'series' }
      },
      {
        type: 'pie',
        id: 'pie',
        radius: '30%',
        center: ['50%', '25%'],
        emphasis: {
          focus: 'self'
        },
        label: {
          formatter: '{b}: {@2012} ({d}%)'
        },
        encode: {
          itemName: 'product',
          value: '2012',
          tooltip: '2012'
        }
      }
    ]
  };
  myChart.on('updateAxisPointer', function (event) {
    const xAxisInfo = event.axesInfo[0];
    if (xAxisInfo) {
      const dimension = xAxisInfo.value + 1;
      myChart.setOption({
        series: {
          id: 'pie',
          label: {
            formatter: '{b}: {@[' + dimension + ']} ({d}%)'
          },
          encode: {
            value: dimension,
            tooltip: dimension
          }
        }
      });
    }
  });
  myChart.setOption(option);
});

option && myChart.setOption(option);



  },
  methods:{

  }

}
</script>
<style lang="scss" scoped>
.sn-container {
    left:616px;
    top: 74px;
    width: 758px;
    height: 530px;
    .chartsdom1{
      left:-30px;
    }

}
</style>
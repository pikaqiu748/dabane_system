<template>
  <div class="wrap-container sn-container">
    <dv-border-box-10 class="sn-content"></dv-border-box-10>
    <div class="sn-content">
      <div class="sn-title">市州小学大班额比例分布图</div>
      <div class="sn-body">
        <div class="wrap-container">
          <div class="chartsdom1" id="scatter11" style="width: 530px;height: 480px;"></div>
        </div>
      </div>
    </div>
  </div>
  
</template>
<script>
import * as echarts from 'echarts';

export default {

  mounted(){
    var chartDom = document.getElementById('scatter11');
var myChart = echarts.init(chartDom);
var option;
const city=['武汉市', '襄阳市', '仙桃市', '荆州市', '荆门市', '恩施州', '十堰市', '黄冈市', '荆门市', '随州市', '鄂州市', '宜昌市', '神农架林区', '潜江市', '咸宁市', '黄石市', '天门市']

option = {
  xAxis: {
    name:'数量',
    axisLabel: {
      // formatter: '{value}',
      textStyle: {
        color: '#FFF'
      },

    },

  },
  yAxis: {
    name:'比例',
    axisLabel: {
      formatter: '{value}%',
      textStyle: {
        color: '#FFF'
      },

    },
  },
  series: [
    {
     
      symbolSize: 10,
      data: [
        [10.0, 8.04],
        [8.07, 6.95],
        [13.0, 7.58],
        [9.05, 8.81],
        [11.0, 8.33],
        [14.0, 7.66],
        [13.4, 6.81],
        [10.0, 6.33],
        [14.0, 8.96],
        [12.5, 6.82],
        [9.15, 7.2],
        [11.5, 7.2],
        [3.03, 4.23],
        [12.2, 7.83],
        [2.02, 4.47],
        [1.05, 3.33],
        [4.05, 4.96],
        [6.03, 7.24],
        [12.0, 6.26],
        [12.0, 8.84],
        [7.08, 5.82],
        [5.02, 5.68]
      ],
      type: 'scatter',
      itemStyle:{
        normal:{
          label:{
          show:true,
          position:'top',
          formatter:param =>{
            for (let index = 0; index < city.length; index++) {
              const element = city[index];
              return element
            }
          }
        }
        }


      },

    }
  ]
};

option && myChart.setOption(option);
  }

}
</script>

<style scoped>
.sn-container {
    left:1380px;
    top: 74px;
    width: 530px;
    height: 530px;


}

</style>
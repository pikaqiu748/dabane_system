<template>
  <div id="main3" style="width: 400px;height: 350px;" ></div>
</template>

<script>
import * as echarts from 'echarts';
export default {
  components:{
    echarts,
  },
  mounted() {
    var app = {};

    var chartDom = document.getElementById('main3');
    var myChart = echarts.init(chartDom,'dark');
    var option;

    option = {
        // title:{
        //   text:'近三年大班额整体分布',
        //   padding:[20,0,0,0],
        // },
        toolbox: {
            feature: {
                dataView: {show: true, readOnly: false},
                magicType: {show: false, type: ['line', 'bar']},
                restore: {show: true},
                saveAsImage: {show: true}
            }
        },
        legend: {},
        tooltip: {},
        dataset: {
            source: [
                ['product', '2020', '2019', '2018'],
                ['大班额数量', 43.3, 85.8, 93.7],
                ['超大班额数量', 33.1, 43.4, 55.1],
      
            ]
        },
        xAxis: {type: 'category'},
        yAxis: {},
        // Declare several bar series, each will be mapped
        // to a column of dataset.source by default.
        series: [
            {
              type: 'bar',
              label:{
                    show:true,
                    position:'top',
                    color:'#ffccff'
                }
            
            },
            {type: 'bar',
              label:{
                    show:true,
                    position:'top',
                    color:'#ffccff'
                }},
            {type: 'bar',
              label:{
                    show:true,
                    position:'top',
                    color:'#ffccff'
                }},
        ]
    };

    option && myChart.setOption(option);

  }
}
</script>

<style>
</style>

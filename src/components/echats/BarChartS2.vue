<template>
  <div id="main2" style="width: 400px;height: 350px;" ></div>
</template>

<script>
import * as echarts from 'echarts';
export default {
  components:{
    echarts,
  },
  mounted() {
    var app = {};

    var chartDom = document.getElementById('main2');
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
                ['大班额比例', 46.4, 65.2, 82.5],
                 ['超大班额比例', 42.4, 53.9, 39.1],
                // ['宜昌市', 46.4, 65.2, 82.5],
                // ['荆门市', 72.4, 53.9, 39.1],
                // ['仙桃市', 84.5, 65.4, 38.6],
                // ['咸宁市', 72.4, 53.9, 39.1],
                // ['荆州市', 72.4, 53.9, 39.1],
                // ['孝感市', 72.4, 53.9, 39.1],
                // ['黄冈市', 72.4, 53.9, 39.1],
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

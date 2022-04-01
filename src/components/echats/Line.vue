<template>
  <div id="main" style="width: 1000px;height: 350px;"></div>
</template>

<script>
import * as echarts from 'echarts';
export default {

  components:{
    echarts
  },
  mounted() {
    var chartDom = document.getElementById('main');
    var myChart = echarts.init(chartDom);
    var option;

    option = {
        title: {
            text: '近三年大班额市州分布'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['2020', '2019', '2018']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['武汉市', '襄阳市', '宜昌市', '荆州市', '荆门市', '仙桃市', '黄冈市']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name: '2020',
                type: 'line',
                stack: '总量',
                data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
                name: '2019',
                type: 'line',
                stack: '总量',
                data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
                name: '2018',
                type: 'line',
                stack: '总量',
                data: [150, 232, 201, 154, 190, 330, 410]
            },

        ]
    };

    option && myChart.setOption(option);

}
}
</script>

<style>
</style>

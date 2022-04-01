<template>
  <div id="nb3" style="width: 500px;height: 350px;"></div>
</template>


<script>
import * as echarts from 'echarts'

export default {
  components:{
    echarts
  },
  mounted(){
    var chartDom = document.getElementById('nb3');
    var myChart = echarts.init(chartDom, 'dark');
    var option;

    option = {
      toolbox: {
            feature: {
                dataView: {show: true, readOnly: false},
                magicType: {show: false, type: ['line', 'bar']},
                restore: {show: true},
                saveAsImage: {show: true}
            }
        },
        
        xAxis: {
            type: 'category',
            data: ['武汉市', '襄阳市', '仙桃市', '荆州市', '荆门市', '恩施州', '十堰市', '黄冈市', '荆门市', '随州市', '鄂州市', '宜昌市', '神农架林区', '潜江市','咸宁市','黄石市','天门市'],
            axisLabel:{
              interval:0,
              rotate:50
            }
        },
        yAxis: {
          
            type: 'value',
            name:'消除比例',
            axisLabel:{
              formatter:'{value} %'
            }
        },
        series: [{
            
            data: [-0.34,-1.4,-3.4,-4.0,2.3,3.5,5.3,5,7, 6.8, 7.2, 8.1, 10, 11.2, 13.0,14.5,17.1,17.2],
            type: 'bar',
            itemStyle:{
              normal:{
                label:{
                  show:true,
                  position:'top',
                  textStyle:{
                    color:'white',
                    fontSize:11
                  }
                }
              }
            }
        }]
    };

    option && myChart.setOption(option);


  }
}
</script>

<style scoped>

</style>

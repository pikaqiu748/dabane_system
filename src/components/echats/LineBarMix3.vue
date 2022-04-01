<template>
  <div id="lb3" style="width: 1050px;height: 350px;"></div>
</template>


<script>
import * as echarts from 'echarts';
import {GetmiddleDa} from 'api/yyshizhou'

export default {
  components:{
    echarts

  },data(){
    return{
        barnum:[],
        xname:[],
        linenum:{},
        num:[],
        result:0,
        percentage:[]
    }
  },
  mounted(){//最先执行
    let chartDom = document.getElementById('lb3');
    let myChart = this.$echarts.init(chartDom, 'dark');
    myChart.setOption({
    tooltip: {
    trigger: 'axis',
    axisPointer: {
        type: 'cross',
        crossStyle: {
            color: '#999'
        }
    }
    },
    toolbox: {
    feature: {
        dataView: {show: true, readOnly: false},
        magicType: {show: false, type: ['line', 'bar']},
        restore: {show: true},
        saveAsImage: {show: true}
    }
    },
    legend: {
    data: ['数量',  '百分比']
    },
    xAxis: [
    {
        type: 'category',
        //data: ['武汉市', '襄阳市', '仙桃市', '荆州市', '荆门市', '恩施州', '十堰市', '黄冈市', '荆门市', '随州市', '鄂州市', '宜昌市', '神农架林区', '潜江市','咸宁市','黄石市','天门市'],
        data:'',
        axisPointer: {
            type: 'shadow'
        },
        axisLabel:{
            interval:0
        }
    }
    ],
    yAxis: [
    {
        type: 'value',
        name: '大班额数量',
        min: 0,
        max: 1300,
        interval: 100,
        axisLabel: {
            formatter: '{value} '
        }
    },
    {
        type: 'value',
        name: '大班额比例',
        min: 0,
        max: 25,
        interval: 5,
        axisLabel: {
            formatter: '{value} %'
        }
    }
    ],
    series: [
    {
        name: '数量',
        type: 'bar',
        //data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3,13.4,2.3,5.4,6.5,7.3],
        data:'',
        label:{
            show:true,
            position:'top'
        }
    },
    // {
    //     name: '降水量',
    //     type: 'bar',
    //     data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3,4.5,3.5,4.7,5.4,7.6]
    // },
    {
        name: '百分比',
        type: 'line',
        yAxisIndex: 1,
        data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2,3.4,7.6,4.6,3.4,7.5],
        label:{
            show:true,
            position:'top',
            color:'#ffccff',
            formatter:'{c}%'
        }
    },



    ]

    });
    GetmiddleDa().then(({ data }) =>{
        this.barnum=Object.values(data.data)
        this.xname=Object.keys(data.data)
        console.log(this.barnum)
        console.log(this.xname)
        for (let i = 0; i < this.barnum.length; i++) {
            this.result = this.result + this.barnum[i];
            
        }
        console.log(this.result);
        for (let i = 0; i < this.barnum.length; i++) {
            this.percentage[i]=this.barnum[i]/this.result*100;
            this.percentage[i]=Math.round(this.percentage[i]*101)/100
            
        }
        console.log(this.percentage)
        myChart.setOption({
            xAxis:{
                data:this.xname
            },
            series:[{
                data:this.barnum
            },
            {
                data:this.percentage
            }
            ]
        })
    }).catch(err =>{
        console.log(err)
    });


}
}
</script>
<style scoped>

</style>
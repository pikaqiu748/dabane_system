<template>
  <div id="lb1" style="width: 1050px;height: 350px;"></div>
</template>


<script>
import * as echarts from 'echarts';
import {GetprimaryDa} from 'api/yyshizhou.js'

export default {
  components:{
    echarts
  },
  data(){
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
    let chartDom = document.getElementById('lb1');
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
        max: 2500,
        interval: 200,
        axisLabel: {
            formatter: '{value} '
        }
    },
    {
        type: 'value',
        name: '大班额比例',
        min: 0,
        max: 17,
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
        data:'',
        label:{
            show:true,
            position:'top'
        }
    },
    {
        name: '百分比',
        type: 'line',
        yAxisIndex: 1,
        data: '',
        label:{
            show:true,
            position:'top',
            color:'#ffccff',
            formatter:'{c}%'
        }
    },
    ]
    });
    /*-----------获取bar,line数据-----------------*/ 
    GetprimaryDa().then(({ data }) =>{
        this.barnum=Object.values(data.data);
        this.xname=Object.keys(data.data);
        console.log(this.barnum);
        console.log(this.xname);
        for (let i = 0; i < this.barnum.length; i++) {
            this.result = this.result + this.barnum[i];
            
        }
        console.log(this.result);
        for (let i = 0; i < this.barnum.length; i++) {
            this.percentage[i]=this.barnum[i]/this.result*100;
            this.percentage[i]=Math.round(this.percentage[i]*100)/100
            
        }
        console.log(this.percentage)
        myChart.setOption({
            xAxis:{
                data:this.xname
            },
            series:[{
                data:this.barnum
            },{
                data:this.percentage
            }
            ]
        })
    }).catch(err =>{
        console.log(err)
    });
   


},

}
</script>
<style scoped>

</style>
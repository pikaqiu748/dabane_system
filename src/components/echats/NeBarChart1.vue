<template>
  <div id="nb1" style="width: 500px;height: 350px;"></div>
</template>


<script>
import * as echarts from 'echarts';
import {GetprimaryDa} from 'api/yyshizhou.js';
import {GetprimaryDa19} from 'api/yyshizhou.js';

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
        percentage:[],
        barnum1:[],
        xname1:[],
        linenum1:{},
        num1:[],
        result1:0,
        percentage1:[],
        xiaochupercentage:[]
    }
  },
  mounted(){
    var chartDom = document.getElementById('nb1');
    var myChart = echarts.init(chartDom, 'dark');
    myChart.setOption({
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
            data:'',
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
            
            data: '',
            type: 'bar',
            itemStyle:{
              normal:{
                label:{
                  show:true,
                  position:'top',
                  formatter:'{c}%',
                  textStyle:{
                    color:'white',
                    fontSize:11
                  }
                }
              }
            }
        }]
    })
  
    
    /*-----------获取2020bar,line数据-----------------*/ 
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
            this.percentage[i]=Math.round(this.percentage[i]*101)/100
            
        }
        console.log(this.percentage);
        // GetprimaryDa19();
        }).catch(err =>{
            console.log(err)
            });
    /*-----------获取2019bar,line数据-----------------*/ 
    GetprimaryDa19().then(({ data }) =>{
        this.barnum1=Object.values(data.data);
        this.xname1=Object.keys(data.data);
        console.log(this.barnum1,'2019');
        console.log(this.xname1,'2019');
        for (let i = 0; i < this.barnum1.length; i++) {
            this.result1 = this.result1 + this.barnum1[i];
            
        }
        console.log(this.result1);
        for (let i = 0; i < this.barnum1.length; i++) {
            this.percentage1[i]=this.barnum1[i]/this.result1*100;
            this.percentage1[i]=Math.round(this.percentage1[i]*100)/100
            
        }
        console.log(this.percentage1,'2019')
        for (let i = 0; i < this.percentage1.length; i++) {
          this.xiaochupercentage[i]=this.percentage1[i]-this.percentage[i]
          this.xiaochupercentage[i]=Math.round(this.xiaochupercentage[i]*100)/100
          
        }
        console.log(this.xiaochupercentage,'消除比例');
        myChart.setOption({
            xAxis:{
                data:this.xname1
            },
            series:[{
                data:this.xiaochupercentage
            }
            ]

        })
    
  })
}   
}

</script>

<style scoped>

</style>

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
        barnum:{},
        linenum:{}
    }
  },
  methods:{
    //   GetprimaryDa(){
    //         GetprimaryDa().then(res =>{
    //        console.log(res)
    //        this.barnum=res.data.data
    //    }).catch(err =>{
    //        console.log(err)
    //    })

    //     }
    },
  created(){
    //this.GetprimaryDa()
  },
   mounted(){
 
    var chartDom = document.getElementById('lb1');
    var myChart = echarts.init(chartDom, 'dark');
    //var option;
    var num =[];
    var shizhou=["咸宁",
    "仙桃",
    "十堰",
    "荆州",
    "孝感",
    "神农架",
    "土家族",
    "鄂州",
    "武汉",
    "潜江",
    "荆门",
    "天门",
    "黄冈",
    "宜昌",
    "黄石",
    "随州",
    "襄阳"];
    $.ajax({
        type: "get",
        async : true,            //异步请求（同步请求将会锁住浏览器，用户其他操作必须等待请求完成才可以执行）
        url: "/zxxs/xs/jbxx/merge/1/55/65/area",
        data : {},
        dataType : "json",
        success: function(result){
            console.log(result,'查询成功');
            num=Object.values(result.data)
                if (result) {
                    // for(var i=0;i<result.length;i++){
                    //     names.push(result[i].name);    //挨个取出考试名称并填入类别数组
                    //     values.push(result[i].passNum); //挨个取出及格人数并填入类别数组
                    //  }
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
                                    data:shizhou,
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
                                    max: 250,
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
                                    data:num,
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
                                        color:'#ffccff'
                                    }
                                }
                            ]
                        })
                }//if
        }//success
           

    })//ajax
  }
}
</script>
<style scoped>

</style>
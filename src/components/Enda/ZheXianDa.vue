<template>
  <div id="zhexian857" style="width: 100%;height: 330px;"></div>
</template>

<script>

import {getToschoolallyears} from 'api/request'
const echarts = require("echarts")

import 'echarts/theme/blue.js'
export default {
  name: "ToSchoolYearshizhou",
  data () {
    return {
      bigpuxiao2019: [599, 261, 744, 717, 720, 1, 616, 34, 1068, 127, 334, 90, 1066, 321, 231, 253, 931],
      bigpuxiao2018: [706, 405, 1173, 1220, 946, 1, 842, 28, 1641, 192, 538, 265, 1466, 517, 715, 638, 1388],
      cities:[],
      gradeType:[],
      tempData:[]


    }
  },
   mounted () {
    this.GETtoschoolallyears()
    
    
  },
  methods: {
     GETtoschoolallyears(){
      getToschoolallyears().then(res => {
        var tempData = res.data.data
        //   console.log(tempData)
        //   console.log(res)
        var cities = ["咸宁", "仙桃", "十堰", "荆州", "孝感", "神农架", "土家族", "鄂州", "武汉", "潜江", "荆门", "天门", "黄冈", "宜昌", "黄石", "随州", "襄阳"]
        var gradeType = ['2018', '2019', '2020']
        for (let i = 0; i < 17; i++) {
          this.one.push(tempData[i][cities[i]][gradeType[0]])
          this.two.push(tempData[i][cities[i]][gradeType[1]])
          this.three.push(tempData[i][cities[i]][gradeType[2]])
          // this.four.push(tempData[i][cities[i]][gradeType[3]])
          // this.five.push(tempData[i][cities[i]][gradeType[4]])
          // this.six.push(tempData[i][cities[i]][gradeType[5]])
          // this.seven.push(tempData[i][cities[i]][gradeType[6]])
          // this.eight.push(tempData[i][cities[i]][gradeType[7]])
          // this.nine.push(tempData[i][cities[i]][gradeType[8]])
        }
        this.getEchart(gradeType, cities, this.one, this.two, this.three)
      })
      },
      
    getEchart (gradeType, cities, one, two, three) {

      this.myChart = echarts.init(document.getElementById('zhexian857'), 'dark');
      let itemStyle = {
        normal: {
          label: {
            show: true, //开启显示
            position: 'top', //在上方显示
            textStyle: { //数值样式
              color: 'pink',
              fontSize: 11
            }
          },
        }
      }
      this.option = {
        title: {
          text: '大班额入学年份市州分布',
          subtext: '近三年情况'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          x: 'right',
          data: ['2020|小学', '2020|初中','2019|小学','2019|初中','2018|小学', '2018|初中']
          //data: ['2020|小学', '2020|初中','2019|小学','2019|初中','2018|小学', '2018|初中']
        },
        toolbox: {
          show: true,
          orient: 'vertical',
          y: 'center',
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true }
          },
        },
        calculable: true,
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: ["咸宁", "仙桃", "十堰", "荆州", "孝感", "神农架", "恩施州", "鄂州", "武汉", "潜江", "荆门", "天门", "黄冈", "宜昌", "黄石", "随州", "襄阳"],
            axisLabel: {
              interval: 0
            }
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '2018|小学',
            type: 'line',
            // stack: '总量',
            data: one,
            itemStyle: itemStyle

          },
          {
            name: '2020|初中',
            type: 'line',
            // stack: '总量',
            data: [497, 399, 883, 500, 969, 0, 702, 45, 1156, 151, 280, 57, 1445, 262, 182, 339, 1041],
            itemStyle: itemStyle

          },
          {
            name: '2019|小学',
            type: 'line',
            // stack: '总量',
            data: two,
            itemStyle: itemStyle

          },
          {
            name: '2019|初中',
            type: 'line',
            // stack: '总量',
            data: [497, 399, 588, 222, 111, 6, 999, 11, 1522, 66, 200, 37, 1111, 200, 135, 346, 1222],
            itemStyle: itemStyle

          },
          {
            name: '2020|小学',
            type: 'line',
            // stack: '总量',
            data:three,
            itemStyle: itemStyle

          },
          {
            name: '2018|初中',
            type: 'line',
            // stack: '总量',
            data:this.bigpuxiao2018,
            itemStyle: itemStyle

          },

        ]
      };

      this.myChart.setOption(this.option, true);
    }
  },
 
  
}

</script>


<style scoped>
</style>

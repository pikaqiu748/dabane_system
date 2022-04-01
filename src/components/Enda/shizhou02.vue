<template>
  <div>
    <div id="GradeLine03" style="width: 100%;height: 330px;"></div>
  </div>
</template>

<script>
import { getToschoolallyears3 } from '../../api/request'
const echarts = require('echarts')
export default {
  name: "getToschoolallyears3",
  data() {
    return {
      cityIndex: [],
      gradeType: [],
      cities: [],
      one: [],
      two: [],
      three: [],

    }
  },
  mounted() {
    this.getToschoolallyears3();
  },
  methods: {
    getToschoolallyears3() {
      getToschoolallyears3().then(res => {
        var tempData = res.data.data
        //   console.log(tempData)
        //   console.log(res)
        var cities = ["咸宁", "仙桃", "十堰", "荆州", "孝感", "神农架", "土家族", "鄂州", "武汉", "潜江", "荆门", "天门", "黄冈", "宜昌", "黄石", "随州", "襄阳"]
        var gradeType = ['2018', '2019', '2020']
        for (let i = 0; i < 17; i++) {
          this.one.push(tempData[i][cities[i]][gradeType[0]])
          this.two.push(tempData[i][cities[i]][gradeType[1]])
          this.three.push(tempData[i][cities[i]][gradeType[2]])
      
        }
        this.getEchart(gradeType, cities, this.one, this.two, this.three)
      })
    },
    getEchart(gradeType, cities, one, two, three) {
      this.myChart = echarts.init(document.getElementById('GradeLine03'), 'dark');
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
          text: '初中大班额入学年份市州分布',
          subtext: '近三年情况'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          x: 'right',
          data: ['2020|初中', '2019|初中','2018|初中']
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
            name: '2018|初中',
            type: 'line',
            // stack: '总量',
            data: one,
            itemStyle: itemStyle

          },
          
          {
            name: '2019|初中',
            type: 'line',
            // stack: '总量',
            data: two,
            itemStyle: itemStyle

          },
          
          {
            name: '2020|初中',
            type: 'line',
            // stack: '总量',
            data:three,
            itemStyle: itemStyle

          },
        
        ]
      }

      this.myChart.setOption(this.option, true);

    }
  },
  beforeDestroy() {

  }
};
</script>

<style lang="scss" scoped>
</style>

<template>
  <div>
    <div id="GradeLine05" style="width: 100%;height: 330px;"></div>
  </div>
</template>

<script>
import { getBigGradeAll2018 } from '../../api/request'
const echarts = require('echarts')
export default {
  name: "GradeLine05",
  data() {
    return {
      cityIndex: [],
      gradeType: [],
      cities: [],
      one: [],
      two: [],
      three: [],
      four: [],
      five: [],
      six: [],
      seven: [],
      eight: [],
      nine: []
    }
  },
  mounted() {
    this.getBigGradeAll2018();
  },
  methods: {
    getBigGradeAll2018() {
      getBigGradeAll2018().then(res => {
        var tempData = res.data.data
        //   console.log(tempData)
        //   console.log(res)
        var cities = ["咸宁", "仙桃", "十堰", "荆州", "孝感", "神农架", "土家族", "鄂州", "武汉", "潜江", "荆门", "天门", "黄冈", "宜昌", "黄石", "随州", "襄阳"]
        var gradeType = ['小学一年级', '小学二年级', '小学三年级', '小学四年级', '小学五年级', '小学六年级', '初中一年级', '初中二年级', '初中三年级']
        for (let i = 0; i < 17; i++) {
          this.one.push(tempData[i][cities[i]][gradeType[0]])
          this.two.push(tempData[i][cities[i]][gradeType[1]])
          this.three.push(tempData[i][cities[i]][gradeType[2]])
          this.four.push(tempData[i][cities[i]][gradeType[3]])
          this.five.push(tempData[i][cities[i]][gradeType[4]])
          this.six.push(tempData[i][cities[i]][gradeType[5]])
          this.seven.push(tempData[i][cities[i]][gradeType[6]])
          this.eight.push(tempData[i][cities[i]][gradeType[7]])
          this.nine.push(tempData[i][cities[i]][gradeType[8]])
        }
        this.getEchart(gradeType, cities, this.one, this.two, this.three, this.four, this.five, this.six, this.seven, this.eight, this.nine)
      })
    },
    getEchart(gradeType, cities, one, two, three, four, five, six, seven, eight, nine) {
      this.myChart = echarts.init(document.getElementById('GradeLine05'), 'dark');
      this.option = {
        title: {
          text: '2018年大班额年级类型市州分布'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: gradeType
          //['小学一年级', '小学二年级', '小学三年级', '小学四年级', '小学五年级', '小学六年级', '初中一年级', '初中二年级', '初中三年级']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: {
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: cities
          //  ['武汉', '黄石', '十堰', '宜昌', '襄阳', '鄂州', '荆门','孝感','荆州','黄冈','咸宁','随州','土家族','仙桃','潜江','天门','神农架']
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            formatter: '{value}(个)'
          }
        },
        series: [
          {
            name: '小学一年级',
            type: 'line',
            stack: '总量',
            data: one
            // data: [82, 23, 74, 5, 47, 3, 4, 146, 33, 154, 17, 30, 36, 36, 7, 0, 0]
          },
          {
            name: '小学二年级',
            type: 'line',
            stack: '总量',
            data: two,
            // data: [232, 24, 151, 37, 160, 9, 42, 151, 48, 272, 93, 83, 129, 60, 14, 1, 0]
          },
          {
            name: '小学三年级',
            type: 'line',
            stack: '总量',
            data: three
            // data: [153, 35, 189, 1, 201, 7, 48, 185, 101, 283, 99, 69, 143, 48, 46, 18, 0]
          },
          {
            name: '小学四年级',
            type: 'line',
            stack: '总量',
            data: four
            // data: [170, 30, 142, 59, 183, 5, 61, 167, 103, 259, 92, 54, 115, 87, 24, 14, 0]
          },
          {
            name: '小学五年级',
            type: 'line',
            stack: '总量',
            data: five
            // data: [217, 34, 152, 43, 227, 7, 69, 151, 95, 240, 92, 46, 137, 85, 33, 13, 0]
          },
          {
            name: '小学六年级',
            type: 'line',
            stack: '总量',
            data: six
            // data: [237, 36, 175, 61, 225, 14, 56, 169, 120, 237, 104, 57, 142, 83, 27, 11, 0]
          },
          {
            name: '初中一年级',
            type: 'line',
            stack: '总量',
            data: seven
            // data: [139, 20, 85, 1, 115, 15, 11, 176, 81, 292, 50, 60, 46, 77, 14, 0, 1]
          },
          {
            name: '初中二年级',
            type: 'line',
            stack: '总量',
            data: eight
            // data: [193, 31, 148, 8, 185, 52, 25, 139, 94, 411, 112, 72, 155, 32, 19, 1, 0]
          },
          {
            name: '初中三年级',
            type: 'line',
            stack: '总量',
            data: nine
            // data: [153, 62, 124, 8, 229, 40, 22, 120, 170, 283, 130, 76, 170, 53, 50, 0, 0]
          }
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

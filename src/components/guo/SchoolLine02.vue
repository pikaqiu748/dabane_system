<template>
  <div>
    <div id="chart_line02" style="width: 90%;height: 330px;"></div>
  </div>
</template>

<script>
import { getSuperBigSchoolAll2020 } from '../../api/request'
const echarts = require('echarts')
export default {
  name: "Line02",
  data() {
    return {
      cityIndex: [],
      schoolType: [],
      cities: [],
      jiunian: [],
      chuji: [],
      shiernian: [],
      wanquan: [],
      xiaoxue: [],
      xiaojiao: []
    }
  },
  mounted() {
    this.getSuperBigSchoolAll2020();
  },
  methods: {
    getSuperBigSchoolAll2020() {
      getSuperBigSchoolAll2020().then(res => {
        var tempData = res.data.data
        var cities = ["咸宁", "仙桃", "十堰", "荆州", "孝感", "神农架", "土家族", "鄂州", "武汉", "潜江", "荆门", "天门", "黄冈", "宜昌", "黄石", "随州", "襄阳"]
        var schoolType = ['九年一贯制学校', '初级中学', '十二年一贯制学校', '完全中学', '小学', '小学教学点']
        for (let i = 0; i < 17; i++) {
          this.jiunian.push(tempData[i][cities[i]][schoolType[0]])
          this.chuji.push(tempData[i][cities[i]][schoolType[1]])
          this.shiernian.push(tempData[i][cities[i]][schoolType[2]])
          this.wanquan.push(tempData[i][cities[i]][schoolType[3]])
          this.xiaoxue.push(tempData[i][cities[i]][schoolType[4]])
          this.xiaojiao.push(tempData[i][cities[i]][schoolType[5]])
        }
        this.getEchart(schoolType, cities, this.jiunian, this.chuji, this.shiernian, this.wanquan, this.xiaoxue, this.xiaojiao)
      })
    },

    getEchart(schoolType, city, jiunian, chuji, shiernian, wanquan, xiaoxue, xiaojiao) {
      this.myChart = echarts.init(document.getElementById('chart_line02'), 'dark');
      this.option = {
        title: {
          text: '2020年超大班额学校类型市州分布'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: schoolType
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
          data: city
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            formatter: '{value}(所)'
          }
        },
        series: [
          {
            name: '小学',
            type: 'line',
            stack: '总量',
            data: xiaoxue
          },
          {
            name: '十二年一贯制学校',
            type: 'line',
            stack: '总量',
            data: shiernian
          },
          {
            name: '完全中学',
            type: 'line',
            stack: '总量',
            data: wanquan
          },
          {
            name: '九年一贯制学校',
            type: 'line',
            stack: '总量',
            data: jiunian
          },
          {
            name: '初级中学',
            type: 'line',
            stack: '总量',
            data: chuji
          },
          {
            name: '小学教学点',
            type: 'line',
            stack: '总量',
            data: xiaojiao
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

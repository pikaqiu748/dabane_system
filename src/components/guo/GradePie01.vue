<template>
  <div>
    <div id="gradepie01" style="width:99%;height: 330px;"></div>
  </div>
</template>

<script>
import { getBigGrade2020 } from '../../api/request'
import 'echarts/theme/blue.js'
const echarts = require('echarts')

export default {
  name: "GradePie01",
  data () {
    return {
      pieData: [],
      gradeType: [],
      bigpiegrade2020: []
    }
  },
  mounted () {
    this.getBigGrade2020();
  },
  methods: {
    getBigGrade2020 () {
      getBigGrade2020().then(res => {
        // console.log(res)
        this.gradeType = Object.keys(res.data.data)
        this.bigpiegrade2020 = Object.values(res.data.data)
        this.pieData = []
        for (let i = 0; i < this.gradeType.length; i++) {
          var d = new Object();
          d.name = this.gradeType[i];
          d.value = this.bigpiegrade2020[i];
          this.pieData.push(d)
        }

        this.getEchart(this.pieData)
      })
    },
    getEchart (pieData) {
      this.myChart = echarts.init(document.getElementById('gradepie01'), 'dark');
      this.option = {
        title: {
          text: '2020年大班额年级类型整体分布',
          // subtext: '纯属虚构',
          left: 'center'
        },
        tooltip: {
          trigger: 'item'
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
        legend: {
          orient: 'vertical',
          left: 'left',
        },
        series: [
          {
            name: '年级数量',
            type: 'pie',
            radius: '50%',
            data: pieData,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      }

      this.myChart.setOption(this.option, true);

    }
  },
};
</script>

<style lang="scss" scoped>
</style>

<template>
  <div>
    <div id="gradepie02" style="width:100%;height: 330px;"></div>
  </div>
</template>

<script>
import { getSuperBigGrade2020} from '../../api/request'
import 'echarts/theme/blue.js'
const echarts = require('echarts')
export default {
  name: "GradePie02",
  data() {
    return {
      pieData:[],
      gradeType: [],
      superbigpiegrade2020: []

    }
  },
  mounted() {
    this.getSuperBigGrade2020();
  },
  methods: {
    getSuperBigGrade2020() {
      getSuperBigGrade2020().then(res => {
        console.log(res)
        this.gradeType = Object.keys(res.data.data)
        this.superbigpiegrade2020 = Object.values(res.data.data)
        this.pieData = []
        for (let i = 0; i < this.gradeType.length; i++) {
          var d = new Object();
          d.name = this.gradeType[i];
          d.value = this.superbigpiegrade2020[i];
          this.pieData.push(d)
        }

        this.getEchart(this.pieData)
      })
    },
    getEchart(pieData) {
      this.myChart = echarts.init(document.getElementById('gradepie02'), 'dark');
      this.option = {
        title: {
          text: '2020年超大班额年级类型整体分布',
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
  beforeDestroy() {

  }
};
</script>

<style lang="scss" scoped>
</style>

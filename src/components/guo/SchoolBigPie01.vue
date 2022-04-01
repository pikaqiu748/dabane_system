<template>
  <div>
    <div id="chart_rp01" class="bigpie"></div>
  </div>
</template>

<script>
import { getBigSchool2020 } from '../../api/request'
import 'echarts/theme/blue.js'
const echarts = require('echarts')
export default {
  name: "BigPie",
  data () {
    return {
      pieData: [],
      schoolType: [],
      bigpieschool2020: []
    }
  },
  mounted () {
    this.getBigSchool2020();
  },
  methods: {
    getBigSchool2020 () {
      getBigSchool2020().then(res => {
        // console.log(res)
        this.schoolType = Object.keys(res.data.data)
        this.bigpieschool2020 = Object.values(res.data.data)
        this.pieData = []
        for (let i = 0; i < this.schoolType.length; i++) {
          var d = new Object();
          d.name = this.schoolType[i];
          d.value = this.bigpieschool2020[i];
          this.pieData.push(d)
        }
        this.getEchart(this.pieData)
      })
    },
    getEchart (pieData) {
      this.myChart = echarts.init(document.getElementById('chart_rp01'), 'dark');
      this.option = {
        title: {
          text: '2020年大班额学校类型整体分布',
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
            name: '学校数量',
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
  beforeDestroy () {

  }
};
</script>

<style lang="scss" scoped>
.bigpie {
    width: 99%;
    height: 330px;
}
</style>

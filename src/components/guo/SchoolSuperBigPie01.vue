<template>
  <div>
    <div id="chart_rp02" class='superpie'></div>
  </div>
</template>

<script>
import { getSuperBigSchool2020 } from '../../api/request'
import 'echarts/theme/blue.js'
const echarts = require('echarts')
export default {
  name: "SuperBigPie",
  data () {
    return {
      superpieData: [],
      schoolType: [],
      superbigpieschool2020: []
    }
  },
  mounted () {
    this.getSuperBigSchool2020();
  },
  methods: {
    getSuperBigSchool2020 () {
      getSuperBigSchool2020().then(res => {
        console.log(res)
        this.schoolType = Object.keys(res.data.data)
        this.superbigpieschool2020 = Object.values(res.data.data)
        this.superpieData = []
        for (let i = 0; i < this.schoolType.length; i++) {
          var d = new Object();
          d.name = this.schoolType[i];
          d.value = this.superbigpieschool2020[i];
          this.superpieData.push(d)
        }

        this.getEchart(this.superpieData)
      })
    },
    getEchart (superpieData) {
      this.myChart = echarts.init(document.getElementById('chart_rp02'), 'dark');
      this.option = {
        title: {
          text: '2020年超大班额学校类型整体分布',
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
            data: superpieData,
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
.superpie {
    width: 100%;
    height: 330px;
    margin-right: 0px;
    border-right: 0px;
}
</style>

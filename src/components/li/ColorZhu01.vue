<template>
  <div id="colorzhu01" style="width: 100%;height: 330px;"></div>

</template>

<script>
const echarts = require('echarts')
export default {
  name: "ClassTypeDist",

  methods: {
    getEchart () {
      let myChart = echarts.init(document.getElementById('colorzhu01'), 'dark');
      var zrColor = require('echarts/node_modules/zrender/lib/tool/color')
      // var zrColor = require('zrender/tool/color');
      var colorList = [
        '#ff7f50', '#87cefa', '#da70d6', '#32cd32', '#6495ed',
        '#ff69b4', '#ba55d3', '#cd5c5c', '#ffa500', '#40e0d0'
      ];
      var itemStyle = {
        normal: {
          color: function (params) {
            if (params.dataIndex < 0) {
              // for legend
              return zrColor.lift(
                colorList[colorList.length - 1], params.seriesIndex * 0.1
              );
            }
            else {
              // for bar
              return zrColor.lift(
                colorList[params.dataIndex], params.seriesIndex * 0.1
              );
            }
          }
        }
      };
      var option = {
        title: {
          text: '市州分布',
          // subtext: '数据来自国家统计局',
          // sublink: 'http://data.stats.gov.cn/search/keywordlist2?keyword=%E5%9F%8E%E9%95%87%E5%B1%85%E6%B0%91%E6%B6%88%E8%B4%B9'
        },
        tooltip: {
          trigger: 'axis',
          backgroundColor: 'rgba(255,255,255,0.7)',
          axisPointer: {
            type: 'shadow'
          },
          // formatter: function (params) {
          //   // for text color
          //   var color = colorList[params[0].dataIndex];
          //   var res = '<div style="color:' + color + '">';
          //   res += '<strong>' + params[0].name + '消费（元）</strong>'
          //   for (var i = 0, l = params.length; i < l; i++) {
          //     res += '<br/>' + params[i].seriesName + ' : ' + params[i].value
          //   }
          //   res += '</div>';
          //   return res;
          // }
        },
        legend: {
          x: 'right',
          data: ['大班额', '超大班额']
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
          }
        },
        calculable: true,
        dataZoom: {
          show: true,
          start: 3
        },
        grid: {
          y: 80,
          y2: 65,
          x2: 40
        },
        xAxis: [
          {
            type: 'category',
            data: ['武汉市', '黄石市', '十堰市', '宜昌市', '襄阳市', '鄂州市', '荆门市', '孝感市', '荆州市', '黄冈市', '咸宁市', '随州市', '恩施州', '仙桃市', '潜江市', '天门市', '神农架林区'],
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
            name: '大班额',
            type: 'bar',
            data: [37, 4.9, 42, 56.2, 12.6, 12.7, 34.6, 78.2, 54.6, 34.0, 53.4, 13, 43.2, 34.6, 45, 12, 21],
          },
          {
            name: '超大班额',
            type: 'bar',
            data: [21, 4.44, 12.0, 43.2, 25.6, 56, 43.6, 32, 23.6, 56.0, 56.4, 37, 23.2, 23.6, 54, 89, 23],
          }
        ]
      };

      myChart.setOption(option, true);
    }
  },
  mounted () {
    this.getEchart()
  }
}

</script>


<style scoped>
.bg {
    color: rgb(146, 54, 61);
}
</style>

<template>
  <div class="wrap-container sn-container">
    <dv-border-box-10 class="dv-border"> </dv-border-box-10>
    <div class="sn-content">
      <div class="sn-title">近三年小学班额分布情况
        <el-button type="primary" class="xiaoxue-btn" @click="change4">数量分布</el-button>
        <el-button type="primary" class="chuzhong-btn">比例分布</el-button>
      </div>
      <div class="sn-body">
        <div class="wrap-container">
          <div id="xiao01" class="chartsdom"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "youXiaoShang",
  mounted () {
    this.xiaoShow()
  },
  methods: {
    change4 () {
      this.$emit('changexiao')
    },
    xiaoShow () {
      var myChart = echarts.init(document.getElementById('xiao01'))
      var option = {
        legend: {
          left: 'center',
          top: 'bottom',
          padding: [20, 200, 10, 0],
          textStyle: {
            color: '#fff'
          }
          // data: ['rose1', 'rose2', 'rose3', 'rose4', 'rose5', 'rose6', 'rose7', 'rose8']
        },
        tooltip: {},
        dataset: {
          source: [
            ['product', '2018', '2019', '2020'],
            ['大班额：', 11.89, 10.24, 11.70],
            ['超大班额：', 2.98, 2.31, 2.46],
          ]
        },
        xAxis: [
          {
            type: 'category',
            axisLine: {
              show: true,
              lineStyle: {
                color: '#2867a8',
              }
            },
            axisLabel: {
              interval: 0,
              // formatter: function(value) {
              //   return value.split("").join("\n");
              // }
              // rotate: 50,
              textStyle: {
                color: '#FFF',
                fontSize: 16,   //x轴标签颜色
              }
            },
          }
        ],
        yAxis: [{
          type: 'value',
          name: '百分比',
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: '#2867a8'
            }
          },
          axisLabel: {
            formatter: '{value} %'
          },
        }],
        series: [
          {
            type: 'bar',
            barWidth: 40,
            barGap: '15%',
            itemStyle: {
              normal: {
                color: '#7B68EE',
                label: {
                  show: true, //开启显示
                  position: 'top', //在上方显示
                  textStyle: { //数值样式
                    color: '#FFF',
                    fontSize: 16
                  },
                  // formatter: function (data) {
                  //   return data.value + '%';
                  // }
                  // formatter: '{b}%'
                }
              },

            }
          },
          {
            type: 'bar',
            barWidth: 40,
            itemStyle: {
              normal: {
                color: '#ca8622',    //柱状图颜色 
                label: {
                  show: true, //开启显示
                  position: 'top', //在上方显示
                  textStyle: { //数值样式
                    color: '#FFF',
                    fontSize: 16
                  }
                }
              }
            }
          },
          {
            type: 'bar',
            barWidth: 40,
            itemStyle: {
              normal: {
                color: '#61a0a8',
                label: {
                  show: true, //开启显示
                  position: 'top', //在上方显示
                  textStyle: { //数值样式
                    color: '#FFF',
                    fontSize: 16
                  }
                }
              }
            }
          }
        ]
      };
      myChart.setOption(option, true);
    }
  }
}

</script>

<style lang="scss" scoped>
.sn-container {
    left: 5px;
    top: 186px;
    width: 600px;
    height: 439px;
    .chartsdom {
        width: 600px;
        height: 400px;
        position: absolute;
    }
}
.dv-border {
    position: absolute;
    left: 2px;
    width: 603px;
}
.xiaoxue-btn {
    position: absolute;
    min-width: 5px;
    min-height: 5px;
    border-radius: 15px;
    background: transparent;
    left: 210px;
}
.chuzhong-btn {
    position: absolute;
    min-width: 5px;
    min-height: 5px;
    border-radius: 15px;
    // background: transparent;
    left: 310px;
}
</style>
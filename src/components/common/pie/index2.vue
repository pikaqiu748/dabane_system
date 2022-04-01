<template>
  <div class="wrap-container sn-container">
    <dv-border-box-10 class="sn-content"></dv-border-box-10>
    <div class="sn-content">
      <div class="sn-title">初中大班额前五名比例分布图</div>
      <div class="sn-body">
        <div class="wrap-container">
          <div class="chartsdom1" id="main3"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import * as echarts from 'echarts';

export default {
  name: 'pie',
  components: {
    echarts
  },

  mounted () {
    var chartDom = document.getElementById('main3');
    var myChart = echarts.init(chartDom);
    var option;
    option = {
      title: {
        // text: '南丁格尔玫瑰图',
        // subtext: '纯属虚构',
        left: 'center'
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)',
        backgroundColor: 'rgba(	123,104,238,0.2)',//通过设置rgba调节背景颜色与透明度
        // color: 'red',
        borderWidth: '1',
        borderColor: 'gray',
        textStyle: {
          color: 'pink',
        },
      },
      legend: {
        left: 'center',
        top: 'bottom',
        data: ['rose1', 'rose2', 'rose3', 'rose4', 'rose5', 'rose6', 'rose7', 'rose8']
      },
      textStyle: {
        // fontFamily:"Microsoft YaHei",
        fontSize: 13,
        fontStyle: "normal",
        fontWeight: "normal",
        color: "#eef1f6"
      },
      toolbox: {
        show: true,
        feature: {
          mark: { show: true },
          dataView: { show: false, readOnly: false },
          restore: { show: false },
          saveAsImage: { show: false }
        }
      },
      series: [
        // {
        //     name: '半径模式',
        //     type: 'pie',
        //     radius: [20, 140],
        //     center: ['25%', '50%'],
        //     roseType: 'radius',
        //     itemStyle: {
        //         borderRadius: 5
        //     },
        //     label: {
        //         show: false
        //     },
        //     emphasis: {
        //         label: {
        //             show: true
        //         }
        //     },
        //     data: [
        //         {value: 40, name: 'rose 1'},
        //         {value: 33, name: 'rose 2'},
        //         {value: 28, name: 'rose 3'},
        //         {value: 22, name: 'rose 4'},
        //         {value: 20, name: 'rose 5'},
        //         {value: 15, name: 'rose 6'},
        //         {value: 12, name: 'rose 7'},
        //         {value: 10, name: 'rose 8'}
        //     ]
        // },
        {
          name: '市州超大班额比例',
          type: 'pie',
          radius: [20, 100],
          //center: ['70%', '50%'],
          roseType: 'area',
          itemStyle: {
            borderRadius: 6,
            normal: {
              label: {
                show: true,
                // position: 'inner',
                formatter: '{b} : {c} ({d}%)'

              },
              labelLine: { show: true }
            }
          },
          data: [
            { value: 357, name: '十堰市' },
            { value: 435, name: '孝感市' },
            { value: 485, name: '武汉市' },
            { value: 529, name: '襄阳市' },
            { value: 1128, name: '黄冈市' },

          ]
        }
      ]
    }

    option && myChart.setOption(option);

    var curIndex = 0
    var dataLen = option.series[0].data.length;

    setInterval(function () {
      myChart.dispatchAction({ type: 'downplay', seriesIndex: 0, dataIndex: curIndex });
      curIndex = (curIndex + 1) % dataLen

      myChart.dispatchAction({
        type: 'highlight', seriesIndex: 0, dataIndex: curIndex
      });

      myChart.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
        dataIndex: curIndex
      })

    }, 2000);
  }

}
</script>

<style lang="scss" scoped>
.sn-container {
    left: 1380px;
    top: 636px;
    width: 530px;
    height: 450px;
    .chartsdom1 {
        right: 40px;
        top: 15px;
        width: 600px;
        height: 400px;
    }
}
</style>
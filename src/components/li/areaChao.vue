<template>
  <div class="wrap-container sn-container">
    <dv-border-box-10 class="dv-border"> </dv-border-box-10>
    <div class="sn-content">
      <span class="text01">小学</span>
      <span class="text02">初中</span>
      <div class="sn-title">按区域类型分布情况
        <el-button type="primary" class="xiaoxue-btn" @click="daPie">大班额</el-button>
        <el-button type="primary" class="chuzhong-btn">超大班额</el-button>
      </div>
      <div class="sn-body">
        <div class="wrap-container">
          <div class="chartsdom1" id="test04" style="left:190px"></div>
        </div>
        <div class="wrap-container">
          <div class="chartsdom1 " id="test03"></div>
        </div>
      </div>
      <!-- <div class="sn-body">

      </div> -->
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
  methods: {
    daPie () {
      // console.log('asdda')
      this.$emit('dashow');
    },
  },
  mounted () {
    var chartDom01 = document.getElementById('test04');
    var chartDom02 = document.getElementById('test03');
    var myChart01 = echarts.init(chartDom01);
    var myChart02 = echarts.init(chartDom02);
    var option01;
    var option02;
    option01 = {
      // title: {
      //   // text: '南丁格尔玫瑰图',
      //   // subtext: '纯属虚构',
      //   left: 'center'
      // },
      // tooltip: {
      //   trigger: 'item',
      //   formatter: '{a} <br/>{b} : {c} ({d}%)',
      //   backgroundColor: 'rgba(	123,104,238,0.2)',//通过设置rgba调节背景颜色与透明度
      //   // color: 'red',
      //   borderWidth: '1',
      //   borderColor: 'gray',
      //   textStyle: {
      //     color: 'pink',
      //   },

      // },
      // // legend: {
      // //   left: 'center',
      // //   top: 'top',
      // //   padding: [20, 200, 0, 0],
      // //   // data: ['rose1', 'rose2', 'rose3', 'rose4', 'rose5', 'rose6', 'rose7', 'rose8']
      // // },
      // textStyle: {
      //   // fontFamily:"Microsoft YaHei",
      //   fontSize: 13,
      //   fontStyle: "normal",
      //   fontWeight: "normal",
      //   color: "#eef1f6"
      // },
      // toolbox: {
      //   show: false,
      //   feature: {
      //     mark: { show: true },
      //     dataView: { show: false, readOnly: false },
      //     restore: { show: false },
      //     saveAsImage: { show: false }
      //   }
      // },
      // series: [
      //   {
      //     name: '初中市州超大班额比例',
      //     type: 'pie',
      //     radius: [5, 100],
      //     //center: ['70%', '50%'],
      //     roseType: 'area',
      //     itemStyle: {
      //       borderRadius: 6,
      //       normal: {
      //         label: {
      //           show: false,                              //显示各省份数据
      //           // position: 'inner',
      //           formatter: '{b} : {c} ({d}%)'
      //         },
      //         labelLine: { show: true }
      //       }
      //     },
      //     data: [
      //       // { value: 0, name: '宜昌市' },
      //       // { value: 0, name: '神农架' },
      //       // { value: 0, name: '潜江市' },
      //       // { value: 7, name: '黄石市' },
      //       // { value: 10, name: '天门市' },
      //       // { value: 33, name: '荆门市' },
      //       // { value: 48, name: '咸宁市' },
      //       // { value: 59, name: '鄂州市' },
      //       // { value: 91, name: '荆州市' },
      //       // { value: 105, name: '十堰市' },
      //       // { value: 125, name: '仙桃市' },
      //       // { value: 179, name: '武汉市' },
      //       // { value: 184, name: '随州市' },
      //       // { value: 464, name: '襄阳市' },
      //       // { value: 602, name: '孝感市' },
      //       // { value: 607, name: '黄冈市' },
      //       // { value: 632, name: '恩施州' },

      //       // { value: 44, name: '咸宁市' },
      //       // { value: 47, name: '随州市' },
      //       // { value: 102, name: '襄阳市' },
      //       // { value: 142, name: '恩施州' },
      //       // { value: 142, name: '孝感市' },
      //       // { value: 207, name: '黄冈市' },

      //       { value: 1, name: '乡中心区' },
      //       { value: 2, name: '特殊区域' },
      //       { value: 27, name: '城乡结合区' },
      //       { value: 35, name: '村庄' },
      //       { value: 82, name: '镇乡结合区' },
      //       { value: 280, name: '主城区' },
      //       { value: 396, name: '镇中心区' },
      //     ]
      //   }
      // ]
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)',
        backgroundColor: 'rgba(	123,104,238,0.2)',//通过设置rgba调节背景颜色与透明度
        borderWidth: '1',
        borderColor: 'gray',
        textStyle: {
          color: 'pink',
        },
      },
      series: [
        {
          name: '初中区域超大班额数量',
          type: 'pie',
          center: ['45%', '50%'],
          radius: ['30%', '50%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2,
            // borderRadius: 6,
            normal: {
              label: {
                show: false,                              //显示各省份数据
                // position: 'inner',
                formatter: '{b} : {c} ({d}%)'
              },
              labelLine: { show: true }
            }
          },
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              // show: true,
              fontSize: '20',
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data: [
            { value: 540, name: '主城区' },
            { value: 53, name: '城乡结合区' },
            { value: 3146, name: '镇中心区' },
            { value: 534, name: '镇乡结合区' },
            { value: 564, name: '特殊区域' },
            { value: 675, name: '乡中心区' },
            { value: 897, name: '村庄' },
          ]
        }
      ]
    }
    option02 = {
      // title: {
      //   // text: '南丁格尔玫瑰图',
      //   // subtext: '纯属虚构',
      //   left: 'center'
      // },
      // tooltip: {
      //   trigger: 'item',
      //   formatter: '{a} <br/>{b} : {c} ({d}%)',
      //   backgroundColor: 'rgba(	123,104,238,0.2)',//通过设置rgba调节背景颜色与透明度
      //   // color: 'red',
      //   borderWidth: '1',
      //   borderColor: 'gray',
      //   textStyle: {
      //     color: 'pink',
      //   },

      // },
      // // legend: {
      // //   left: 'center',
      // //   top: 'top',
      // //   padding: [20, 200, 0, 0],
      // //   // data: ['rose1', 'rose2', 'rose3', 'rose4', 'rose5', 'rose6', 'rose7', 'rose8']
      // // },
      // textStyle: {
      //   // fontFamily:"Microsoft YaHei",
      //   fontSize: 13,
      //   fontStyle: "normal",
      //   fontWeight: "normal",
      //   color: "#eef1f6"
      // },
      // toolbox: {
      //   show: false,
      //   feature: {
      //     mark: { show: true },
      //     dataView: { show: false, readOnly: false },
      //     restore: { show: false },
      //     saveAsImage: { show: false }
      //   }
      // },
      // series: [
      //   {
      //     name: '小学市州超大班额比例',
      //     type: 'pie',
      //     radius: [5, 100],
      //     //center: ['70%', '50%'],
      //     roseType: 'area',
      //     itemStyle: {
      //       borderRadius: 6,
      //       normal: {
      //         label: {
      //           show: false,                              //显示各省份数据
      //           // position: 'inner',
      //           formatter: '{b} : {c} ({d}%)'
      //         },
      //         labelLine: { show: true }
      //       }
      //     },
      //     data: [
      //       { value: 7, name: '特殊区域' },
      //       { value: 22, name: '乡中心区' },
      //       { value: 114, name: '村庄' },
      //       { value: 143, name: '城乡结合区' },
      //       { value: 192, name: '镇乡结合区' },
      //       { value: 854, name: '镇中心区' },
      //       { value: 1036, name: '主城区' },

      //     ]
      //   }
      // ]
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)',
        backgroundColor: 'rgba(	123,104,238,0.2)',//通过设置rgba调节背景颜色与透明度
        borderWidth: '1',
        borderColor: 'gray',
        textStyle: {
          color: 'pink',
        },
      },
      series: [
        {
          name: '小学区域超大班额数量',
          type: 'pie',
          center: ['45%', '50%'],
          radius: ['30%', '50%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2,
            // borderRadius: 6,
            normal: {
              label: {
                show: false,                              //显示各省份数据
                // position: 'inner',
                formatter: '{b} : {c} ({d}%)'
              },
              labelLine: { show: true }
            }
          },
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              // show: true,
              fontSize: '20',
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data: [
            { value: 234, name: '主城区' },
            { value: 654, name: '城乡结合区' },
            { value: 434, name: '镇中心区' },
            { value: 192, name: '镇乡结合区' },
            { value: 534, name: '特殊区域' },
            { value: 53, name: '乡中心区' },
            { value: 324, name: '村庄' },
          ]
        }
      ]
    }

    option01 && myChart01.setOption(option01);
    option02 && myChart02.setOption(option02);

    var curIndex01 = 0
    var dataLen01 = option01.series[0].data.length;

    setInterval(function () {
      myChart01.dispatchAction({ type: 'downplay', seriesIndex: 0, dataIndex: curIndex01 });
      curIndex01 = (curIndex01 + 1) % dataLen01

      myChart01.dispatchAction({
        type: 'highlight', seriesIndex: 0, dataIndex: curIndex01
      });

      myChart01.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
        dataIndex: curIndex01
      })

    }, 2000);

    var curIndex02 = 0
    var dataLen02 = option02.series[0].data.length;

    setInterval(function () {
      myChart02.dispatchAction({ type: 'downplay', seriesIndex: 0, dataIndex: curIndex02 });
      curIndex02 = (curIndex02 + 1) % dataLen02

      myChart02.dispatchAction({
        type: 'highlight', seriesIndex: 0, dataIndex: curIndex02
      });

      myChart02.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
        dataIndex: curIndex02
      })

    }, 2000);


  }

}
</script>

<style lang="scss" scoped>
.sn-container {
    left: 5px;
    top: 186px;
    width: 600px;
    height: 439px;
    .chartsdom1 {
        right: 120px; /*控制小学图的位置 */
        top: 7px;
        width: 600px;
        height: 400px;
    }
}

.dv-border {
    position: absolute;
    left: 2px;
    width: 603px;
}
.text01 {
    position: absolute;
    color: rgba(0, 183, 255, 0.8);
    font-size: 200%;
    top: 80px;
    left: 120px;
}
.text02 {
    position: absolute;
    color: rgba(0, 183, 255, 0.8);
    font-size: 200%;
    top: 80px;
    left: 450px;
}
.test03 {
    position: absolute;
    left: 0px;
    width: 100px;
}
.xiaoxue-btn {
    position: absolute;
    min-width: 5px;
    min-height: 5px;
    border-radius: 15px;
    background: transparent;
    left: 200px;
}
.chuzhong-btn {
    position: absolute;
    min-width: 5px;
    min-height: 5px;
    border-radius: 15px;
    // background: transparent;
    left: 270px;
}
</style>
<!--
 描述: 新闻无缝滚动
 作者: Jack Chen
 日期: 2020-04-18
-->

<template>
  <div class="wrap-container sn-container">
    <dv-border-box-10 class="sn-content"></dv-border-box-10>
    <div class="sn-content">
      <div class="sn-title">按比例(数量)定Top-10
        <el-button type="primary" class='xiaoxue-btn' @click='change'>大班额</el-button>
        <el-button type="primary" class="chuzhong-btn">超大班额</el-button>
      </div>
      <div class="sn-body">
        <div class="wrap-container">

          <div class="table">
            <table border="0" cellpadding="0" cellspacing="0" class="table-header">
              <tbody>
                <tr>
                  <td width="60%">
                    <span>学校名称</span>
                  </td>
                  <td width="20%">
                    <span>地区</span>
                  </td>
                  <!-- <td width="20%">
                    <span>所属市州</span>
                  </td> -->
                  <td width="20%">
                    <span>比例(数量)</span>
                  </td>
                </tr>
              </tbody>
            </table>

            <vue-seamless-scroll :data="listData" class="seamless-warp" :class-option="optionSetting">
              <table border="0" cellpadding="0" cellspacing="0" class="item">
                <tbody>
                  <tr v-for="(item, index) in listData" :key="index">
                    <td width="100%" class="title">
                      <span>{{ item.title }}</span>
                    </td>
                    <td width="20%">
                      <span>{{ item.date }}</span>
                    </td>
                    <td width="20%">
                      <span :class="{colorRed: item.hot > 4999, colorOrange: item.hot < 10}">{{ item.hot }}</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </vue-seamless-scroll>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vueSeamlessScroll from 'vue-seamless-scroll'

export default {
  name: "seamless",
  components: {
    vueSeamlessScroll
  },
  data () {
    return {
      listData: [{
        title: '小学超大班额整体上较2019较小幅度增加 ',
        date: '全国',
        hot: '0.15%'
      },
      {
        title: '咸宁市初中的超大班额比例消除幅度最大',
        date: '咸宁市',
        hot: '5.06%'
      }, {
        title: '恩施州小学超大班额情况较为严重 ',
        date: '恩施州 ',
        hot: '7.74%'
      }, {
        title: '初中超大班额问题呈逐渐消除的态势 ',
        date: '全省',
        hot:  '-0.63%'
      }, {
        title: '恩施州小学大班额数量最多',
        date: '恩施州 ',
        hot: ' 490个'
      },{
        title: '咸宁市小学的超大班额比例消除幅度最大',
        date: '咸宁市',
        hot: '  5.63% '
      },
      {
        title: '仙桃市小学的超大班额比例消除幅度呈负增长趋势 ',
        date: '仙桃市',
        hot: ' -4.09%'
      },
      {
        title: '咸宁市小学超大班额消除数量最大   ',
        date: '咸宁市',
        hot: '337个'
      },
      {
        title: '黄冈市初中大班额数量最多 ',
        date: '黄冈市',
        hot: '207个'
      },
      {
        title: '孝感市初中超大班额消除幅度呈负增长趋势 ',
        date: '孝感市',
        hot: '-2.69%'
      },
      ]
    }
  },
  computed: {
    optionSetting () {
      return {
        step: 0.5, // 数值越大速度滚动越快
        limitMoveNum: 2, // 开始无缝滚动的数据量 this.dataList.length
        hoverStop: true, // 是否开启鼠标悬停stop
        direction: 1, // 0向下 1向上 2向左 3向右
        // autoPlay: false,
        openWatch: true, // 开启数据实时监控刷新dom
        singleHeight: 0, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
        singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
        waitTime: 1000 // 单步运动停止的时间(默认值1000ms)
      }
    }
  },
  mounted () {

  },
  methods: {
    change () {
      this.$emit('change')
      // console.log('test')
    }
  },
  beforeDestroy () {

  }
};
</script>

<style lang="scss" scoped>
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

.sn-container {
    left: 1310px;
    top: 72px;
    height: 274px;
    width: 597px;
    %table-style {
        width: 100%;
        height: 35px;
        table-layout: fixed;
        tr {
            td {
                padding: 10px 5px;
                text-align: center;
                background-color: transparent;
                white-space: nowrap;
                overflow: hidden;
                color: #e2e5ff;
                font-size: 14px;
            }
        }
    }
    .table {
        .table-header {
            @extend %table-style;
        }
        .seamless-warp {
            height: 400px;
            overflow: hidden;
            visibility: visible;
            .colorRed {
                color: #ff4669;
            }
            .colorOrange {
                color: #ffc956;
            }
            .item {
                height: auto;
                @extend %table-style;
                tr {
                    td {
                        &.title {
                            text-overflow: ellipsis;
                            display: inline-block;
                        }
                    }
                }
            }
        }
    }
}
</style>

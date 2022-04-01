<!--
 描述: 新闻无缝滚动
 作者: Jack Chen
 日期: 2020-04-18
-->

<template>
  <div class="wrap-container sn-container">
    <dv-border-box-10 class="sn-content"></dv-border-box-10>
    <div class="sn-content">
      <div class="sn-title">Top-10所最严重的小学学校
        <el-button type="primary" class='xiaoxue-btn'>大班额</el-button>
        <el-button type="primary" class="chuzhong-btn" @click="change">超大班额</el-button>
      </div>
      <div class="sn-body">
        <div class="wrap-container">

          <div class="table">
            <table border="0" cellpadding="0" cellspacing="0" class="table-header">
              <tbody>
                <tr>
                  <td width="40%">
                    <span>学校名称</span>
                  </td>
                  <td width="20%">
                    <span>所属区县</span>
                  </td>
                  <td width="20%">
                    <span>所属市州</span>
                  </td>
                  <td width="20%">
                    <span>数量</span>
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
                      <span>{{ item.quxian }}</span>
                    </td>
                    <td width="20%">
                      <span>{{ item.shizhou }}</span>
                    </td>
                    <td width="20%">
                      <span :class="{colorRed: item.number > 4999, colorOrange: item.number > 10}">{{ item.number }}</span>
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
      listData: [
        {
          title: '蕲春县实验小学',
          quxian: '蕲春县',
          shizhou: '黄冈市',
          number: 98
        }, {
          title: '罗田县实验小学',
          quxian: '罗田县',
          shizhou: '黄冈市',
          number: 86
        }, {
          title: '蕲春县第二实验小学',
          quxian: '蕲春县',
          shizhou: '黄冈市',
          number: 68
        }, {
          title: '孝感市实验小学',
          quxian: '市辖区',
          shizhou: '孝感市',
          number: 65
        }, {
          title: '汉川市仙女山街道办事处第二小学',
          quxian: '汉川市',
          shizhou: '孝感市',
          number: 65
        }, {
          title: '孝感市孝南开发区南大小学',
          quxian: '孝南区',
          shizhou: '孝感市',
          number: 62
        },
        {
          title: '孝感市玉泉小学',
          quxian: '市辖区',
          shizhou: '孝感市',
          number: 62
        },
        {
          title: '汉川市实验小学',
          quxian: '汉川市',
          shizhou: '孝感市',
          number: 59
        },
        {
          title: '襄阳市第二十中学教育集团',
          quxian: '樊城区',
          shizhou: '襄阳市',
          number: 57
        },
        {
          title: '来凤县实验小学',
          quxian: '来凤县',
          shizhou: '恩施州',
          number: 57
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
      // this.$show=!this.$show
      this.$emit('change')
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
    // background: transparent;
    left: 225px;
}
.chuzhong-btn {
    position: absolute;
    min-width: 5px;
    min-height: 5px;
    border-radius: 15px;
    background: transparent;
    left: 300px;
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

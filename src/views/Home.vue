<!--
 描述: 酷屏首页模板
 作者: Jack Chen
 日期: 2020-04-29
-->

<template>
  <div class="home-container">
    <div class="wrap" ref="editor">
      <div class="top top1"></div>
      <div class="time">
        <p>
          <font size="5px">{{ nowDate }},{{ nowTime }}</font>
        </p>
      </div>
      <button class="headtext">全国基础教育均衡发展情况监测平台</button>
      <el-dropdown class="touxiang" trigger="click" @command="handleCommand">
        <el-avatar :src="squareUrl"></el-avatar>
        <span class="el-dropdown-link">
          {{username}}
        </span>
        <el-dropdown-menu class="menu">
          <el-dropdown-item command="info">详细信息</el-dropdown-item>
          <el-dropdown-item command="logout">退出登录</el-dropdown-item>
          <el-dropdown-item command="register">添加用户</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <button class="headtext1">总体</button>
      <button class="headtext2" @click="primary">小学</button>
      <button class="headtext3" @click="middle">初中</button>

      <dv-border-box-10 class="wenzi">
        <div class="num1">
          <p>
            <font color="white" size="6px">1134878</font>
          </p>
          <div class="al1">
            <div style="background:yellow;height:20px;width:20px;border-radius:30%" class="wr1"></div>
            <div class="gener1">
              <p>
                <font color="white" size="3px">学校数</font>
              </p>
            </div>
          </div>
        </div>
        <div class="num2">
          <p>
            <font color="white" size="6px">1024764</font>
          </p>
          <div class="al2">
            <div style="background:blue;height:20px;width:20px;border-radius:30%" class="wr2"></div>
            <div class="gener2">
              <p>
                <font color="white" size="3px">在校生人数</font>
              </p>
            </div>
          </div>
        </div>
        <div class="num3">
          <p>
            <font color="white" size="6px">138876</font>
          </p>
          <div class="al3">
            <div style="background:pink;height:20px;width:20px;border-radius:30%" class="wr3"></div>
            <div class="gener3">
              <p>
                <font color="white" size="3px">班级总数</font>
              </p>
            </div>
          </div>
        </div>
      </dv-border-box-10>
      <!-- <sinan class='left' /> -->
      <seamless v-if="xiaoShow" @change="chuShowChange" />
      <!-- <star-rain class="rain" /> -->
      <seamless-2 v-if="chuShow" @change='xiaoShowChange'></seamless-2>

      <dv-border-box-1 class="dv-border-box"></dv-border-box-1>
      <ditu class="map1"></ditu>

      <!-- <cake-linkage class='left' v-if='dashow' @changechao='show01' /> -->

      <!-- 左边第一个图 -->
      <area-da v-if='areada' @chaoshow01="areaChaoShow" />
      <area-chao v-if='areachao' @dashow="areaDaShow" />

      <!-- <cake-chao v-if='chaoshow' @changeda='show02' /> -->

      <!-- 中间第二个图 -->
      <pyramidTrend v-if="xiaoShow4" @change4="chuShowChange4" />
      <index-11 v-if="chuShow4" @change4="xiaoShowChange4"></index-11>

      <!-- 最左边下面的图 -->
      <!-- <scrollArc class='left' v-if="xiaoShow3" @change3="chuShowChange3" />
      <index-1 class="left1" v-if="chuShow3" @change3="xiaoShowChange3"></index-1> -->
      <zuo-xia-da v-if="zuoxia01" @zuoxiada="zuoXia"></zuo-xia-da>
      <zuo-xia-chao v-if="zuoxia02" @zuoxiachao="zuoXia"></zuo-xia-chao>

      <!--最右边下面的图 -->
      <pie v-if="pie" @pie="chaoPie"></pie>
      <pie-02 v-if="pie02" @dapie="daPie"></pie-02>

      <!-- 最右边中间的图 -->
      <lineh class="linehp" v-if="xiaoShow2" @lineh="chuShowChange2"></lineh>
      <lineh-2 class="linehp" v-if="chuShow2" @lineh2='xiaoShowChange2'></lineh-2>
      <!-- <star-rain class="rain" /> -->
      <!-- <bottom-right class='bottomright'/> -->
    </div>
  </div>
</template>

<script>
import zuoXiaDa from '@/components/common/pyramidTrend/zuoXiaDa'
import zuoXiaChao from '@/components/common/pyramidTrend/zuoXiaChao'
import areaChao from '@/components/li/areaChao'
import areaDa from '@/components/li/areaDa'
import CakeChao from '../components/common/cakeLinkage/index3.vue'
import BottomRight from '../components/li/BottomRight.vue'
import { screenSize } from '@/assets/js/utils'
import Bar3D from '../components/common/bar3d/index.vue'
import WaterPolo from '../components/common/waterPolo/index.vue'
import SEAMLESS2 from 'components/common/seamless/seamless2'
import Seamless2 from '../components/common/seamless/seamless2.vue'
import Pie from '../components/common/pie/pie.vue'
import pie02 from '@/components/common/pie/pie02'
import Ditu from 'components/li/DiTu.vue'
import Rain from '../components/li/Rain'
import StarRain from '../components/li/StarRain.vue'
import BarChartS2 from '../components/echats/BarChartS2.vue'
import CakeLinkage from '../components/common/cakeLinkage/index.vue'
import Lineh from '../components/echats/lineh.vue'
import Lineh2 from '../components/echats/lineh2.vue'
import Index1 from '../components/common/scrollArc/index1.vue'
import Index11 from '../components/common/pyramidTrend/index11.vue'
import Pyramidtrend from '../components/common/pyramidTrend/pyramidtrend.vue'
export default {
  name: 'Home',
  components: {
    zuoXiaDa,
    zuoXiaChao,
    areaDa,
    areaChao,
    CakeChao,
    BottomRight,
    CakeLinkage,
    Bar3D,
    WaterPolo,
    SEAMLESS2,
    Seamless2,
    Pie,
    pie02,
    Ditu,
    Rain,
    StarRain,
    BarChartS2,
    Lineh,
    Lineh2,
    Index1,
    Index11,
    Pyramidtrend,
  },
  data () {
    return {
      squareUrl: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
      nowDate: null, //存放年月日变量
      nowTime: null, //存放时分秒变量
      timer: "", //定义一个定时器的变量
      currentTime: new Date(), // 获取当前时间
      xiaoShow: true,
      chuShow: false,
      xiaoShow2: true,
      chuShow2: false,
      xiaoShow3: true,
      chuShow3: false,
      xiaoShow4: true,
      chuShow4: false,
      dashow: true,
      chaoshow: false,
      areada: true,
      areachao: false,
      pie: true,
      pie02: false,
      zuoxia01: true,
      zuoxia02: false
    }
  },
  mounted () {
    screenSize(this.$refs.editor);
    this.timer = setInterval(this.getTime, 1000);
  },
  computed: {
    username () {
      let username = localStorage.getItem('ms_username');
      return username ? username : this.name;
    }
  },
  methods: {
    chaoPie () {
      this.pie = !this.pie
      this.pie02 = !this.pie02
    },
    daPie () {
      this.pie = !this.pie
      this.pie02 = !this.pie02
    },
    show02 () {
      this.dashow = !this.dashow
      this.chaoshow = !this.chaoshow
    },
    show01 () {
      this.dashow = !this.dashow
      this.chaoshow = !this.chaoshow
    },
    chuShowChange () {
      this.xiaoShow = !this.xiaoShow
      this.chuShow = !this.chuShow
    },
    xiaoShowChange () {
      this.xiaoShow = !this.xiaoShow
      this.chuShow = !this.chuShow
    },
    chuShowChange2 () {
      this.xiaoShow2 = !this.xiaoShow2
      this.chuShow2 = !this.chuShow2
    },
    xiaoShowChange2 () {
      this.xiaoShow2 = !this.xiaoShow2
      this.chuShow2 = !this.chuShow2
    },
    zuoXia () {
      this.zuoxia01 = !this.zuoxia01
      this.zuoxia02 = !this.zuoxia02
    },
    chuShowChange4 () {
      this.xiaoShow4 = !this.xiaoShow4
      this.chuShow4 = !this.chuShow4
    },
    xiaoShowChange4 () {
      this.xiaoShow4 = !this.xiaoShow4
      this.chuShow4 = !this.chuShow4
    },
    areaChaoShow () {
      this.areada = !this.areada
      this.areachao = !this.areachao
    },
    areaDaShow () {
      this.areada = !this.areada
      this.areachao = !this.areachao
    },
    houtai () {
      this.$router.push('/dashboard')
    },
    total () {
      this.$router.push('/home')
    },
    primary () {
      this.$router.push('/home2')
    },
    middle () {
      this.$router.push('/home3')
    },
    handleCommand (command) {
      if (command == "logout") {
        localStorage.removeItem('ms_username');
        this.$router.push('/login');
      }
      if (command == "info") {
        this.$router.push('/zhengti')
      }
      if (command == 'register') {
        this.$router.push('/register')
      }
    },
    getTime () {
      const date = new Date();
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      const hour = date.getHours();
      const minute = date.getMinutes();
      const second = date.getSeconds();
      if (this.hour > 12) {
        this.hour -= 12;
        this.str = " PM";
      } else {
        this.str = " AM";
      }
      this.month = check(month);
      this.day = check(day);
      this.hour = check(hour);
      this.minute = check(minute);
      this.second = check(second);
      function check (i) {
        const num = (i < 10) ? ("0" + i) : i;
        return num;
      }
      this.nowDate = year + "年" + this.month + "月" + this.day + "日";
      this.nowTime = this.hour + ":" + this.minute + ":" + this.second + this.str;
    }
  }
}
</script>

<style lang="scss" scoped>
// .bottomright{
//   position: relative;
//   top:300px;
// }
.linehp {
    position: absolute;
    left: 1310px;
    top: 348px;
    width: 597px;
}
.lineh2p {
    position: absolute;
    left: 1400px;
    top: 350px;
    width: 600px;
}
.left {
    left: 10px;
}
.left1 {
    left: 10px;
}
.right {
    left: 600;
}
.dv-border-box {
    left: 610px;
    top: 20px;
    width: 700px;
    height: 580px;
}
.map1 {
    position: absolute;
    left: 550px;
    top: 80px;
}
.gener1 {
    position: absolute;
    top: -15px;
    width: 60px;
    left: 10px;
}
.gener2 {
    position: absolute;
    top: -15px;
    width: 100px;
    left: 10px;
}
.gener3 {
    position: absolute;
    top: -15px;
    width: 100px;
    left: 20px;
}
.wenzi {
    position: absolute;
    top: 70px;
    left: 7px;
    height: 115px;
    width: 605px;
}
.num1 {
    position: absolute;
    left: 50px;
    top: 27px;
    width: 150px;
}
.num2 {
    position: absolute;
    left: 240px;
    top: 27px;
    width: 200px;
}
.num3 {
    position: absolute;
    left: 450px;
    top: 27px;
    width: 150px;
}
.wr1 {
    position: absolute;
    left: -25px;
    top: -15px;
}
.wr2 {
    position: absolute;
    left: -25px;
    top: -15px;
}
.wr3 {
    position: absolute;
    left: -10px;
    top: -15px;
}
.al1 {
    position: absolute;
    top: 60px;
    left: 20px;
}
.al2 {
    position: absolute;
    top: 60px;
    left: 20px;
}
.al3 {
    position: absolute;
    top: 60px;
    left: 20px;
}
.home-container {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    margin: 0px;
    .wrap {
        // color: red;
        transform-origin: 0px 0px 0px;
        background: url('~@/assets/img/bg-1.png') no-repeat;
        background-size: contain;
        background-position: 50% 0;
        background-color: rgb(0, 0, 0);
        min-width: auto;
        width: 1920px;
        // width: 100%;
        min-height: auto;
        height: 1080px;
        // height: 100%;
        overflow: auto;
        .headtext {
            position: relative;
            top: 20px;
            color: rgba(0, 183, 255, 0.8);
            align-content: center;
            left: 561px;
            //top: 20px; //设置为button属性时，该行注释
            font-size: 265%;
            letter-spacing: 15px;
            font-family: Arial, Verdana, Sans-serif;
            font-weight: 550;
            // text-align: center;
            //按钮 样式的修改
            background: none; //按钮 背景颜色透明
            border: none; //按钮 无边框
            outline: none; //按钮 无轮廓
        }
        .headtext1 {
            position: absolute;
            background-color: rgb(0, 89, 255); //按钮 背景颜色透明
            border: none; //按钮 无边框
            outline: none; //按钮 无轮廓
            top: 25px;
            left: 1470px;
            color: rgba(223, 232, 236, 0.8);
            font-size: 200%;
            border-radius: 8px;
        }
        .headtext2 {
            position: absolute;
            background: none; //按钮 背景颜色透明
            border: none; //按钮 无边框
            outline: none; //按钮 无轮廓
            top: 25px;
            left: 1550px;
            color: rgba(0, 183, 255, 0.8);
            font-size: 200%;
        }
        .headtext3 {
            position: absolute;
            background: none; //按钮 背景颜色透明
            border: none; //按钮 无边框
            outline: none; //按钮 无轮廓
            top: 25px;
            left: 1630px;
            color: rgba(0, 183, 255, 0.8);
            font-size: 200%;
        }
        .top {
            position: absolute;
            // position: sticky;
            //left: 66px;
            top: 0;
            width: 100%;
            height: 67px;
            left: 63px;
            background-color: transparent;
            // background: url('~@/assets/gif/header.gif') no-repeat;
            // background: url('~@/assets/img/top_nav.png') no-repeat;
            background: url('~@/assets/img/a8.png') no-repeat;
            background-position: 65% 0;
            border: none;
            overflow: hidden;
        }
        .top1 {
            background: url('~@/assets/img/a8.png') no-repeat;
            top: 0;
            width: 100%;
            height: 67px;
            left: 0px;
        }
        .touxiang {
            position: absolute;
            top: 23px;
            left: 1750px;
            width: 70px;
        }
        .time {
            position: absolute;
            top: 30px;
            left: 60px;
            color: rgba(0, 183, 255, 0.8);
        }
        .divider {
            position: absolute;
            left: 50px;
            top: 3253px;
            width: 90%;
            height: 50px;
            width: 300px;
            border: none;
            background: transparent;
        }
    }
}
.el-dropdown-link {
    position: absolute;
    top: 10px;
    color: #fff;
    cursor: pointer;
    font-size: 20px;
}
</style>

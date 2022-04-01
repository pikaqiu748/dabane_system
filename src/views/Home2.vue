<!--
 描述: 小学信息页面
 作者: Jack Chen
 日期: 2020-04-29
-->

<template>
  <div class="home-container">
    <div class="wrap" ref="editor">
      <div class="top"></div>
      <div class="time">
        <p>
          <font size="5px">{{ nowDate }},{{ nowTime }}</font>
        </p>
      </div>
      <button class="headtext">全国小学大班额情况</button>
      <el-dropdown class="touxiang" trigger="click" @command="handleCommand">
        <el-avatar :src="squareUrl"></el-avatar>
        <span class="el-dropdown-link">
          {{username}}
        </span>
        <el-dropdown-menu class="menu">
          <el-dropdown-item command="detail">详细信息</el-dropdown-item>
          <el-dropdown-item command="loginout">退出登录</el-dropdown-item>
          <el-dropdown-item command="register">添加用户</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <button class="headtext1" @click="total">总体</button>
      <button class="headtext2">小学</button>
      <button class="headtext3" @click="middle">初中</button>
      /*数据总数模块 */
      <dv-border-box-10 class="wenzi">
        <div class="num1">
          <p>
            <font color="white" size="6px">10203</font>
          </p>
          <div class="al1">
            <div style="background:yellow;height:20px;width:20px;border-radius:30%" class="wr1"></div>
            <div class="gener1">
              <p>
                <font color="white" size="3px">小学学校数</font>
              </p>
            </div>
          </div>
        </div>
        <div class="num2">
          <p>
            <font color="white" size="6px">3783445
            </font>
          </p>
          <div class="al2">
            <div style="background:blue;height:20px;width:30px;border-radius:30%" class="wr2"></div>
            <div class="gener2">
              <p>
                <font color="white" size="3px">小学在校生人数</font>
              </p>
            </div>
          </div>
        </div>
        <div class="num3">
          <p>
            <font color="white" size="6px">96445</font>
          </p>
          <div class="al3">
            <div style="background:pink;height:20px;width:30px;border-radius:30%" class="wr3"></div>
            <div class="gener3">
              <p>
                <font color="white" size="3px">小学班级总数</font>
              </p>
            </div>
          </div>
        </div>
      </dv-border-box-10>
      <!-- 左边第一个图 -->
      <you-xiao-shang-01 v-if="shushow" @changexiao='changeShow' />
      <you-xiao-shang-02 v-if="bilishow" @changexiao='changeShow' />
      <!-- ----------------地图------------------------------ -->
      <dv-border-box-1 class="dv-border-box"></dv-border-box-1>
      <di-tu-xiao class='map1' />
      <!-- 右上 -->
      <seam-less-xiao-01 v-if="xiaoShow" @change="chuShowChange" />
      <seam-less-xiao-02 v-if="chuShow" @change='xiaoShowChange' />
      <!-- 右中 -->
      <lineh-xiao-01 class="linehp" v-if="xiaoShow2" @lineh="chuShowChange2" />
      <lineh-xiao-02 class="linehp" v-if="chuShow2" @lineh2='xiaoShowChange2' />
      <!-- 右下 -->
      <you-xiao-01 v-if="pie" @pie="chaoPie" />
      <you-xiao-02 v-if="pie02" @dapie="daPie" />
      <!-- 中下 -->
      <xiao-da v-if="xiaoShow4" @change4="chuShowChange4" />
      <xiao-chao v-if="chuShow4" @change4="xiaoShowChange4" />
      <!-- 左下 -->
      <zuo-xiao-da v-if="zuoxia01" @zuoxiada="zuoXia" />
      <zuo-xiao-chao v-if="zuoxia02" @zuoxiachao="zuoXia" />
    </div>
  </div>
</template>

<script>
import { screenSize } from '@/assets/js/utils'

import youXiaoShang01 from '@/components/guo/youXiaoShang01'
import youXiaoShang02 from '@/components/guo/youXiaoShang02'
import DiTuXiao from '@/components/guo/DiTuXiao'
import seamLessXiao01 from '@/components/common/seamless/seamLessXiao01'
import seamLessXiao02 from '@/components/common/seamless/seamLessXiao02'
import linehXiao01 from '@/components/echats/linehXiao01'
import linehXiao02 from '@/components/echats/linehXiao02'
import youXiao01 from '@/components/common/pie/youXiao01'
import youXiao02 from '@/components/common/pie/youXiao02'
import xiaoDa from '@/components/common/pyramidTrend/xiaoDa'
import xiaoChao from '@/components/common/pyramidTrend/xiaoChao'
import zuoXiaoDa from '@/components/common/pyramidTrend/zuoXiaoDa'
import zuoXiaoChao from '@/components/common/pyramidTrend/zuoXiaoChao'

export default {
  name: 'Home2',
  components: {
    youXiaoShang01,
    youXiaoShang02,
    DiTuXiao,
    seamLessXiao01,
    seamLessXiao02,
    linehXiao01,
    linehXiao02,
    youXiao01,
    youXiao02,
    xiaoDa,
    xiaoChao,
    zuoXiaoDa,
    zuoXiaoChao,
  },

  data() {
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
      pie: true,
      pie02: false,
      xiaoShow4: true,
      chuShow4: false,
      zuoxia01: true,
      zuoxia02: false,
      shushow: true,
      bilishow: false
    }
  },
  mounted() {
    screenSize(this.$refs.editor);
    this.timer = setInterval(this.getTime, 1000);


  },
  computed: {
    username() {
      let username = localStorage.getItem('ms_username');
      return username ? username : this.name;
    }
  },
  methods: {
    changeShow() {
      this.shushow = !this.shushow
      this.bilishow = !this.bilishow
    },
    zuoXia() {
      this.zuoxia01 = !this.zuoxia01
      this.zuoxia02 = !this.zuoxia02
    },
    chuShowChange4() {
      this.xiaoShow4 = !this.xiaoShow4
      this.chuShow4 = !this.chuShow4
    },
    xiaoShowChange4() {
      this.xiaoShow4 = !this.xiaoShow4
      this.chuShow4 = !this.chuShow4
    },
    chaoPie() {
      this.pie = !this.pie
      this.pie02 = !this.pie02
    },
    daPie() {
      this.pie = !this.pie
      this.pie02 = !this.pie02
    },
    chuShowChange2() {
      this.xiaoShow2 = !this.xiaoShow2
      this.chuShow2 = !this.chuShow2
    },
    xiaoShowChange2() {
      this.xiaoShow2 = !this.xiaoShow2
      this.chuShow2 = !this.chuShow2
    },
    chuShowChange() {
      this.xiaoShow = !this.xiaoShow
      this.chuShow = !this.chuShow
    },
    xiaoShowChange() {
      this.xiaoShow = !this.xiaoShow
      this.chuShow = !this.chuShow
    },
    houtai() {
      this.$router.push('/dashboard')
    },
    total() {
      this.$router.push('/home')
    },
    primary() {
      this.$router.push('/home2')
    },
    middle() {
      this.$router.push('/home3')
    },
    handleCommand(command) {
      if (command == "loginout") {
        localStorage.removeItem('ms_username');
        this.$router.push('/login');
      }
      if (command == "detail") {
        this.$router.push('/zhengti')
      }
      if (command == 'register') {
        this.$router.push('/register')
      }
    },
    getTime() {
      const date = new Date();
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      const hour = date.getHours();
      const minute = date.getMinutes();
      const second = date.getSeconds();
      const str = ''
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
      function check(i) {
        const num = (i < 10) ? ("0" + i) : i;
        return num;
      }
      this.nowDate = year + "年" + this.month + "月" + this.day + "日";
      this.nowTime = this.hour + ":" + this.minute + ":" + this.second + this.str;
    }
  },
}
</script>

<style lang="scss" scoped>
.left {
    left: 10px;
}
.right {
    left: 600;
}
.dv-border-box {
    left: 617px;
    top: 70px;
}
.dv-border {
    position: absolute;
    left: 1380px;
    top: 70px;
    width: 530px;
    height: 560px;
}
.map1 {
    position: absolute;
    left: 622px;
    top: 90px;
}
.gener1 {
    position: absolute;
    top: -15px;
    width: 80px;
    left: 0px;
}
.gener2 {
    position: absolute;
    top: -15px;
    width: 120px;
    left: 6px;
}
.gener3 {
    position: absolute;
    top: -15px;
    width: 110px;
    left: 10px;
}
.wenzi {
    position: absolute;
    top: 70px;
    left: 9px;
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
    left: -22px;
    top: -15px;
}
.wr2 {
    position: absolute;
    left: -25px;
    top: -15px;
}
.wr3 {
    position: absolute;
    left: -21px;
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
            top: 16px;
            color: rgba(0, 183, 255, 0.8);
            align-content: center;
            left: 560px;
            //top: 20px; //设置为button属性时，该行注释
            font-size: 320%;
            letter-spacing: 43px;
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
            background: none; //按钮 背景颜色透明
            border: none; //按钮 无边框
            outline: none; //按钮 无轮廓
            top: 25px;
            left: 1470px;
            color: rgba(0, 183, 255, 0.8);
            font-size: 200%;
        }
        .headtext2 {
            position: absolute;
            background-color: rgb(0, 89, 255); //按钮 背景颜色透明
            border: none; //按钮 无边框
            outline: none; //按钮 无轮廓
            top: 25px;
            left: 1550px;
            color: rgba(223, 232, 236, 0.8);
            font-size: 200%;
            border-radius: 8px;
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
            background-color: transparent;
            // background: url('~@/assets/gif/header.gif') no-repeat;
            // background: url('~@/assets/img/top_nav.png') no-repeat;
            background: url('~@/assets/img/a8.png') no-repeat;
            background-position: 65% 0;
            border: none;
            overflow: hidden;
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
.map1 {
    position: absolute;
    left: 550px;
    top: 80px;
}
.dv-border-box {
    left: 612px;
    top: 20px;
    width: 700px;
    height: 580px;
}
.linehp {
    position: absolute;
    left: 1310px;
    top: 348px;
    width: 597px;
}
</style>

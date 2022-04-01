<template>
  <div class="login-wrap">
    <div class="ms-login">
      <div class="ms-title">大班额可视化系统</div>
      <el-form :model="param" :rules="rules" ref="login" label-width="0px" class="ms-content">
        <el-form-item prop="username">
          <el-input v-model="param.username" placeholder="username">
            <el-button slot="prepend" icon="el-icon-lx-people"></el-button>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" placeholder="password" v-model="param.password" @keyup.enter.native="submitForm()">
            <el-button slot="prepend" icon="el-icon-lx-lock"></el-button>
          </el-input>
        </el-form-item>
        <div class="login-btn">
          <el-button type="primary" @click="submitForm()">登录</el-button>
        </div>
        <!-- <p class="login-tips">Tips : 用户名和密码随便填。</p> -->
      </el-form>
    </div>
    <vue-particles color="red" :particleOpacity="0.7" :particlesNumber="80" shapeType="circle" :particleSize="4" linesColor="#6495ED" :linesWidth="1" :lineLinked="true" :lineOpacity="0.6" :linesDistance="150" :moveSpeed="3" :hoverEffect="true" hoverMode="grab" :clickEffect="true" clickMode="push">
    </vue-particles>
    <bgAnimation />
  </div>
</template>

<script>
import bgAnimation from '../common/bgAnimation/index.vue'
export default {
  data: function () {
    return {
      param: {
        username: 'admin',
        password: '123123',
      },
      rules: {
        username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
      },
    };
  },
  components: {
    bgAnimation
  },
  methods: {
    submitForm () {
      this.$refs.login.validate(valid => {
        if (valid) {
          this.$message.success('登录成功');
          localStorage.setItem('ms_username', this.param.username);
          this.$router.push('/');
        } else {
          this.$message.error('请输入账号和密码');
          console.log('error submit!!');
          return false;
        }
      });
    },
  },
};
</script>

<style scoped>
/*最外层透明*/

.login-wrap {
    position: relative;
    width: 100%;
    height: 100%;
    background-image: url(../../assets/img/bg-1.png);
    /* background-image: url(../../assets/img/login-bg.jpg); */
    background-size: 100%;
}
.ms-title {
    width: 100%;
    line-height: 50px;
    text-align: center;
    font-size: 20px;
    color: rgb(32, 8, 59);
    border-bottom: 1px solid #ddd;
    /* background: rgb(193, 205, 209); */
}
.ms-login {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 350px;
    margin: -190px 0 0 -175px;
    border-radius: 5px;
    background: rgba(199, 220, 233, 0.3);
    overflow: hidden;
}
.ms-content {
    padding: 30px 30px;
    /* background: rgb(206, 216, 219); */
}
.login-btn {
    text-align: center;
}
.login-btn button {
    width: 100%;
    height: 36px;
    margin-bottom: 10px;
}
.login-tips {
    font-size: 12px;
    line-height: 30px;
    color: #fff;
}
</style>
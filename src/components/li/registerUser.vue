<template>
  <div class="position">
    <!-- status-icon  直接放到el-form标签中 -->
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">

      <el-form-item label="用户名" prop="username">
        <el-input prefix-icon="el-icon-user" v-model="ruleForm.username" autocomplete="off" class="length"></el-input>
      </el-form-item>

      <el-form-item label="密码" prop="pass">
        <el-input prefix-icon="el-icon-lock" type="password" v-model="ruleForm.pass" autocomplete="off" class="length" show-password>
        </el-input>
      </el-form-item>

      <el-form-item label="确认密码" prop="checkPass">
        <el-input prefix-icon="el-icon-lock" type="password" v-model="ruleForm.checkPass" autocomplete="off" class="length" show-password>
        </el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">注册</el-button>
        <el-button type='warning' @click="resetForm('ruleForm')">重置</el-button>
        <el-button type="success" @click="returnHome">返回首页</el-button>
      </el-form-item>

    </el-form>
  </div>
</template>

<script>
import { instance } from '../../api/index'
export default {
  name: "registerUser",
  data () {
    return {
      visible: true,
      isRegistered: '',
      ruleForm: {
        pass: '',
        checkPass: '',
        username: ''
      },
      rules: {
        username: [
          { required: true, validator: this.checkusername, trigger: 'blur' }
        ],
        pass: [
          { required: true, validator: this.validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { required: true, validator: this.validatePass2, trigger: 'blur' }
        ],
      }
    }
  },
  methods: {
    changePass (value) {
      this.visible = !(value === 'show');
    },
    returnHome () {
      this.$router.go(-1)
    },
    checkusername (rule, value, callback) {
      if (!value) {
        return callback(new Error('用户名不能为空！'));
      }
      setTimeout(() => {
        // if (!Number.isInteger(value)) {
        //   callback(new Error('请输入数字值'));
        // } else {
        //   if (value < 18) {
        //     callback(new Error('必须年满18岁'));
        //   } else {
        //     callback();
        //   }
        // }
        callback();
      }, 1000);
    },
    // ----------------------------------------
    validatePass (rule, value, callback) {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass');
        }
        callback();
      }
    },
    // --------------------------
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          instance.post(`/register/reg?account=${this.ruleForm.username}&password=${this.ruleForm.checkPass}`).then(res => {
            // console.log(res)
            if (res.data.statusCode == 200) {
              alert('注册成功!');
            } else if (res.data.statusCode == 801) {
              alert("用户名已存在，    请修改用户名！")
            }
          })
        } else {
          return false;
        }
      });
    },
    // ---------------------------------------------
    validatePass2 (rule, value, callback) {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    },
    // -----------------------------------
    resetForm (formName) {
      this.$refs[formName].resetFields();
    }
  },
}
</script>

<style scoped>
.position {
    background-color: rgba(224, 228, 17, 0.664);
    position: relative;
    left: 38%;
    top: 120px;
    width: 390px;
    height: 190px;
    padding-top: 10px;
}
.length {
    width: 200px;
}
</style>
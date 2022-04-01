<template>
  <div>

  </div>
</template>

<script>
export default {
  name: "TestVue",
  data () {
    return {
      checkAge: (rule, value, callback) => {
        if (!value) {
          return callback(new Error('年龄不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if (value < 18) {
              callback(new Error('必须年满18岁'));
            } else {
              callback();
            }
          }
        }, 1000);
      },

      validatePass: (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      },

      validatePass2: (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      },

      ruleForm: {
        pass: '',
        checkPass: '',
        age: ''
      },

      rules: {
        pass: [
          { validator: this.validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: this.validatePass2, trigger: 'blur' }
        ],
        age: [
          { validator: this.checkAge, trigger: 'blur' }
        ]
      }

    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    
    resetForm (formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>

<style scoped>
</style>
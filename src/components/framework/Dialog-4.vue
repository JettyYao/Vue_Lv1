<template>
  <el-dialog :visible.sync="dialogSignVisible" @close="$emit('update:dialogSignVisible', false)" custom-class="dialog-center dialog-login" width="40%" top="0" >
    <span slot="title" class="dialog-title">
        <font-awesome-icon icon="cube"/>
        <h3 class="login-title">Welcome to StorageBox</h3>
    </span>
    <el-form :model="ruleForm2" label-width="100px" label-position="top">
        <el-form-item label="名称">
            <el-input v-model="ruleForm2.name"></el-input>
        </el-form-item>
        <el-form-item label="邮箱">
            <el-input v-model="ruleForm2.email" ></el-input>
        </el-form-item>
        <el-form-item label="密码">
            <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码">
            <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item style="text-align:center;padding-top: 10px;">
            <el-button type="primary" @click="submitForm('ruleForm2')" class="button_me"><font-awesome-icon icon="cube"/> 快速注册</el-button>
            <el-button @click="resetForm()">重置</el-button>
        </el-form-item>
    </el-form>
  </el-dialog>
</template>
<script>
export default {
  name: 'Dialog4',
  props: {
    dialogSignVisible: {
      type: Boolean
    }
  },
  data () {
    return {
      ruleForm2: {
        name: '',
        email: '',
        pass: '',
        checkPass: ''
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm () {
      this.ruleForm2 = {}
    }
  }
}
</script>
<style scoped>
.dialog-title{
  color: #e9573f;
  font-weight: 500;
  margin: 0 auto;
}
.dialog-title svg{
  margin-right: 8px;
  font-size: 50px;
}
.dialog-login .el-form{
    width: 80%;
    margin: 0 auto;
}
.login-title{
    padding: 10px 0;
    text-transform: uppercase;
}
</style>
<style>
.dialog-login .el-dialog__header{
    text-align: center;
}
.dialog-login{
    overflow: hidden !important;
}
.dialog-login .el-dialog__body{
    padding-left: 20px;
}
.dialog-login .el-form--label-top .el-form-item__label{
    padding-bottom: 0;
    line-height: 28px;
}
.dialog-login .el-form-item--small.el-form-item{
    margin-bottom: 10px;
}
.dialog-login .el-input.is-active .el-input__inner, .dialog-login .el-input__inner:focus{
    border-color: #e9573f;
}
.button_me,.button_me:focus, .button_me:hover{
    background-color: #e9573f;
    border-color: #e9573f;
}
.el-button:focus, .el-button:hover{
    background-color: #fff;
    color: #e9573f;
    border-color: #e9573f;
}
</style>

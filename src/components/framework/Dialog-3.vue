<template>
  <el-dialog :visible.sync="visible" @close="$emit('update:dialogSignVisible', false)" custom-class="dialog-center dialog-login" width="40%" top="0" >
    <span slot="title" class="dialog-title">
        <i class="fas fa-cube" style="font-size:30px" />
        <h3 class="login-title">Welcome to StorageBox</h3>
    </span>
    <el-form :model="ruleForm2" label-width="100px" label-position="top">
        <el-form-item label="名称: NetName">
            <el-input v-model="ruleForm2.name"></el-input>
        </el-form-item>
        <el-form-item label="邮箱: Email">
            <el-input v-model="ruleForm2.email" ></el-input>
        </el-form-item>
        <el-form-item label="密码: Password">
            <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码: Password Comfirmation">
            <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item style="text-align:center;padding-top: 10px;">
            <el-button type="primary" @click="submitForm('ruleForm2')" class="button_me"><i class="fas fa-cube"/> 快速注册</el-button>
            <el-button @click="resetForm()">重置</el-button>
        </el-form-item>
    </el-form>
  </el-dialog>
</template>
<script>
export default {
  name: 'Dialog3',
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
      },
      visible: this.dialogSignVisible
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
  },
  watch: {
    dialogSignVisible () {
      this.visible = this.dialogSignVisible
    }
  }
}
</script>
<style scoped>
.dialog-title{
  color: #3c96f3;
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
.dialog-center .el-form-item__label{
    font-size: 16px;
}
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
.dialog-login .el-input.is-active .el-input__inner, .dialog-login .el-input__inner:focus,.el-textarea__inner:focus{
    border-color:#3c96f3;
}
.el-button:focus, .el-button:hover{
    background-color: #fff;
    color: #3c96f3;
    border-color: #3c96f3;
}
.button_me,.button_me:focus, .button_me:hover{
    background-color: #3c96f3;
    border-color: #3c96f3;
}
</style>

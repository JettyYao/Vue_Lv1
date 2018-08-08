<template>
<div class="LoginPage">
    <div class="backgroundi"></div>
    <div class="background">
        <router-link to="/"><font-awesome-icon icon="cube" class="header-icon" /></router-link>
        <p>收容强大, 坚持梦想 <strong>StorageBox.com</strong></p>
    </div>
    <div class="loginBox">
        <el-form :model="ruleForm2" label-width="80px" label-position="top" class="login-form">
        <el-form-item label="邮箱: Email">
            <el-input v-model="ruleForm2.email" clearable ></el-input>
        </el-form-item>
        <el-form-item label="密码: Password">
            <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="安全验证( 你最爱的编程语言 )">
            <el-input v-model="ruleForm2.safe" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item style="text-align:left;padding-top: 10px;">
            <el-button type="primary" @click="submitForm('ruleForm2')" class="button_me" size="middle"><font-awesome-icon icon="cube"/> 快速登陆</el-button>
            <el-button @click="resetForm()" style="vertical-align: bottom">忘记密码</el-button>
        </el-form-item>
    </el-form>
    </div>
</div>
</template>

<script>
export default {
  name: 'Login',
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.LoginPage{
    height: 100vh;
    background-color: #3c96f3;
    position: relative;
    overflow: hidden;
}
a{
    color: #fff;
}
.background{
    color: #fff;
    font-size: 100px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    animation: move-left .5s linear 1.5s;
    animation-fill-mode: forwards;
}
.background p{
    font-size: 20px;
    height: 30px;
    overflow: hidden;
    padding-top: 5px;
    animation: fade-in 1s ease-in;
    animation-fill-mode: forwards;
}
.background p strong{
    color: #3c96f3;
    background-color: #fff;
    padding: 0 2px;
}
.background a{
    display: inline-block;
    width: 100%;
    text-align: center;
}
.loginBox{
    position: absolute;
    height: 100%;
    width: 50%;
    right: -50%;
    animation: fade-in-box .5s linear 2s;
    animation-fill-mode: forwards;
}
.login-form{
    background-color: #fff;
    width: 70%;
    margin: 0 auto;
    padding: 50px 30px;
    border-radius: 4px;
    margin-top: 50%;
    transform: translate(0,-50%);
    box-shadow: 1px 1px 5px #888;
}
.backgroundi{
    position: absolute;
    width: 100%;
    height: 100%;
    background: url('../assets/svg/streetsign.svg') no-repeat center;
    opacity: .4;
    background-size: cover;
}
@keyframes fade-in {
    0%{
        opacity: .3;
        width: 0%;
    }
    100%{
        opacity: 1;
        width: 100%;
    }
}
@keyframes move-left {
    0%{
        left: 50%;
    }
    100%{
        left: 25%;
    }
}
@keyframes fade-in-box {
    0%{
        right: -50%;
    }
    100%{
        right: 0;
    }
}
</style>
<style>
.el-form-item__label{
    font-size: 20px;
    line-height: 28px !important;
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
.LoginPage .el-form-item--small.el-form-item{
    margin-bottom: 10px;
}
.LoginPage .el-input.is-active .el-input__inner, .LoginPage .el-input__inner:focus,.el-textarea__inner:focus{
    border-color: #3c96f3;
}
.el-button:focus, .el-button:hover{
    background-color: #fff;
    color: #3c96f3;
    border-color: #3c96f3;
}
</style>

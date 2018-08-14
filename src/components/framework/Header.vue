<template>
<el-header style="padding: 2px 113px; background-color: #3c96f3">
  <el-row>
    <el-col :span="12">
      <div class="logo">
        <h1><router-link to="/"><i class="fas fa-cube header-icon" /></router-link></h1>
      </div>
    </el-col>
    <el-col :span="12">
      <el-menu class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1" @click="dialogNewsVisible = true">NEWS</el-menu-item>
        <el-menu-item index="2"><router-link to="/Post">BOTHS</router-link></el-menu-item>
        <el-menu-item index="3" @click="dialogAboutVisible = true">ABOUT</el-menu-item>
        <el-menu-item index="4" ><router-link to="/Login">登陆</router-link></el-menu-item>
        <el-menu-item index="5" @click="dialogSignVisible = true">注册</el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
  <div class="dialog-area">
    <Dialog1 :dialogNewsVisible.sync="dialogNewsVisible"></Dialog1>
    <Dialog2 :dialogAboutVisible.sync="dialogAboutVisible"></Dialog2>
    <Dialog3 :dialogSignVisible.sync="dialogSignVisible"></Dialog3>
  </div>
</el-header>
</template>
<script>
import Dialog1 from './Dialog-1'
import Dialog2 from './Dialog-2'
import Dialog3 from './Dialog-3'
export default {
  components: {Dialog1, Dialog2, Dialog3},
  name: 'MainHeader',
  data () {
    return {
      dialogNewsVisible: false,
      dialogAboutVisible: false,
      dialogSignVisible: false
    }
  }
}
</script>
<style scoped>
.el-menu-demo{
  border-bottom: none;
  background-color: transparent !important;
}
.el-header .el-menu--horizontal>.el-menu-item{
    height: 70px;
    line-height: 70px;
}
.logo{
  line-height: 70px;
  color: #fff;
  padding: 0 25px;
  border-top: 5px solid transparent;
}
.logo i{
  color: #fff;
  font-size: 40px;
}
.el-menu-demo{
  float: right;
}
.el-menu-item{
  border-top: 5px solid transparent;
  border-bottom: 0 !important;
  font-size: 16px;
  color: #fff;
  background-color: transparent !important;
  padding: 0 2px;
  margin: 0 20px;
  font-weight: 600;
}
.el-menu--horizontal>li.el-menu-item.is-active{
  color: #fff;
  border-top: 5px solid transparent !important;
}
.el-menu--horizontal>li.el-menu-item:hover{
  color: #fff;
  border-top: 5px solid #fff !important;
}
</style>

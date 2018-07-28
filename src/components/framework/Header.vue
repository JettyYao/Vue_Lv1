<template>
<el-header style="padding: 2px 113px; background-color: #e9573f">
  <el-row>
    <el-col :span="12">
      <div class="logo">
        <h1><a href="/"><font-awesome-icon icon="cube" class="header-icon" /></a></h1>
      </div>
    </el-col>
    <el-col :span="12">
      <el-menu class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1" @click="dialogNewsVisible = true">NEWS</el-menu-item>
        <el-menu-item index="2">BOTHS</el-menu-item>
        <el-menu-item index="3" @click="dialogAboutVisible = true">ABOUT</el-menu-item>
        <el-menu-item index="4"><a href="#" target="_blank">登陆</a></el-menu-item>
        <el-menu-item index="5"><a href="#" target="_blank">注册</a></el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
  <div class="dialog-area">
    <Dialog1 :dialogNewsVisible.sync="dialogNewsVisible"></Dialog1>
    <Dialog2 :dialogAboutVisible.sync="dialogAboutVisible"></Dialog2>
  </div>
</el-header>
</template>
<script>
import Dialog1 from './Dialog-1'
import Dialog2 from './Dialog-2'
export default {
  components: {Dialog1, Dialog2},
  name: 'MainHeader',
  data () {
    return {
      dialogNewsVisible: false,
      dialogAboutVisible: false
    }
  }
}
</script>
<style scoped>
.el-menu-demo{
  border-bottom: none;
  background-color: transparent !important;
}
.logo{
  line-height: 70px;
  color: #fff;
  padding: 0 25px;
  border-top: 5px solid transparent;
}
.logo svg{
  color: #fff;
  font-size: 40px;
}
.el-menu-demo{
  float: right;
}
.el-menu-item{
  border-top: 5px solid transparent;
  border-bottom: 0 !important;
  font-size: 15px;
  color: #fff !important;
  background-color: transparent !important;
  padding: 0 2px;
  margin: 0 20px;
  font-weight: 600;
}
.el-menu--horizontal>li.el-menu-item.is-active{
  border-top: 5px solid transparent !important;
}
.el-menu--horizontal>li.el-menu-item:hover{
  border-top: 5px solid #fff !important;
}
</style>

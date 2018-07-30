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
        <el-menu-item index="2" @click="dialogPostVisible = true">BOTHS</el-menu-item>
        <el-menu-item index="3" @click="dialogAboutVisible = true">ABOUT</el-menu-item>
        <el-menu-item index="4" >登陆</el-menu-item>
        <el-menu-item index="5" @click="dialogSignVisible = true">注册</el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
  <div class="dialog-area">
    <Dialog1 :dialogNewsVisible.sync="dialogNewsVisible"></Dialog1>
    <Dialog2 :dialogAboutVisible.sync="dialogAboutVisible"></Dialog2>
    <Dialog3 :dialogPostVisible.sync="dialogPostVisible"></Dialog3>
    <Dialog4 :dialogSignVisible.sync="dialogSignVisible"></Dialog4>
  </div>
</el-header>
</template>
<script>
import Dialog1 from './Dialog-1'
import Dialog2 from './Dialog-2'
import Dialog3 from './Dialog-3'
import Dialog4 from './Dialog-4'
export default {
  components: {Dialog1, Dialog2, Dialog3, Dialog4},
  name: 'MainHeader',
  data () {
    return {
      dialogNewsVisible: false,
      dialogAboutVisible: false,
      dialogPostVisible: false,
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

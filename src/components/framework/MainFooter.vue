<template>
  <div class="footer">
    <el-tabs type="border-card">
      <el-tab-pane>
        <span slot="label"><i class="fas fa-signature footer-icon" /> WebSite Status</span>
        <el-row style="padding: 30px 0;" class="footerWord">
          <el-col :span="16" :offset="4">
            <p>StorageBox.com是由JETTY创设的个人站点, 里面收录了JETTY的部分学习经验以及上线部署的具体操作, 希望可以对众位爱好编程者提供些许的帮助。</p>
            <p>如果在翻阅过程中发现若干问题, 请联系JETTY进行改正, 感谢。</p>
            <p>StorageBox.com is a personal site created by JETTY, which includes some of the learning experience of JETTY and the specific operation of the on-line deployment, hoping to provide some help to the programmers of the interests.</p>
            <p>When you find some problems in the process of browsing, please contact JETTY for correction. Thank you for your behavior here.</p>
          </el-col>
        </el-row>
      </el-tab-pane>
      <el-tab-pane>
        <span slot="label"><i class="fas fa-link footer-icon" /> Friendly Link</span>
        <el-row style="padding: 30px 0;" class="footerWord">
          <el-col :span="14" :offset="5">
            <el-row>
              <el-col :span="4">
                <a href="https://github.com/" target="_blank">
                  <img src="../../assets/svg/github.svg" alt="" class="svg_c_1">
                  <p>GitHub</p>
                </a>
              </el-col>
              <el-col :span="4">
                <a href="https://cn.vuejs.org/" target="_blank">
                  <img src="../../assets/svg/vuejs.svg" alt="" class="svg_c">
                  <p>Vue.Js</p>
                </a>
              </el-col>
              <el-col :span="4">
                <a href="http://www.ruby-lang.org/en/" target="_blank">
                  <img src="../../assets/svg/ruby.svg" alt="" class="svg_c">
                  <p>Ruby</p>
                </a>
              </el-col>
              <el-col :span="4">
                <a href="https://nodejs.org/zh-cn/" target="_blank">
                  <img src="../../assets/svg/nodejs.svg" alt="">
                  <p>Node.Js</p>
                </a>
              </el-col>
              <el-col :span="4">
                <a href="https://www.postgresql.org/" target="_blank">
                  <img src="../../assets/svg/postgresql-01.svg" alt="">
                  <p>Postgresql</p>
                </a>
              </el-col>
              <el-col :span="4">
                <a href="https://youtube.com/" target="_blank">
                  <img src="../../assets/svg/youtube4.svg" alt="">
                  <p>YoutuBe</p>
                </a>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {
  name: 'MainContent',
  data () {
    return {

    }
  }
}
</script>
<style scoped>
.footer{
  margin-top: -49px;
}
.el-tabs--border-card{
  background-color: transparent;
  border: 0;
}
.footer-icon{
  margin-right: 5px;
}
.footerWord p{
  padding: 5px 0;
  line-height: 1.4;
}
.footerWord a{
  display: block;
  margin: 0 auto;
  text-align: center;
}
.footerWord a img{
  width: 60px;
  min-height: 60px;
}
.footerWord a img.svg_c{
  width: 45px;
}
.footerWord a img.svg_c_1{
  width: 55px;
}
.footerWord a p{
  color: #909399;
  text-transform: uppercase;
}
.footerWord a:hover{
  background-color: #666;
}
</style>
<style>
.el-tabs__item{
  background-color: #141c22;
  height: 50px;
  line-height: 50px;
  padding: 0 80px !important;
  text-transform: uppercase;
}
.el-tabs__nav{
  transform: translateX(-50%) !important;
  left: 50%;
}
.el-tabs__nav-scroll,.el-tabs--border-card>.el-tabs__header{
  background-color: transparent;
  border: 0;
}
.el-tabs__content{
  background-color: #141c22;
}
.el-tabs--border-card>.el-tabs__header .el-tabs__item{
  border: 0;
  margin: 0 .5px;
}
.el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active{
    color: #fff;
    background-color: #141c22;
    border: 0;
}
.el-tabs--border-card>.el-tabs__header .el-tabs__item:not(.is-disabled):hover{
  color: #fff;
}
.el-tabs__nav-wrap{
  margin-bottom: -5px;
  border-bottom: 1px solid #909399;
  z-index: 999;
}
</style>

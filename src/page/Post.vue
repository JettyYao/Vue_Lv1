<template>
<el-scrollbar class="scrollbar">
    <main-header class="post-header"></main-header>
    <div class="maincontent">
        <div class="background"></div>
        <div class="topic">
            <el-row>
            <el-col :span="12" :offset="6">
                <h2 class="topicWord">寻找、阅读以及学习<br><span>Your Languages</span></h2>
            </el-col>
            </el-row>
        </div>
        <div class="search-wrap" style="padding: 0 0 10px;">
            <form action="">
            <el-row>
                <el-col :span="14" :offset="5">
                  <el-autocomplete
                      popper-class="my-autocomplete"
                      v-model="state3"
                      :fetch-suggestions="querySearch"
                      placeholder="Search Topic at Here"
                      @select="handleSelect">
                      <i class="el-icon-search el-input__icon"
                      slot="suffix"
                      @click="handleIconClick">
                      </i>
                      <template slot-scope="{ item }">
                      <div class="name">{{ item.value }}</div>
                      <span class="addr">{{ item.address }}</span>
                      </template>
                  </el-autocomplete>
                  </el-col>
              </el-row>
              </form>
          </div>
          <div class="routingJump" style="padding: 0 0 20px;">
              <p style="text-align: center">
              <a href="#" style="color: #fff;">Forget Something? Look Below <i class="el-icon-caret-bottom"></i></a>
              </p>
          </div>
          <div class="post_topic" style="padding: 25px 0 130px;">
              <el-row>
              <el-col :span="14" :offset="5">
              <el-row style="padding:0 20px;">
                <el-col :span="4">
                  <div class="topic-icon" @click="dialogPostVisible = true">
                    <img src="../assets/svg/html1.svg" alt="" class="svg_c">
                    <p>HTML</p>
                  </div>
                </el-col>
                <el-col :span="4">
                  <div class="topic-icon" @click="dialogPostVisible = true">
                    <img src="../assets/svg/ruby1.svg" alt="" class="svg_c">
                    <p>Ruby</p>
                  </div>
                </el-col>
                <el-col :span="4">
                  <div class="topic-icon" @click="dialogPostVisible = true">
                    <img src="../assets/svg/javascript1.svg" alt="" class="svg_c">
                    <p>Javascript</p>
                  </div>
                </el-col>
                <el-col :span="4">
                  <div class="topic-icon" @click="dialogPostVisible = true">
                    <img src="../assets/svg/vuejs1.svg" alt="" class="svg_c">
                    <p>Vue.Js</p>
                  </div>
                </el-col>
                <el-col :span="4">
                  <div class="topic-icon" @click="dialogPostVisible = true">
                    <img src="../assets/svg/nodejs1.svg" alt="" class="svg_c">
                    <p>Other</p>
                  </div>
                </el-col>
                <el-col :span="4">
                  <div class="topic-icon" @click="dialogPostVisible = true">
                    <img src="../assets/svg/configure1.svg" alt="" class="svg_c">
                    <p>Config</p>
                  </div>
                </el-col>
              </el-row>
            </el-col>
            </el-row>
        </div>
    </div>
    <main-footer></main-footer>
    <dialog5 :dialogPostVisible.sync="dialogPostVisible"></dialog5>
</el-scrollbar>
</template>
<script>
import MainHeader from '../components/framework/Header'
import MainFooter from '../components/framework/MainFooter'
import Dialog5 from '../components/framework/Dialog-5'
export default {
  components: {MainHeader, MainFooter, Dialog5},
  name: 'PostPage',
  data () {
    return {
      dialogPostVisible: false,
      restaurants: [],
      state3: ''
    }
  },
  methods: {
    querySearch (queryString, cb) {
      var restaurants = this.restaurants
      var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants
      // 调用 callback 返回建议列表的数据
      cb(results)
    },
    createFilter (queryString) {
      return (restaurant) => {
        return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0)
      }
    },
    loadAll () {
      return [
        { 'value': '三全鲜食（北新泾店）', 'address': '长宁区新渔路144号' },
        { 'value': 'Hot honey 首尔炸鸡（仙霞路）', 'address': '上海市长宁区淞虹路661号' },
        { 'value': '新旺角茶餐厅', 'address': '上海市普陀区真北路988号创邑金沙谷6号楼113' },
        { 'value': '泷千家(天山西路店)', 'address': '天山西路438号' },
        { 'value': '胖仙女纸杯蛋糕（上海凌空店）', 'address': '上海市长宁区金钟路968号1幢18号楼一层商铺18-101' }]
    },
    handleSelect (item) {
      console.log(item)
    },
    handleIconClick (ev) {
      console.log(ev)
    }
  },
  mounted () {
    this.restaurants = this.loadAll()
  }
}
</script>
<style scoped>
.scrollbar{
  height: 100vh;
}
.maincontent{
  width: 100%;
  background-color: #3c96f3;
  position: relative;
}
.background{
  position: absolute;
  height: 100%;
  width: 100%;
  background-image: url(../assets/svg/streetsign.svg);
  background-size: cover;
  background-position: center 14%;
  background-repeat: no-repeat;
  opacity: .2;
}
.topicWord{
    margin-bottom: 45px;
    padding-top: 30px;
    max-width: 780px;
    font-size: 60px;
    text-align: center;
    font-weight: 200;
    color: #fff;
}
.el-autocomplete{
  width: 100% !important;
  box-shadow: 0 0 0px 5px rgba(20,28,34,0.1);
}
.el-input__icon{
  font-size: 18px;
  font-weight: bold;
}
.el-button--small{
  font-size: 18px;
  border-radius: 24.5px;
  padding: 14px 25px;
  color: #3c96f3;
}
.el-button:focus, .el-button:hover, .el-button:active{
  color: #fff;
  background-color: #3c96f3;
  outline: 0;
  border-color: #fff;
}
.post_topic p{
  padding: 5px 0;
  line-height: 1.4;
}
.post_topic div.topic-icon{
  margin: 0 auto;
  text-align: center;
  cursor: pointer;
}
.post_topic div.topic-icon img{
  width: 60px;
  min-height: 60px;
}
.post_topic div.topic-icon img.svg_c{
  width: 45px;
}
.post_topic div.topic-icon p{
  color: #fff;
  text-transform: uppercase;
}
.post_topic div.topic-icon:hover{
  background-color: #909399;
}
</style>
<style>
.el-scrollbar__wrap{
  overflow-x: hidden;
}
.el-scrollbar__thumb{
  background-color: rgba(190,190,190,.4);
}
.el-scrollbar__bar{
  right: 5px;
  bottom: 5px;
}
.el-scrollbar__bar.is-vertical{
  top: 5px;
}
.el-autocomplete .el-input__inner{
  height: 45px;
  line-height: 45px;
  font-size: 18px;
  padding: 0 30px 0 20px;
}
.el-input__suffix{
  right: 15px;
  cursor: pointer;
  color: #3c96f3;
}
</style>

<template>
<div class="maincontent">
  <div class="background"></div>
  <div class="topic">
    <el-row>
      <el-col :span="12" :offset="6">
        <h2 class="topicWord">寻找、阅读以及学习<br><span>Your Want</span></h2>
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
            placeholder="Search Posts"
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
  <div class="RouteJump">
    <p style="text-align: center">
      <router-link to="/Post" style="color: #fff">Forget Something? Click Here <i class="el-icon-caret-right"></i></router-link>
    </p>
  </div>
  <div class="other" style="padding: 25px 0 130px;">
    <el-row>
      <el-col :span="8" :offset="8">
        <el-row>
          <el-col :span="12" style="text-align: center;color: #fff;border-right: 1px solid #aaa;">
            <h2 class="visitor">23,254,265,26</h2>
            <p style="font-size: 12px;padding:5px 0 0;">总访问人次</p>
          </el-col>
          <el-col :span="12" style="text-align: center;">
            <el-button @click="dialogMessageVisible = true">
              Send Email <i class="el-icon-message" style="padding: 0 5px 0 25px;font-weight: bold;"></i>
            </el-button>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
  <div class="dialog-area">
    <Dialog4 :dialogMessageVisible.sync="dialogMessageVisible"></Dialog4>
  </div>
</div>
</template>
<script>
import Dialog4 from './Dialog-4'
export default {
  components: {Dialog4},
  name: 'MainContent',
  data () {
    return {
      dialogMessageVisible: false,
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
.maincontent{
  width: 100%;
  background-color: #3c96f3;
  position: relative;
}
.background{
  position: absolute;
  height: 100%;
  width: 100%;
  background-image: url(../../assets/svg/streetsign.svg);
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
.RouteJump{
  padding: 0 0 20px;
  position: relative;
}
.RouteJump a:hover{
  text-decoration: underline;
}
</style>
<style>
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

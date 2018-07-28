<template>
<el-scrollbar class="scrollbar">
<div>
  <main-header></main-header>
  <main-content></main-content>
  <main-footer></main-footer>
</div>
</el-scrollbar>
</template>

<script>
import MainHeader from '../components/framework/Header'
import MainContent from '../components/framework/MainContent'
import MainFooter from '../components/framework/MainFooter'
export default {
  components: {MainHeader, MainContent, MainFooter},
  name: 'HomePage',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.scrollbar{
  height: 100vh;
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
</style>

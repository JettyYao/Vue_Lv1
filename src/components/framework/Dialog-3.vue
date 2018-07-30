<template>
  <el-dialog :visible.sync="dialogPostVisible" @close="$emit('update:dialogPostVisible', false)" custom-class="dialog-center dialog-post" width="96%" top="0" :fullscreen="true">
    <!-- <span slot="title" class="dialog-title"><font-awesome-icon icon="cube"/> Post By StorageBox</span> -->
    <el-container style="height:100%">
      <el-aside>
        <el-scrollbar style="height: 100%">
          <el-menu
            default-active=1
            class="el-menu-vertical-demo"
            :default-openeds="opened">
            <el-menu-item index="1">
              <i class="el-icon-menu"></i>
              <span slot="title">导航二</span>
            </el-menu-item>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
              </template>
              <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="2-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="2-4">
                <template slot="title">选项4</template>
                <el-menu-item index="2-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
              </template>
              <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="3-1">选项1</el-menu-item>
                <el-menu-item index="3-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="3-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="3-4">
                <template slot="title">选项4</template>
                <el-menu-item index="3-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>
          </el-menu>
        </el-scrollbar>
      </el-aside>
      <el-main>
        <el-scrollbar style="height:100%">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos ipsa aut, saepe ut deleniti itaque quis, cum nemo officiis vero iure officia nulla, aliquid libero corporis dicta nesciunt repudiandae illum!</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos ipsa aut, saepe ut deleniti itaque quis, cum nemo officiis vero iure officia nulla, aliquid libero corporis dicta nesciunt repudiandae illum!</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos ipsa aut, saepe ut deleniti itaque quis, cum nemo officiis vero iure officia nulla, aliquid libero corporis dicta nesciunt repudiandae illum!</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos ipsa aut, saepe ut deleniti itaque quis, cum nemo officiis vero iure officia nulla, aliquid libero corporis dicta nesciunt repudiandae illum!</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos ipsa aut, saepe ut deleniti itaque quis, cum nemo officiis vero iure officia nulla, aliquid libero corporis dicta nesciunt repudiandae illum!</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos ipsa aut, saepe ut deleniti itaque quis, cum nemo officiis vero iure officia nulla, aliquid libero corporis dicta nesciunt repudiandae illum!</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos ipsa aut, saepe ut deleniti itaque quis, cum nemo officiis vero iure officia nulla, aliquid libero corporis dicta nesciunt repudiandae illum!</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos ipsa aut, saepe ut deleniti itaque quis, cum nemo officiis vero iure officia nulla, aliquid libero corporis dicta nesciunt repudiandae illum!</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos ipsa aut, saepe ut deleniti itaque quis, cum nemo officiis vero iure officia nulla, aliquid libero corporis dicta nesciunt repudiandae illum!</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos ipsa aut, saepe ut deleniti itaque quis, cum nemo officiis vero iure officia nulla, aliquid libero corporis dicta nesciunt repudiandae illum!</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos ipsa aut, saepe ut deleniti itaque quis, cum nemo officiis vero iure officia nulla, aliquid libero corporis dicta nesciunt repudiandae illum!</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos ipsa aut, saepe ut deleniti itaque quis, cum nemo officiis vero iure officia nulla, aliquid libero corporis dicta nesciunt repudiandae illum!</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos ipsa aut, saepe ut deleniti itaque quis, cum nemo officiis vero iure officia nulla, aliquid libero corporis dicta nesciunt repudiandae illum!</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos ipsa aut, saepe ut deleniti itaque quis, cum nemo officiis vero iure officia nulla, aliquid libero corporis dicta nesciunt repudiandae illum!</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos ipsa aut, saepe ut deleniti itaque quis, cum nemo officiis vero iure officia nulla, aliquid libero corporis dicta nesciunt repudiandae illum!</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos ipsa aut, saepe ut deleniti itaque quis, cum nemo officiis vero iure officia nulla, aliquid libero corporis dicta nesciunt repudiandae illum!</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos ipsa aut, saepe ut deleniti itaque quis, cum nemo officiis vero iure officia nulla, aliquid libero corporis dicta nesciunt repudiandae illum!</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos ipsa aut, saepe ut deleniti itaque quis, cum nemo officiis vero iure officia nulla, aliquid libero corporis dicta nesciunt repudiandae illum!</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos ipsa aut, saepe ut deleniti itaque quis, cum nemo officiis vero iure officia nulla, aliquid libero corporis dicta nesciunt repudiandae illum!</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos ipsa aut, saepe ut deleniti itaque quis, cum nemo officiis vero iure officia nulla, aliquid libero corporis dicta nesciunt repudiandae illum!</p>
        </el-scrollbar>
      </el-main>
    </el-container>
    <!-- <el-scrollbar style="height: 100%"></el-scrollbar> -->
  </el-dialog>
</template>
<script>
export default {
  name: 'Dialog3',
  props: {
    dialogPostVisible: {
      type: Boolean
    }
  },
  data () {
    return {
      opened: ['2']
    }
  }
}
</script>
<style scoped>
.dialog-title{
  color: #e9573f;
  font-weight: 500;
}
.dialog-title svg{
  margin: 0 8px;
}
.el-menu{
  border-color: rgba(230,230,230,.6);
  padding-right: 15px;
}
</style>
<style>
.el-dialog.is-fullscreen{
  height: 96%;
}
.el-menu-item.is-active{
  color: #e9573f;
}
.dialog-post .el-main{
  padding: 0 20px;
}
.dialog-post .el-scrollbar__wrap{
  padding-right: 17px;
  margin-right: -18px !important;
}
</style>

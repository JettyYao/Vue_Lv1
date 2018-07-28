<template>
  <el-dialog :visible.sync="dialogPostVisible" @close="$emit('update:dialogPostVisible', false)" custom-class="dialog-center" width="90%" top="0" fullscreen="true">
    <span slot="title" class="dialog-title"><font-awesome-icon icon="cube"/> Message About StorageBox</span>
    <el-scrollbar style="height: 100%">
    
    </el-scrollbar>
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
  }
}
</script>
<style scoped>
.dialog-title{
  color: #e9573f;
  font-weight: 500;
}
.dialog-title svg{
  margin-right: 8px;
}
</style>
<style>
.el-dialog.is-fullscreen{
  height: 96%;
}
</style>

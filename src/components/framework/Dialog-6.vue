<template>
    <el-dialog :visible.sync="dialogPostCreate" @close="$emit('update:dialogPostCreate', false)" custom-class="dialog-center post-create" top="0" :fullscreen="true">
      <div slot="title" style="color:#909399">
          <i class="fas fa-edit" /> Create a new Post —— {{data.tag_name}}
      </div>
       <mavon-editor v-model="value" class="editor" :subfield=false defaultOpen="edit" placeholder="开始编辑内容, 其他内容请点击左侧弹出框..." />
  </el-dialog>
</template>
<script>
export default {
  name: 'Dialog-6',
  props: {
    dialogPostCreate: {
      type: Boolean
    },
    data: {
      type: Array
    }
  },
  data () {
    return {
      form: {},
      value: ''
    }
  },
  methods: {
  }
}
</script>
<style scoped>

</style>
<style>
.post-create.is-fullscreen{
    width: 80%;
    height: 90%;
    top: 50%;
    transform: translateY(-50%);
}
.editor{
  height: 100% !important;
}
.post-create .el-dialog__body{
  height: calc(100% - 48px)
}
</style>

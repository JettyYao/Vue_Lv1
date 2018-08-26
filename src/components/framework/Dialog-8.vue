<template>
    <el-dialog :visible.sync="visible" @close="$emit('update:dialogNew', false)" custom-class="dialog-center post-create" top="0" :fullscreen="true" v-loading="loading" element-loading-text="加载数据中" element-loading-background="rgba(0, 0, 0, .6)">
      <div slot="title" style="color:#909399">
          <i class="fas fa-edit" /> Create/Update New For Today
      </div>
       <mavon-editor v-model="value" class="editor" :subfield=false defaultOpen="edit" @save="Save(data)" placeholder="开始编辑新闻内容..." />
  </el-dialog>
</template>
<script>
export default {
  name: 'Dialog-8',
  props: {
    dialogNew: {
      type: Boolean
    },
    data: {
      type: String
    }
  },
  data () {
    return {
      form: {},
      value: '',
      loading: false,
      visible: this.dialogNew
    }
  },
  methods: {
    Init: function () {
      this.loading = true
      this.$axios.get('/news').then((res) => {
        this.form = res.data
        this.value = this.form.content
      })
      setTimeout(() => {
        this.loading = false
      }, 500)
    },
    Save: function (id) {
      this.form.content = this.value
      let params = this.form
      if (id) {
        this.$axios.put('/news/' + id, params).then((res) => {
          this.$message({
            showClose: true,
            message: '每日新闻更新成功!',
            type: 'success'
          })
          this.SendData(res.data)
          this.ResetNew()
          this.$emit('update:dialogNew', false)
        }).catch(function (err) {
          console.log(err)
        })
        setTimeout(() => {
          this.loading = false
        }, 500)
      } else {
        this.$axios.post('/news', params).then((res) => {
          this.$message({
            showClose: true,
            message: '每日新闻创建成功!',
            type: 'success'
          })
          this.SendData(res.data)
          this.ResetNew()
          this.$emit('update:dialogNew', false)
        }).catch(function (err) {
          console.log(err)
        })
      }
    },
    ResetNew: function () {
      this.form = {}
      this.value = ''
    },
    SendData: function (send) {
      this.$emit('acceptNew', send)
    }
  },
  watch: {
    dialogNew () {
      this.visible = this.dialogNew
    }
  }
}
</script>
<style scoped>
</style>
<style>
</style>

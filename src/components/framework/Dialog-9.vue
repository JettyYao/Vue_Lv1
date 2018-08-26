<template>
    <el-dialog :visible.sync="visible" @close="$emit('update:dialogAbout', false)" custom-class="dialog-center post-create" top="0" :fullscreen="true" v-loading="loading" element-loading-text="加载数据中" element-loading-background="rgba(0, 0, 0, .6)">
      <div slot="title" style="color:#909399">
          <i class="fas fa-edit" /> Create/Update About For author
      </div>
       <mavon-editor v-model="value" class="editor" :subfield=false defaultOpen="edit" @save="Save(data)" placeholder="开始编辑作者资料/网站内容..." />
  </el-dialog>
</template>
<script>
export default {
  name: 'Dialog-9',
  props: {
    dialogAbout: {
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
      visible: this.dialogAbout
    }
  },
  methods: {
    Init: function () {
      this.loading = true
      this.$axios.get('/abouts').then((res) => {
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
        this.$axios.put('/abouts/' + id, params).then((res) => {
          this.$message({
            showClose: true,
            message: '关于资料更新成功!',
            type: 'success'
          })
          this.SendData(res.data)
          this.ResetAbout()
          this.$emit('update:dialogAbout', false)
        }).catch(function (err) {
          console.log(err)
        })
        setTimeout(() => {
          this.loading = false
        }, 500)
      } else {
        this.$axios.post('/abouts', params).then((res) => {
          this.$message({
            showClose: true,
            message: '关于资料创建成功!',
            type: 'success'
          })
          this.SendData(res.data)
          this.ResetAbout()
          this.$emit('update:dialogAbout', false)
        }).catch(function (err) {
          console.log(err)
        })
      }
    },
    ResetAbout: function () {
      this.form = {}
      this.value = ''
    },
    SendData: function (send) {
      this.$emit('acceptAbout', send)
    }
  },
  watch: {
    dialogAbout () {
      this.visible = this.dialogAbout
    }
  }
}
</script>
<style scoped>
</style>
<style>
</style>

<template>
    <el-dialog :visible.sync="dialogPostCreate" @close="$emit('update:dialogPostCreate', false)" custom-class="dialog-center post-create" top="0" :fullscreen="true" v-loading="loading" element-loading-text="加载数据中" element-loading-background="rgba(0, 0, 0, .6)">
      <div slot="title" style="color:#909399">
          <i class="fas fa-edit" /> Create a new Post —— {{data.tag_name}}
      </div>
       <mavon-editor v-model="value" class="editor" :subfield=false defaultOpen="edit" placeholder="开始编辑内容, 其他内容请点击左侧弹出框..." />
       <div :class="[ isClick ? [otherShow ? 'otherIn' : 'otherOut'] : '' , 'otherContent' ]" >
         <div class="post_form">
           <el-form label-position="left" label-width="80px" :model="form">
            <el-form-item label="内容标题">
              <el-input v-model="form.title" clearable></el-input>
            </el-form-item>
            <el-form-item label="内容作者">
              <el-input v-model="form.author" clearable></el-input>
            </el-form-item>
            <el-form-item>
              <el-button v-if=data.post_id type="primary" @click="UpdatePost(data.id, data.post_id)">更新内容</el-button>
              <el-button v-else type="primary" @click="SubmitPost(data.id)">立即创建</el-button>
              <el-button @click="ResetPost">重置</el-button>
            </el-form-item>
          </el-form>
         </div>
         <i class="fas fa-cube" @click="otherShow == true ? otherShow = false : otherShow = true; isClick = true" ></i>
       </div>
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
      value: '',
      otherShow: false,
      isClick: false,
      sendData: {},
      loading: false
    }
  },
  methods: {
    Init: function () {
      this.loading = true
      this.$axios.get('/tags/' + this.data.id + '/posts/' + this.data.post_id).then((res) => {
        this.form = res.data
        this.value = this.form.content
      })
      setTimeout(() => {
        this.loading = false
      }, 500)
    },
    SubmitPost: function (tagId) {
      this.form.content = this.value
      let params = this.form
      this.$axios.post('/tags/' + tagId + '/posts', params).then((res) => {
        this.$message({
          showClose: true,
          message: '内容创建成功!',
          type: 'success'
        })
        this.SendData(res.data[res.data.length - 1])
        this.ResetPost()
        this.$emit('update:dialogPostCreate', false)
      }
      ).catch(function (err) {
        console.log(err)
      })
    },
    UpdatePost: function (tagId, postId) {
      this.loading = true
      this.form.content = this.value
      let params = this.form
      this.$axios.put('/tags/' + tagId + '/posts/' + postId, params).then((res) => {
        this.$message({
          showClose: true,
          message: '内容更新成功!',
          type: 'success'
        })
        this.SendData(res.data)
        this.ResetPost()
        this.$emit('update:dialogPostCreate', false)
      }
      ).catch(function (err) {
        console.log(err)
      })
      setTimeout(() => {
        this.loading = false
      }, 500)
    },
    ResetPost: function () {
      this.form = {}
      this.value = ''
      this.isClick = false
      this.otherShow = false
    },
    SendData: function (send) {
      this.$emit('acceptData', send)
    }
  }
}
</script>
<style scoped>
.otherContent{
  position: absolute;
  z-index: 1600;
  height: calc(100% - 55px);
  top: 25px;
  left: -357px;
}
.otherContent i{
  display: inline-block;
  padding: 20px 25px;
  background-color: #409EFF;
  color: #fff;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  box-shadow: 1px 0 2px #909090;
  cursor: pointer;
  margin-top: 50%;
  transform: translateY(-50%);
}
.post_form{
  float: left;
  background-color: #fff;
  height: 100%;
  padding: 0 30px;
  box-shadow: 1px 0 2px #909090;
}
.post_form .el-form{
  padding: 30px 0;
}
.otherIn {
  animation: otherIn .3s linear;
  animation-fill-mode: forwards;
}
.otherOut {
  animation: otherOut .3s linear;
  animation-fill-mode: forwards;
}
@keyframes otherIn {
  0%{
    left: -357px;
  }
  100%{
    left: 0;
  }
}
@keyframes otherOut {
  0%{
    left: 0;
  }
  100%{
    left: -357px;
  }
}
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
  height: calc(100% - 48px);
  position: relative;
}
</style>

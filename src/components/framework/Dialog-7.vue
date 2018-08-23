<template>
    <el-dialog :visible.sync="visible" @close="$emit('update:dialogPostShow', false)" custom-class="dialog-center admin-post-show" top="0" :fullscreen="true"  v-loading="loading" element-loading-text="加载数据中">
      <div slot="title" style="color:#909399">
          <i class="fas fa-book-open" style="color: #409EFF" /> <strong style="color: #409EFF">Look</strong> <strong>{{data.title}}</strong>
      </div>
      <el-scrollbar style="height:100%">
        <el-collapse v-model="activeNames">
            <el-collapse-item title="内容查看 ContentData" name="1" class="mainContent">
              <el-row>
                <el-col :span="12" style="padding: 5px 20px;">
                  <div style="background-color: #409EFF;text-align:center">
                    <img :src="imgAdd" alt="" style="width: 90px; height: 90px;padding: 11px">
                  </div>
                </el-col>
                <el-col :span="12">
                  <div>
                    <el-row>
                          <el-col :span="4">内容标题：</el-col>
                          <el-col :span="20" style="word-wrap:break-word"><p>{{postData.title}}</p></el-col>
                      </el-row>
                  </div>
                  <div>
                    <el-row>
                          <el-col :span="4">内容作者：</el-col>
                          <el-col :span="20"><p>{{postData.author}}</p></el-col>
                      </el-row>
                  </div>
                  <div>
                    <el-row>
                          <el-col :span="4">创建时间：</el-col>
                          <el-col :span="20"><p>{{postData.created_at | changeDate}}</p></el-col>
                      </el-row>
                  </div>
                  <div>
                    <el-row>
                          <el-col :span="4">更新时间：</el-col>
                          <el-col :span="20"><p>{{postData.updated_at | changeDate}}</p></el-col>
                      </el-row>
                  </div>
                </el-col>
              </el-row>
                <div>
                    <el-row style="padding: 10px 20px">
                        <el-col>内容正文：</el-col>
                        <el-col><p style="word-wrap:break-word">{{postData.content}}</p></el-col>
                    </el-row>
                </div>
            </el-collapse-item>
            <el-collapse-item title="游客反馈 Feedback" name="2">
              <el-card v-for="(item,index) in commentData" :key="index" style="margin-bottom: 8px;">
                <div slot="header" class="clearfix">
                  <span><strong style="color:#409EFF;padding-right: 15px;">Floor：#{{index+1}}</strong> {{item.created_at | changeDate}}</span>
                  <el-button style="float: right; padding:8px" type="danger" @click="commentDelete(item.id, index)">删除</el-button>
                  <el-button style="float: right; padding:8px; margin-right:5px;" type="primary" @click="CreateReply(item.id)">回复</el-button>
                </div>
                <el-row>
                  <el-col :span="3" style="padding: 5px 10px 5px 0;">
                    <div class="img">
                      <i class="fas fa-user"></i>
                    </div>
                  </el-col>
                  <el-col :span="21">
                    <div>
                      <p style="color:#409EFF">{{item.username}}：{{item.account}}</p>
                      <p>{{item.content}}</p>
                    </div>
                    <div v-for="(reply,index) in item.replies" :key="index" style="margin: 10px 0">
                      <el-card style="margin-bottom: 8px;">
                        <el-row>
                          <el-col :span="3" style="padding: 5px 10px 5px 0;">
                            <div class="img reply-button" @click="DeleteReply(reply.comment_id, reply.id, index)">
                              <i class="fas fa-user"></i>
                            </div>
                          </el-col>
                          <el-col :span="21">
                            <div>
                              <p style="color:#409EFF">{{reply.username}}：{{reply.account}} <span style="color: black">(At: {{reply.created_at | changeDate}})</span></p>
                              <p>{{reply.content}}</p>
                            </div>
                          </el-col>
                        </el-row>
                      </el-card>
                    </div>
                  </el-col>
                </el-row>
              </el-card>
            </el-collapse-item>
         </el-collapse>
      </el-scrollbar>
  </el-dialog>
</template>
<script>
export default {
  name: 'Dialog-7',
  props: {
    dialogPostShow: {
      type: Boolean,
      require: true
    },
    data: {
      type: Array,
      require: true
    }
  },
  data () {
    return {
      activeNames: ['1'],
      postData: [],
      commentData: [],
      postReply: {},
      imgAdd: '',
      loading: false,
      visible: this.dialogPostShow
    }
  },
  methods: {
    Init: function () {
      this.postData = []
      this.loading = true
      // get post data
      this.$axios.get('/tags/' + this.data.tag_id + '/posts/' + this.data.postId).then((res) => {
        this.postData = res.data
        this.imgAdd = require('../../assets/svg/' + this.data.tag_name.toLowerCase() + '1.svg')
      }).catch(function (err) {
        console.log(err)
      })
      // get comment and reply data
      this.$axios.get('/tags/' + this.data.tag_id + '/posts/' + this.data.postId + '/comments').then((res) => {
        this.commentData = res.data
      }).catch(function (err) {
        console.log(err)
      })
      setTimeout(() => {
        this.loading = false
      }, 500)
    },
    commentDelete: function (commentId, index) {
      this.$confirm('此操作将删除此条内容, 是否继续?', '提示', { confirmButtonText: '确定', cancelButtonText: '取消', type: 'success' }).then(() => {
        this.$message({
          showClose: true,
          type: 'success',
          message: '删除成功!'
        })
        this.$axios.delete('/tags/' + this.data.tag_id + '/posts/' + this.data.postId + '/comments/' + commentId).then((res) => {
          this.commentData.splice(index, 1)
        }).catch(function (err) {
          console.log(err)
        })
      }).catch(() => {
        this.$message({
          showClose: true,
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    DeleteReply: function (commentId, replyId, index) {
      this.$confirm('此操作将删除此条回复, 是否继续?', '提示', { confirmButtonText: '确定', cancelButtonText: '取消', type: 'success' }).then(() => {
        this.$message({
          showClose: true,
          type: 'success',
          message: '删除成功!'
        })
        this.$axios.delete('/tags/' + this.data.tag_id + '/posts/' + this.data.postId + '/comments/' + commentId + '/replies/' + replyId).then((res) => {
          this.commentData.forEach(e => {
            if (e.id === commentId) {
              e.replies.splice(index, 1)
            }
          })
        }).catch(function (err) {
          console.log(err)
        })
      }).catch(() => {
        this.$message({
          showClose: true,
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    CreateReply: function (commentId) {
      this.$prompt('请输入回复信息', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消'
        // inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
        // inputErrorMessage: '邮箱格式不正确'
      }).then(({value}) => {
        this.$message({
          type: 'success',
          message: '回复成功！'
        })
        this.postReply.username = 'JETTY'
        this.postReply.account = '13422496263@163.com'
        this.postReply.content = value
        let params = this.postReply
        this.$axios.post('/tags/' + this.data.tag_id + '/posts/' + this.data.postId + '/comments/' + commentId + '/replies/', params).then((res) => {
          this.commentData.forEach(e => {
            if (e.id === commentId) {
              e.replies.push(res.data[res.data.length - 1])
            }
          })
        }).catch(function (err) {
          console.log(err)
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消输入'
        })
      })
    }
  },
  filters: {
    changeDate: function (time) {
      time = new Date(time)
      return time.toLocaleString()
    }
  },
  watch: {
    dialogPostShow () {
      this.visible = this.dialogPostShow
    }
  }
}
</script>
<style scoped>
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }
  .img{
    background-color: #409EFF;
    text-align: center;
    line-height: 36px;
    color: #fff;
  }
  .reply-button {
    cursor: pointer;
  }
  .reply-button:hover {
    background-color: #f56c6c;
  }
</style>
<style>
.admin-post-show.is-fullscreen{
    width: 80%;
    height: 90%;
    top: 50%;
    transform: translateY(-50%);
}
.admin-post-show .el-dialog__body{
    padding: 30px 20px 30px 50px !important;
    height: calc(100% - 48px);
}
.admin-post-show .is-horizontal{
    display: none;
}
.admin-post-show .el-card__header{
  padding: 10px 20px;
  line-height: 30px;
}
.admin-post-show .el-scrollbar__view{
  padding-right: 30px;
}
.admin-post-show .mainContent .el-collapse-item__content{
  font-size: 14px;
}
.admin-post-show .mainContent .el-collapse-item__content .el-row{
  padding: 1.5px 0;
}
.admin-post-show .el-card.is-always-shadow, .admin-post-show .el-card.is-hover-shadow:focus, .admin-post-show .el-card.is-hover-shadow:hover{
  box-shadow: none;
}
.admin-post-show .el-card__body{
  padding: 15px 20px;
}
</style>

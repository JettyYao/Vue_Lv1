<template>
  <el-scrollbar style="height: 100vh">
    <el-row>
        <el-col :span=18 :offset=3 class="outStyle">
            <div class="admin-header">
                <el-row>
                    <el-col :span=6>
                        <div class="admin-img">
                            <img src="../assets/logo.png" alt="">
                        </div>
                    </el-col>
                    <el-col :span=18 class="admin-mess">
                        <div class="admin-name">
                            <span>Jetty Yao - A WEBSITE DEVELOPER</span>
                            <el-button icon="el-icon-caret-left" circle></el-button>
                        </div>
                        <div class="admin-intro">
                            <el-row>
                                <el-col :span=4>My Introduce <br><i class="fas fa-level-up-alt intro-icon"></i></el-col>
                                <el-col :span=20>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et ipsam, quod quasi eveniet molestias quis repudiandae voluptatibus temporibus esse. Sed praesentium qui aliquid corporis nemo aliquam tenetur, necessitatibus voluptate vitae?</el-col>
                            </el-row>
                        </div>
                        <div class="admin-tags">
                            <el-row>
                                <el-col :span=4>My knowledge <br><i class="fas fa-level-up-alt intro-icon"></i></el-col>
                                <el-col :span=20>
                                    <el-tag type="success" v-for="tag in TagList" :key="tag.index">{{tag.tag_name}}</el-tag>
                                </el-col>
                            </el-row>
                        </div>
                        <div class="config">
                            <el-row>
                                <el-col :span=4 style="line-height: 24px;">Configuration</el-col>
                                <el-col :span=20>
                                    <el-button type="primary" size="mini" v-for="(tag, index) in TagList" :key="index" @click="deleteTag(index)">{{tag.tag_name}}</el-button>
                                    <el-input
                                        v-if="inputVisible"
                                        v-model="inputValue"
                                        ref="saveTagInput"
                                        size="mini"
                                        @keyup.enter.native="handleInputConfirm"
                                        @blur="handleInputConfirm"
                                        class="input-new-tag"
                                        >
                                        </el-input>
                                        <el-button v-else size="mini" @click="showInput" type="danger">+ New Tag</el-button>
                                </el-col>
                            </el-row>
                        </div>
                    </el-col>
                </el-row>
            </div>
            <div class="admin-content">
                <el-collapse v-model="activeNames" style="padding: 0 3px 20px;"> <!-- @change="handleChange" -->
                    <el-collapse-item title="新闻 EveryDayNews" name="1">
                        <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                        <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
                    </el-collapse-item>
                    <el-collapse-item title="用户 EveryVisitors" name="2">
                        <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                        <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
                    </el-collapse-item>
                    <el-collapse-item title="内容 PostsContent" name="3">
                        <div v-for="(postList,index) in TagList" :key="index" style="margin-bottom: 35px">
                            <div class="tag_show"><p>—————— <small @click="createOrUpdate(postList.id, postList.tag_name)">{{postList.tag_name}}</small> ——————</p></div>
                            <el-table :data="postList.posts" style="width: 100%">
                                <el-table-column label="创建日期" width="220">
                                <template slot-scope="scope">
                                    <i class="el-icon-time"></i>
                                    <span style="margin-left: 10px">{{ scope.row.created_at | changeDate }}</span>
                                </template>
                                </el-table-column>
                                <el-table-column label="创建作者" width="220">
                                <template slot-scope="scope">
                                    <el-popover trigger="hover" placement="top">
                                    <p>编撰者: {{ scope.row.author }}</p>
                                    <!-- <p>住址: {{ scope.row.address }}</p> -->
                                    <div slot="reference" class="name-wrapper">
                                        <el-tag size="medium">{{ scope.row.author }}</el-tag>
                                    </div>
                                    </el-popover>
                                </template>
                                </el-table-column>
                                <el-table-column label="内容标题">
                                    <template slot-scope="scope">{{ scope.row.title }}</template>
                                </el-table-column>
                                <el-table-column label="操作">
                                <template slot-scope="scope">
                                    <el-button size="mini" @click="lookPost(postList.id, scope.row.title, scope.row.id, postList.tag_name)">查看</el-button>
                                    <el-button size="mini" type="primary" @click="createOrUpdate(postList.id, postList.tag_name, scope.row.id)">编辑</el-button>
                                    <el-button size="mini" type="danger" @click="handleDelete(index, scope.$index, scope.row)">删除</el-button>
                                </template>
                                </el-table-column>
                            </el-table>
                        </div>
                    </el-collapse-item>
                    <el-collapse-item title="邮件 VisitorEmails" name="4">
                        <div>简化流程：设计简洁直观的操作流程；</div>
                        <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
                        <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
                    </el-collapse-item>
                    <el-collapse-item title="评论 EveryComment" name="5">
                        <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
                        <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
                    </el-collapse-item>
                </el-collapse>
            </div>
        </el-col>
    </el-row>
    <div class="dialog">
         <Dialog6 :dialogPostCreate.sync="dialogPostCreate" :data="create_tag" v-on:acceptData="handleNewDate" ref="updatePost"></Dialog6>
         <Dialog7 :dialogPostShow.sync="dialogPostShow" :data="look_post" ref="postShow"></Dialog7>
    </div>
  </el-scrollbar>
</template>
<script>
import Dialog6 from '../components/framework/Dialog-6'
import Dialog7 from '../components/framework/Dialog-7'
// import func from './vue-temp/vue-editor-bridge';
export default {
  name: 'AdminControll',
  components: {Dialog6, Dialog7},
  data () {
    return {
      activeNames: ['1'],
      TagList: [],
      create_tag: [],
      look_post: [],
      inputVisible: false,
      inputValue: '',
      dialogPostCreate: false,
      dialogPostShow: false
    }
  },
  methods: {
    getTag: function () {
      this.$axios.get('/tags').then((res) => {
        this.TagList = res.data
      }).catch(function (err) {
        console.log(err)
      })
    },
    deleteTag: function (index) {
      let deleteTagIndex = this.TagList[index].id
      if (deleteTagIndex) {
        this.$confirm('此操作将删除标签及其下内容, 是否继续?', '提示', { confirmButtonText: '确定', cancelButtonText: '取消', type: 'success' }).then(() => {
          this.$message({
            showClose: true,
            type: 'success',
            message: '删除成功!'
          })
          this.$axios.delete('/tags/' + deleteTagIndex).then((res) => {
            this.TagList.splice(index, 1)
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
      } else {
        this.$message({
          showClose: true,
          message: '新建项暂时无法删除，请刷新重试',
          type: 'error'
        })
      }
    },
    showInput: function () {
      this.inputVisible = true
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus()
      })
    },
    handleInputConfirm: function () {
      let inputValue = this.inputValue
      if (inputValue) {
        let params = { tag_name: inputValue, created_by: 'JETTY' }
        this.$axios.post('/tags', params).then((res) => {
          this.TagList.push(res.data)
          this.$message({
            showClose: true,
            message: '标签创建成功!',
            type: 'success'
          })
        }).catch(function (err) {
          console.log(err)
        })
      }
      this.inputVisible = false
      this.inputValue = ''
    },
    createOrUpdate: function (tagId, tagName, postId) {
      this.create_tag.id = tagId
      this.create_tag.tag_name = tagName
      if (postId) {
        this.create_tag.post_id = postId
        this.$refs.updatePost.Init()
      }
      this.dialogPostCreate = true
    },
    handleNewDate: function (data) {
      let id = data.tag_id
      this.TagList.forEach(e => {
        if (data.id) {
          e.posts.forEach(p => {
            if (p.id === data.id) {
              let positionIndex = e.posts.indexOf(p)
              e.posts.splice(positionIndex, 1, data)
            }
          })
        } else {
          if (e.id === id) {
            e.posts.push(data)
          }
        }
      })
    },
    handleDelete: function (tagIndex, postIndex, data) {
      this.$axios.delete('/tags/' + data.tag_id + '/posts/' + data.id).then((res) => {
        this.$confirm('此操作将永久删除该内容, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'error'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
          this.TagList[tagIndex].posts.splice(postIndex, 1)
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
      })
    },
    lookPost: function (tagId, title, postId, tagName) {
      this.look_post.tag_id = tagId
      this.look_post.title = title
      this.look_post.postId = postId
      this.look_post.tag_name = tagName
      this.dialogPostShow = true
      this.$refs.postShow.Init()
    }
  },
  filters: {
    changeDate: function (time) {
      time = new Date(time)
      return time.toLocaleString()
    }
  },
  created () {
    this.getTag()
  }
}
</script>
<style scoped>
.outStyle{
    padding: 40px;
    box-shadow: 0 0 3px rgba(0,0,0,.2);
}
.admin-img{
    width: 200px;
    height: 200px;
    margin: 0 auto;
    /* border-radius: 50%; */
    overflow: hidden;
    /* box-shadow: 0 0 3px #a6a6a6; */
}
.admin-name{
    font-size: 20px;
    font-weight: bold;
    text-transform: uppercase;
}
.admin-name .el-button--small.is-circle{
    padding: 3px;
    margin-left: 3px;
    vertical-align: text-top;
}
.admin-mess>div{
    margin: 12px 0 5px;
}
.intro-icon{
    transform: rotateZ(90deg);
    margin-left: 4px;
    color: #3c96f3;
}
.admin-header{
    padding-bottom: 30px;
    border-bottom: 2px solid rgba(0,0,0,.1);
}
.input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
}
.tag_show{
    text-align: center;
    padding: 10px 0 15px;
    color: #409EFF;
    font-weight: bold;
}
.tag_show small{
    padding: 0 10px;
    cursor: pointer;
}
.tag_show small:hover{
    color: #f56c6c;
}
</style>
<style>
.admin-name .el-button--small.is-circle,.admin-name .el-button:active{
    color: #3c96f3;
    border-color: #3c96f3;
}
.admin-name .el-button:focus,.admin-name .el-button:hover{
    background-color: #3c96f3;
    color: #f0f0f0;
    border-color: #f0f0f0;
}
.config .el-button--mini{
    font-size: 8px;
    padding: 5px 13px;
}
.admin-content .el-collapse{
    border: 0;
}
.el-scrollbar__wrap{
  overflow-x: hidden;
}
.el-scrollbar__bar{
  right: 3px;
}
.input-new-tag.el-input--mini .el-input__inner{
    height: 24px;
    line-height: 24px;
}
.admin-tags .el-tag{
    margin-right: 10px;
}
</style>

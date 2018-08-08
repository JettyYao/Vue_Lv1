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
                                <el-col :span=4>My Introduce <br><font-awesome-icon icon="level-up-alt" class="intro-icon"/></el-col>
                                <el-col :span=20>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et ipsam, quod quasi eveniet molestias quis repudiandae voluptatibus temporibus esse. Sed praesentium qui aliquid corporis nemo aliquam tenetur, necessitatibus voluptate vitae?</el-col>
                            </el-row>
                        </div>
                        <div class="admin-tags">
                            <el-row>
                                <el-col :span=4>My knowledge <br><font-awesome-icon icon="level-up-alt" class="intro-icon"/></el-col>
                                <el-col :span=20>
                                    <el-tag>标签一</el-tag>
                                    <el-tag type="success">标签二</el-tag>
                                    <el-tag type="info">标签三</el-tag>
                                    <el-tag type="warning">标签四</el-tag>
                                    <el-tag type="danger">标签五</el-tag>
                                </el-col>
                            </el-row>
                        </div>
                        <div class="config">
                            <el-row>
                                <el-col :span=4 style="line-height: 24px;">Configuration</el-col>
                                <el-col :span=20>
                                    <el-button size="mini">默认按钮</el-button>
                                    <el-button type="primary" size="mini">主要按钮</el-button>
                                    <el-button type="success" size="mini">成功按钮</el-button>
                                    <el-button type="info" size="mini">信息按钮</el-button>
                                    <el-button type="warning" size="mini">警告按钮</el-button>
                                    <el-button type="danger" size="mini">危险按钮</el-button>
                                </el-col>
                            </el-row>
                        </div>
                    </el-col>
                </el-row>
            </div>
            <div class="admin-content">
                <el-collapse v-model="activeNames" @change="handleChange" style="padding: 0 3px 20px;">
                    <el-collapse-item title="一致性 Consistency" name="1">
                        <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                        <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
                    </el-collapse-item>
                    <el-collapse-item title="反馈 Feedback" name="2">
                        <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
                        <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
                    </el-collapse-item>
                    <el-collapse-item title="效率 Efficiency" name="3">
                        <div>简化流程：设计简洁直观的操作流程；</div>
                        <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
                        <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
                    </el-collapse-item>
                    <el-collapse-item title="可控 Controllability" name="4">
                        <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
                        <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
                    </el-collapse-item>
                </el-collapse>
            </div>
        </el-col>
    </el-row>
  </el-scrollbar>
</template>
<script>
export default {
  name: 'AdminControll',
  data () {
    return {
      activeNames: ['1']
    }
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
</style>

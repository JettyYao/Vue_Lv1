<template>
  <el-dialog :visible.sync="dialogMessageVisible" @close="$emit('update:dialogMessageVisible', false)" custom-class="dialog-center dialog-login" width="40%" top="0" >
    <span slot="title" class="dialog-title">
        <font-awesome-icon icon="cube"/>
        <h3 class="login-title">Email to StorageBox</h3>
    </span>
    <el-form :model="ruleForm2" label-width="100px" label-position="top">
        <el-form-item label="名称: NetName">
            <el-input v-model="ruleForm2.name"></el-input>
        </el-form-item>
        <el-form-item label="邮箱: Email">
            <el-input v-model="ruleForm2.email" ></el-input>
        </el-form-item>
        <el-form-item label="信息内容: Message">
            <el-input
            resize=none
            type="textarea"
            rows=5
            placeholder="If your email's words are more than 140, please email to yao1508728331@gmail.com"
            v-model="ruleForm2.textarea"
            maxlength=140>
            </el-input>
        </el-form-item>
        <el-form-item style="text-align:center;padding-top: 10px;">
            <el-button type="primary" @click="submitForm('ruleForm2')" class="button_me"><font-awesome-icon icon="cube"/> 快速发送</el-button>
            <el-button @click="resetForm()">重置</el-button>
        </el-form-item>
    </el-form>
  </el-dialog>
</template>
<script>
export default {
  name: 'Dialog4',
  props: {
    dialogMessageVisible: {
      type: Boolean
    }
  },
  data () {
    return {
      ruleForm2: {
        name: '',
        email: '',
        pass: '',
        checkPass: ''
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm () {
      this.ruleForm2 = {}
    }
  }
}
</script>
<style scoped>
.dialog-title{
  color: #e9573f;
  font-weight: 500;
  margin: 0 auto;
}
.dialog-title svg{
  margin-right: 8px;
  font-size: 50px;
}
.dialog-login .el-form{
    width: 80%;
    margin: 0 auto;
}
.login-title{
    padding: 10px 0;
    text-transform: uppercase;
}
</style>
<style>
textarea{
    font-family: inherit;
}
</style>

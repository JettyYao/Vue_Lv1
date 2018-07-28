<template>
  <el-dialog :visible.sync="dialogNewsVisible" @close="$emit('update:dialogNewsVisible', false)" custom-class="dialog-center dialog-new" width="50%" top="0">
    <span slot="title" class="dialog-title"><font-awesome-icon icon="cube"/> News About StorageBox</span>
    <el-scrollbar style="height: 100%">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo doloribus architecto, quas aliquam sapiente, voluptas, necessitatibus ad, mollitia distinctio magni eveniet aliquid iste quam laudantium? Error id dolor omnis consequuntur!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo doloribus architecto, quas aliquam sapiente, voluptas, necessitatibus ad, mollitia distinctio magni eveniet aliquid iste quam laudantium? Error id dolor omnis consequuntur!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo doloribus architecto, quas aliquam sapiente, voluptas, necessitatibus ad, mollitia distinctio magni eveniet aliquid iste quam laudantium? Error id dolor omnis consequuntur!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo doloribus architecto, quas aliquam sapiente, voluptas, necessitatibus ad, mollitia distinctio magni eveniet aliquid iste quam laudantium? Error id dolor omnis consequuntur!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo doloribus architecto, quas aliquam sapiente, voluptas, necessitatibus ad, mollitia distinctio magni eveniet aliquid iste quam laudantium? Error id dolor omnis consequuntur!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo doloribus architecto, quas aliquam sapiente, voluptas, necessitatibus ad, mollitia distinctio magni eveniet aliquid iste quam laudantium? Error id dolor omnis consequuntur!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo doloribus architecto, quas aliquam sapiente, voluptas, necessitatibus ad, mollitia distinctio magni eveniet aliquid iste quam laudantium? Error id dolor omnis consequuntur!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo doloribus architecto, quas aliquam sapiente, voluptas, necessitatibus ad, mollitia distinctio magni eveniet aliquid iste quam laudantium? Error id dolor omnis consequuntur!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo doloribus architecto, quas aliquam sapiente, voluptas, necessitatibus ad, mollitia distinctio magni eveniet aliquid iste quam laudantium? Error id dolor omnis consequuntur!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo doloribus architecto, quas aliquam sapiente, voluptas, necessitatibus ad, mollitia distinctio magni eveniet aliquid iste quam laudantium? Error id dolor omnis consequuntur!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo doloribus architecto, quas aliquam sapiente, voluptas, necessitatibus ad, mollitia distinctio magni eveniet aliquid iste quam laudantium? Error id dolor omnis consequuntur!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo doloribus architecto, quas aliquam sapiente, voluptas, necessitatibus ad, mollitia distinctio magni eveniet aliquid iste quam laudantium? Error id dolor omnis consequuntur!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo doloribus architecto, quas aliquam sapiente, voluptas, necessitatibus ad, mollitia distinctio magni eveniet aliquid iste quam laudantium? Error id dolor omnis consequuntur!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo doloribus architecto, quas aliquam sapiente, voluptas, necessitatibus ad, mollitia distinctio magni eveniet aliquid iste quam laudantium? Error id dolor omnis consequuntur!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo doloribus architecto, quas aliquam sapiente, voluptas, necessitatibus ad, mollitia distinctio magni eveniet aliquid iste quam laudantium? Error id dolor omnis consequuntur!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo doloribus architecto, quas aliquam sapiente, voluptas, necessitatibus ad, mollitia distinctio magni eveniet aliquid iste quam laudantium? Error id dolor omnis consequuntur!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo doloribus architecto, quas aliquam sapiente, voluptas, necessitatibus ad, mollitia distinctio magni eveniet aliquid iste quam laudantium? Error id dolor omnis consequuntur!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo doloribus architecto, quas aliquam sapiente, voluptas, necessitatibus ad, mollitia distinctio magni eveniet aliquid iste quam laudantium? Error id dolor omnis consequuntur!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo doloribus architecto, quas aliquam sapiente, voluptas, necessitatibus ad, mollitia distinctio magni eveniet aliquid iste quam laudantium? Error id dolor omnis consequuntur!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo doloribus architecto, quas aliquam sapiente, voluptas, necessitatibus ad, mollitia distinctio magni eveniet aliquid iste quam laudantium? Error id dolor omnis consequuntur!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo doloribus architecto, quas aliquam sapiente, voluptas, necessitatibus ad, mollitia distinctio magni eveniet aliquid iste quam laudantium? Error id dolor omnis consequuntur!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo doloribus architecto, quas aliquam sapiente, voluptas, necessitatibus ad, mollitia distinctio magni eveniet aliquid iste quam laudantium? Error id dolor omnis consequuntur!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo doloribus architecto, quas aliquam sapiente, voluptas, necessitatibus ad, mollitia distinctio magni eveniet aliquid iste quam laudantium? Error id dolor omnis consequuntur!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo doloribus architecto, quas aliquam sapiente, voluptas, necessitatibus ad, mollitia distinctio magni eveniet aliquid iste quam laudantium? Error id dolor omnis consequuntur!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo doloribus architecto, quas aliquam sapiente, voluptas, necessitatibus ad, mollitia distinctio magni eveniet aliquid iste quam laudantium? Error id dolor omnis consequuntur!</p>
    </el-scrollbar>
  </el-dialog>
</template>
<script>
export default {
  name: 'Dialog1',
  props: {
    dialogNewsVisible: {
      type: Boolean
    }
  },
  data () {
    return {
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
  margin-right: 8px;
}
</style>
<style>
.dialog-new{
  height: 60%;
}
.el-dialog__body{
  height: calc(100% - 48px);
}
.dialog-center{
  top: 54%;
  transform: translate(0,-54%);
  margin-bottom: 0;
}
.dialog-center .el-dialog__body{
  padding: 15px 20px 30px 30px;
}
.el-dialog__header{
  min-height: 34px;
  padding: 20px 30px 5px;
}
.dialog-center .el-scrollbar__view{
  padding-right: 10px;
}
.dialog-center .el-menu-item:focus,.dialog-center .el-menu-item:hover,.dialog-center .el-submenu__title:hover{
  background-color: transparent;
}
</style>

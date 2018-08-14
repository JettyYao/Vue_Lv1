<template>
  <el-dialog :visible.sync="dialogAboutVisible" @close="$emit('update:dialogAboutVisible', false)" custom-class="dialog-center dialog-about" top="0" :fullscreen="true">
    <span slot="title" class="dialog-title"><i class="fas fa-cube"/> Message About StorageBox</span>
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
  name: 'Dialog2',
  props: {
    dialogAboutVisible: {
      type: Boolean
    }
  },
  data () {
    return {}
  }
}
</script>
<style scoped>
.dialog-title{
  color: #3c96f3;
  font-weight: 500;
}
.dialog-title svg{
  margin-right: 8px;
}
</style>
<style>
.dialog-about.is-fullscreen{
  height: 80%;
  width: 70%;
}
</style>

<!--1、模板：html结构-->
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<!--2、行为：处理逻辑-->
<script>
//局部注册组件
export default {
  name: 'App',
  data(){
   return {
   }
  },
    components: {
      
  }

}
</script>

<!--3、样式：解决样式-->
//scoped:域
<style scoped>
h1{
color:red;
}
</style>

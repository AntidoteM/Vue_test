<!--1、模板：html结构-->
<template>
  <div id="home">
            <app-header v-on:titleChanged="updateTitle($event)" v-bind:title="title"></app-header>
            <users v-bind:userss="userss"></users>
            <users v-bind:userss="userss"></users>
            <app-footer v-bind:title="title"></app-footer>
   </div>
</template>

<!--2、行为：处理逻辑-->
<script>
//局部注册组件
import User from  './User'
import Header from  './Header'
import Footer from  './Footer'
export default {
  name: 'home',
  data(){
   return {
     userss:[
        {name:"包子",position:"Web开发",show:false},
        {name:"饺子",position:"Web开发",show:false},
        {name:"川子",position:"Web开发",show:false},
        {name:"饺子",position:"Web开发",show:false},
        {name:"饺子",position:"Web开发",show:false},
        {name:"川子",position:"Web开发",show:false},
        {name:"饺子",position:"Web开发",show:false},
        {name:"饺子",position:"Web开发",show:false},
        {name:"川子",position:"Web开发",show:false}]
   ,title:"属性传值（number,String,boolean）这是我们的大海！神圣庄严不可侵犯"}

  },methods:{
  updateTitle(title){
  this.title=title;
  }
  },
    components: {
    "users":User,
    "app-header":Header,
    "app-footer":Footer
  }
//父向子：属性传值；子向父：事件传值
//传值：string、number、boolean
//引用：array、object

}
</script>

<!--3、样式：解决样式-->
//scoped:域
<style scoped>
h1{
color:red;
}
</style>

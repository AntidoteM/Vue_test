<!--1、模板：html结构-->
<template>
<div  class="users">
<h1>Hello Users</h1>
<ul> 
<li v-for="user in userss" v-on:click="user.show=!user.show">
<h2>{{user.name}}</h2>
<h3 v-show="user.show">{{user.position}}</h3>
</li>
</ul>
<button v-on:click="deleteUser">删除</button>
</div>
</template>

<!--2、行为：处理逻辑-->
<script>
export default {
name:'users',
//props:["userss"],
//标准传值
props:{
userss:{
type:Array,
required:true
},
lists:{}
},
data:function(){
return{

}
},methods:{
deleteUser:function(){
this.userss.pop()
}
}
}

</script>

<!--3、样式：解决样式-->
<style scoped>
.users{
width:100%;
max-width:1200px;
background:red;
margin:40px auto;
padding:0 20px;
box-sizing:border-box;
}
h1{
color:green;
}
ul{
display:flex;
flex-wrap:wrap;
list-style-type:none;
padding:0;
}
li{
flex-grow:1;
flex-basis:200px;
text-align:center;
padding:30px;
border:2px solid green;
margin:10px;
}
</style>


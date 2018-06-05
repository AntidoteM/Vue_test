// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import Home from './components/Home'
import HelloWorld from './components/HelloWorld'
//import User from  './components/User'
Vue.config.productionTip = false
Vue.use(VueRouter)

//配置路由
const router=new VueRouter({
  routes:[
    {path:"/",component:Home},
    {path:"/helloworld",component:HelloWorld}
  ],
  mode:"history"
})

//全局注册组件
//Vue.component("users",User);
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: {App},
    template: '<App/>'
})

//入口文件index.html  ->main.js ->App.vue

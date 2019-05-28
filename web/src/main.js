// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'


Vue.config.productionTip = false


//mint-ui开始
//引入全局样式
import'../static/css/global.css'
//引入Mint-ui
import MintUI from 'mint-ui';
//安装插件
Vue.use(MintUI); //里面其实做的就是注册所有的全局组件，和给vue.prototype挂载一些对象，方便你使用，挂载后 组件内的this.xxx就能用了
//引入css
import 'mint-ui/lib/style.css'
/* eslint-disable no-new */
//mint-ui结束


// axios 开始
import Axios from 'axios';
//引入自己的插件安装器
import Installer from './plugins/installer';
Vue.use(Installer);

//给vue的原型挂载$axios属性
Vue.prototype.$axios = Axios;
Axios.defaults.baseURL='';
//定义拦截器
//1,请求发起前显示loading open();
Axios.interceptors.request.use(function(config){
  //不变配置 ：   可变  可以设置公共的请求头操作
  MintUI.Indicator.open({
    text: '加载中...',
    spinnerType: 'fading-circle'
  });
  return config;  //config:{header:{}}
})
//2,响应回来后关闭loading close();
// axios 结束
Axios.interceptors.response.use(function(response){
  //response:{config:{header:{}},data:{}}
  MintUI.Indicator.close();
  // console.log(response)
  return response;
})

//全局组件  开始
import MyUL from './components/common/MyUL';
import MyLi from './components/common/MyLi';
import NavBar from './components/common/NavBar';
Vue.component(NavBar.name,NavBar);
Vue.component(MyUL.name,MyUL);

Vue.component(MyLi.name,MyLi);
import Comment from './components/common/Comment';
Vue.component(Comment.name,Comment)
//全局组件  结束

//定义全局过滤器  开始
import Moment from 'moment';
Moment.locale('zh-cn');
Vue.filter('convertTime',function(data,formatStr){
  //原本的时间格式
  return Moment(data).format(formatStr);
});
//相对时间过滤器
Vue.filter('relTime',function(time){
  //原本的时间格式
  return Moment(time).fromNow();
});
//控制字数显示的过滤器
Vue.filter('controlShow',function(title,number){
  //如果当前字符串小于number，就返回自身
  if(title.length<number){
    return title;
  }
  else{
    //如果当前字符串大于num，截取0-num-1位
    return title.substr(0,number-1)+'...';
  }


})
//定义全局过滤器  结束

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

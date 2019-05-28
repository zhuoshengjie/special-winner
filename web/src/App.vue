<template>
  <div>
    <!-- 顶部标题栏 -->
    <mt-header title="我的应用"></mt-header>
    <!-- 所有即将变化的页面中都会被tmpl的样式生效，相当于一个div包裹 -->
    <transition name='fade' mode='out-in'>
    <router-view class="tmpl"/>
    </transition>
    <!-- 底部tabbar -->
      <mt-tabbar v-model="selected">
    <mt-tab-item id="Home">
      <img slot="icon" src="./icon/首页.png">
      首页
    </mt-tab-item>
    <mt-tab-item id="Member">
      <img slot="icon" src="./icon/店铺.png">
      店铺
    </mt-tab-item>
    <mt-tab-item id="Shopcart">
      <img slot="icon" src="./icon/购物车.png">
      购物车<mt-badge size="small" type='error'>{{getNum}}</mt-badge>
    </mt-tab-item>
    <mt-tab-item id="Search">
      <img slot="icon" src="./icon/搜索.png">
      查找
    </mt-tab-item>
  </mt-tabbar>
  </div>
</template>

<script>
import MyBus from './MyBus';
import { mapGetters } from 'vuex'

export default {
  computed:{
    ...mapGetters([
      'getNum',
    ])
  },
  name: 'App',
  created(){
    // MyBus.$on('addShopcart',(num)=>{
    //   this.totalNum+=num;
    // })
  },
  data(){
    return{
      selected:'',
      totalNum:0,
    }
  },
  watch:{
    //不能使用箭头函数，因为this会向上绑定
    selected:function(newV,oldV){
      
      this.$router.push({
        name:newV,
      })
    }
  }
}
</script>

<style scoped>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
.mint-tabbar{
  position: fixed;
  bottom: 0px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

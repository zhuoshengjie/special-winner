<template>
  <div>
    <mt-swipe :auto="4000">
    <mt-swipe-item><img src="../icon/timg.jpg" alt="videos"></mt-swipe-item>
    <mt-swipe-item><img src="../icon/timj.jpg" alt="priture"></mt-swipe-item>
    <mt-swipe-item><img src="../icon/timr.jpg" alt="female"></mt-swipe-item>
</mt-swipe>
<!-- <test/> -->
<!-- 下有九宫格 -->
<div class="grid">
  <my-ul>
    <my-li v-for="(module,index) in modules" :key='index'>
      <router-link :to="module.route">
        <span :class="module.className"></span>
        <div>{{module.title}}</div>
      </router-link>
    </my-li>
  </my-ul>
</div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      imgs:[],//轮播图数据
      modules:[
        {
          title:'新闻资讯',
          className:'back-news',
          route:{name:'NewsList'},
          
        },
        {
          title:'图文分享',
          className:'back-photo',
          route:{name:'PhotoList'},
          
        },
        {
          title:'产品展示',
          className:'back-prod',
          route:{name:'GoodsShow',params:{page:1}}
          
        },
        {
          title:'留言反馈',
          className:'back-mes',
          route:{name:'Home'},
          
        },
        {
          title:'搜索资讯',
          className:'back-sech',
          route:{name:'Home'},
          
        },
        {
          title:'联系我们',
          className:'back-call',
          route:{name:'Home'},
          
        },
        {
          title:'hello',
          className:'back-hello',
          route:{name:'Hello'},
          
        },
      ]
    }
  },
  created(){

    this.$log();
    this.$log();
    this.$log='abc';//通过defineproperty定义的属性，不像prototype属性一样可直接修改
    //  “活在梦里吧，兄弟！”，须，可以设置后，才开设置（set）

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .mint-swipe{
    width: 100%;
    height: 200px;
  }

  /* 九宫格样式 */
  img{
    width: 100%;
    height: 200px;
  }
  .grid span{
    display: inline-block;
    margin:10px 0;
    width: 50px;
    height: 50px;
    background-repeat: round;
  }
  .back-img{
    background-image: url(../icon/视频.png);
  }
  
  
  .back-news{
    background-image: url(../icon/消息.png);
  }
  .back-photo{
    background-image: url(../icon/图片.png);
  }
  .back-prod{
    background-image: url(../icon/视频.png);
  }
  .back-mes{
    background-image: url(../icon/更多.png);
  }
  .back-sech{
    background-image: url(../icon/搜索.png);
  }
  .back-call{
    background-image: url(../icon/添加.png);
  }
  .back-hello{
    background-image: url(../icon/hello.png);
  }
</style>

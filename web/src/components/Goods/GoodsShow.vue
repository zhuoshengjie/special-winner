<template>
    <div :style="{height:wrapperHeight+'px'}" ref='wrapper'>
        <nav-bar title='产品展示'></nav-bar>
        <mt-loadmore :bottom-method="loadBottom" @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded" :auto-fill='autoFill' ref="loadmore">
        <ul>
            <li v-for='(goods,index) in goodsList' :key='index'>
                <router-link :to='{name:"GoodsDetail"}'>
                    <img :src="goods.profile_image" alt="">
                    <div class="title"></div>
                    <div class="desc">
                        <div class="sell">
                            <span>￥{{parseInt(goods.love/10)}}</span>
                            <s>￥9000</s>
                        </div>
                        <div class="detail"></div>
                        <div class="hot">
                           {{goods.name|controlShow(6)}} <span>热卖中</span>
                        </div>
                        <div class="count">
                            剩{{goods.hate}}件
                        </div>
                    </div>
                </router-link>
            </li>
        </ul>
        </mt-loadmore>
    </div>
</template>
<script>
export default {
    // 总结：loadmore中的属性
    //     1，bottomload函数
    //     2，禁止bottomload  bottom-all-loaded 默认为false，true就禁止调用
    //     3，auto-fill 默认true，自动检测父容器，并调用bottomload直到撑满父容器
    //     4，pull 拉动未满足70px， drop 达到70px， loading 加载中  （三种状态）
    //     5，loadmore组件对象的onbottomloaded(),通知结束loading进入pull状态
    //     6，在组件上写ref='xxx'  在js中通过this.$refs.xxx 来获取组件对象（和this相似）
    //     6，在普通元素写ref='xxx'  在js中通过this.$refs.xxx 来获取dom对象

    data(){
        return{
            goodsList:[],//商品数据
            allLoaded:false,//为true禁止调用拉动函数
            autoFill:false,//自动调用loadBottom直到撑满父容器
            page:this.$route.params.page,
            wrapperHeight:0,//父容器高度
        }
    },
    methods:{
        loadBottom(){
            this.loadGoodsByPage();
            console.log('上拉调用了');
            //通知状态改变
            this.$refs.loadmore.onBottomLoaded();
        },
        handleBottomChange(status){
            console.log(status);
        },
        loadGoodsByPage(page){
            this.$axios.get(`https://www.apiopen.top/satinApi?type=3&page=${this.page}`)
            .then(res=>{
                console.log(res.data.data);
                if(this.page===1){
                    this.goodsList=res.data.data;
                }else{
                    this.goodsList=this.goodsList.concat(res.data.data)
                }
                this.page++;//页码自增
                console.log(this.page)
            })
            .catch(err=>console.log(err))
        }
    },
    created(){
        //获取页码
        // let{page} = this.$route.params;
        //拼接url，发起请求
    //     this.$axios.get(`https://www.apiopen.top/satinApi?type=3&page=${page}`)
    //     .then(res=>{
    //         console.log(res.data.data);
    //         this.goodsList=res.data.data;

    //     })
            

    //     .catch(err=>console.log(err))
        this.loadGoodsByPage();
    },
     mounted() {
         //父容器高度（可视）=设备高度-父容器的top点
      this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
    }
  
}
</script>
<style scoped>
ul{
    overflow: hidden;
    padding: 0px;
}
li{
    width: 50%;
    float: left;
    padding: 6px;
    box-sizing: border-box;


}
li >a:not(.mui-btn){
    margin: 0px;
    padding: 0px;
    border: 1px solid #5c5c5c;
    box-shadow: 0 0 4px #666;
    width: 100%;
    display: block;
}
li > a:not(.mui-btn)img{
    width: 100%;
}
.sell >span{
    float: left;
    color: red;
    text-align: left;
}
.detail >.hot{
    float: left;
}
.detail.count{
    float: right;
    text-align: right;
    font-size: 15px;
}
.detail{
    overflow: hidden;
}
.desc{
    color: rgba(92,92,92,0.8);
    background-color: rgba(0,0,0,0.2);
}
img{
    height: 200px;
    width: 100%
}
.hot span{
    float: right;
}
</style>

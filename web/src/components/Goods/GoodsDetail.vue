<template>
    <div>
        <nav-bar title="商品详情"/>
        <div class="outer-weiper">
            <div class="swiper">
                我是轮播图
            </div>
        </div>
        <div class="product-dexc">
            <ul>
                <li>
                    <span class="procuct-desc-span">商品标题</span>
                </li>
                <li class="price-li">市场价：<s>￥9999</s>销售价：<span>￥5</span></li>
                <li class="number-li">购买数量：<span @click='reduceNum'>-</span><span>{{buyNum}}</span><span @click="addNum">+</span></li>
                <li>
                    <mt-button type='primary'>立即购买</mt-button>
                    <mt-button type='danger' @click="addShopcart">加入购物车</mt-button>
                </li>
            </ul>
        </div>
        <!-- 过渡效果内置组件 -->
        <transition name='ball' @after-enter="afterEnter">
        <div class="ball" v-if='isShow'></div>
        </transition>
        <div class="product-props">
            <ul>
                <li>商品参数</li>
                <li>商品货号：12344123</li>
                <li>库存情况：999件</li>
                <li>上架时间：2014-08-09</li>
            </ul>
        </div>
        <div class="product-info">
            <ul>
                <li>
                    <mt-button type='primary' size='large' plain>图文介绍</mt-button>
                </li>
                <li>
                    <router-link :to="{name:'GoodsComment'}">
                         <mt-button type='danger' size='large' plain>商品评论</mt-button>

                    </router-link>
                    <!-- <mt-button type='danger' size='large' plain>商品评论</mt-button> -->
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import MyBus from '@/MyBus';
import GoodsTools from '@/GoodsTools'
import {mapActions} from 'vuex'

export default {
    data(){
        return{
            goodsId:this.$route.query.id,
            info:{},//商品信息
            imgs:[],//轮播图
            isShow:false,
            buyNum:1,//购买数量
        }
    },
    created(){
        //获取商品轮播图getthumimages/:imgid
        //获取商品信息goods/getinfo/:goodsid
        // //请求一个失败了，就算失败
        // let imgReq=this.$axios.get(`getthumimages/${this.goodsId}`);
        // let infoReq=this.$axios.get(`goods/getinfo/${this.goodsId}`);
        //合并请求$axios.all([]).then(传播响应).catch()
        // this.$axios.all([imgReq,infoReq])
        // .then(
        //     this.$axios.spread(
        //         (imgRes,infoRes)=>{
        //             this.imgs=imgRes.data.message;
        //             this.info=infoRes.data.message[0];
        //         }
        //     )
        // )

        // .catch(console.log)

    },
    methods:{
        ...mapActions([
                'addNumByAct',
                'changeNumByAct'
            ]),
        afterEnter(){
            this.isShow=false;
            //加入数据
            GoodsTools.addShopcart({
                id:this.info.id,
                num:this.buyNum,
            })
            // MyBus.$emit('addShopcart',this.buyNum);
            this.addNumByAct(this.buyNum);
        },
        addShopcart(){
            this.isShow=true;
        },
        addNum(){
            this.buyNum++;
        },
        reduceNum(){
            if(this.buyNum>=1){
                this.buyNum--;
            }
        }
    }
}
</script>
<style scoped>

.product-info ul{
    padding: 0px;
}
.ball{
    height: 25px;
    width: 25px;
    border-radius: 50%;
    background-color: red;
    position: fixed;
    
    top:150px;
    right: 10px;
}
.number-li span{
    border: 1px solid gray;
}
.ball-leave{
    opacity: 0px;
}
.ball-enter-active{
    animation:bounce-in 1s;
}
@keyframes bounce-in{
    0%{
        transform:translate3d(0,0,0);
    }
    50%{
        transform: translate3d(140px,-50px,0);
    }
    75%{
        transform: translate3d(160px,0px,0);
    }
    100%{
        transform: translate3d(140px,300px,0);
    }
}
.swiper{
    border: 1px solid rgba(0,0,0,0.2);
    margin:8px;
    width: 95%;
    border-radius: 15px;
}
</style>



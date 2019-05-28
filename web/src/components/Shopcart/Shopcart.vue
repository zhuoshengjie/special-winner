<template>
    <div>
        <nav-bar title='购物车'></nav-bar>
        <div class="pay-detail">
            <ul>
                <li class="p-list">
                    <mt-switch></mt-switch>
                    <img src="" alt="">
                    <div class="pay-calc">
                        <span>￥{{price}}</span>
                        <span @click='sub'>-</span>
                        <span>{{count}}</span>
                        <span @click='add'>+</span>
                        <a href="javascript:;">删除</a>
                    </div>
                </li>
            </ul>
        </div>
        <div class="show-price">
            <div class="show-1">
                <p>总计（不含运费）</p>
                <span>已经选择商品{{count}}件，总价￥{{price*count}}元</span>
            </div>
            <div class="show-2">
                <mt-button type='danger' size='large'>
                    去结算
                </mt-button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            count:0,
            price:777,
        }
    },
    methods:{
        add(){
            this.count++;
            this.$store.dispatch('addNumByAct',1)
        },
        sub(){
            if(this.count>=1){
                this.count--;
                this.$store.dispatch('addNumByAct',-1)
            }
        }
    }
}
</script>
<style>
.pay-detail ul li{
    list-style: none;
    border-bottom: 1px slid rgba(0,0,0,0.2);
    margin-bottom: 3px;
}
.pay-detail ul {
    padding-left: 5px;
    margin-top: 5px;
}
.pay-detail ul li img{
    width: 80px;
    height: 80px;
    display: inline-block;
    vertical-align: top;
    margin-top: 10px;
}
.pay-detail ul li >:nth-child(1),
.pay-detail ul li >:nth-child(3){
    display: inline-block;
}
.pay-calc p{
    display:inline-block;
    width: 250px;
    overflow: hidden;
    color: blue;
    font-size: 15px;
    margin-bottom: 10px;
}
.pay-detail ul li >:nth-child(1){
    line-height: 80px;
}
.calc:nth-child(1){
    color: red;
    font-size: 20px;
}
.calc span:not(:nth-child(1)){
    border: 1px solid rgba(0,0,0,0.3);
    display: inline-block;
    width: 20px;
    text-align: center;

}
.calc a{
    margin-left:20px;
}
.show-1, .show-2{
    margin-left: 30px;
    display: inline-block;
}
.show-price{
    background-color: rgba(0,0,0,0.2);
}
</style>



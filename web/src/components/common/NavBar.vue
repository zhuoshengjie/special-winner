<template>
    <div id='new'>
        <mt-header :title="title">
            <div @click="goback" slot="left">
                <mt-button icon="back">返回</mt-button>
            </div>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
    </div>
</template>
<script>
export default {
    name:'nav-bar',
    props:['title'], //props 属性在template中可以直接使用
    created(){
        //在这里就使用this.title
    },
    data(){
        return{

        }
    },
    methods:{
        goback(){
            this.$router.go(-1);
        }
    }
}
</script>
<style scoped>
#new{
    background-color: pink;
}
#new .mint-header{
    background-color:white;
    color: black;
    padding: 0px;
}
</style>


<template>
    <div class="tmpl">
        <div class="photo-bottom">
            <ul>
                <li class="photo-comment">
                    <div>
                        <span>提交评论</span>
                        <span><a href="#">返回</a></span>
                    </div>
                </li>
                <li class="txt-comment">
                    <textarea name="" id="" cols="45" rows="10"></textarea>
                </li>
                <li>
                    <mt-button type='primary' size='large'>发表评论</mt-button>
                </li>
                <li class="photo-comment">
                    <div>
                        <span>评论列表</span>
                        <span>44评论</span>
                    </div>
                </li>
            </ul>
            <ul class="comment-list">
                <li v-for='(msg,index) in msgs' :key='index'>
                    {{msg.authors}}：    {{msg.title}}            ---------{{msg.ctime|relTime}}
                </li>
            </ul>
            <mt-button size='large' type='danger' plain @click="th" :disabled='disabled'>加载更多</mt-button>
        </div>
    </div>
</template>
<script>
export default {
    name:'comment',
    data(){
        return{
            msgs:[],
            disabled:false
        }
    },
    methods:{
        th:function(){
            this.$toast({
                    message: '已加载全部评论',
                    iconClass: 'icon icon-success',
                    
                });
                this.disabled=true;
        }
    },
    created(){
        
        //发起请求
       this.$axios.get('https://api.apiopen.top/getTangPoetry?page=1&count=20')
       .then(res=>{
           console.log(res.data.result);
           this.msgs=res.data.result;
           
       })
       .catch(err=>console.log(err))
    },
}
</script>
<style scoped>
.photo-comment > div span:nth-child(1){
    float:left;
    font-weight: bold;
    margin-left: 5px;
}
.photo-comment > div span:nth-child(2){
    float:right;
}
.photo-comment {
    height: 30px;
    border-bottom: 1px solid rgba(0,0,0,0.4);
    line-height: 30px;
}
.photo-bottom ul{
    padding: 0px;
}
.photo-bottom ul li{
    border-bottom: 1px solid gray;
    margin: 15px 8px;
    
}
</style>



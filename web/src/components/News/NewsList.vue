<template>
    <div>
        <nav-bar :title="title"/>
        <!-- 新闻列表 -->
        <div class="demo">
            <ul>
                <li v-for="(news,index) in newsList" :key="index">
                    <a :href="news.link">
                        
                        <img src="news.picInfo[0].url" >
                        
                        <div>
                            <span>{{news.title}}</span>
                            <div class="news-desc">
                                <p>点击数：{{news.tcount}}</p>
                                <p>发表时间：{{news.ptime|convertTime('YYYY-MM-DD')}}</p>
                            </div>
                        </div>
                    </a>
                </li>
                <li class="line"></li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    


    data(){
        return{
            title:'新闻列表',
            newsList:[],//新闻列表数据
        }
    },
    created(){
        this.$axios.get('https://www.apiopen.top/journalismApi')
        .then(res=>{
            
            console.log(res.data.data.tech);
            this.newsList=res.data.data.tech;
        })
        .catch(err=>{
            console.log(err);
        })
    }
    

}
</script>
<style scoped>
.demo a{
    display: block;
    width: 330px;
    height: 44px;
    color: #000;
    padding: 10px 15px;

}
.demo img{
    float: left;
    width: 42px;
    height: 42px;
    margin-right: 20px;
}
.demo a div{
    float: left;
    width: 238px;
    margin-right: 20px;
}
.demo span{
    display: block;
    width: 100%;
    font-size: 17px;
    line-height: 21px;
}
.demo a p{
    float: left;
    color: #0bb0f5;
    font-size: 5px;
    line-height: 21px;
}
.demo p:nth-child(2){
    float: right;
}
.demo ul{
    padding-inline-start: 0px;
    margin-top: 0px;
}
.line{
    margin-left: 16px;
    transform: scaleY(.5);
    border-bottom: 1px slid #c8c7cc;
}
</style>


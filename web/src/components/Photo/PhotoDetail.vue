<template>
    <div>
        <div class="photo-title">
            <nav-bar title="图文详情"></nav-bar>
            <p>图片标题</p>
            <span>发起日期：2019-04-25</span>
            <span>0次浏览</span>
            
        </div>
        <ul>
            <li>
                图片1
            </li>
        </ul>
        <div class="photo-desc">
            <p></p>
        </div>
        <!-- 使用评论组件 -->
        <comment/>
    </div>
</template>
<script>
export default {
    
    
}
</script>
<style scoped>
li{
    list-style: none;
}
ul{
    margin: 0;
    padding: 0;
}
.photo-title{
    overflow: hidden;
}
.photo-title,
.photo-desc{
    border-bottom: 1px solid rgba(0,0,0,0.2);
    padding-bottom: 5px;
    margin-bottom: 5px;
    padding-left: 5px;
}
.photo-title p{
    color: #13c2f7;
    font-size:20px;
    font-weight: bold;
}
.photo-title span {
    margin-right: 20px;
}
.photo-desc p{
    font-size:18px;
}
</style>



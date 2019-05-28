<template>
    <div>
        <nav-bar :title="title"></nav-bar>
        <div class="photo-header">
            <ul>
                <li v-for="(channe,index) in channellist" :key='index'>
                    <a href="javascript:;">{{channe.name}}</a>
                </li>
            </ul>
        </div>
        <div>
            <mt-swipe :auto="4000">
                <mt-swipe-item v-for="(channe,index) in channellist" :key='index'><img :src="channe.avatar"></mt-swipe-item>
            </mt-swipe>
        </div>
        <div class="photo-list">
            <!-- <ul>
                <li>
                    <a href="">
                        <img src="">
                        <p>
                            <span>图片标题</span>
                            <br>
                            <span>图片摘要</span>
                        </p>
                    </a>
                </li>
            </ul> -->
            <ul>
                <li v-for="(img,index) in imgs" :key='index'>
                    <router-link :to="{ name:'PhotoDetail',params:{id:img.data.id}}">
                        <img v-lazy="img.data.icon">
                    </router-link>
                    <p>
                        <span>{{img.data.title}}</span>
                        <br>
                        <span>{{img.data.description}}</span>
                    </p>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            title:'图文分享',
            channellist:[],
            imgs:[],
        }
    },
    created(){
        console.log(this.$route)
        this.$axios.get('https://api.apiopen.top/musicBroadcasting')
        .then(res=>{
            
            console.log(res.data.result[0]);
            this.channellist=res.data.result[1].channellist;

            
        })
        .catch(err=>{
            console.log(err);
        })
        this.$axios.get('https://api.apiopen.top/videoCategory')
        .then(res2=>{
            console.log(res2.data.result.itemList)
            this.imgs=res2.data.result.itemList;
        })
        .catch(err=>{
            console.log(err)
        })
     
}
}
</script>

<style scoped>
.photo-header li{
    list-style: none;
    display: inline-block;
    margin-left: 10px;
    height: 30px;
}
.photo-header ul{
    /* 强制不换行 */
    white-space: nowrap;
    overflow-x: auto;
    padding-left: 0px;
    margin: 5;
}
.mint-swipe img{
    width: 100%;
}
.mint-swipe{
    height: 200px ;
}
image[lazy=loading] {
  width: 40px;
  height: 300px;
  margin: auto;
}
image[lazy=loading] {
  width: 40px;
  height: 300px;
  margin: auto;
}
.photo-list ul{
    padding: 0px;
}
.photo-list ul img{
    width: 100%;
}
</style>



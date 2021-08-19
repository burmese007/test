<template>
<div>
    <div class="header"></div>
    <div class="topnav">
        <a href="#" v-for="(item,index) in testdatas" :key="index" :class="{active:index==check}"  @click="check=index">{{item}}</a>
        <a class="set">设置</a>
    </div>
    <div class="row">
        <div class="columb-side"></div>
        <div class="columb-middle"></div>
        <div class="columb-side"></div>
    </div>

</div>

</template>
<script>
export default {
    data(){
        return{
            loading:false,
            testdatas:['首页','资讯','购物','我的'],
            check:0
        }
    },
    methods(){
        
    }
    
}
</script>

<style scoped>
   * {
       box-sizing: border-box;
    }
    body{
        margin: 0;
    }
    .header{
        background-color: #eee;
        text-align: center;
        height: 50px;
    }
    .topnav{
        overflow: hidden;
        background-color: #333;
    }
    .topnav a{
        float: left;
        width: 120px;
        display: block;
        color: #f2f2f2;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
    }
     .topnav a.active{
        background-color: rgb(218, 142, 142);
        color: white;
    }
    .topnav .set{
        background-color: wheat;
        display: block;
        color: black;
        float: right;
    }
    
    .topnav a:hover:not(.active , .topnav .set) {
        background-color: #ddd;
        color: black;
    }

    .columb-side{
        float: left;
        width: 25%;
        height: 400px;
        background-color: rgba(48, 133, 9, 0.863);
    }
    .columb-middle{
        float: left;
        width: 50%;
        height: 400px;
        background-color: rgba(47, 179, 212, 0.76);
    }

    .row::after{
        content: "";
        display: table;
        clear: both;
    }
   




</style>
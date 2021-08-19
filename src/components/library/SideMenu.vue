<template>
    <el-menu 
    class="categories"
    default-active="0"
    @select="handleSelect"
    active-text-color="red">
        <el-menu-item
        v-for="(item,index) in cates"
        :key="index"
        :index="item.index">
        <i class="el-icon-menu"></i>
        <span slot="title">{{item.name}}</span>
        </el-menu-item>
    </el-menu>
</template>
<script>
export default {
    data(){
        return{

            cates:[
                {name:'全部',index:'0'},
                {name:'文学',index:'1'},
                {name:'流行',index:'2'},
                {name:'文化',index:'3'},
                {name:'生活',index:'4'},
                {name:'经管',index:'5'},
                {name:'科技',index:'6'}
            ]
        }
    }
    
}
</script>
<style >
.categories {
    position: fixed;
    margin-left: 50%;
    left: -600px;
    top: 100px;
    width: 150px;
  }

</style>
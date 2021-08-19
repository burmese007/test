<template>
    <el-container>
        <el-aside style="width:200px;margin-top: 20px">
            <switch></switch>
            <SideMenu></SideMenu>
        </el-aside>
        <el-main>

        </el-main>
        
    </el-container>
</template>
<script>
import SideMenu from './SideMenu.vue'
export default {
  components: { SideMenu },
    
}
</script>
<style >

</style>
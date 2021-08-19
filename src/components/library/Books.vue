<template>
    <div>
        <el-row style="height:840px">
            <el-tooltip effect="dark"
                placement="right"
                v-for="item in books"
                :key="item.id">
                <p slot="content" class="title">{{item.title}}</p>
                <p slot="contenr" class="content">
                    <span>{{item.author}}</span>/
                    <span>{{item.date}}</span> /
                    <span>{{item.press}}</span>
                </p>
                <p slot="content" class="abstract">{{item.abs}}</p>
                <el-card class="book"
                    bodyStyle="padding:10px"
                    shadow="hover">
                    <div>
                        <img :src="item.cover" alt="封面">
                    </div>
                    
                </el-card>
            </el-tooltip>

        </el-row>
    </div>
    
</template>
<script>
export default {
    
}
</script>
<style >
.title{
    font-size: 14px;
    margin-bottom: 6px;
}
.content{
    font-size: 13px;
    margin-bottom: 6px;
}

  .abstract {
      width: 30px;
    display: block;
    line-height: 17px;
  }

  .book{
      width: 135px;
      margin-bottom: 20px;
      height: 233px;
      float: left;
      margin-right: 15px;
  }


</style>
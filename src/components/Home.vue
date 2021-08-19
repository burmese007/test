<template>
    <div>
        <nav-menu></nav-menu>
        <router-view/>
    </div>
</template>

<script>
import NavMenu from './common/NavMenu.vue'

export default {
  components: { NavMenu },
  mounted(){
  },
  methods:{
    
  }

}

</script>


<style scoped>

</style>
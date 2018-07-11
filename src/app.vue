<template>
  <div id="app">
    <!-- <dbheader></dbheader> -->
      <keep-alive>
        <router-view ></router-view>
      </keep-alive>
    <tabbar></tabbar>
  </div>
</template>


<script>

import tabbar from '@/components/tabbar.vue'
import dbheader from '@/components/dbheader.vue'

export default{
  name:'app',
  components:{
    tabbar,
    dbheader,
  },
  data(){
    return{

    }
  },
  mounted:function(){
  }
}
</script>

<style lang="scss">
  @import './style/app';
  body,HTML{
    height: 100%;
    margin:0;
    padding:0;
  }
  #app{
    height: 100%;
  }
</style>

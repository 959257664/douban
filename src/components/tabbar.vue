<template>
  <mt-tabbar v-model="selected">
    <mt-tab-item id="movie">
      <img slot="icon" src="../assets/movie.png">
      推荐
    </mt-tab-item>
    <mt-tab-item id="book">
      <img slot="icon" src="../assets/search.png">
      搜索
    </mt-tab-item>
    <mt-tab-item id="mine">
      <img slot="icon" src="../assets/mine.png">
      我的
    </mt-tab-item>
  </mt-tabbar>
</template>
<script>

export default {
    data(){
        return{
            selected:'movie',
        }
    },
    mounted:function(){
      this.$router.push('movie');
    },
    watch:{
      selected:function(val){
        this.$router.push(val);
      }
    },
}
</script>

<style lang="less">
</style>



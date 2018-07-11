<template>
<div class="showList">
    <mt-swipe :show-indicators="false">
        <mt-swipe-item class="slide1"><img src="../assets/img/medicine.jpg" alt=""></mt-swipe-item>
        <mt-swipe-item class="slide2"><img src="../assets/img/medi2.jpg" alt=""></mt-swipe-item>
        <mt-swipe-item class="slide3"><img src="../assets/img/medi3.jpg" alt=""></mt-swipe-item>
    </mt-swipe>
    <div class="movieList" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10" infinite-scroll-immediate-check="true">
        <div v-for="(value,key) in moveList" class="movieList-item">
            <div class="movieList-img"><img v-lazy="value.images.small" alt="" ></div>  
            <div class="movieList-detail">
                <br>
                <span style="font-size:2rem;">{{value.title}}</span>
                <p style="font-size:1.2rem;">分类：{{value.genres[0]}}/{{value.genres[1]}}/{{value.genres[2]}}</p>
                <p>评分：<span style="color:#0ea8e3;font-size:1.4rem">{{value.rating.average}}</span>/10</p>
                <p>主演：{{value.casts[0].name}}/{{value.casts[1].name}}/{{value.casts[2].name}}</p>
                <mt-button type="primary" @click.native="getMovie(value.alt)">点击查看</mt-button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Util from '@/api/util.js'
import { Indicator } from 'mint-ui'
import { InfiniteScroll } from 'mint-ui'



export default {
  data() {
    return {
        moveList:[],
        countMovie:0,
        itemLazy:'',
    };
  },
  created:function(){
    Indicator.open('加载中...')
    let service = Util.ajax
    let that = this
    service({
        method:'get',
        url:'movie/top250?start=0&count=25'
    }).then(Response => {
        that.moveList = Response.data.subjects
        Indicator.close()
    })
  },
  mounted:function(){
  },
  methods:{
      getMovie(){
          window.location.href = alt
      },
      loadMore(){
          var that = this
          that.countMovie+=25
          let service = Util.ajax
          Indicator.open('加载中...')
          service({
              method:'get',
              url:`movie/top250?start=${that.countMovie}&count=25`,
          }).then(Response => {
              that.moveList.forEach(value => {
                  that.moveList.push(value)
              });
              Indicator.close()
          })
      }
  }
};
</script>

<style lang="less">
.mint-swipe {
  height: 300px;
  padding: 0;
  .slide1 {
    background-color: #0089dc;
    color: #fff;
    img{
        width:100%;
        height: 100%;
    }
  }
  .slide2 {
    background-color: #ffd705;
    color: #fff;
    img{
        width:100%;
        height: 100%;
    }
  }
  .slide3 {
    background-color: #ff2d4b;
    color: #fff;
    img{
        width:100%;
        height: 100%;
    }
  }
}
.showList{
    background-color: #f2f2f5;
    height: ~"calc(100% - 60px)";
    overflow-y:scroll;
  }
.movieList{
    margin-top:20px;
    &-item{
        width:100%;
        background-color: #fff;
        display: flex;
        flex-direction:row;
        margin:1rem 0 1rem 0;
    }
    &-img{
        justify-content: flex-start;
        width:200px;
        img{
            margin:1rem 0 1rem 1rem;
            height: 256px;
        }
    }
    &-detail{
        margin:0 0 0 2rem;
        justify-content:center;
    }
}
</style>

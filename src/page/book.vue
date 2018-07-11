<template>
    <mt-search v-model="searchInput" @keyup.enter.native="submit" placeholder="我不是药神">
        <mt-cell v-for="(value,key) in moveList" :title="value.title" :key="result"></mt-cell>
    </mt-search>
</template>

<script>
import Util from '@/api/util.js'
import { Indicator } from 'mint-ui'
import { InfiniteScroll } from 'mint-ui'
export default {
    data(){
        return{
            searchInput:'',
            moveList:[],
            countMovie:0,
            itemLazy:'',
        }
    },
    mounted:function(){
    },
    watch:{
        searchInput:function(val){
            let that = this
            if(val===''){
                that.moveList = []
            }
        }
    },
    methods:{
        submit(){
            Indicator.open('加载中...')
            let service = Util.ajax
            let that = this
            console.log(that.searchInput)
            service({
                methods:'get',
                url:`movie/search?q=${that.searchInput}`
            }).then(Response => {
                console.log(Response.data.subjects)
                that.moveList = Response.data.subjects
                Indicator.close()
            })
        },
        getMovie(e){
            window.location.href = e
        }
    }
}
</script>

<style lang='less'>
    .moveResultShow{
        position: absolute;
        top: ~"calc(100% - 60px)";
        overflow-y:scroll;
    }
    .mint-cell{
        &-text{
            padding-left: 20px;
        }
    }
    .mint-cell-wrapper {
        border-bottom:1px solid #eee;
}
</style>

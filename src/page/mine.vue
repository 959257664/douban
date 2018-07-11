<template>
    <div class="wall">
        <div class="wall-userImg"><img :src='userImg'></div>
        <div class="wall-userDetail"><span>{{userName}}</span><p>{{userSign}}</p></div>
        <mt-index-list>
            <mt-cell title="我的消息"><mt-badge type="error">99+</mt-badge></mt-cell>
            <mt-cell title="我的小组"><mt-badge type="error">10</mt-badge></mt-cell>
            <mt-cell title="设置" is-link></mt-cell>
            <mt-cell title="关于我" is-link></mt-cell>
        </mt-index-list>
    </div>
</template>

<script>
import Util from '@/api/util.js'
import Mock from '@/mock'
export default {
    data(){
        return{
            userImg: '',
            userName: '',
            userSign: '',
        }
    },
    mounted:function(){
        let service = Util.ajax
        let that = this
        service({
            methods: 'get',
            url: '/getInfo'
        }).then(Response => {
            that.userImg =Response.data.avatar
            that.userName =Response.data.name
            that.userSign =Response.data.sign
        })
    },
}
</script>

<style lang="less">
    .wall{
        background-image: url('http://pbdc1ab8x.bkt.clouddn.com/timg.jpg');
        background-size: 100% 100%;
        background-repeat: no-repeat;
        width: 100%;
        height: 400px;
        &-userImg{
            display:flex;
            justify-content: center;
            img{
                margin-top:5rem;
                width:  200px;
                height: 200px;
                border-radius: 200px;
                justify-content:center;
            }
        }
        &-userDetail{
            margin-top:1rem;
            text-align: center;
            span{
                color:#fff;
                font-size:1.5rem;
            }
            p{
                color:#fff;
                font-size: 1.5rem;
            }
        }

    }
</style>

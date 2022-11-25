<template>
    <div>
    <h2>今天好像苦涩的一天</h2>
    <p>选一个表情包来表达你的心情吧</p>
     <div class="tab" v-cloak>
            <ul>
                <li
                v-for="(item,index) in list"
                :key="item.id"
                :class='currentIndex==index?"active":""'
                v-on:click="change(index)">
                {{item.text}}</li>
            </ul>
            <div 
            v-for="(item,index) in list"
            :key="item.id"
            :class='currentIndex==index?"current":""'>
                <img :src="item.img" alt="">
            </div>
     </div>
     
    </div>
</template>

<script set lang="ts">
export default {
    data(){
        return{
               currentIndex:0,
                list:[
                    {
                        id:1,
                        text:'不怎么样',
                        img:'https://tse2-mm.cn.bing.net/th/id/OIP-C.uJPk2LZogEhN3y3BOqPkRQHaHX?w=206&h=205&c=7&r=0&o=5&dpr=1.25&pid=1.7'
                       
                        },
                    {
                        id:2,
                        text:'苦涩',
                        img:'https://tse1-mm.cn.bing.net/th/id/OIP-C.k1MQ2PQ2h2JRpJ3SipVINAHaE2?w=253&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7'
                    },
                    {
                        id:3,
                        text:'苦瓜味的',
                        img:'data:image/jpeg;base64,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'
                    },
                    {
                        id:4,
                        text:'凄凉',
                        img:'https://tse1-mm.cn.bing.net/th/id/OIP-C.K2ptHH5pNalQMWclJnKypAHaGn?w=183&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7'
                    }
                ]
        }
            },
            methods:{
                change(index){
                    this.currentIndex = index;
                }
            },

    
}
</script>
<style scoped>
.tab ul{
            overflow: hidden;
            padding: 0;
            margin: 0;
        }
        .tab ul li{
            box-sizing: border-box;
            padding: 0;
            float: left;
            width: 100px;
            height: 20px;
            border: 1px solid black;
            list-style: none;
            cursor: pointer;
            text-align: center;
            line-height: 20px;
        }
        .tab ul li:first-child{
            margin-top: 8px;
        }
        img{
            margin-top: 20px;
            width: 200px;
            height: 200px;
        }
       /* .tab ul li:first-child{
            border: 1px solid red;
        } */
        .tab div{
            display: none;
        }
        .tab .current{
            /* float: left; */
            /* margin-left: 40px; */
            display: block;
        }
        [v-cloak]{
            display: none;
        }
        .tab ul .active{
            background-color: burlywood;
            border: 1px solid red;
        }


</style>
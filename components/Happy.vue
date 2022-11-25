<template>
    <div>
    <h2>今天是美好的一天</h2>
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
                        text:'快乐的',
                        img:'https://tse4-mm.cn.bing.net/th/id/OIP-C.Id19_hvG43cA5_QX8AfkGQHaHa?w=182&h=181&c=7&r=0&o=5&dpr=1.25&pid=1.7'
                    },
                    {
                        id:2,
                        text:'高兴的',
                        img:'https://tse3-mm.cn.bing.net/th/id/OIP-C.g2gc12OVrZcpE0xTxuZutAHaHa?w=151&h=184&c=7&r=0&o=5&dpr=1.25&pid=1.7'
                    },
                    {
                        id:3,
                        text:'对生活比个耶',
                        img:'https://tse1-mm.cn.bing.net/th/id/OIP-C.JWEE9FXY6E2hTEFWykk0pgAAAA?w=235&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7'
                    },
                    {
                        id:4,
                        text:'呵呵呵',
                        img:'https://tse4-mm.cn.bing.net/th/id/OIP-C.I1bQOGkh0Fz3wrtpSTK86AAAAA?w=166&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7'
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
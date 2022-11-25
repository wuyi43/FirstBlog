<template>
    <div>
    <h2>今天好像不怎么样</h2>
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
                        text:'呜呜呜',
                        img:'https://tse3-mm.cn.bing.net/th/id/OIP-C.W91AykZt-pUlR6qqMTyD5gHaHM?w=211&h=205&c=7&r=0&o=5&dpr=1.25&pid=1.7'
                    },
                    {
                        id:2,
                        text:'难受',
                        img:'https://tse2-mm.cn.bing.net/th/id/OIP-C.A3_bHg3wevvC024XZSegMAAAAA?w=184&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7'
                    },
                    {
                        id:3,
                        text:'熬不下去了',
                        img:'https://tse1-mm.cn.bing.net/th/id/OIP-C.ldm1T0FER5X2YDzdipdrvgEsEj?w=211&h=205&c=7&r=0&o=5&dpr=1.25&pid=1.7'
                    },
                    {
                        id:4,
                        text:'凉凉的',
                        img:'https://tse2-mm.cn.bing.net/th/id/OIP-C.KP_pL8yyZtu3uN-OjCDoYAHaHQ?w=184&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7'
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
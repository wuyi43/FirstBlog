<template>
<div >
    <textarea   name="" id="" cols="30" rows="10" placeholder="抒发心情"></textarea>
    <button @click="textClick">提交</button>
    <ul>
    </ul>
</div>
</template>
<script >

export default {
    methods:{
         textClick (){
            var text = document.querySelector('textarea');
            var ul = document.querySelector('ul');
            if (text.value == '') {
                alert('您没有输入内容');
                return false;
            }
            var li = document.createElement('li');
            li.innerHTML = text.value;
             ul.appendChild(li)
        }
    }
     
    
}

</script>
 

<style scope>
textarea {
            width: 1000px;
            height: 100px;
            border: 1px solid pink;
            /* 去掉轮廓线 */
            outline: none;
            /* 禁止拖拽文本域  */
            resize: none;
            margin-top: 20px;
        }

        ul {
            margin-top: 50px;
        }

        li {
            width: 300px;
            padding: 5px;
            background-color: rgb(245, 209, 243);
            color: #000;
            font-size: 14px;
            margin: 15px 0;
        }



</style>
### CSS 中的哪些单位
首先，在 CSS 中，单位分为两大类，绝对长度单位和相对长度单位。

### 绝对长度单位
我们先来说这个，绝对长度单位最好理解，和我们现实生活中是一样的。在我们现实生活中，常见的长度单位有米（m）、厘米（cm）、毫米（mm），每一种单位的长度都是固定，比如 5cm，你走到任何地方 5cm 的长度都是一致的

例如：

<div class="container"></div>
.container{
  width: 5cm;
  height: 5cm;
  background-color: pink;

<img class="img" src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-14-073818.png" data-fancybox="gallery" />

这些值中的大多数在用于打印时比用于屏幕输出时更有用。例如，我们通常不会在屏幕上使用 cm。

惟一一个经常使用的值，估计就是 px(像素)。

### 相对长度单位
相对长度单位相对于其他一些东西，比如父元素的字体大小，或者视图端口的大小。使用相对单位的好处是，经过一些仔细的规划，我们可以使文本或其他元素的大小与页面上的其他内容相对应。

下表列出了 web 开发中一些最有用的单位。

<img class="img" src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-14-074021.png" data-fancybox="gallery" />

接下来来看一下 em 和 rem。

em 和 rem 相对于 px 更具有灵活性，他们是相对长度单位，意思是长度不是定死了的，更适用于响应式布局。

对于 em 和 rem 的区别一句话概括：em 相对于父元素，rem 相对于根元素。
rem 是全部的长度都相对于根元素，根元素是谁？

那就是 html元素。通常做法是给 html 元素设置一个字体大小，然后其他元素的长度单位就为 rem。
所以当用 rem 做响应式时，直接在媒体中改变 html 的 font-size，此时用 rem 作为单位的元素的大小都会相应改变，很方便。

看到这里我想大家都能够更深刻的体会了 em 和 rem 的区别了，其实就是参照物不同。



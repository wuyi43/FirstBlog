### 文档声明概念
HTML 文档通常以文档声明开始，该声明的作用是帮助浏览器确定其尝试解析和显示的 HTML 文档类型。

<!DOCTYPE html>
文档声明必须是 HTML 文档的第一行、且顶格显示，对大小写不敏感。因为任何放在 DOCTYPE 前面的东西，比如批注或 XML 声明，会令 IE9 或更早期的浏览器触发怪异模式（后面的渲染模式会介绍）

文档声明并非一个 HTML 标签。它是一条“信息”，告知浏览器期望的文档类型。

那么说到文档类型，我们首先有必要先了解一下 HTML 的发展历史。

可以看到，HTML 版本从最开始诞生到最新的 HTML5，中间经历了很多版本。

那不同的版本有啥区别么？当然有区别，比如一个最显著的区别就是支持的 HTML 元素不同。例如：


更多各版本所支持的不同 HTML 元素可以参阅：https://www.w3school.com.cn/tags/html_ref_dtd.asp

所以，你现在就知道为什么要书写文档声明了。原因是不同版本所支持的 HTML 元素类型是不同的，我需要告诉浏览器以哪一种文档类型方式来解析当前的这个 HTML 文件。

那么，最新的 HTML5 的文档类型倒是很简单，前面我们已经看到了

<!DOCTYPE html>
那么稍微老一点的版本，例如 HTML4 或 XHTML 的文档类型声明长啥样呢？

这里我们来看两个。

 ### HTML 4.01 Strict

该 DTD 包含所有 HTML 元素和属性，但不包括展示性的和弃用的元素（比如 font）。不允许框架集（Framesets）。

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
#### HTML 4.01 Transitional

该 DTD 包含所有 HTML 元素和属性，包括展示性的和弃用的元素（比如 font）。不允许框架集（Framesets）。

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" 
"http://www.w3.org/TR/html4/loose.dtd">
更多不同文档类型的声明写法可以参阅：https://www.w3school.com.cn/tags/tag_doctype.asp

首先，给我们的第一直观感受，就是声明写得很长。

那么为什么会这么长呢？

原因很简单，HTML5 不需要引入 DTD 文件，而其他类型的文档声明是需要引入 DTD 的。

很好，一个新的名词出现了，DTD。

在早期的 HTML 版本，例如 HTML 4.01 中，<!DOCTYPE> 声明之所以要引用 DTD，是因为 HTML 4.01 基于 SGML。而 DTD 规定的是标记语言的规则，这样浏览器才能正确地呈现内容。

但是最新的 HTML5 不基于 SGML，所以不需要引用 DTD。

到这里估计有的小伙伴要懵圈了，怎么又冒出来一个 SGML ？？

是的，你没有看错，我们有：SGML、HTML、XML、XHTML、HTML5

从这五者的名字中，我们都可以看到 “ML” 这两个字母，所以我们先从 “ML” 说起。

“ML”即 “Markup language(置标语言)”。

根据维基百科对其的解释，“Markup language” 是用标准的标记来解释纯文本文档的内容，从而提供关于文档结构或文档该如何渲染的信息。
GML 是第一代置标语言，使文档能明确将标示和内容分开，所有文件使用同样的标示方法。

SGML 在 GML 的基础上进行整理，形成了一套非常严谨的文件描述方法。它的组成包括语法定义，DTD，文件实例三部分。SGML 因太严谨规范达 500 多页，故而不易学、不易用、难以实现，所以在它的基础上又发展出了其他的更易用的置标语言。

HTML 抛弃了SGML 复杂庞大的缺点，继承了 SGML 的很多优点。HTML 最大的特点是简单性和跨平台性。它只使用了 SGML 中很少的一部分标记，例如 HTML 4.0 中只定义了 70 余种标记。为了便于在计算机上实现，HTML 规定的标记是固定的，即 HTML 语法是不可扩展的。

随着 Web 应用的不断发展，HTML 的局限性也越来越明显地显现了出来，如 HTML 无法描述数据、可读性差、搜索时间长等。人们又把目光转向 SGML，再次改造 SGML 使之适应现在的网络需求。1998 年 2 月 10 日，W3C(World Wide Web Consortium，万维网联盟)公布 XML 1.0 标准，XML 诞生了。很长一段时间，XML 都作为网络传输的标准数据格式。

XHTML 的出现是因为当时的 HTML 语法要求比较松散，这样对网页编写者来说，比较方便，但对于机器来说，语言的语法越松散，处理起来就越困难，对于传统的计算机来说，还有能力兼容松散语法，但对于许多其他设备，比如手机，难度就比较大。因此产生了由 DTD 定义规则，语法要求更加严格的 XHTML。

DTD 教程可以参阅：https://www.w3school.com.cn/dtd/index.asp

最终，HTML5 是 HTML 的第五个修订版，该版本不在基于 SGML 了，所以也就不用再引入 DTD 声明了。

HTML5 的出现，其主要的目标是将互联网语义化，以便更好地被人类和机器阅读，并同时提供更好地支持各种媒体的嵌入。

现在国内通常所说的 H5 开发，实际上是 HTML5 与 CSS3 及 ES6 的一个组合，大概可以用以下公式说明：HTML5 ≈ HTML + CSS3 + ES6

### 渲染模式
明白了文档类型声明的作用之后，接下来我们还需要看一个东西，那就是渲染模式。

#### 浏览器渲染模式分为 3 种：

怪癖模式（混杂模式）[Quirks mode]
严格模式（标准模式） [Standars mode]
几乎标准模式 [Almost standards mode]
之所以出现不同的渲染模式，是由于历史原因造成的。

当年 Netscape4（网景公司早期的浏览器）和 IE4（微软公司早期的浏览器）实现 CSS 机制时，没有遵循 W3C 提出的标准。Netscape4 提供了糟糕的支持，而 IE4 虽然接近标准，但依旧未能完全正确的支持标准。

所以，在 W3C 标准推出以前，浏览器在对页面的渲染上没有统一规范，产生了差异（Quirks mode 或者称为 Compatibility Mode）

为了保障自己的网站在各个浏览器上显示正确，网页开发者们不得不依据各个浏览器自身的规范来使用 CSS，因此大部分网站的 CSS 实现并不符合 W3C 规范的标准。

W3C 标准推出后，浏览器渲染页面有了统一的标准（Strict mode 也有叫做 Standars mode）浏览器都开始采纳新标准，但存在一个问题就是如何保证旧的网页还能继续浏览，在标准出来以前，很多页面都是根据旧的渲染方法编写的，如果用的标准来渲染，将导致页面显示异常。

为保持浏览器渲染的兼容性，使以前的页面能够正常浏览，浏览器都保留了旧的渲染方法（如：微软的 IE）。这样浏览器渲染上就产生了 Quircks mode 和 Standars mode，两种渲染方法共存在一个浏览器上。混杂模式服务于旧式规则，而严格模式服务于标准规则。

对于 HTML 文档来说，浏览器使用文档开头的 DOCTYPE 来决定用怪异模式处理或标准模式处理。

如果文档中没有 DOCTYPE 将触发文档的怪异模式。怪异模式最明显的影响是会触发怪异盒模型。

在 DOCTYPE 声明中，没有使用 DTD 声明或者使用 HTML4 以下的 DTD 声明时，基本所有的浏览器都是使用 Quirks mode 呈现，其他的则使用 Standars mode 解析。

### 严格模式和怪异模式的部分渲染区别
#### 盒模型的高宽包含内边距 padding 和边框 border

在 W3C 标准中，如果设置一个元素的宽度和高度，指的是元素内容的宽度和高度，而在 IE5.5 及以下的浏览器及其他版本的 Quirks 模式下，IE 的宽度和高度还包含了 padding 和 border。

#### 可以设置行内元素的高宽
在 standards 模式下，给 span 等行内元素设置 wdith 和 height 都不会生效，而在 Quirks 模式下，则会生效。

#### 可设置百分比的高度
在 standards 模式下，一个元素的高度是由其包含的内容来决定的，如果父元素没有设置高度，子元素设置一个百分比的高度是无效的。

#### 用 margin:0 auto 设置水平居中在 IE 下会失效
使用 margin:0 auto 在 standards 模式下可以使元素水平居中，但在 Quirks 模式下却会失效，Quirks 模式下的解决办法，用 text-align 属性：body{text-align:center};#content{text-align:left}

Quirks 模式下设置图片的 padding 会失效

Quirks 模式下 Table 中的字体属性不能继承上层的设置

Quirks 模式下 white-space:pre 会失效

更多可以参阅 MDN 上对怪异模式和标准模式的解释：https://developer.mozilla.org/zh-CN/docs/Web/HTML/Quirks_Mode_and_Standards_Mode

MDN 上还给出了不同模式在不同浏览器下的渲染区别（英文）：https://hsivonen.fi/doctype/
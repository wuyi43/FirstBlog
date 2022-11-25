们首先就来看这个 BFC，英语全称 Block formatting contexts，翻译成中文就是“块级格式化上下文”。

简单来说，就是页面中的一块渲染区域，并且有一套属于自己的渲染规则，它决定了元素如何对齐内容进行布局，以及与其他元素的关系和相互作用。 当涉及到可视化布局的时候，BFC 提供了一个环境，HTML 元素在这个环境中按照一定规则进行布局。

再简短一点，那就是：BFC 是一个独立的布局环境，BFC 内部的元素布局与外部互不影响

这就好比你在你自己家里面，你想怎么摆放你的家具都可以，你家的家具布局并不会影响邻居家的家具布局。

当然，虽然说 BFC 是一个独立的布局环境，里外不影响，但也不是意味着布局没有章法，基本的规矩还是要有的。

例如，BFC 的布局规则有如下几条：

内部的 Box 会在垂直方向一个接着一个地放置。
Box 垂直方向上的距离由 margin 决定。属于同一个 BFC 的两个相邻的 Box 的 margin 会发生重叠。
每个盒子的左外边框紧挨着包含块的左边框，即使浮动元素也是如此。
BFC 的区域不会与浮动 Box 重叠。
BFC 就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素，反之亦然。
计算 BFC 的高度时，浮动子元素也参与计算。
诶？？

这好像在我们的 body 元素里面，盒子天然就是这样的布局规则呀？

没错，实际上在一个标准流中 body 元素就是一个天然的 BFC。

那么如果其他区域，我想单独设置成一个 BFC，该怎么办呢？这里记录了一些常见的方式。
元素或属性	属性值
根元素	
float	left、right
postion	absolute、fixed
overflow	auto、scroll、hidden
display	inline-block、table-cell

上面只记录了一些常见的方式，完整的 BFC 触发方式可以参阅：https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context

明白了 BFC，那么其他的 IFC、GFC 和 FFC 也就大同小异了。

IFC（Inline formatting context）：翻译成中文就是“行内格式化上下文”，也就是一块区域以行内元素的形式来格式化
GFC（GrideLayout formatting contexts）：翻译成中文就是“网格布局格式化上下文”，将一块区域以 grid 网格的形式来格式化
FFC（Flex formatting contexts）：翻译成中文就是“弹性格式化上下文“，将一块区域以弹性盒的形式来格式化
更多关于格式化上下文的内容，可以参阅 MDN：

BFC：https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context

IFC：https://developer.mozilla.org/zh-CN/docs/Web/CSS/Inline_formatting_context
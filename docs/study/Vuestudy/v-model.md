v-model即可以作用于表单元素，又可作用于自定义组件，无论是哪一种情况，它都是一个语法糖，最终会生成一个属性和一个事件

当其作用于表单元素时，vue会根据作用的表单元素类型而生成合适的属性和事件。例如，作用于普通文本框的时候，它会生成value属性和input事件，而当其作用于单选框或多选框时，它会生成checked属性和change事件。

v-model也可作用于自定义组件，当其作用于自定义组件时，默认情况下，它会生成一个value属性和input事件。

<Comp v-model="data" />
<!-- 等效于 -->
<Comp :value="data" @input="data=$event" />
开发者可以通过组件的model配置来改变生成的属性和事件

// Comp
const Comp = {
  model: {
    prop: "number", // 默认为 value
    event: "change" // 默认为 input
  }
  // ...
}
<Comp v-model="data" />
<!-- 等效于 -->
<Comp :number="data" @change="data=$event" />
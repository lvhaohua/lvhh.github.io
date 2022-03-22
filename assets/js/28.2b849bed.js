(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{455:function(t,s,a){"use strict";a.r(s);var e=a(15),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[a("code",[t._v("position")]),t._v("属性用来指定一个元素在网页上的位置，一共有 5 种定位方式，static、relative、fixed、absolute、sticky、inherit")]),t._v(" "),a("h2",{attrs:{id:"一、position-属性的作用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、position-属性的作用"}},[t._v("#")]),t._v(" 一、position 属性的作用")]),t._v(" "),a("p",[a("code",[t._v("position")]),t._v("属性用来指定一个元素在网页上的位置，一共有 5 种定位方式，即"),a("code",[t._v("position")]),t._v("属性主要有五个值。")]),t._v(" "),a("blockquote",[a("ul",[a("li",[a("code",[t._v("static")])]),t._v(" "),a("li",[a("code",[t._v("relative")])]),t._v(" "),a("li",[a("code",[t._v("fixed")])]),t._v(" "),a("li",[a("code",[t._v("absolute")])]),t._v(" "),a("li",[a("code",[t._v("sticky")])]),t._v(" "),a("li",[a("code",[t._v("inherit")]),t._v(" 继承父元素的 position 值")])])]),t._v(" "),a("p",[t._v("下面就依次介绍这五个值。最后一个"),a("code",[t._v("sticky")]),t._v("是 2017 年浏览器才支持的，本文将重点介绍。")]),t._v(" "),a("h2",{attrs:{id:"二、static-属性值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、static-属性值"}},[t._v("#")]),t._v(" 二、static 属性值")]),t._v(" "),a("p",[a("code",[t._v("static")]),t._v("是"),a("code",[t._v("position")]),t._v("属性的默认值。如果省略"),a("code",[t._v("position")]),t._v("属性，浏览器就认为该元素是"),a("code",[t._v("static")]),t._v("定位。")]),t._v(" "),a("p",[t._v('这时，浏览器会按照源码的顺序，决定每个元素的位置，这称为"正常的页面流"（normal flow）。每个块级元素占据自己的区块（block），元素与元素之间不产生重叠，这个位置就是元素的默认位置。')]),t._v(" "),a("p",[t._v("注意，"),a("code",[t._v("static")]),t._v("定位所导致的元素位置，是浏览器自主决定的，所以这时"),a("code",[t._v("top")]),t._v("、"),a("code",[t._v("bottom")]),t._v("、"),a("code",[t._v("left")]),t._v("、"),a("code",[t._v("right")]),t._v("这四个属性无效。")]),t._v(" "),a("h2",{attrs:{id:"三、relative-absolute-fixed"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、relative-absolute-fixed"}},[t._v("#")]),t._v(" 三、relative，absolute，fixed")]),t._v(" "),a("p",[a("code",[t._v("relative")]),t._v("、"),a("code",[t._v("absolute")]),t._v("、"),a("code",[t._v("fixed")]),t._v("这三个属性值有一个共同点，都是相对于某个基点的定位，不同之处仅仅在于基点不同。所以，只要理解了它们的基点是什么，就很容易掌握这三个属性值。")]),t._v(" "),a("p",[t._v("这三种定位都不会对其他元素的位置产生影响，因此元素之间可能产生重叠。")]),t._v(" "),a("h3",{attrs:{id:"_3-1-relative-属性值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-relative-属性值"}},[t._v("#")]),t._v(" 3.1 relative 属性值")]),t._v(" "),a("p",[a("code",[t._v("relative")]),t._v("表示，相对于默认位置（即"),a("code",[t._v("static")]),t._v("时的位置）进行偏移，即定位基点是元素的默认位置。")]),t._v(" "),a("p",[t._v("它必须搭配"),a("code",[t._v("top")]),t._v("、"),a("code",[t._v("bottom")]),t._v("、"),a("code",[t._v("left")]),t._v("、"),a("code",[t._v("right")]),t._v("这四个属性一起使用，用来指定偏移的方向和距离。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://www.wangbase.com/blogimg/asset/201911/bg2019111723.jpg",alt:"img"}})]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" relative"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("top")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 20px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v("上面代码中，"),a("code",[t._v("div")]),t._v("元素从默认位置向下偏移"),a("code",[t._v("20px")]),t._v("（即距离顶部"),a("code",[t._v("20px")]),t._v("）。")]),t._v(" "),a("h3",{attrs:{id:"_3-2-absolute-属性值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-absolute-属性值"}},[t._v("#")]),t._v(" 3.2 absolute 属性值")]),t._v(" "),a("p",[a("code",[t._v("absolute")]),t._v("表示，相对于上级元素（一般是父元素）进行偏移，即定位基点是父元素。")]),t._v(" "),a("p",[t._v("它有一个重要的限制条件：定位基点（一般是父元素）不能是"),a("code",[t._v("static")]),t._v("定位，否则定位基点就会变成整个网页的根元素"),a("code",[t._v("html")]),t._v("。另外，"),a("code",[t._v("absolute")]),t._v("定位也必须搭配"),a("code",[t._v("top")]),t._v("、"),a("code",[t._v("bottom")]),t._v("、"),a("code",[t._v("left")]),t._v("、"),a("code",[t._v("right")]),t._v("这四个属性一起使用。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://www.wangbase.com/blogimg/asset/201911/bg2019111801.jpg",alt:"img"}})]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*\nHTML 代码如下\n<div id="father">\n <div id="son"></div>\n</div>\n*/')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("#father")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("positon")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" relative"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("#son")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" absolute"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("top")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 20px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br")])]),a("p",[t._v("上面代码中，父元素是"),a("code",[t._v("relative")]),t._v("定位，子元素是"),a("code",[t._v("absolute")]),t._v("定位，所以子元素的定位基点是父元素，相对于父元素的顶部向下偏移"),a("code",[t._v("20px")]),t._v("。如果父元素是"),a("code",[t._v("static")]),t._v("定位，上例的子元素就是距离网页的顶部向下偏移"),a("code",[t._v("20px")]),t._v("。")]),t._v(" "),a("p",[t._v("注意，"),a("code",[t._v("absolute")]),t._v('定位的元素会被"正常页面流"忽略，即在"正常页面流"中，该元素所占空间为零，周边元素不受影响。')]),t._v(" "),a("h3",{attrs:{id:"_3-3-fixed-属性值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-fixed-属性值"}},[t._v("#")]),t._v(" 3.3 fixed 属性值")]),t._v(" "),a("p",[a("code",[t._v("fixed")]),t._v("表示，相对于视口（viewport，浏览器窗口）进行偏移，即定位基点是浏览器窗口。这会导致元素的位置不随页面滚动而变化，好像固定在网页上一样。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://www.wangbase.com/blogimg/asset/201911/bg2019111802.jpg",alt:"img"}})]),t._v(" "),a("p",[t._v("它如果搭配"),a("code",[t._v("top")]),t._v("、"),a("code",[t._v("bottom")]),t._v("、"),a("code",[t._v("left")]),t._v("、"),a("code",[t._v("right")]),t._v("这四个属性一起使用，表示元素的初始位置是基于视口计算的，否则初始位置就是元素的默认位置。")]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" fixed"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("top")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v("上面代码中，"),a("code",[t._v("div")]),t._v("元素始终在视口顶部，不随网页滚动而变化。")]),t._v(" "),a("h2",{attrs:{id:"四、sticky-属性值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、sticky-属性值"}},[t._v("#")]),t._v(" 四、sticky 属性值")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://resource-save-01.oss-cn-chengdu.aliyuncs.com/img/20200820020853.png",alt:""}})]),t._v(" "),a("p",[a("code",[t._v("sticky")]),t._v("跟前面四个属性值都不一样，它会产生动态效果，很像"),a("code",[t._v("relative")]),t._v("和"),a("code",[t._v("fixed")]),t._v("的结合：一些时候是"),a("code",[t._v("relative")]),t._v("定位（定位基点是自身默认位置），另一些时候自动变成"),a("code",[t._v("fixed")]),t._v("定位（定位基点是视口）。")]),t._v(" "),a("p",[t._v('因此，它能够形成"动态固定"的效果。比如，网页的搜索工具栏，初始加载时在自己的默认位置（'),a("code",[t._v("relative")]),t._v("定位）。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://www.wangbase.com/blogimg/asset/201911/bg2019111604.jpg",alt:"img"}})]),t._v(" "),a("p",[t._v("页面向下滚动时，工具栏变成固定位置，始终停留在页面头部（"),a("code",[t._v("fixed")]),t._v("定位）。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://www.wangbase.com/blogimg/asset/201911/bg2019111605.jpg",alt:"img"}})]),t._v(" "),a("p",[t._v("等到页面重新向上滚动回到原位，工具栏也会回到默认位置。")]),t._v(" "),a("p",[a("code",[t._v("sticky")]),t._v("生效的前提是，必须搭配"),a("code",[t._v("top")]),t._v("、"),a("code",[t._v("bottom")]),t._v("、"),a("code",[t._v("left")]),t._v("、"),a("code",[t._v("right")]),t._v("这四个属性一起使用，不能省略，否则等同于"),a("code",[t._v("relative")]),t._v('定位，不产生"动态固定"的效果。原因是这四个属性用来定义"偏移距离"，浏览器把它当作'),a("code",[t._v("sticky")]),t._v("的生效门槛。")]),t._v(" "),a("p",[t._v("它的具体规则是，当页面滚动，父元素开始脱离视口时（即部分不可见），只要与"),a("code",[t._v("sticky")]),t._v("元素的距离达到生效门槛，"),a("code",[t._v("relative")]),t._v("定位自动切换为"),a("code",[t._v("fixed")]),t._v("定位；等到父元素完全脱离视口时（即完全不可见），"),a("code",[t._v("fixed")]),t._v("定位自动切换回"),a("code",[t._v("relative")]),t._v("定位。")]),t._v(" "),a("p",[t._v("请看下面的示例代码。（注意，除了已被淘汰的 IE 以外，其他浏览器目前都支持"),a("code",[t._v("sticky")]),t._v("。但是，Safari 浏览器需要加上浏览器前缀"),a("code",[t._v("-webkit-")]),t._v("。）")]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("#toolbar")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" -webkit-sticky"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* safari 浏览器 */")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" sticky"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 其他浏览器 */")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("top")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 20px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("上面代码中，页面向下滚动时，"),a("code",[t._v("#toolbar")]),t._v("的父元素开始脱离视口，一旦视口的顶部与"),a("code",[t._v("#toolbar")]),t._v("的距离小于"),a("code",[t._v("20px")]),t._v("（门槛值），"),a("code",[t._v("#toolbar")]),t._v("就自动变为"),a("code",[t._v("fixed")]),t._v("定位，保持与视口顶部"),a("code",[t._v("20px")]),t._v("的距离。页面继续向下滚动，父元素彻底离开视口（即整个父元素完全不可见），"),a("code",[t._v("#toolbar")]),t._v("恢复成"),a("code",[t._v("relative")]),t._v("定位。")]),t._v(" "),a("h2",{attrs:{id:"五、-sticky-的应用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#五、-sticky-的应用"}},[t._v("#")]),t._v(" 五、 sticky 的应用")]),t._v(" "),a("p",[a("code",[t._v("sticky")]),t._v('定位可以实现一些很有用的效果。除了上面提到"动态固定"效果，这里再介绍两个。')]),t._v(" "),a("h3",{attrs:{id:"_5-1-堆叠效果"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-堆叠效果"}},[t._v("#")]),t._v(" 5.1 堆叠效果")]),t._v(" "),a("p",[t._v("堆叠效果（stacking）指的是页面滚动时，下方的元素覆盖上方的元素。下面是一个图片堆叠的例子，下方的图片会随着页面滚动，覆盖上方的图片（查看 "),a("a",{attrs:{href:"https://jsbin.com/fegiqoquki/edit?html,css,output",target:"_blank",rel:"noopener noreferrer"}},[t._v("demo"),a("OutboundLink")],1),t._v("）。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://www.wangbase.com/blogimg/asset/201911/bg2019111609.jpg",alt:"img"}})]),t._v(" "),a("p",[t._v("HTML 代码就是几张图片。")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("pic1.jpg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("pic2.jpg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("pic3.jpg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("CSS 代码极其简单，只要两行。")]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" sticky"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("top")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v("它的原理是页面向下滚动时，每张图片都会变成"),a("code",[t._v("fixed")]),t._v("定位，导致后一张图片重叠在前一张图片上面。详细解释可以看"),a("a",{attrs:{href:"https://dev.to/vinceumo/slide-stacking-effect-using-position-sticky-91f",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"_5-2-表格的表头锁定"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-表格的表头锁定"}},[t._v("#")]),t._v(" 5.2 表格的表头锁定")]),t._v(" "),a("p",[t._v("大型表格滚动的时候，表头始终固定，也可以用"),a("code",[t._v("sticky")]),t._v("实现（查看 "),a("a",{attrs:{href:"https://jsbin.com/decemanohe/edit?html,css,output",target:"_blank",rel:"noopener noreferrer"}},[t._v("demo"),a("OutboundLink")],1),t._v("）。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://www.wangbase.com/blogimg/asset/201911/bg2019111610.jpg",alt:"img"}})]),t._v(" "),a("p",[t._v("CSS 代码也很简单。")]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("th")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" sticky"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("top")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v("需要注意的是，"),a("code",[t._v("sticky")]),t._v("必须设在"),a("code",[t._v("<th>")]),t._v("元素上面，不能设在"),a("code",[t._v("<thead>")]),t._v("和"),a("code",[t._v("<tr>")]),t._v("元素，因为这两个元素没有"),a("code",[t._v("relative")]),t._v("定位，也就无法产生"),a("code",[t._v("sticky")]),t._v("效果。详细解释可以看"),a("a",{attrs:{href:"https://css-tricks.com/position-sticky-and-table-headers/",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"六、-z-index"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#六、-z-index"}},[t._v("#")]),t._v(" 六、 z-index")]),t._v(" "),a("h3",{attrs:{id:"_6-1-z-index-简述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-z-index-简述"}},[t._v("#")]),t._v(" 6.1 z-index 简述")]),t._v(" "),a("ul",[a("li",[t._v("z-index 属性定义了第三维度，默认为 0")]),t._v(" "),a("li",[t._v("z-index 属性设置元素的堆叠顺序，拥有更高堆叠顺序的元素总是会处于堆叠顺序较低的元素的前面")]),t._v(" "),a("li",[t._v("z-index 只能在 position 属性值为 relative 或 absolute 或 fixed 的元素上有效")])]),t._v(" "),a("h3",{attrs:{id:"_6-2-z-index-在同级元素下"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-z-index-在同级元素下"}},[t._v("#")]),t._v(" 6.2 z-index 在同级元素下")]),t._v(" "),a("ul",[a("li",[t._v("z-index 大的元素会叠在 z-index 小的元素上方")]),t._v(" "),a("li",[t._v("z-index 相等或未设置时，后面的元素会叠在前面的元素上方")])]),t._v(" "),a("h3",{attrs:{id:"_6-3-z-index-在不同级元素下"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-3-z-index-在不同级元素下"}},[t._v("#")]),t._v(" 6.3 z-index 在不同级元素下")]),t._v(" "),a("ul",[a("li",[t._v("父元素的 z-index 为其子元素定义了堆叠上下文，大的在小的上方")]),t._v(" "),a("li",[t._v("若父元素未指定 z-index，自由的子 z-index 元素可以与其他自由的定位元素来比较 z-index 的值，决定其堆叠顺序")])]),t._v(" "),a("h3",{attrs:{id:"_6-4-fixed-和-absolute"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-4-fixed-和-absolute"}},[t._v("#")]),t._v(" 6.4 fixed 和 absolute")]),t._v(" "),a("ul",[a("li",[t._v("遵循以上的规则")])]),t._v(" "),a("p",[t._v("（完）")]),t._v(" "),a("p",[a("strong",[t._v("原文出自：")])]),t._v(" "),a("ol",[a("li",[a("p",[t._v("https://www.ruanyifeng.com/blog/2019/11/css-position.html")])]),t._v(" "),a("li",[a("p",[t._v("https://godbasin.github.io/2016/06/25/about-position/")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);
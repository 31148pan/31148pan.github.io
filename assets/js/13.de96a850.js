(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{233:function(t,e,n){"use strict";n.r(e);var a=n(2),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"前言"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),n("p",[t._v("过渡和动画的初衷就是为了使得我们的网页“活”起来，看上去更有灵性。")]),t._v(" "),n("h2",{attrs:{id:"过渡-transition"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#过渡-transition"}},[t._v("#")]),t._v(" 过渡 transition")]),t._v(" "),n("p",[t._v("过渡有以下属性。")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("transition-property")]),t._v(" 规定应用过渡的 CSS 属性的名称。必填项。")])]),t._v(" "),n("p",[t._v("支持的属性有："),n("code",[t._v("background-color")]),t._v("、"),n("code",[t._v("background-image")]),t._v("（仅支持渐变gradient）、"),n("code",[t._v("background-position")]),t._v("、"),n("code",[t._v("border-color")]),t._v("、"),n("code",[t._v("border-width")]),t._v("、"),n("code",[t._v("bottom")]),t._v("、"),n("code",[t._v("color")]),t._v("、"),n("code",[t._v("font-size")]),t._v("、"),n("code",[t._v("font-weight")]),t._v("、"),n("code",[t._v("height")]),t._v("、"),n("code",[t._v("left")]),t._v("、"),n("code",[t._v("letter-spacing")]),t._v("、"),n("code",[t._v("line-height")]),t._v("、"),n("code",[t._v("margin")]),t._v("、"),n("code",[t._v("max-height")]),t._v("、"),n("code",[t._v("max-width")]),t._v("、"),n("code",[t._v("min-height")]),t._v("、"),n("code",[t._v("min-width")]),t._v("、"),n("code",[t._v("opacity")]),t._v("、"),n("code",[t._v("outline-color")]),t._v("、"),n("code",[t._v("outline-offset")]),t._v("、"),n("code",[t._v("outline-width")]),t._v("、"),n("code",[t._v("padding")]),t._v("、"),n("code",[t._v("right")]),t._v("、"),n("code",[t._v("text-indent")]),t._v("、"),n("code",[t._v("text-shadow")]),t._v("、"),n("code",[t._v("top")]),t._v("、"),n("code",[t._v("vertical-align")]),t._v("、"),n("code",[t._v("visibility")]),t._v("、"),n("code",[t._v("width")]),t._v("a、"),n("code",[t._v("word-spacing")]),t._v("、"),n("code",[t._v("z-index")]),t._v("、"),n("code",[t._v("zoom")]),t._v("。")]),t._v(" "),n("ul",[n("li",[n("p",[n("code",[t._v("transition-duration")]),t._v("  定义过渡效果花费的时间（以秒s或毫ms秒计）。默认是 "),n("code",[t._v("0")]),t._v("，即没有过渡效果。必须项。")])]),t._v(" "),n("li",[n("p",[n("code",[t._v("transition-timing-function")]),t._v("  规定过渡效果的时间曲线。默认是 "),n("code",[t._v("ease")]),t._v("（慢-快-慢）。值可为"),n("code",[t._v("linear")]),t._v("（稳定的速度）、"),n("code",[t._v("ease-in")]),t._v("（慢-快）、"),n("code",[t._v("ease-out")]),t._v("（快-慢）、"),n("code",[t._v("ease-in-out")]),t._v("（慢-快-慢）、"),n("a",{attrs:{href:"https://cubic-bezier.com/#.17,.67,.83,.67",target:"_blank",rel:"noopener noreferrer"}},[t._v("cubic-bezier(n,n,n,n)"),n("OutboundLink")],1),t._v("（贝塞尔曲线，n值为0-1之间）。")])]),t._v(" "),n("li",[n("p",[n("code",[t._v("transition-delay")]),t._v("  规定过渡效果何时开始（以秒s或毫ms秒计）。默认是 "),n("code",[t._v("0")]),t._v("。")])])]),t._v(" "),n("p",[n("strong",[t._v("使用的方法：直接指定当前要过渡的css属性和所需过渡花费的时间。即 "),n("code",[t._v("transition：属性 花费的时间")]),t._v("。然后在设置触发的条件（比如鼠标hover，点击等）及属性即可。")])]),t._v(" "),n("h3",{attrs:{id:"动画-animation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#动画-animation"}},[t._v("#")]),t._v(" 动画 animation")]),t._v(" "),n("p",[t._v("元素从一种样式逐渐变化为另一种样式的效果,可以看作是过渡的进一步增强。有以下属性：")]),t._v(" "),n("ul",[n("li",[n("p",[n("code",[t._v("animation-name")]),t._v(" 规定 "),n("code",[t._v("@keyframes")]),t._v(" 动画的名称。")])]),t._v(" "),n("li",[n("p",[n("code",[t._v("animation-duration")]),t._v(" 规定动画完成一个周期所花费的秒或毫秒。默认是 0。")])]),t._v(" "),n("li",[n("p",[n("code",[t._v("animation-timing-function")]),t._v('  规定动画的速度曲线。默认是 "'),n("code",[t._v("ease")]),t._v('"。其他属性值参照过渡效果对应的属性。')])]),t._v(" "),n("li",[n("p",[n("code",[t._v("animation-fill-mode")]),t._v("  规定当动画执行完毕后状态。值可为 "),n("code",[t._v("none")]),t._v("（默认值，在动画执行之前和之后不会应用任何样式到目标元素，即以前啥就啥样）、"),n("code",[t._v("forwards")]),t._v("（停留在在动画结束后、"),n("code",[t._v("backwards")]),t._v("（停留在动画开始前）。")])]),t._v(" "),n("li",[n("p",[n("code",[t._v("animation-delay")]),t._v("  规定动画何时开始。默认是 0。")])]),t._v(" "),n("li",[n("p",[n("code",[t._v("animation-iteration-count")]),t._v(" 规定动画被播放的次数。默认是 1。值可为 "),n("code",[t._v("数值")]),t._v(" 和 "),n("code",[t._v("infinite")]),t._v("（无数次）")])]),t._v(" "),n("li",[n("p",[n("code",[t._v("animation-direction")]),t._v('  规定动画是否在下一周期逆向地播放。默认是 "'),n("code",[t._v("normal")]),t._v('"。值可为'),n("code",[t._v("reverse")]),t._v("（反向播放）、"),n("code",[t._v("alternate")]),t._v("（奇数时正向播、偶数时方向播）、"),n("code",[t._v("alternate-reverse")]),t._v("（正好与alternate相反）")])]),t._v(" "),n("li",[n("p",[n("code",[t._v("animation-play-state")]),t._v('  规定动画是否正在运行或暂停。默认是 "'),n("code",[t._v("running")]),t._v('"。')])])]),t._v(" "),n("p",[n("strong",[t._v("使用方法：先指定动画的 @keyframes 规则，在对元素设置对应的css属性即可。")])]),t._v(" "),n("div",{staticClass:"language-css line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[n("span",{pre:!0,attrs:{class:"token atrule"}},[n("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@keyframes")]),t._v(" myfirst")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v("0%(相当于关键字from)")]),t._v("   "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" red"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v("25%")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" yellow"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v("50%")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" blue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v("100%（相当于关键字to）")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" green"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br")])]),n("p",[t._v("之后设置: css选择器{animation:myfirst 5s}   即可。")])])}),[],!1,null,null,null);e.default=s.exports}}]);
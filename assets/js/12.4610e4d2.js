(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{230:function(v,_,e){"use strict";e.r(_);var o=e(2),t=Object(o.a)({},(function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("h1",{attrs:{id:"css单位"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#css单位"}},[v._v("#")]),v._v(" css单位")]),v._v(" "),e("p",[v._v("CSS中通常会有以下几种单位：")]),v._v(" "),e("ul",[e("li",[e("p",[e("code",[v._v("px")]),v._v(" css像素单位，是一种绝对单位。相对于设备屏幕的分辨率。屏幕分辨率越高，渲染同一面积的像素点越多也就越清晰。")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("em")]),v._v("  相对单位，通常可以理解为相对于当前元素的父元素的"),e("code",[v._v("font-size")]),v._v("，由于继承性，1em 会一层一层往上找，而浏览器默认字体大小为16px,所以默认"),e("code",[v._v("1em=16px")]),v._v("。")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("%")]),v._v("  相对单位，根据属性不同参照物就不同。")])])]),v._v(" "),e("blockquote",[e("p",[v._v("1、在"),e("a",{attrs:{href:"css%E5%B8%B8%E7%94%A8%E5%B1%9E%E6%80%A7#position-%E5%85%83%E7%B4%A0%E5%AE%9A%E4%BD%8D"}},[v._v("position")]),v._v(" 定位中，其值参照它的包含块（即可能不是父元素）,因为定位不同属性（relative、absolute等）的参照物也不同。")]),v._v(" "),e("p",[v._v("2、在 "),e("code",[v._v("盒模型")]),v._v(" 中，"),e("code",[v._v("width")]),v._v("、"),e("code",[v._v("min/max-width")]),v._v("属性的值为百分比时，其相对于包含块的width进行计算;"),e("code",[v._v("height")]),v._v("、"),e("code",[v._v("min/max-height")]),v._v("属性的值为百分比时，其相对于包含块的height进行计算（这里有个特殊，如果包含块是根据内容自适应的，则设置此值无效，比如块级元素，默认情况下高度有内容决定，宽度为包含块决定此时设置百分比高度则无效）；"),e("code",[v._v("padding")]),v._v("和"),e("code",[v._v("margin")]),v._v("相对来说更为复杂一些，如果书写模式（"),e("code",[v._v("writing-mode")]),v._v("）是水平的，则相对于包含块的width进行计算；如果书写模式是垂直的，则相对于包含块的height进行计算。")]),v._v(" "),e("p",[v._v("3、"),e("code",[v._v("font-size")]),v._v(" 使用百分比是基于父元素中font-size进行计算。")]),v._v(" "),e("p",[v._v("4、"),e("code",[v._v("text-align")]),v._v("和"),e("code",[v._v("padding")]),v._v("有点类似，和书写模式有一定的关系。如果书写模式是水平的，则相对于width进行计算，如果是垂直的，则相对于height进行计算。")]),v._v(" "),e("p",[v._v("5、"),e("code",[v._v("line-height")]),v._v(" 基于自身"),e("code",[v._v("font-size")]),v._v("进行计算。")]),v._v(" "),e("p",[v._v("6、"),e("code",[v._v("vertical-algin")]),v._v("则基于自身"),e("code",[v._v("line-height")]),v._v("计算。")]),v._v(" "),e("p",[v._v("7、"),e("code",[v._v("border-width")]),v._v("边框属性是不支持%单位的，但在"),e("code",[v._v("border-radius")]),v._v("边框圆角和"),e("code",[v._v("border-image-width")]),v._v("边框图片两个属性上是可以使用百分比为单位的。如果在border-radius中使用百分比单位，也就是说圆角的半径是通过百分比来进行计算的，即：水平方向的半径是相对于元素width计算，垂直方向的半径是相对于元素高度进行计算。")]),v._v(" "),e("p",[v._v("8、"),e("code",[v._v("translateX()")]),v._v("的百分比相对于元素自身的width计算；"),e("code",[v._v("translateY()")]),v._v("的百分比相对于元素自身的height计算。")]),v._v(" "),e("p",[v._v("9、"),e("code",[v._v("background-size")]),v._v(" 也是可以使用百分比，相对于包含块。")])]),v._v(" "),e("ul",[e("li",[e("p",[e("code",[v._v("rem")]),v._v("   相对单位，始终相对于根元素html/body的"),e("code",[v._v("font-size")]),v._v("。默认情况下"),e("code",[v._v("1rem = 16px")]),v._v("。所有只要设置body/html的"),e("code",[v._v("fontsize=62.5%")]),v._v("，即可当前元素"),e("code",[v._v("1rem = 10px")]),v._v(".")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("vw")]),v._v(", "),e("code",[v._v("vh")]),v._v(": 视窗相对单位，分别是视口宽度的1/100和视口高度的1/100。对应的还有"),e("code",[v._v("vmax")]),v._v("和"),e("code",[v._v("vmin")]),v._v("属性。")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("deg")]),v._v(" 角度单位。通常用于CS3 "),e("code",[v._v("transfrom")]),v._v("属性中。")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("s")]),v._v("、"),e("code",[v._v("ms")]),v._v(" 时间单位。通常见于CS3"),e("code",[v._v("transition")]),v._v("、"),e("code",[v._v("animation")]),v._v("及JS方法"),e("code",[v._v("setTimeout")]),v._v("及"),e("code",[v._v("setInterval")]),v._v("的第二个属性中。")])])]),v._v(" "),e("p",[v._v("注意：单位与长度之间不能有空格，像 "),e("code",[v._v("font-size:16 px")]),v._v(" 这样浏览器是无法正常解析的。")])])}),[],!1,null,null,null);_.default=t.exports}}]);
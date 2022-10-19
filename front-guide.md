#前端代码风格规范

1. [规范概述](#intro)
2. [通用约定](#general)
    * [基本约束及原则](#base-rule)
	* [命名](#naming)
	* [缩进](#indentation)
	* [小写](#lowercase)
	* [注释](#comment)
	* [待办事项](#todo)
	* [省略嵌入式资源协议头](#protocol-relative-url)
3. [HTML](#html)
	1. [代码风格](#code-style-html)
  	 1.1. [缩进和换行](#indent-wrap-html)
  	 1.2. [命名](#naming-html)
  	 1.3. [标签](#label)
  	 1.4. [属性](#attribute-html)

	2. [通用](#common-html)
	 2.1. [DOCTYPE](#doctype)
	 2.2. [字符编码](#charset)
	 2.3. [CSS 和 JavaScript 引入](#css-js-import)

	3. [HEAD](#head-html)
	 3.1. [title](#head-title)
	 3.2. [favicon](#head-favicon)
	 3.3. [viewport](#head-viewport)
	
	4. [图片](#image)
    5. [多媒体](#media)
   
4. [CSS](#css)
    1. [代码风格](#code-style-css)
	 1.1. [文件](#code-style-css-file)
	 1.2. [缩进](#code-style-css-indent)
	 1.3. [空格](#code-style-css-space)
	 1.4. [行长度](#code-style-css-width)
	 1.5. [选择器](#code-style-css-selector)
	 1.6. [属性](#code-style-css-attribute)
	 1.7. [注释](#code-style-css-explain)
	 1.8. [命名](#code-style-css-naming)

    2. [通用](#css-common)
     2.1. [选择器](#css-common-selector)
     2.2. [属性缩写](#css-common-attr-abbr)
     2.3. [属性书写顺序](#css-common-attr-order)
     2.4. [清除浮动](#css-common-clearfix)
     2.5. [!important](#css-common-important)
     2.6. [z-index](#css-common-zIndex)

5. [JavaScript](#javascript)
	
6. [图像](#img)
	* [图像压缩](#img-compress)
	* [背景图](#background-image)
	* [前景图](#image)
	* [Sprite](#sprite)	
7. [参考资料](#reference)
8. [SEO页面代码建议](#seo-advice)

<a name="intro"></a>
##规范概述

* 本文档描述前端代码的基本约定规范，这里的前端代码包括html、css、javascript；该规范文档结合html、css及seo的最佳实践，前端性能优化基本原则以及常规网站安全的基本要求，对前端编码进行约束。

* 规范实施过程中会结合vscode开发工具( eslint + stylelint )，进行代码是否规范的检测，大部分代码约束都将编写相应规范配置在vscode中进行自动检查、提醒。

* 为了统一管理规划前端代码，提高前端代码的规范性，后期代码的维护性，以及遵循基本的网站性能优化及网站安全要求，对前端代码制定本规范。



<a name="general"></a>
## 通用约定

<a name="base-rule"></a>
### 1.基本约束及原则

* html、css、js代码优先遵循W3C标准
* html文件指定字符集，语义化结构 ，各项目内字符集统一
* 不允许直接在页面上书写大量的js或css代码；使用外部文件引用
* 所有的css文件放在页面头部head中引用
* 不影响布局的情况下，所有js文件放在页面底部引用，并指定charset
* 事件不允许写在html代码中，例如onclick=""
* 尽量避免使用iframe
* JS的开发过程尽量避免全局变量的使用，减少变量污染
* 尽可能使用png8图像，能压缩的图像最大化压缩；使用CSS Spirite方式合并图像和background-position定位来代替多个图片
* 尽量减少页面DOM元素数量，避免使用table，避免无语义或纯粹为布局而加入的页面元素；避免层级过深，css选择器层级过深
* 严格区分AJAX请求中的GET和POST使用
* 对cookie的使用尽量精简，在不需要使用该cookie的请求中尽可能不携带
* 禁止在cookie或hidden中保存敏感信息
* css、js文件命名按照功能模块命名，与页面命名保持一致或接近

<a name="naming"></a>
### 2.命名
命名统一使用英文单词，要求简单，通俗易懂

<a name="name-project"></a>
####项目命名
全部采用小写方式， 以中划线分隔，参考目前项目命名。 
`例：faw-smart-team-web`

<a name="name-catalogue"></a>
####目录命名（文件夹名、文件名）
全部采用小写方式， 以中划线分隔；有复数结构时，要采用复数命名法。
css、js文件命名按照功能模块命名，与页面命名保持一致或接近    
`例：scripts, styles, images, data-models, retina-sprites.scss, account_model.js`

<a name="name-router"></a>
#### 路由命名
路由地址必须和文件路径保持一致，全部使用小写方式，以下划线分割

<a name="indentation"></a>
### 3.缩进

将你的编辑器按照下面的配置进行设置，以避免常见的代码不一致和差异：

用四个空格代替制表符（soft-tab 即用空格代表 tab 符）。
保存文件时，删除尾部的空白符。
设置文件编码为 UTF-8。
在文件结尾添加一个空白行。

推荐使用sublime text来进行前端脚本的编写。

可以在Preferences -> Setting - User 中加入以下配置:

	"tab_size": 4,
	"translate_tabs_to_spaces": true

此时，按tab键即可敲出四个空格。


<a name="lowercase"></a>
### 4.小写

所有的HTML标签必须小写；

所有的HTML属性必须小写；

所有的样式名及规则必须小写。

<a name="comment"></a>
### 5.注释

好的命名与代码组织优于注释。如果你为代码添加了注释，在对代码进行改动的时候记得更新它。

<a name="todo"></a>
### 6.待办事项

用 TODO 标示待办事项和正在开发的条目

	<!-- TODO: 图文混排 -->
	<div class="g-imgtext">
	<img src="1.png" alt="" />
	...

	/* TODO: 图文混排 comm: g-imgtext */
	.g-imgtext { sRules; }

<a name="protocol-relative-url"></a>
### 7.省略嵌入式资源协议头

省略图像、媒体文件、样式表和脚本等URL协议头部声明 ( http: , https: )。如果不是这两个声明的URL则不省略。

省略协议声明，使URL成相对地址，防止内容混淆问题和导致小文件重复下载（这个主要是指http和https交杂的场景中）。

不推荐：

	<script src="http://www.google.com/js/gweb/analytics/autotrack.js"></script>

推荐：

	<script src="//www.google.com/js/gweb/analytics/autotrack.js"></script>

不推荐：

```
.example {
  background: url(http://www.google.com/images/example);
}
```

推荐：

```
.example {
  background: url(//www.google.com/images/example);
}
```

> 注：省略协议头在IE7-8下会有一点小问题，外部CSS文件（link和@import）会被下载两遍，所以该条目的约定看具体项目。


<a name="html"></a>

## HTML

<a name="code-style-html"></a>

### 1、代码风格

<a name="indent-wrap-html"></a>

#### 1.1、缩进和换行

__[强制] 使用 4 个空格做为一个缩进层级，不允许使用 2 个空格 或 tab 字符__
解释：统一使用四个空格进行代码缩进，使得各编辑器表现一致（各编辑器有相关配置）

***[建议] 每行不得超过 120 个字符。***
解释：过长的代码不容易阅读与维护。但是考虑到 HTML 的特殊性，不做硬性要求

<a name="naming-html"></a>

#### 1.2、命名

__[强制] class 必须单词全字母小写，单词间以 - 分隔。__

__[强制] class 必须代表相应模块或部件的内容或功能，不得以样式信息进行命名。__

__[强制] 元素 id 必须保证页面唯一__

__[强制] 禁止为了 hook 脚本，创建无样式信息的 class。__
解释：不允许 class 只用于让 JavaScript 选择某些元素，class 应该具有明确的语义和样式。否则容易导致 CSS class 泛滥。使用 id、属性选择作为 hook 是更好的方式。

__[强制] 同一页面，应避免使用相同的 name 与 id。__
解释：IE 浏览器会混淆元素的 id 和 name 属性， document.getElementById 可能获得不期望的元素。所以在对元素的 id 与 name 属性的命名需要非常小心

***[建议] id、class 命名，在避免冲突并描述清楚的前提下尽可能短。***

<a name="label"></a>

#### 1.3、标签

__[强制] 标签名必须使用小写字母。__

__[强制] 标签使用必须符合标签嵌套规则。__
解释：比如 div 不得置于 p 中，tbody 必须置于 table 中。

***[建议] HTML 标签的使用应该遵循标签的语义。***
下面是常见标签语义
````
p - 段落
h1,h2,h3,h4,h5,h6 - 层级标题
strong,em - 强调
ins - 插入
del - 删除
abbr - 缩写
code - 代码标识
cite - 引述来源作品的标题
q - 引用
blockquote - 一段或长篇引用
ul - 无序列表
ol - 有序列表
dl,dt,dd - 定义列表
````

***[建议] 标签的使用应尽量简洁，减少不必要的标签。***
````
<!-- good -->
<img class="avatar" src="image.png">

<!-- bad -->
<span class="avatar">
    <img src="image.png">
</span>
````

***[建议]特殊字符引用使用字符字体***
解释：文本可以和字符引用混合出现。这种方法可以用来转义在文本中不能合法出现的字符。
在 HTML 中不能使用小于号 “<” 和大于号 “>”特殊字符，浏览器会将它们作为标签解析，若要正确显示，在 HTML 源代码中使用字符实体
````
<!-- good -->
<a href="#">more&gt;&gt;</a>

<!-- bad -->
<a href="#">more>></a>
````

<a name="attribute-html"></a>

#### 1.4、属性

__[强制] 属性名必须使用小写字母。__
````
<!-- good -->
<table cellspacing="0">...</table>

<!-- bad -->
<table cellSpacing='0'>...</table>
````

__[强制] 属性值必须用双引号包围。__
````
<!-- good -->
<script src="esl.js"></script>

<!-- bad -->
<script src='esl.js'></script>
<script src=esl.js></script>
````

***[建议] 布尔类型的属性，建议不添加属性值。***
````
<input type="text" disabled>
<input type="checkbox" value="1" checked>
````

***[建议] 自定义属性建议以 xxx- 为前缀，推荐使用 data-。***
解释：使用前缀有助于区分自定义属性和标准定义的属性。
````
<ol data-ui-type="Select"></ol>
````
<a name="common-html"></a>

### 2、通用

<a name="doctype"></a>

#### 2.1、DOCTYPE
__[强制] 使用 HTML5 的 doctype 来启用标准模式，建议使用大写的 DOCTYPE。__
````
<!DOCTYPE html>
````

***[建议] 启用 IE Edge 模式。***
解释：IE 支持通过特定的 标签来确定绘制当前页面所应该采用的 IE 版本。除非有强烈的特殊需求，否则最好是设置为 edge mode，从而通知 IE 采用其所支持的最新的模式。
````
<meta http-equiv="X-UA-Compatible" content="IE=Edge">
````

***[建议] 在 html 标签上设置正确的 lang 属性。***
解释：有助于提高页面的可访问性，如：让语音合成工具确定其所应该采用的发音，令翻译工具确定其翻译语言等。
````
	<html lang="zh-CN">
      <!-- ... -->
	</html>
````
<a name="charset"></a>

#### 2.2、字符编码

__[强制] 页面必须使用精简形式，明确指定字符编码。指定字符编码的 meta 必须是 head 的第一个直接子元素。__
解释：通过明确声明字符编码，能够确保浏览器快速并容易的判断页面内容的渲染方式。这样做的好处是，可以避免在 HTML 中使用字符实体标记（character entity），从而全部与文档编码一致（一般采用 UTF-8 编码）
````
<html>
    <head>
        <meta charset="UTF-8">
        ......
    </head>
    <body>
        ......
    </body>
</html>
````
<a name="css-js-import"></a>

#### 2.3、CSS 和 JavaScript 引入

__[强制] 引入 CSS 时必须指明 rel="stylesheet"。__
````
<link rel="stylesheet" href="page.css">
````

***[建议] 引入 CSS 和 JavaScript 时无须指明 type 属性。***
解释：text/css 和 text/javascript 是 type 的默认值。

***[建议] 展现定义放置于外部 CSS 中，行为定义放置于外部 JavaScript 中。***
解释：结构-样式-行为的代码分离，对于提高代码的可阅读性和维护性都有好处

***[建议] 在 head 中引入页面需要的所有 CSS 资源。__***
解释：在页面渲染的过程中，新的CSS可能导致元素的样式重新计算和绘制，页面闪烁。

***[建议] JavaScript 应当放在页面末尾，或采用异步加载***
解释：将 script 放在页面中间将阻断页面的渲染。出于性能方面的考虑，如非必要，请遵守此条建议。

<a name="head-html"></a>

### 3、Head

<a name="head-title"></a>

#### 3.1、title
__[强制] 页面必须包含 title 标签声明标题。__

__[强制] title 必须作为 head 的直接子元素，并紧随 charset 声明之后。__
解释：title 中如果包含 ASCII 之外的字符，浏览器需要知道字符编码类型才能进行解码，否则可能导致乱码
````
<head>
    <meta charset="UTF-8">
    <title>页面标题</title>
</head>
````
<a name="head-favicon"></a>

#### 3.2、favicon
__[强制] 保证 favicon 可访问。__
解释：在未指定 favicon 时，大多数浏览器会请求 Web Server 根目录下的 favicon.ico 。为了保证 favicon 可访问，避免 404，必须遵循以下两种方法之一：
一、在 Web Server 根目录放置 favicon.ico 文件。
二、使用 link 指定 favicon。
````
<link rel="shortcut icon" href="path/to/favicon.ico">
````
<a name="head-viewport"></a>

#### 3.3、viewport
***[建议] 若页面欲对移动设备友好，需指定页面的 viewport。***
解释：viewport meta tag 可以设置可视区域的宽度和初始缩放大小，避免在移动设备上出现页面展示不正常。

比如，在页面宽度小于 980px 时，若需 iOS 设备友好，应当设置 viewport 的 width 值来适应你的页面宽度。同时因为不同移动设备分辨率不同，在设置时，应当使用 device-width 和 device-height 变量。

另外，为了使 viewport 正常工作，在页面内容样式布局设计上也要做相应调整，如避免绝对定位等。关于 viewport 的更多介绍，可以参见 [Safari Web Content Guide的介绍](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/UsingtheViewport/UsingtheViewport.html#//apple_ref/doc/uid/TP40006509-SW26)

<a name="image"></a>

### 4、图片
__[强制] 禁止 img 的 src 取值为空。延迟加载的图片也要增加默认的 src。__
解释：src 取值为空，会导致部分浏览器重新加载一次当前页面，参考：https://developer.yahoo.com/performance/rules.html#emptysrc

***[建议] 避免为 img 添加不必要的 title 属性。***
解释：多余的 title 影响看图体验，并且增加了页面尺寸。

***[建议] 为重要图片添加 alt 属性。***
解释：可以提高图片加载失败时的用户体验。

***[建议] 添加 width 和 height 属性，以避免页面抖动。***

***[建议] 有下载需求的图片采用 img 标签实现，无下载需求的图片采用 CSS 背景图实现。***
解释：  
一、产品 logo、用户头像、用户产生的图片等有潜在下载需求的图片，以 img 形式实现，能方便用户下载。
二、无下载需求的图片，比如：icon、背景、代码使用的图片等，尽可能采用 CSS 背景图实现。

<a name="media"></a>

### 5、多媒体

***[建议] 在支持 HTML5 的浏览器中优先使用 audio 和 video 标签来定义音视频元素。***

***[建议] 使用退化到插件的方式来对多浏览器进行支持。***
````
<audio controls>
    <source src="audio.mp3" type="audio/mpeg">
    <source src="audio.ogg" type="audio/ogg">
    <object width="100" height="50" data="audio.mp3">
        <embed width="100" height="50" src="audio.swf">
    </object>
</audio>

<video width="100" height="50" controls>
    <source src="video.mp4" type="video/mp4">
    <source src="video.ogg" type="video/ogg">
    <object width="100" height="50" data="video.mp4">
        <embed width="100" height="50" src="video.swf">
    </object>
</video>
````
***[建议] 只在必要的时候开启音视频的自动播放。***

***[建议] 在 object 标签内部提供指示浏览器不支持该标签的说明。***
````
<object width="100" height="50" data="something.swf">DO NOT SUPPORT THIS TAG</object>
````


<a name="css"></a>

## CSS

<a name="code-style-css"></a>

### 1、代码风格

<a name="code-style-css-file"></a>

#### 1.1、文件

***[建议] `CSS` 文件使用无 `BOM` 的 `UTF-8` 编码。***

解释：UTF-8 编码具有更广泛的适应性。BOM 在使用程序或工具处理文件时可能造成不必要的干扰。

<a name="code-style-css-indent"></a>




#### 1.5、选择器

__[建议] 当一个 rule 包含多个 selector 时，每个选择器声明必须独占一行。__

示例：

```css
/* good */
.post,
.page,
.comment {
    line-height: 1.5;
}

/* bad */
.post, .page, .comment {
    line-height: 1.5;
}
```


__[强制] 属性选择器中的值必须用双引号包围。__

解释：不允许使用单引号，不允许不使用引号。

示例：

```css
/* good */
article[character="juliet"] {
    voice-family: "Vivien Leigh", victoria, female;
}

/* bad */
article[character='juliet'] {
    voice-family: "Vivien Leigh", victoria, female;
}
```
<a name="code-style-css-attribute"></a>

#### 1.6、属性

__[强制] 属性定义必须另起一行。__

示例：

```css
/* good */
.selector {
    margin: 0;
    padding: 0;
}

/* bad */
.selector { margin: 0; padding: 0; }
```

__[强制] 属性定义后必须以分号结尾。__

示例：

```css
/* good */
.selector {
    margin: 0;
}

/* bad */
.selector {
    margin: 0
}
```
<a name="code-style-css-explain"></a>



<a name="code-style-css-naming"></a>

#### 1.8、命名

__[强制]类名使用小写字母，以中划线或下划线分隔，id采用驼峰式命名，scss中的变量、函数、混合、placeholder采用驼峰式命名__

示例：
```css
/* class */
.element-content {
    ...
}

/* id */
#myDialog {
    ...
}

/* 变量 */
$colorBlack: #000;

/* 函数 */
@function pxToRem($px) {
    ...
}

/* 混合 */
@mixin centerBlock {
    ...
}

/* placeholder */
%myDialog {
    ...
}
```
<a name="css-common"></a>

### 2、通用

<a name="css-common-selector"></a>

#### 2.1、选择器



***[建议] 选择器的嵌套层级应不大于 `3` 级，位置靠后的限定条件应尽可能精确。***

示例：

```css
/* good */
#username input {}
.comment .avatar {}

/* bad */
.page .header .login #username input {}
.comment div * {}
```
<a name="css-common-attr-abbr"></a>

#### 2.2、属性缩写

***[建议] 在可以使用缩写的情况下，尽量使用属性缩写。***

示例：

```css
/* good */
.post {
    font: 12px/1.5 arial, sans-serif;
}

/* bad */
.post {
    font-family: arial, sans-serif;
    font-size: 12px;
    line-height: 1.5;
}
```

***[建议] 使用 `border` / `margin` / `padding` 等缩写时，应注意隐含值对实际数值的影响，确实需要设置多个方向的值时才使用缩写。***

解释：`border` / `margin` / `padding` 等缩写会同时设置多个属性的值，容易覆盖不需要覆盖的设定。如某些方向需要继承其他声明的值，则应该分开设置。

<a name="css-common-attr-order"></a>


<a name="css-common-clearfix"></a>

#### 2.4、清除浮动

***[建议] 当元素需要撑起高度以包含内部的浮动元素时，通过对伪类设置 `clear` 或触发 `BFC` 的方式进行 `clearfix`。尽量不使用增加空标签的方式。***

解释：触发 BFC 的方式很多，常见的有：
* float 非 none
* position 非 static
* overflow 非 visible
  
另需注意，对已经触发 BFC 的元素不需要再进行 clearfix。

<a name="css-common-important"></a>

#### 2.5、!important

***[建议] 尽量不使用 `!important` 声明。***

***[建议] 当需要强制指定样式且不允许任何场景覆盖时，通过标签内联和 `!important` 定义样式。***

解释：必须注意的是，仅在设计上 `确实不允许任何其它场景覆盖样式` 时，才使用内联的 `!important` 样式。通常在第三方环境的应用中使用这种方案。下面的 `z-index` 章节是其中一个特殊场景的典型样例。

<a name="css-common-zIndex"></a>

#### 2.6、z-index（细分）

***[建议] 将 `z-index` 进行分层，对文档流外绝对定位元素的视觉层级关系进行管理。***

解释：
同层的多个元素，如多个由用户输入触发的 Dialog，在该层级内使用相同的 `z-index` 或递增 `z-index`。
建议每层包含100个 `z-index` 来容纳足够的元素，如果每层元素较多，可以调整这个数值。

***[建议] 在可控环境下，期望显示在最上层的元素，`z-index` 指定为 `9999`。***

解释：
可控环境分成两种，一种是自身产品线环境；还有一种是可能会被其他产品线引用，但是不会被外部第三方的产品引用。
不建议取值为 `2147483647`。以便于自身产品线被其他产品线引用时，当遇到层级覆盖冲突的情况，留出向上调整的空间。


***[建议] 在第三方环境下，期望显示在最上层的元素，通过标签内联和 `!important`，将 `z-index` 指定为 `2147483647`。***

解释：
第三方环境对于开发者来说完全不可控。在第三方环境下的元素，为了保证元素不被其页面其他样式定义覆盖，需要采用此做法。


### 3、值与单位

#### 3.1 文本

__[强制] 文本内容必须用双引号包围。__

解释：文本类型的内容可能在选择器、属性值等内容中。

示例：

```css
/* good */
html[lang|="zh"] q:before {
    font-family: "Microsoft YaHei", sans-serif;
    content: "hello world";
}


/* bad */
html[lang|=zh] q:before {
    font-family: 'Microsoft YaHei', sans-serif;
    content: 'hello world';
}

```

#### 3.2、数值

__[强制] 当数值为 0 - 1 之间的小数时，省略整数部分的 `0`。__

示例：

```css
/* good */
panel {
    opacity: .8;
}

/* bad */
panel {
    opacity: 0.8;
}
```


***[建议] `url()` 函数中的绝对路径可省去协议名。***

示例：

```css
body {
    background: url(//baidu.com/img/bg.png) no-repeat 0 0;
}
```

#### 3.4 长度

__[强制] 长度为 `0` 时须省略单位。 (也只有长度单位可省)__

示例：

```css
/* good */
body {
    padding: 0 5px;
}

/* bad */
body {
    padding: 0px 5px;
}
```


#### 3.5、颜色

__[强制] RGB颜色值必须使用十六进制记号形式 `#rrggbb`。不允许使用 `rgb()`。__

解释：带有alpha的颜色信息可以使用 `rgba()`。使用 `rgba()` 时每个逗号后必须保留一个空格。

示例：

```css
/* good */
.success {
    box-shadow: 0 0 2px rgba(0, 128, 0, .3);
    border-color: #008000;
}

/* bad */
.success {
    box-shadow: 0 0 2px rgba(0,128,0,.3);
    border-color: rgb(0, 128, 0);
}
```

***[建议] 颜色值可以缩写时，必须使用缩写形式。***

示例：

```css
/* good */
.success {
    background-color: #aca;
}

/* bad */
.success {
    background-color: #aaccaa;
}
```

***[建议] 颜色值不允许使用命名色值。***

示例：

```css
/* good */
.success {
    color: #90ee90;
}

/* bad */
.success {
    color: lightgreen;
}
```

__[强制] 颜色值中的英文字符采用小写。如不用小写也需要保证同一项目内保持大小写一致。__

示例：

```css
/* good */
.success {
    background-color: #aca;
    color: #90ee90;
}

/* bad */
.success {
    background-color: #ACA;
    color: #90ee90;
}
```




### 4、文本编排

#### 4.1、字体族

__[强制] `font-family` 属性中的字体族名称应使用字体的英文 `Family Name`，其中如有空格，须放置在引号中。__

解释：

所谓英文 Family Name，为字体文件的一个元数据，常见名称如下：

字体 | 操作系统 | Family Name
-----|----------|------------
宋体 (中易宋体) | Windows | SimSun
黑体 (中易黑体) | Windows | SimHei
微软雅黑 | Windows | Microsoft YaHei
微软正黑 | Windows | Microsoft JhengHei
华文黑体 | Mac/iOS | STHeiti
冬青黑体 | Mac/iOS | Hiragino Sans GB
文泉驿正黑 | Linux | WenQuanYi Zen Hei
文泉驿微米黑 | Linux | WenQuanYi Micro Hei


示例：

```css
h1 {
    font-family: "Microsoft YaHei";
}
```

___[强制] `font-family` 按「西文字体在前、中文字体在后」、「效果佳 (质量高/更能满足需求) 的字体在前、效果一般的字体在后」的顺序编写，最后必须指定一个通用字体族( `serif` / `sans-serif` )。__

解释：更详细说明可参考[本文](http://www.zhihu.com/question/19911793/answer/13329819)。

示例：

```css
/* Display according to platform */
.article {
    font-family: Arial, sans-serif;
}

/* Specific for most platforms */
h1 {
    font-family: "Helvetica Neue", Arial, "Hiragino Sans GB", "WenQuanYi Micro Hei", "Microsoft YaHei", sans-serif;
}
```

__[强制] `font-family` 不区分大小写，但在同一个项目中，同样的 `Family Name` 大小写必须统一。__

示例：

```css
/* good */
body {
    font-family: Arial, sans-serif;
}

h1 {
    font-family: Arial, "Microsoft YaHei", sans-serif;
}

/* bad */
body {
    font-family: arial, sans-serif;
}

h1 {
    font-family: Arial, "Microsoft YaHei", sans-serif;
}
```


#### 4.2、字体风格

***[建议] 需要在 Windows 平台显示的中文内容，不要使用除 `normal` 外的 `font-style`。其他平台也应慎用。***

解释：
由于中文字体没有 `italic` 风格的实现，所有浏览器下都会 fallback 到 `obilique` 实现 (自动拟合为斜体)，小字号下 (特别是 Windows 下会在小字号下使用点阵字体的情况下) 显示效果差，造成阅读困难。


#### 4.3、字重

__[强制] `font-weight` 属性必须使用数值方式描述。__

解释：
CSS 的字重分 100 – 900 共九档，但目前受字体本身质量和浏览器的限制，实际上支持 `400` 和 `700` 两档，分别等价于关键词 `normal` 和 `bold`。

浏览器本身使用一系列[启发式规则](http://www.w3.org/TR/CSS21/fonts.html#propdef-font-weight)来进行匹配，在 `<700` 时一般匹配字体的 Regular 字重，`>=700` 时匹配 Bold 字重。

但已有浏览器开始支持 `=600` 时匹配 Semibold 字重 (见[此表](http://justineo.github.io/slideshows/font/#/3/15))，故使用数值描述增加了灵活性，也更简短。

示例：

```css
/* good */
h1 {
    font-weight: 700;
}

/* bad */
h1 {
    font-weight: bold;
}
```

#### 4.4、行高

***[建议] `line-height` 在定义文本段落时，应使用数值。***

解释：
将 `line-height` 设置为数值，浏览器会基于当前元素设置的 `font-size` 进行再次计算。在不同字号的文本段落组合中，能达到较为舒适的行间间隔效果，避免在每个设置了 `font-size` 都需要设置 `line-height`。

当 `line-height` 用于控制垂直居中时，还是应该设置成与容器高度一致。


示例：

```css
.container {
    line-height: 1.5;
}
```



### 5、变换与动画

__[强制] 使用 `transition` 时应指定 `transition-property`。__

示例：

```css
/* good */
.box {
    transition: color 1s, border-color 1s;
}

/* bad */
.box {
    transition: all 1s;
}
```

***[建议] 尽可能在浏览器能高效实现的属性上添加过渡和动画。***

解释：
见[本文](http://www.html5rocks.com/en/tutorials/speed/high-performance-animations/)，在可能的情况下应选择这样四种变换：

* `transform: translate(npx, npx);`
* `transform: scale(n);`
* `transform: rotate(ndeg);`
* `opacity: 0..1;`

典型的，可以使用 `translate` 来代替 `left` 作为动画属性。

示例：

```css
/* good */
.box {
    transition: transform 1s;
}
.box:hover {
    transform: translate(20px); /* move right for 20px */
}

/* bad */
.box {
    left: 0;
    transition: left 1s;
}
.box:hover {
    left: 20px; /* move right for 20px */
}
```

### 5、响应式

__[强制] `Media Query` 不得单独编排，必须与相关的规则一起定义。__

示例：
```css
/* Good */
/* header styles */
@media (...) {
    /* header styles */
}

/* main styles */
@media (...) {
    /* main styles */
}

/* footer styles */
@media (...) {
    /* footer styles */
}


/* Bad */
/* header styles */
/* main styles */
/* footer styles */

@media (...) {
    /* header styles */
    /* main styles */
    /* footer styles */
}
```

__[强制] `Media Query` 如果有多个逗号分隔的条件时，应将每个条件放在单独一行中。__

示例：

```css
@media
(-webkit-min-device-pixel-ratio: 2), /* Webkit-based browsers */
(min--moz-device-pixel-ratio: 2),    /* Older Firefox browsers (prior to Firefox 16) */
(min-resolution: 2dppx),             /* The standard way */
(min-resolution: 192dpi) {           /* dppx fallback */
    /* Retina-specific stuff here */
}
```

### 7、兼容性

#### 7.1、属性前缀

__[强制] 带私有前缀的属性由长到短排列，按冒号位置对齐。__

解释：标准属性放在最后，按冒号对齐方便阅读，也便于在编辑器内进行多行编辑。
示例：

```css
.box {
    -webkit-box-sizing: border-box;
       -moz-box-sizing: border-box;
            box-sizing: border-box;
}
```

#### 7.2、Hack([常见的css hack](https://www.php.cn/website-design-ask-494422.html))

***[建议] 需要添加 `hack` 时应尽可能考虑是否可以采用其他方式解决。***

解释：如果能通过合理的 HTML 结构或使用其他的 CSS 定义达到理想的样式，则不应该使用 hack 手段解决问题。通常 hack 会导致维护成本的增加。

***[建议] 尽量使用 `选择器 hack` 处理兼容性，而非 `属性 hack`。***

解释：尽量使用符合 CSS 语法的 selector hack，可以避免一些第三方库无法识别 hack 语法的问题。

示例：

```css
/* IE 7 */
*:first-child + html #header {
    margin-top: 3px;
    padding: 5px;
}

/* IE 6 */
* html #header {
    margin-top: 5px;
    padding: 4px;
}
```


***[建议] 尽量使用简单的 `属性 hack`。***

示例：

```css
.box {
    _display: inline; /* fix double margin */
    float: left;
    margin-left: 20px;
}

.container {
    overflow: hidden;
    *zoom: 1; /* triggering hasLayout */
}
```

#### 7.3、Expression

__[强制] 禁止使用 `Expression`。__


### 8、scss相关

#### 8.1、团队约定

__[强制]提交的代码中不要有 @debug；__

***[建议]全部遵循 CSS 注释规范，不使用 `/*! */` 注释方式，多行注释用 `/* */`，单行注释用 `//`***

***[建议]注释内不放 SASS 变量***

示例：

```scss
@charset "UTF-8";

/**
 * @desc File Info
 * @author liqinuo
 * @date 2015-10-10
 */

/* Module A
----------------------------------------------------------------*/
.mod_a {}

/* module A logo */
.mod_a_logo {}

/* module A nav */
.mod_a_nav {}


/* Module B
----------------------------------------------------------------*/
.mod_b {}

/* module B logo */
.mod_b_logo {}

/* module B nav */
.mod_b_nav {}
```

#### 8.2、嵌套规范

***选择器嵌套***

示例：

```scss
/* CSS */
.jdc {}
body .jdc {}

/* SCSS */
.jdc {
    body & {}
}
```

```scss
/* CSS */
.jdc {}
.jdc_cover {}
.jdc_info {}
.jdc_info_name {}

/* SCSS */
.jdc {
    &_cover {}
    &_info {
        &_name {}
    }
}
```

***属性嵌套***

示例：

```scss
/* CSS */
.jdc {
    background-color: red;
    background-repeat: no-repeat;
    background-image: url(/img/icon.png);
    background-position: 0 0;
}

/* SCSS */
.jdc {
    background: {
        color: red;
        repeat: no-repeat;
        image: url(/img/icon.png);
        position: 0 0;
    }
}
```
#### 8.3、杂项

***[建议]可复用属性尽量抽离为页面变量，易于统一维护***

示例：

```scss
// CSS
.jdc {
    color: red;
    border-color: red;
}

// SCSS
$color: red;
.jdc {
    color: $color;
    border-color: $color;
}
```
***[建议]mixin,根据功能定义模块，然后在需要使用的地方通过 @include 调用，避免编码时重复输入代码段***

示例：

```scss
// CSS
.jdc_1 {
    -webkit-border-radius: 5px;
    border-radius: 5px;
}
.jdc_2 {
    -webkit-border-radius: 10px;
    border-radius: 10px;
}

// SCSS
@mixin radius($radius:5px) {
    -webkit-border-radius: $radius;
    border-radius: $radius;
}
.jdc_1 {
    @include radius; //参数使用默认值
}
.jdc_2 {
    @include radius(10px);
}



// CSS
.jdc_1 {
    background: url(/img/icon.png) no-repeat -10px 0;
}
.jdc_2 {
    background: url(/img/icon.png) no-repeat -20px 0;
}

// SCSS
@mixin icon($x:0, $y:0) {
    background: url(/img/icon.png) no-repeat $x, $y;
}
.jdc_1 {
    @include icon(-10px, 0);
}
.jdc_2 {
    @include icon(-20px, 0);
}
```

***[建议]当选择器的内容暂不确定时使用占位选择器,避免eslint警告***

解释：如果不调用则不会有任何多余的 css 文件，占位选择器以 % 标识定义，通过 @extend 调用

示例：

```scss
//scss
%borderbox {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
.jdc {
    @extend %borderbox;
}
```

***[建议]同级存在类似属性时使用extend继承***

示例：

```scss
// CSS
.jdc_1 {
    font-size: 12px;
    color: red;
}
.jdc_2 {
    font-size: 12px;
    color: red;
    font-weight: bold;
}

// SCSS
.jdc_1 {
    font-size: 12px;
    color: red;
}
.jdc_2 {
    @extend .jdc_1;
    font-weight: bold;
}

// 或者
%font_red {
    font-size: 12px;
    color: red;
}
.jdc_1 {
    @extend %font_red;
}
.jdc_2 {
    @extend %font_red;
    font-weight: bold;
}
```

***for循环***

注意：#{} 是连接符，变量连接使用时需要依赖

示例：

```scss
// CSS
.jdc_1 {background-position: 0 -20px;}
.jdc_2 {background-position: 0 -40px;}
.jdc_3 {background-position: 0 -60px;}

// SCSS
@for $i from 1 through 3 {
    .jdc_#{$i} {
        background-position: 0 (-20px) * $i;
    }
}
```

***each 循环***

示例：

```scss
// CSS
.jdc_list {
    background-image: url(/img/jdc_list.png);
}
.jdc_detail {
    background-image: url(/img/jdc_detail.png);
}

// SCSS
@each $name in list, detail {
    .jdc_#{$name} {
        background-image: url(/img/jdc_#{$name}.png);
    }
}


// CSS
.jdc_list {
    background-image: url(/img/jdc_list.png);
    background-color: red;
}
.jdc_detail {
    background-image: url(/img/jdc_detail.png);
    background-color: blue;
}

// SCSS
@each $name, $color in (list, red), (detail, blue) {
    .jdc_#{$name} {
        background-image: url(/img/jdc_#{$name}.png);
        background-color: $color;
    }
}
```

***function 函数***

示例：

```scss
// CSS
@function pxToRem($px) {
    @return $px / 10px * 1rem;
}
.jdc {
    font-size: pxToRem(12px);
}
```

__[强制]运算规范：运算符之间空出一个空格__

示例：

```scss
.jdc {
    width: 100px - 50px;
    height: 30px / 5;
}
```



<a name="img"></a>
## 图像

<a name="img-compress"></a>
### 图像压缩

所有图片必须经过一定的压缩和优化才能发布

<a name="background-image"></a>
### 背景图

使用PNG格式而不是GIF格式，因为PNG格式色彩更丰富，还能提供更好的压缩比；

<a name="image"></a>
### 前景图

内容图片建议使用JPG，可以拥有更好地显示效果；装饰性图片使用PNG。

<a name="sprite"></a>
### Sprite

CSS Sprite是一种将数个图片合成为一张大图的技术（既可以是背景图也可以是前景图），然后通过偏移来进行图像位置选取；CSS Sprite可以减少http请求。

<a name="reference"></a>
##参考资料

* [google javascript style guide](http://alloyteam.github.io/JX/doc/specification/google-javascript.xml#JavaScript_%E7%BC%96%E7%A0%81%E9%A3%8E%E6%A0%BC)

* [baidu code guide](https://github.com/ecomfe/spec)

* [bilibili-frontend-style-guide](https://github.com/huweixuan/bilibili-frontend-style-guide/blob/master/%E5%93%94%E5%93%A9%E5%93%94%E5%93%A9%E5%89%8D%E7%AB%AF%E4%BB%A3%E7%A0%81%E9%A3%8E%E6%A0%BC%E8%A7%84%E8%8C%83.md#css)

* [aptu code guide](https://guide.aotu.io/docs/js/language.html)

* [tgideas code guide](https://tgideas.qq.com/doc/frontend/spec/common/)

* [alloyteam code guide](http://alloyteam.github.io/CodeGuide/)






<a name="seo-advice"></a>
## SEO页面代码建议

* 建议URL路径不要过深，最多4层
* 链接使用常规的HTML格式，如<a href=”www.a.com”>文本</a>，而不使用JS，span等其他链接形式
* 站外链接要加nofollow属性，防止爬虫工具过度爬取
* 重要标题或关键词用H标签
* 能突出页面主题的内容使用H1标签，保证一个页面有且只有一个H1标签
* 不要在页面上刻意堆砌关键字
* 不希望被翻译工具翻译的模块，可以加上class="notranslate"
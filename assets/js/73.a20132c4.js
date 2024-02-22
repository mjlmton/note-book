(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{1004:function(s,t,a){s.exports=a.p+"assets/img/markdown-img-paste-20190106131626576.3037a111.png"},1005:function(s,t,a){s.exports=a.p+"assets/img/markdown-img-paste-20190106134912696.64b9f4e3.png"},1006:function(s,t,a){s.exports=a.p+"assets/img/markdown-img-paste-20190106135147969.014388b3.png"},1007:function(s,t,a){s.exports=a.p+"assets/img/markdown-img-paste-20190106141919670.1f29ca94.png"},1816:function(s,t,a){"use strict";a.r(t);var e=a(13),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"并发更新冲突"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#并发更新冲突"}},[s._v("#")]),s._v(" 并发更新冲突")]),s._v(" "),e("p",[s._v("本章记录 5 个小结的笔记；他们都是讲解如何解决更新冲突")]),s._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#深度图解剖析-elasticsearch-并发冲突问题"}},[s._v("深度图解剖析 Elasticsearch 并发冲突问题")])]),e("li",[e("a",{attrs:{href:"#深度图解剖析悲观锁与乐观锁两种并发控制方案"}},[s._v("深度图解剖析悲观锁与乐观锁两种并发控制方案")]),e("ul",[e("li",[e("a",{attrs:{href:"#悲观锁"}},[s._v("悲观锁")])]),e("li",[e("a",{attrs:{href:"#乐观锁"}},[s._v("乐观锁")])]),e("li",[e("a",{attrs:{href:"#优缺点"}},[s._v("优缺点")])])])]),e("li",[e("a",{attrs:{href:"#图解-elasticsearch-内部基于-version-如何进行乐观锁并发控制"}},[s._v("图解 Elasticsearch 内部基于 _version 如何进行乐观锁并发控制")])]),e("li",[e("a",{attrs:{href:"#实战-version-进行乐观锁并发控制"}},[s._v("实战 _version 进行乐观锁并发控制")])]),e("li",[e("a",{attrs:{href:"#实战-external-version-进行乐观锁并发控"}},[s._v("实战 external version 进行乐观锁并发控")]),e("ul",[e("li",[e("a",{attrs:{href:"#语法"}},[s._v("语法")])])])])])]),e("p"),s._v(" "),e("ul",[e("li",[s._v("18-深度图解剖析 Elasticsearch 并发冲突问题")]),s._v(" "),e("li",[s._v("19-深度图解剖析悲观锁与乐观锁两种并发控制方案")]),s._v(" "),e("li",[s._v("20-图解 Elasticsearch 内部基于 "),e("code",[s._v("_version")]),s._v(" 如何进行乐观锁并发控制")]),s._v(" "),e("li",[s._v("21-上机动手实战演练基于"),e("code",[s._v("_version")]),s._v("进行乐观锁并发控制")]),s._v(" "),e("li",[s._v("22-上机动手实战演练基于 external version 进行乐观锁并发控制")])]),s._v(" "),e("h2",{attrs:{id:"深度图解剖析-elasticsearch-并发冲突问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#深度图解剖析-elasticsearch-并发冲突问题"}},[s._v("#")]),s._v(" 深度图解剖析 Elasticsearch 并发冲突问题")]),s._v(" "),e("p",[s._v("并发修改这个在很多数据库中都存在问题，一个场景：")]),s._v(" "),e("p",[s._v("一个商品库存是 2 个，一共 3 个人购买，3个人同时下单，如果没有并发控制，那么久会超卖。")]),s._v(" "),e("p",[s._v("为什么会超卖，这个就太基础了，不记录笔记了；")]),s._v(" "),e("p",[e("img",{attrs:{src:a(1004),alt:""}})]),s._v(" "),e("h2",{attrs:{id:"深度图解剖析悲观锁与乐观锁两种并发控制方案"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#深度图解剖析悲观锁与乐观锁两种并发控制方案"}},[s._v("#")]),s._v(" 深度图解剖析悲观锁与乐观锁两种并发控制方案")]),s._v(" "),e("h3",{attrs:{id:"悲观锁"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#悲观锁"}},[s._v("#")]),s._v(" 悲观锁")]),s._v(" "),e("p",[s._v("悲观锁：通过锁定某一条数据（独占），进行解决并发控制")]),s._v(" "),e("p",[e("img",{attrs:{src:a(1005),alt:""}})]),s._v(" "),e("h3",{attrs:{id:"乐观锁"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#乐观锁"}},[s._v("#")]),s._v(" 乐观锁")]),s._v(" "),e("p",[s._v("乐观锁：不加锁，通过条件（版本号）来更新数据；")]),s._v(" "),e("p",[s._v("大致流程：")]),s._v(" "),e("ol",[e("li",[s._v("version = 1; 期望版本等于 1 的时候更新数据")]),s._v(" "),e("li",[s._v("如果此时数据库中的数据版本变为了 2，那么此时不更新")]),s._v(" "),e("li",[s._v("再次获取数据的版本号，再重复第 1、2步。")])]),s._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),e("p",[s._v("关于条件更新：是需要依赖数据库的按指定条件更新的功能，而不是自行在程序中处理")])]),s._v(" "),e("p",[e("img",{attrs:{src:a(1006),alt:""}})]),s._v(" "),e("h3",{attrs:{id:"优缺点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#优缺点"}},[s._v("#")]),s._v(" 优缺点")]),s._v(" "),e("p",[e("strong",[s._v("悲观锁")]),s._v("：")]),s._v(" "),e("p",[s._v("优点：")]),s._v(" "),e("ul",[e("li",[s._v("方便，直接加锁")]),s._v(" "),e("li",[s._v("对程序透明，不需要做额外操作")])]),s._v(" "),e("p",[s._v("缺点：并发能力很低，同一时间只能有一条线程操作数据")]),s._v(" "),e("p",[e("strong",[s._v("乐观锁")]),s._v("：")]),s._v(" "),e("p",[s._v("优点")]),s._v(" "),e("ul",[e("li",[s._v("并发能力很高，不给数据加锁")]),s._v(" "),e("li",[s._v("大量线程并发操作")])]),s._v(" "),e("p",[s._v("缺点：")]),s._v(" "),e("ul",[e("li",[s._v("麻烦，每次更新都要对比版本号")]),s._v(" "),e("li",[s._v("可能多次加载数据，再次修改")])]),s._v(" "),e("h2",{attrs:{id:"图解-elasticsearch-内部基于-version-如何进行乐观锁并发控制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#图解-elasticsearch-内部基于-version-如何进行乐观锁并发控制"}},[s._v("#")]),s._v(" 图解 Elasticsearch 内部基于 "),e("code",[s._v("_version")]),s._v(" 如何进行乐观锁并发控制")]),s._v(" "),e("p",[s._v("前面说的是概念，现在说说 es 内部对于并发修改是如何控制的；")]),s._v(" "),e("p",[e("code",[s._v("_version")]),s._v(" 的产生：在创建的时候值为 0 ，在修改和删除的时候回自动增加 1")]),s._v(" "),e("p",[s._v("es 内部是基于 "),e("code",[s._v("_version")]),s._v(" 版本号控制。")]),s._v(" "),e("p",[e("img",{attrs:{src:a(1007),alt:""}})]),s._v(" "),e("p",[s._v("对于上图流程总结：")]),s._v(" "),e("ol",[e("li",[s._v("假设 a 操作修改条件是 version = 1;")]),s._v(" "),e("li",[s._v("假设 b 操作修改条件也是 version = 1；")]),s._v(" "),e("li",[s._v("那一条数据被先执行则生效，后到的则被丢弃")])]),s._v(" "),e("p",[s._v("反正这一小节还是没有解决我心中的疑惑， es 到底是怎么实现并发版本的控制的，如果不加锁，怎么保证获取数据，再修改版本号的原子操作？")]),s._v(" "),e("p",[s._v("对于 "),e("a",{attrs:{href:"https://blog.csdn.net/mmoren/article/details/79185862",target:"_blank",rel:"noopener noreferrer"}},[s._v("cas"),e("OutboundLink")],1),s._v(" 在同一台机器中是硬件保证的，那么对于 es 这种分布式的呢？我没有明白")]),s._v(" "),e("h2",{attrs:{id:"实战-version-进行乐观锁并发控制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#实战-version-进行乐观锁并发控制"}},[s._v("#")]),s._v(" 实战 "),e("code",[s._v("_version")]),s._v(" 进行乐观锁并发控制")]),s._v(" "),e("p",[s._v("实战的步骤也很简单，利用 es api 进行操作；")]),s._v(" "),e("ol",[e("li",[e("p",[s._v("先添加一条数据,此时 version = 1")]),s._v(" "),e("div",{staticClass:"language-json line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[s._v("PUT /test_index/test_type/"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"test_field"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test test"')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("带上 version = 1 更新数据，客户端1 更新成功")]),s._v(" "),e("div",{staticClass:"language-json line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[s._v("PUT /test_index/test_type/"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v("?version="),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"test_field"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test client 1"')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("带上 version = 1 更新数据")]),s._v(" "),e("div",{staticClass:"language-json line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[s._v("PUT /test_index/test_type/"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v("?version="),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"test_field"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test client 2"')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("因为客户端1 已结更新成功，那么此时再用版本1 更新将会返回失败信息")]),s._v(" "),e("div",{staticClass:"language-json line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"error"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"root_cause"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"type"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"version_conflict_engine_exception"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"reason"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"[test_type][7]: version conflict, current version [2] is different than the one provided [1]"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"index_uuid"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"g4RJx2v8TXK95LdwlhRx5A"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"shard"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"index"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test_index"')]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"type"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"version_conflict_engine_exception"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"reason"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"[test_type][7]: version conflict, current version [2] is different than the one provided [1]"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"index_uuid"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"g4RJx2v8TXK95LdwlhRx5A"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"shard"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"index"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test_index"')]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"status"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("409")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br")])]),e("p",[s._v("那么想要这条数据更新成功怎么办呢？\n需要获取到这条数据的版本号，再带上新的版本号去更新即可")])])]),s._v(" "),e("p",[s._v("那么此次更新步骤就是 jdk 中的 cas，在并发频繁的时候，该步骤可能要尝试好多次才能更新进去")]),s._v(" "),e("h2",{attrs:{id:"实战-external-version-进行乐观锁并发控"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#实战-external-version-进行乐观锁并发控"}},[s._v("#")]),s._v(" 实战 external version 进行乐观锁并发控")]),s._v(" "),e("p",[e("strong",[s._v("external version 是什么？")])]),s._v(" "),e("ol",[e("li",[s._v("这个值不是 es 中的 "),e("code",[s._v("_version")]),s._v(",是你自己维护的（比如 mysql 中数据的版本）")]),s._v(" "),e("li",[s._v("但是提供的值是与 es 中的 "),e("code",[s._v("_version")]),s._v(" 比较的")]),s._v(" "),e("li",[s._v("提供的值必须比 "),e("code",[s._v("_vesion")]),s._v(" 的值大，才能更新成功")])]),s._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),e("p",[s._v("内部版本号并发控制策略是提供的版本号必须一致才能更新成功")])]),s._v(" "),e("h3",{attrs:{id:"语法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[s._v("#")]),s._v(" 语法")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("?version\n?version=1&version_type=externalon=1\n\n只是多了一个 type ，其他的都是一致的，除了上面说的值比较有区别外\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])])])}),[],!1,null,null,null);t.default=n.exports}}]);
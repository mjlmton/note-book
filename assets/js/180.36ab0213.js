(window.webpackJsonp=window.webpackJsonp||[]).push([[180],{1537:function(s,a,n){s.exports=n.p+"assets/img/markdown-img-paste-20190721204338990.735235da.png"},2149:function(s,a,n){"use strict";n.r(a);var e=n(13),t=Object(e.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"_139-商品详情页动态渲染系统-部署双机房一主三从架构的-redis-主集群"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_139-商品详情页动态渲染系统-部署双机房一主三从架构的-redis-主集群"}},[s._v("#")]),s._v(" 139. 商品详情页动态渲染系统：部署双机房一主三从架构的 redis 主集群")]),s._v(" "),e("h2",{attrs:{id:"部署架构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#部署架构"}},[s._v("#")]),s._v(" 部署架构")]),s._v(" "),e("p",[e("img",{attrs:{src:n(1537),alt:""}})]),s._v(" "),e("p",[s._v("使用一个 redis 客户端，多份配置文件的方式启动 8 台 redis 实例")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("  192.168.99.11 （机房1）              192.168.99.12  （机房2）\n\nmaster：6401   master：6402          slave: 6401    slave: 6402   \nslave: 6403    slave：6404           slave: 6403    slave：6404\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("主从示意如下，一个 master 有一个从，从下面又挂一个从，组成了一个树形结构")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("192.168.99.11 master：6401\n192.168.99.11 slave: 6403 ↑\n192.168.99.12 slave: 6401 ↑\n192.168.99.12 slave: 6403 ↑\n\n192.168.99.11 master：6402\n192.168.99.11 slave: 6404 ↑\n192.168.99.12 slave: 6402 ↑\n192.168.99.12 slave: 6404 ↑\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br")])]),e("p",[s._v("看最上面的示意图。当机房 1 挂掉之后，由于机房 2 的 6401 是机房 1 的 6403 的从，\n所以机房 2 的 6401 会升级为 master，这样一来，在机房 2 上还是存在一主一从的高可用 redis")]),s._v(" "),e("h2",{attrs:{id:"开始搭建"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#开始搭建"}},[s._v("#")]),s._v(" 开始搭建")]),s._v(" "),e("p",[s._v("首先要把之前部署的 redis-test 给 kill 掉。在 /usr/local/redis 中安装一个 reds")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@eshop-detail01 local"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ps -ef | grep redis")]),s._v("\nroot     "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("12126")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("21476")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" 06:29 pts/4    00:00:00 "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" redis\nroot     "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("31096")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("21476")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" 02:43 pts/4    00:00:20 /usr/local/redis-test/redis-2.8.19/src/redis-server *:6379                                       \n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@eshop-detail01 local"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kill -9 31096")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /usr/local/redis\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -zxvf redis-2.8.19.tar.gz\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" redis-2.8.19\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 复制 4 份配置文件，并修改配置文件中的 prot 值为文件名对应的端口号")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /usr/local/redis/redis-2.8.19\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" redis.conf redis-6401.conf\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" redis.conf redis-6402.conf\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" redis.conf redis-6403.conf\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" redis.conf redis-6404.conf\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 以此启动 redis")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /usr/local/redis/redis-2.8.19\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("nohup")]),s._v(" src/redis-server  redis-6401.conf "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("nohup")]),s._v(" src/redis-server  redis-6402.conf "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("nohup")]),s._v(" src/redis-server  redis-6403.conf "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("nohup")]),s._v(" src/redis-server  redis-6404.conf "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看 redis 进程")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@eshop-detail01 redis-2.8.19"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ps -ef | grep redis")]),s._v("\nroot     "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("14987")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("21476")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" 06:38 pts/4    00:00:00 src/redis-server *:6401         \nroot     "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("14992")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("21476")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" 06:39 pts/4    00:00:00 src/redis-server *:6402         \nroot     "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("14999")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("21476")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" 06:40 pts/4    00:00:00 src/redis-server *:6403         \nroot     "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("15002")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("21476")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" 06:40 pts/4    00:00:00 src/redis-server *:6404         \nroot     "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("15006")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("21476")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" 06:40 pts/4    00:00:00 "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" redis\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br")])]),e("p",[s._v("配置树形主从，下面是其中一台从节点的配置方式，按照上面讲解的树形结构配置自己的主节点")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /usr/local/redis/redis-2.8.19\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@eshop-detail01 redis-2.8.19"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# src/redis-cli -p 6403")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:640"),e("span",{pre:!0,attrs:{class:"token operator"}},[e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("3")]),s._v(">")]),s._v(" slaveof "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".99.11 "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("6401")]),s._v("\nOK\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:640"),e("span",{pre:!0,attrs:{class:"token operator"}},[e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("3")]),s._v(">")]),s._v(" info replication\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Replication")]),s._v("\nrole:slave\nmaster_host:192.168.99.11\nmaster_port:6401\nmaster_link_status:up\nmaster_last_io_seconds_ago:1\nmaster_sync_in_progress:0\nslave_repl_offset:29\nslave_priority:100\nslave_read_only:1\nconnected_slaves:0\nmaster_repl_offset:0\nrepl_backlog_active:0\nrepl_backlog_size:1048576\nrepl_backlog_first_byte_offset:0\nrepl_backlog_histlen:0\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br")])]),e("p",[s._v("另外一台也如法炮制启动 4 个 redis 实例，另外一台机器上的 6401 信息")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@eshop-detail02 redis-2.8.19"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# src/redis-cli -p 6401")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:640"),e("span",{pre:!0,attrs:{class:"token operator"}},[e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("1")]),s._v(">")]),s._v(" info replication\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Replication")]),s._v("\nrole:slave\nmaster_host:192.168.99.11  "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 机房 1 的 6403 是 master")]),s._v("\nmaster_port:6403\nmaster_link_status:up\nmaster_last_io_seconds_ago:1\nmaster_sync_in_progress:0\nslave_repl_offset:85\nslave_priority:100\nslave_read_only:1\nconnected_slaves:1  "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 自己下面又有一个从 节点 6403")]),s._v("\nslave0:ip"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".99.12,port"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("6403")]),s._v(",state"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("online,offset"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(",lag"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\nmaster_repl_offset:15\nrepl_backlog_active:1\nrepl_backlog_size:1048576\nrepl_backlog_first_byte_offset:2\nrepl_backlog_histlen:14\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br")])]),e("h2",{attrs:{id:"验证主从是否生效"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#验证主从是否生效"}},[s._v("#")]),s._v(" 验证主从是否生效")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在 192.168.99.11 上操作")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /usr/local/redis/redis-2.8.19\nsrc/redis-cli -p "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("6401")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" k1 v1 "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 去第二台机器上查看是否能获取到值")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" k1 v2  "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改 k1 为 v2 ，再去验证")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在 192.168.99.12 上操作")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /usr/local/redis/redis-2.8.19\nsrc/redis-cli -p "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("6401")]),s._v("\nget k1    "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 观察是否能获取到值")]),s._v("\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])])])}),[],!1,null,null,null);a.default=t.exports}}]);
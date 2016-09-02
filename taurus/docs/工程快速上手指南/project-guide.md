# R3前端工程快速上手指南

## 工程环境搭建

1. 安装 NodeJS；

2. 安装vue-cli；

  ```bash
  npm install -g vue-cli
  ```

3. 分别在工程的biz和taurus子目录中执行以下命令安装依赖包：

  ```bash
  npm install
  ```

4. 构建（编译）工程

  开发模式构建

  ```bash
  npm run dev
  ```

  默认情况下，执行以上命令成功后，在8080端口将启动一个web server（你可以浏览到工程自带的页面，如：`http://localhost:8080/sample/page-demo/index.html`），此时，工程源码是支持热加载的（即你修改了源码后浏览器将立即自动刷新结果）！

  > 如果你需要修改默认端口号，请修改`biz/config`子目录下的`index.js`文件内的端口定义。

  产品模式构建

  ```bash
  npm run build
  ```

## 工程目录说明

现有工程目录结构如下：

```text
./
├── biz  <业务模块工程>
│   ├── README.md  <工程描述文件>
│   ├── build  <工程构建脚本目录>
│   ├── config  <工程构建配置目录>
│   ├── dist  <工程发布目录，里面放置工程编译后的内容>
│   ├── package.json  <npm包配置文件>
│   └── src  <源码目录>
│       ├── agent-view  <agent-view业务模块源码目录>
│       ├── assets  <静态资源目录>
│       │   └── img  <图片目录>
│       ├── eshop  <eshop业务模块源码目录>
│       └── sample  <演示页面目录>
│           ├── box-group-demo  <BoxGroup组件演示页面源码>
│           └── service-demo  <Aries兼容报文服务调用插件演示页面源码>
├── styleguide  <样式手册文档工程>
└── taurus  <框架工程>
    ├── build  <预留，工程构建脚本目录>
    ├── config  <预留，工程构建配置目录>
    ├── docs  <文档目录>
    ├── package.json  <npm包配置文件>
    └── src  <源码目录>
        ├── assets  <静态资源目录>
        │   ├── css  <样式文件目录>
        │   ├── fonts  <字体文件目录>
        │   └── img  <图片文件目录>
        ├── components  <组件目录，所有基于vue的公共组件放置在这个目录内>
        │   ├── box-group <box-group组件源码目录>
        │   ├── breadcrumbs  <breadcrumbs组件源码目录>
        │   └── tab-panel  <tab-panel组件源码目录>
        ├── config  <应用配置目录>
        │   └── app-config.json  <应用配置文件>
        ├── i18n  <国际化目录>
        ├── plugins  <插件目录，所有基于vue的公共插件放置在这个目录内>
        │   └── service.js  <Aries兼容报文服务调用插件源码文件>
        └── utils  <辅助杂项工具目录>
            └── cookie-helper.js  <Cookie操作模块源码文件>
```

  > 目前，taurus/build 和 taurus/config 两个目录是预留目录，请不要在 taurus目录下进行编译操作！

## 开发流程

### 页面开发

1. 在命令行控制台进入`biz`目录，输入以下命令启动开发环境：

  ```bash
  npm run dev
  ```

2. 在`biz/src/`对应业务模块目录内创建一个子目录，如：`biz/src/eshop/abc`；

3. 在biz/src/eshop/abc内创建index.js和index.html两个文件，打开浏览器访问此页面对应的地址（端口号可以在biz/config子目录下的index.js文件内修改）`http://localhost:8080/eshop/abc/index.html`，编写代码；

  > 注意：index.js和index.html两个文件是此页面入口，webpack编译的时候依赖了这两个名称，所以不能将这两个文件改名！

  代码编写过程中，只要代码变更，浏览器对应url里的内容将自动刷新。

4. 页面开发完成后，按ctrl+c退出vue-cli的开发环境，然后输入下面的命令进行发布：

  ```bash
  npm run build
  ```

  构建完成后，发布内容将全部生成在biz/dist目录内

### 公共模块开发

公共组件、插件、指令等实现代码放在`taurus/src`目录里对应的目录下，写完后需要在`biz/src/sample`目录下写对应的Demo页面。

## 开发规范 （初稿）

### 代码书写风格

所有javascript脚本书写风格按照ESLint静态检查规则实现（不同的编辑器需要安装不同的ESLint插件，参见附录）。

### 文件和目录

所有文件名使用全小写命名，单词之间使用-号分割，如：

```text
box-group.vue
service.js
main.css
```

开发一个新页面时，你需要在`biz/src`目录对应业务模块的目录里创建一个子目录，然后把该页面的源码放到此子目录中。例如：新写一个eshop业务模块的页面family时，你需要将这个页面的源码放到`biz/src/eshop/family`目录内。

### Vue组件

所有Vue组件注册的自定义标记都需要带上t-前缀。如：

```js
import BoxGroup from 'taurus/components/box-group/box-group';
Vue.component('t-box-group', BoxGroup);
```

```js
import TBoxGroup from 'taurus/components/box-group/box-group';
new Vue({
  el: 'body',
  components: {
    TBoxGroup
  }
});
```

```js
import BoxGroup from 'taurus/components/box-group/box-group';
new Vue({
  el: 'body',
  components: {
    't-box-group': BoxGroup
  }
});
```

所有taurus/src目录里的Vue组件、插件、指令等对象都需要写一个对应的Demo页面，此页面能够对组件插件、指令等对象的所有功能进行演示，方便开发人员快速了解公共组件特性。Demo页面源码暂时放在biz/src/sample目录内。

## 附录

### 推荐编辑器及其插件

1. WebStorm

  安装以下插件：

    * ESLint

    * Vue.js

2. Atom

  安装以下插件：

    * linter-eslint

    * language-vue

3. VSCode

  安装以下插件：

    * ESLint (vue文件貌似失效)

    * Babel ES6/ES7

    * vue

4. Sublime Text

  安装以下插件：

    * ESLint

    * Vue Syntax Highlight

### 相关学习网站

[NodeJS官网][nodejs]

[webpack官网][webpack]

[vue中文官网][vue]

[vue官方脚手架工具][vue-cli]

[vue 1.x github仓库][vue-github]

[vuex github仓库][vuex-github]

[vue-router github仓库][vue-router-github]

[vue-resource github仓库][vue-resource-github]

[vuex 官方中文文档][vuex]

[vue-router 官方中文文档][vue-router]

[vue 资源列表][awesome-vue]

[nodejs]: https://nodejs.org/en/
[webpack]: http://webpack.github.io/
[vue]: http://vuejs.org.cn/
[vue-cli]: https://github.com/vuejs/vue-cli
[vue-github]: https://github.com/vuejs/vue/
[vuex-github]: https://github.com/vuejs/vuex
[vue-router-github]: https://github.com/vuejs/vue-router
[vue-resource-github]: https://github.com/vuejs/vue-resource
[vuex]: http://vuex.vuejs.org/zh-cn/index.html
[vue-router]: http://router.vuejs.org/zh-cn/index.html
[awesome-vue]: https://github.com/vuejs/awesome-vue

# ose-pilot

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Build Requirements

* `Core Assets` 在 build 之后独立于 biz (单独文件夹, 但能被 biz 正确引用), 故不能使用 webpack 模块依赖机制处理 `Core Assets`。

* `Biz` 打包后, img 与 `Core Assets` 下的 img 合并, html/js/css 放在各自的夹子下。

## Development

* `url-loader -> file-loader`, biz 自己的静态资源(fonts、img)也可能需要被 CMS 管理, 所以不能使用 Data URL。

* `Core Assets` 中的 css/fonts 和 js 通过标签、预先写入 index.html 模板。

* `Core Assets` 中的 img 通过 '/assets/img/xxx.png' 这种 static file 形式进行`依赖`。

* `Biz` 中的 img 通过 '../assets/img/yyy.png' 这种 相对路径 进行依赖。


## Scholar Communication System Front

### Enviroment Requirement
- node 版本：v16.20.1（版本差距不宜过大）
- npm 版本：8.19.4

node与npm存在一定的版本对应关系，如果需要多版本node快速切换，建议安装nvm(node version manager)

### 关于项目结构

本次开发使用tailwindcss，由于其可能与element-plus等组件库的样式冲突，我们将不再使用leement-plus组件库，推荐使用[daisyUI](https://daisyui.com/docs/install/)组件库

> 事实上还有很多基于tailwindcss的组件库，大家可以借鉴其中的样式，如[ Meraki UI](https://merakiui.com/components)，[ TailwindTemplates](https://tailwindtemplates.io/templates)

为了方便接口的修改与测试，本次开发将所有接口放到src下的API模块之中，一方面集中管理有利于接口的批量修改，另一方面你也可以在这里对返回的数据进行一定的处理，借助TypeScript的类型功能，我们还可以对接口调用进行规范，这种规范会在接口变更时发挥极大的作用（至少你可以快速找到调用接口的地方）

> 接口的导入以及二次封装可参考HelloWorld.vue,事实上Promise化的接口与直接调用axios并无太大的区别。

路由并没有什么大的不同，不再赘述

不得不说的应该是store，pinia确实极大地简化了vuex，你可以在index.ts中创建多个store，或者在store目录下创建新的ts文件（记得导出哦），更多使用细节请参考[官方文档](https://pinia.vuejs.org/zh/getting-started.html)。关于pinia中的持久化，借助了`pinia-plugin-persistedstate`，想要对持久化进行更精细的控制，请自行百度。


### 快速开始

*下载所需依赖*

`npm install`

*开始开发*

`npm run dev`

### 一些推荐
[xy-ui](https://xy-ui.codelabo.cn/components/)是基于浏览器原生的组件库

[Gradient Magic](https://www.gradientmagic.com/)基于css的渐变背景

[TypeScript 中文手册](https://www.tsdev.cn/module-resolution.html)如果想了解更多关于ts的内容
## 基于@vue/cli ant-design-vue快速搭建前端项目 #


```bash

src/components:公共组件,抽离的公用组件可以放在这里**

src/utils:工具函数 抽离的公用函数可以放在这里,其中https是对axios的封装,里面的具体的逻辑需要根据业务逻辑**

src/directive:指令 抽离的公用指令可以放在这里**

```


```bash
# Clone this repository
git clone http://192.168.10.17/web/vue-template.git
# Go into the repository
cd vue-template
# Install dependencies
yarn install
# Run the app
yarn serve
# Compiles and minifies for production
yarn build
# Lints and fixes files
yarn lint
```

## commit message格式
```
<type>(<scope>): <subject>
<commit类型>(影响范围): 具体描述
举例 fix(DAO): fixed invalid user table indexes.
```


## Resources for Learning no

See [Configuration Reference](https://cli.vuejs.org/config/).
- [vue](https://cn.vuejs.org/v2/guide/) 
- [vue/cli中文网](https://cli.vuejs.org/zh/guide/) 
- [axios](http://www.axios-js.com/docs) - Promise based HTTP client for the browser and node.js
- [ant-design-vue](https://1x.antdv.com/docs/vue/getting-started-cn/) 


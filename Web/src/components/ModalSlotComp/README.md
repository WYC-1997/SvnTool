## 组件说明 ##
*封装antd-design-vue modal组件*
***
## 组件依赖 ##
```bash
npm install antd-design-vue --save or yarn add antd-design-vue

```
***

## 组件属性 ##
| 属性名称 | 类型 | 默认值 | 描述 |
| :------------------------| :------------| :------------------------|:------------------------|
| title | String | Title | 标题 |
| visible | Boolean | false |对话框是否可见|
| width | Number | 520 | 宽度|
| bodyStyle | Object | null | Modal body 样式|
| name | String | null | 容器类名|
| confirmLoading | Boolean | false  | 	确定按钮 loading|
***



## 组件事件 ##
```javascript

/**
* 点击确定回调
* @param {*} 
* @returns 
*/
handleOk(){}
/**
* 点击遮罩层或右上角叉或取消按钮的回调
* @param {*} 
* @returns 
*/
handleCancel(){}

```
***



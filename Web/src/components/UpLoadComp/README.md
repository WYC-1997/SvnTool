## 组件说明 ##
*封装antd-design-vue Upload组件*
***
## 组件依赖 ##
```bash
npm install antd-design-vue --save or yarn add antd-design-vue

```
***

## 组件属性 ##
| 属性名称 | 类型 | 默认值 | 描述 |
| :------------------------| :------------| :------------------------|:------------------------|
| sign | String | null | 上传后的地址 |
| previewVisible | Boolean | false |览图片对话框是否可见|
| previewImage | Srting | null | 预览图片地址|
***



## 组件事件 ##
```javascript

/**
* 获取file的base64内容
* @param {*} 
* @returns  Promise
*/
getBase64(){}

/**
* 上传文件之前的钩子，参数为上传的文件，若返回 false 则停止上传。支持返回一个 Promise 对象，Promise 对象 reject 时则停止上传，resolve 时开始上传（ resolve 传入 File 或 Blob 对象则上传 resolve 传入对象）。注意：IE9 不支持该方法。
* @param {*} 
* @returns  
*/
beforeUpload(){}

/**
* 自定义上传
* @param {*} 
* @returns 
*/
onCustomRequest(){}

/**
* 预览上传的图片
* @param {*} 
* @returns 
*/
handlePreview(){}


/**
* 获取上传列表
* @param {*} 
* @returns 
*/
getFileList(){}


/**
* 点击遮罩层或右上角叉或取消按钮的回调
* @param {*} 
* @returns 
*/
remove(){}

```
***



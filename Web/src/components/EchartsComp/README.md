## 组件说明 ##
*封装Echarts图表组件*
***
## 组件依赖 ##
```bash
npm install echarts --save or yarn add echarts
```
***
## 组件事件 ##
```javascript

/**
* 基于准备好的dom，初始化echarts实例
* @param {*} opt echarts配置项
* @returns 
*/
drawChart(opt){}
/**
* 动态设置数值可以用作动态渲染图表
* @param {*} val 动态数值
* @returns 
*/
setData(val){}
/**
* 设置y轴最大值
* @param {*} opt y轴最大值 
* @returns 
*/
drawChart(val){}
/**
* 窗口resize
* @param {*} 
* @returns 
*/
echartsResize() {},

```
***



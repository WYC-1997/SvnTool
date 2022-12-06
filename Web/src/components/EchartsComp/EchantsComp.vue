<template>
  <div class="echart--box" :id="echarts"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "Echartslot",
  data() {
    return {
      myChart: null,
    };
  },
  computed: {
    echarts() {
      return "echarts" + Math.ceil(Math.random() * 1000000) ;
    },
  },

  mounted() {
    //监听页面resize事件
    window.addEventListener("resize", this.echartsResize);
  },

  methods: {
    drawChart(opt) {
      // 基于准备好的dom，初始化echarts实例
      this.myChart = echarts.init(document.getElementById(this.echarts));
      // 绘制图表
      this.myChart.setOption(opt, {
        notMerge: true,
        lazyUpdate: true,
      });
    },
    /**
     * 动态设置数值
     */
    setData(val) {
      this.myChart.setOption({
        series: [
          {
            type: "bar",
            data: [val],
          },
        ],
      });
    },
    //设置y轴最大值
    setMaxY(val) {
      this.myChart.setOption({
        yAxis: {
          max: val,
        },
      });
    },
    //窗口resize
    echartsResize() {
      this.myChart.resize();
    },
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.echartsResize);
  },
};
</script>

<style  scoped>
.echart--box {
  width: 100%;
  height: 100%;
}
</style>
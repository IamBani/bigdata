<template>
  <div>
    <headtitle><div class="flex-1" ref="area"></div></headtitle>
  </div>
</template>

<script>
import headtitle from "@/components/public/headtitle";
import echarts from "@/lib/echarts";
export default {
  data() {
    return {};
  },
  components: {
    headtitle
  },
  mounted() {
    var myChart = echarts.init(this.$refs.area);
    let option = {
      backgroundColor: "rgba(1, 202, 217, 0.2)",
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow"
        }
      },
      grid: {
        top: 0,
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true
      },
      xAxis: {
        type: "value",
        boundaryGap: [0, 0.01],
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,0)"
          }
        },
        splitLine: {
          show: false
        },
        axisLine: {
          lineStyle: {
            color: "#fff"
          }
        }
      },
      yAxis: {
        type: "category",
        data: ["巴西", "印尼", "美国"],
        axisLabel: {
          textStyle: {
            color: "#ffffff"
          }
        },
        axisLine: {
          lineStyle: {
            color: "#fff"
          }
        }
      },
      series: [
        {
          name: "2011年",
          type: "bar",
          data: [18203, 23489, 29034],
          barWidth: 30,
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
              { offset: 0, color: "rgba(230,253,139,.7)" },
              { offset: 1, color: "rgba(41,220,205,.7)" }
            ])
          }
        }
      ]
    };
    myChart.setOption(option);
  }
};
</script>

<style lang="scss" scoped></style>

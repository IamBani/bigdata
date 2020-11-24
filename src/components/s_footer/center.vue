<template>
  <div class="foot-center">
    <headtitle :hidder="false" title="矛盾纠纷环比分析"
      ><div class="flex-1" ref="area"></div
    ></headtitle>
    <headtitle :hidder="false" title="案件统计"
      ><div class="flex-1" ref="area1"></div
    ></headtitle>
  </div>
</template>

<script>
import headtitle from "@/components/public/headtitle";
import echarts from "@/lib/echarts";
export default {
  data() {
    return {};
  },
  methods: {
    leftScatter() {
      var data = [
        [
          [28604, 77, 17096869, "Australia", 1990],
          [31163, 77.4, 27662440, "Canada", 1990],
          [1516, 68, 1154605773, "China", 1990],
          [13670, 74.7, 10582082, "Cuba", 1990],
          [28599, 75, 4986705, "Finland", 1990],
          [31476, 75.4, 78958237, "Germany", 1990],
          [28666, 78.1, 254830, "Iceland", 1990],
          [10670, 67.3, 53994605, "Turkey", 1990],
          [26424, 75.7, 57110117, "United Kingdom", 1990]
        ],
        [
          [44056, 81.8, 23968973, "Australia", 2015],
          [43294, 81.7, 35939927, "Canada", 2015],
          [13334, 76.9, 1376048943, "China", 2015],
          [21291, 78.5, 11389562, "Cuba", 2015],
          [24787, 77.3, 38611794, "Poland", 2015],
          [23038, 73.13, 143456918, "Russia", 2015],
          [19360, 76.5, 78665830, "Turkey", 2015],
          [38225, 81.4, 64715810, "United Kingdom", 2015],
          [53354, 79.1, 321773631, "United States", 2015]
        ]
      ];
      var myChart = echarts.init(this.$refs.area);
      let option = {
        backgroundColor: "rgba(1, 202, 217, 0.2)",
        // backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [
        //   {
        //     offset: 0,
        //     color: "#f7f8fa"
        //   },
        //   {
        //     offset: 1,
        //     color: "#cdd0d5"
        //   }
        // ]),
        title: {
          text: "环比类型:日环比",
          textStyle: {
            color: "#fff",
            fontSize: 14
          }
        },
        grid: {
          top: "15%",
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        legend: {
          textStyle: {
            color: "#fff"
          },
          right: "2%",
          data: ["1990", "2015"]
        },
        xAxis: {
          splitLine: {
            lineStyle: {
              type: "solid"
            }
          },
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
        yAxis: {
          splitLine: {
            lineStyle: {
              type: "solid"
            }
          },
          axisLabel: {
            textStyle: {
              color: "rgb(255,255,255)"
            }
          },
          axisLine: {
            lineStyle: {
              color: "rgba(255,255,255,.1)"
            }
          },
          scale: true
        },
        series: [
          {
            name: "1990",
            data: data[0],
            type: "scatter",
            symbolSize: function(data) {
              return Math.sqrt(data[2]) / 5e2;
            },
            emphasis: {
              label: {
                show: true,
                color: "#fff",
                formatter: function(param) {
                  return param.data[3];
                },
                position: "top"
              }
            },
            itemStyle: {
              shadowBlur: 10,
              shadowColor: "rgba(120, 36, 50, 0.5)",
              shadowOffsetY: 5,
              color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
                {
                  offset: 0,
                  color: "rgb(251, 118, 123)"
                },
                {
                  offset: 1,
                  color: "rgb(204, 46, 72)"
                }
              ])
            }
          },
          {
            name: "2015",
            data: data[1],
            type: "scatter",
            symbolSize: function(data) {
              return Math.sqrt(data[2]) / 5e2;
            },
            emphasis: {
              label: {
                show: true,
                color: "#fff",
                formatter: function(param) {
                  return param.data[3];
                },
                position: "top"
              }
            },
            itemStyle: {
              shadowBlur: 10,
              shadowColor: "rgba(25, 100, 150, 0.5)",
              shadowOffsetY: 5,
              color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
                {
                  offset: 0,
                  color: "rgb(129, 227, 238)"
                },
                {
                  offset: 1,
                  color: "rgb(25, 183, 207)"
                }
              ])
            }
          }
        ]
      };
      myChart.setOption(option);
    },
    rightBar() {
      var myChart = echarts.init(this.$refs.area1);
      let option = {
        backgroundColor: "rgba(1, 202, 217, 0.2)",
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            crossStyle: {
              color: "#999"
            }
          }
        },
        grid: {
          top: "15%",
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        toolbox: {
          feature: {
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ["line", "bar"] },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        legend: {
          data: ["2017", "2018", "同比增长"],
          textStyle: {
            color: "#fff"
          }
        },
        xAxis: [
          {
            type: "category",
            data: [
              "1月",
              "2月",
              "3月",
              "4月",
              "5月",
              "6月",
              "7月",
              "8月",
              "9月",
              "10月",
              "11月",
              "12月"
            ],
            axisLine: {
              lineStyle: {
                color: "rgba(255,255,255,1)"
              }
            },
            axisPointer: {
              type: "shadow"
            }
          }
        ],
        yAxis: [
          {
            type: "value",
            // name: "水量",
            min: 0,
            max: 250,
            interval: 50,
            axisLabel: {
              formatter: "{value} ml",
              textStyle: {
                color: "rgb(255,255,255)"
              }
            },
            axisLine: {
              lineStyle: {
                color: "rgba(255,255,255,1)"
              }
            }
          },
          {
            type: "value",
            // name: "温度",
            min: 0,
            max: 25,
            axisLine: {
              // lineStyle: {
              //   color: "rgba(255,255,255,1)"
              // }
            },
            interval: 5,
            axisLabel: {
              textStyle: {
                color: "rgb(255,255,255)"
              },
              formatter: "{value} °C"
            }
          }
        ],
        series: [
          {
            name: "2017",
            type: "bar",
            data: [
              2.0,
              4.9,
              7.0,
              23.2,
              25.6,
              76.7,
              135.6,
              162.2,
              32.6,
              20.0,
              6.4,
              3.3
            ]
          },
          {
            name: "2018",
            type: "bar",
            data: [
              2.6,
              5.9,
              9.0,
              26.4,
              28.7,
              70.7,
              175.6,
              182.2,
              48.7,
              18.8,
              6.0,
              2.3
            ]
          },
          {
            name: "同比增长",
            type: "line",
            yAxisIndex: 1,
            data: [
              2.0,
              2.2,
              3.3,
              4.5,
              6.3,
              10.2,
              20.3,
              23.4,
              23.0,
              16.5,
              12.0,
              6.2
            ]
          }
        ]
      };
      myChart.setOption(option);
    }
  },
  mounted() {
    this.leftScatter();
    this.rightBar();
  },
  components: {
    headtitle
  }
};
</script>

<style lang="scss" scoped>
.foot-center {
  @include flex-row;
}
</style>

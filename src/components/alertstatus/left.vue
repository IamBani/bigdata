<template>
  <div class="leftbox">
    <div class="bj bjtop">
      <h2>今日矛盾纠纷数据统计</h2>
      <div class="districttime s-p-t-5 s-p-b-5">
        <span>地区:<span>甘孜</span></span>
        <span>2020-11-11</span>
      </div>
      <div class="flex-1 lefttoday_number">
        <div v-for="(item, index) in list" :key="index" class="flex-1 fl">
          <h2>{{ item.title }}</h2>
          <div :class="item.compare ? 'upvolume' : 'downvolume'" class="size">
            {{ item.num }}
          </div>
          <div>
            <span class="text-muted">
              环比
              <img :src="item.compare ? down : up" alt="下降" />
              {{ item.percentage }}
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="bj bjboot">
      <div class="text-center">矛盾纠纷地区统计</div>
      <div class="lefttoday_tit height ht">
        <p class="fl">状态：已调节</p>
        <p class="fr">时间段：2018-06-10 至 2018-06-14</p>
      </div>
      <div class="flex-1" ref="area"></div>
    </div>
  </div>
</template>

<script>
import up from "@/assets/image/iconup.png";
import down from "@/assets/image/icondown.png";
import echarts from "@/lib/echarts";
export default {
  data() {
    return {
      up: up,
      down: down,
      list: [
        {
          title: "矛盾纠纷",
          num: 43,
          compare: false,
          percentage: "2%"
        },
        {
          title: "已调解",
          num: 54,
          compare: true,
          percentage: "3%"
        },
        {
          title: "未调节",
          num: 4,
          compare: true,
          percentage: "3%"
        },
        {
          title: "处理中",
          num: 4,
          compare: true,
          percentage: "2%"
        }
      ]
    };
  },
  mounted() {
    var myChart = echarts.init(this.$refs.area);
    console.log(myChart);
    let option = {
      backgroundColor: "rgba(1, 202, 217, 0.2)",

      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      toolbox: {
        show: true,
        feature: {
          mark: { show: true },
          dataView: { show: true, readOnly: false },
          magicType: {
            show: true,
            type: ["pie", "funnel"]
          },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
      series: [
        {
          name: "矛盾地区",
          type: "pie",
          radius: [10, 70],
          // center: ["75%", "50%"],
          roseType: "area",
          data: [
            { value: 10, name: "理塘县" },
            {
              value: 5,
              name: "康定市",
              itemStyle: {
                color: "rgb(128, 128, 128)"
              }
            },
            {
              value: 15,
              name: "甘孜县",
              itemStyle: {
                color: "#67C23A"
              }
            },
            { value: 25, name: "丹巴县" },
            { value: 20, name: "巴东县" }
          ]
        }
      ]
    };
    myChart.setOption(option);
  }
};
</script>

<style lang="scss" scoped>
.leftbox {
  @include flex-row(column);
  justify-content: space-between;
  .bj {
    background-image: url("../../assets/image/leftb1.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    height: 264px;
    width: 342px;
    @include flex-row(column);
    padding: 10px 14px;
    color: $white;
  }
  .bjtop {
    // @include flex-row(column);
    // padding: 10px 14px;
    // color: $white;
    > h2 {
      text-align: center;
      font-size: $font-size-sm;
    }
    .districttime {
      @include flex-row;
      justify-content: space-between;
    }
    .lefttoday_number {
      @include flex-center();
      .fl {
        background: rgba(1, 202, 217, 0.2);
        height: 100%;
        margin: 0 1px;
        @include flex-center(column);
        > h2 {
          font-size: $font-size-sm;
        }
        .upvolume {
          color: $skyblue;
        }
        .downvolume {
          color: $pink;
        }
        .size {
          font-size: $font-size-title-lg;
        }
        .text-muted {
          > img {
            height: $font-size-medium;
          }
        }
      }
    }
  }
  .bjboot {
    .lefttoday_tit {
      .fr {
        color: rgba(255, 255, 255, 0.6);
      }
    }
  }
}
</style>

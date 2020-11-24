<template>
  <div class="bj">
    <div class="text-center">警力分析</div>
    <div class="lefttoday_tit">
      <span>状态:<span>已调节</span></span>
      <span>2020-11-11</span>
    </div>
    <vueInfiniteAutoScroll :data="list" class="flex-1 scrool">
      <template slot-scope="props">
        <div class="box_content">
          <div class="left2_table">
            <p>{{ props.item.title }}</p>
            <p>{{ props.item.tiem }}</p>
          </div>
          <div class="left2_table_content">
            {{ props.item.content }}
          </div>
        </div>
      </template>
    </vueInfiniteAutoScroll>
  </div>
</template>

<script>
import vueInfiniteAutoScroll from "vue-infinite-auto-scroll";
export default {
  data() {
    return {
      list: [
        {
          title: "康定市公安局",
          tiem: "2020-11-11",
          content: "村名王某因为被隔壁邻居的狗咬了，产生了纠纷，村名报警"
        },
        {
          title: "康定市公安局",
          tiem: "2020-11-11",
          content: "村名王某因为被隔壁邻居的狗咬了，产生了纠纷，村名报警"
        },
        {
          title: "康定市公安局",
          tiem: "2020-11-11",
          content: "村名王某因为被隔壁邻居的狗咬了，产生了纠纷，村名报警"
        },
        {
          title: "康定市公安局",
          tiem: "2020-11-11",
          content: "村名王某因为被隔壁邻居的狗咬了，产生了纠纷，村名报警"
        },
        {
          title: "康定市公安局",
          tiem: "2020-11-11",
          content: "村名王某因为被隔壁邻居的狗咬了，产生了纠纷，村名报警"
        },
        {
          title: "康定市公安局",
          tiem: "2020-11-11",
          content: "村名王某因为被隔壁邻居的狗咬了，产生了纠纷，村名报警"
        }
      ]
    };
  },
  components: {
    // eslint-disable-next-line vue/no-unused-components
    vueInfiniteAutoScroll
  }
};
</script>

<style lang="scss" scoped>
.bj {
  background-image: url("../../assets/image/arightboxtop.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  width: 341px;
  height: 530px;
  @include flex-row(column);
  padding: 10px 14px;
  color: $white;
  .lefttoday_tit {
    @include flex-row();
    padding: 5px 0;
    justify-content: space-between;
  }
  .scrool {
    ::v-deep li {
      &:nth-child(n) {
        background-color: rgba(1, 202, 217, 0.2);
      }
      &:nth-child(2n) {
        background-color: rgba(0, 255, 255, 0.4);
      }
    }
    .box_content {
      padding: 10px;

      .left2_table {
        @include flex-row();
        justify-content: space-between;
      }
    }
  }
}
</style>

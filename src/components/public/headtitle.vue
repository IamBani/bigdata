<template>
  <div>
    <div class="bj bjboot">
      <div class="text-center">{{ title }}</div>
      <div
        class="lefttoday_tit height ht"
        v-if="hidder"
        :class="type === 'column' ? '' : 'row'"
      >
        <p class="fl">状态：已调节</p>
        <p class="fr">时间段：2018-06-10 至 2018-06-14</p>
      </div>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "矛盾纠纷地区统计"
    },
    hidder: {
      type: Boolean,
      default: true
    },
    type: {
      type: String,
      default: "column"
    }
  },
  data() {
    return {};
  },
  created() {
    console.log(this.hidder);
  }
};
</script>

<style lang="scss" scoped>
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
.bjboot {
  .row {
    @include flex-row();
    justify-content: space-between;
  }
  .lefttoday_tit {
    .fr {
      color: rgba(255, 255, 255, 0.6);
    }
  }
}
</style>

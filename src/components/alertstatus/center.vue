<template>
  <div class="bj boxcenter">
    <h2 class="text-center title">实时监控系统</h2>
    <div class="s-p-10 s-p-l-24 flex-1 amiddboxttop_map">
      <div class="control flex-1"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.bj {
  background-image: url("../../assets/image/amiddboxttop.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  flex: 1;
  margin: 0 10px;
  padding: 10px 14px;
  color: $white;
  @include flex-row(column);
  .title {
    font-size: $font-size-xs;
    padding-top: 5px;
  }
  .amiddboxttop_map {
    @include flex-row(column);
    .control {
      background-image: url("../../assets/image/img.png");
      background-repeat: no-repeat;
      background-size: 100% 100%;
    }
  }
}
</style>

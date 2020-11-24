<template>
  <div class="box s-m-l-50 s-m-r-50 s-m-t-10">
    <left></left>
    <center></center>
    <sRight></sRight>
  </div>
</template>

<script>
import left from "./left";
import center from "./center";
import sRight from "./sright";
export default {
  name: "index",
  data() {
    return {};
  },
  components: {
    left,
    center,
    // eslint-disable-next-line vue/no-unused-components
    sRight
  }
};
</script>

<style lang="scss" scoped>
.box {
  @include flex-row;
}
</style>

<template>
  <div class="box s-m-l-50 s-m-r-50 s-m-t-10">
    <left></left>
    <center></center>
    <rigth></rigth>
  </div>
</template>

<script>
import left from "./left";
import center from "./center";
import rigth from "./rigth";
export default {
  data() {
    return {};
  },
  components: {
    left,
    center,
    rigth
  }
};
</script>

<style lang="scss" scoped>
.box {
  @include flex-row;
  justify-content: space-around;
}
</style>

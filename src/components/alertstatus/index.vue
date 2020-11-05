<template>
  <div>
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

<style lang="scss" scoped></style>

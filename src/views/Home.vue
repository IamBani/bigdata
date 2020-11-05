<template>
  <div class="home">
    <Layout class="laout">
      <Header class="head"><s_herder class="height-100"></s_herder></Header>
      <Content>Content</Content>
    </Layout>
  </div>
</template>

<script>
import s_herder from "@/components/s_herder";
export default {
  name: "Home",
  components: {
    s_herder
  }
};
</script>
<style lang="scss" scope>
.home {
  .laout {
    background-color: rgba(0, 0, 0, 0) !important;
  }
  .head {
    height: $header-height-big;
  }
}
</style>

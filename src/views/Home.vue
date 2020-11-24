<template>
  <div class="home">
    <Layout class="laout">
      <Header class="head"><s_herder class="height-100"></s_herder></Header>
      <Content><alertstatus></alertstatus></Content>
      <Content><s_footer></s_footer></Content>
    </Layout>
  </div>
</template>

<script>
import s_herder from "@/components/s_herder";
import alertstatus from "@/components/alertstatus/index";
import s_footer from "@/components/s_footer/index";
export default {
  name: "Home",
  components: {
    s_herder,
    alertstatus,
    s_footer
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

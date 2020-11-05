<template>
  <Row type="flex" align="middle" justify="space-around">
    <Col span="6" offset="1" class="s-m-t-25">
      <Button
        type="default"
        ghost
        v-for="(item, index) in leftlist"
        :class="index !== 0 ? 's-m-l-15' : ''"
        :key="index"
        class="bg"
        >{{ item.title }}</Button
      >
    </Col>
    <Col span="6" offset="2" class="tith1">舆情分析</Col>
    <Col span="6" offset="3" class="s-m-t-25">
      <Button
        type="default"
        ghost
        v-for="(item, index) in rigthlist"
        :class="index !== 0 ? 's-m-l-15' : ''"
        :key="index"
        class="bg"
        >{{ item.title }}</Button
      >
    </Col>
  </Row>
</template>

<script>
export default {
  name: "s_herder",
  data() {
    return {
      leftlist: [
        {
          title: "警情警力"
        },
        {
          title: "实有人口"
        },
        {
          title: "舆情分析"
        }
      ],
      rigthlist: [
        {
          title: "舆情"
        },
        {
          title: "交通"
        },
        {
          title: "返回"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.tith1 {
  text-align: center;
  padding-top: 16px;
  font-weight: bold;
  letter-spacing: 8px;
  font-size: 36px;
}
.bg {
  background-image: url("../assets/image/bnt.png");
}
</style>

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import global from "./utils/global";
Vue.use(global);

import "@/assets/scss/index.scss";
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

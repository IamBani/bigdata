import {
  Button,
  Table,
  Layout,
  Content,
  Menu,
  MenuItem,
  Icon,
  Row,
  Col
} from "view-design";
import "view-design/dist/styles/iview.css";
export default {
  install(Vue) {
    Vue.component("Button", Button);
    Vue.component("Table", Table);
    Vue.component("Layout", Layout);
    Vue.component("Content", Content);
    Vue.component("Menu", Menu);
    Vue.component("MenuItem", MenuItem);
    Vue.component("Icon", Icon);
    Vue.component("Row", Row);
    Vue.component("Col", Col);
  }
};

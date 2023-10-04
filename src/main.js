import { createApp } from "vue";
import "./style.css";
import "animate.css";
import App from "./App.vue";
import router from "./router"; //添加router
import "vant/lib/index.css";
import { Button, Tabbar, TabbarItem, Icon, Search, Tab, Tabs, NavBar } from "vant";

const app = createApp(App);
app.use(NavBar);
app.use(Icon);
app.use(Button);
app.use(Tabbar);
app.use(TabbarItem);
app.use(Search);
app.use(Tab);
app.use(Tabs);

app.use(router);
app.mount("#app");

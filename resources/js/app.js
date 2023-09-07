import Vue from "vue";
import App from "./App.vue";
import store from "./vuex/store"
import VueSidebarMenu from "vue-sidebar-menu";
import "vue-sidebar-menu/dist/vue-sidebar-menu.css";
import VueRouter from "vue-router";
import FirstPage from './components/FirstPage.vue';
import SecondPage from './components/SecondPage.vue';
import ThirdPage from './components/ThirdPage.vue'

Vue.use(VueRouter);
Vue.use(VueSidebarMenu);
Vue.config.productionTip = false;

const routes = [
    { path: "/", component: FirstPage },
    { path: "/second-group", component: SecondPage },
    { path: "/third-group", component: ThirdPage }
];

const router = new VueRouter({
    routes
});

new Vue({
    router,
    render: (h) => h(App),
    store
}).$mount("#app");

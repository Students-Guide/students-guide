import Vue from "vue";
import Router from "vue-router";
import editP from "../components/editProfil.vue";
import profile from "../components/profile.vue";
Vue.use(Router);
export default new Router({
  mode: "history",

  routes: [
    {
      path: "/edit",
      name: "edit",
      component: editP
    },
    {
      path: "/profil",
      name: "profil",
      component: profile
    }
  ]
});

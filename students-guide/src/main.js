import Vue from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import Router from "vue-router";
import editP from "./components/editProfil.vue";
import profile from "./components/profile.vue";
Vue.use(Router);
var router= new Router({
  mode: "history",

  routes: [
    {

      path: '/edit', 
      name:'edit',
      
      component: editP
    },
    {
      path: "/",
      
      name: "profil",
      component: profile
    }
  ]
});

new Vue({
  router,
  el: "#app",
  render: h => h(App)
});

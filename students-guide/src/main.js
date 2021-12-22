import Vue from 'vue'
import App from './App.vue'
// import "bootstrap/dist/css/bootstrap.min.css";
import Router from "vue-router";
import editP from "./components/editProfil.vue";
import profile from "./components/profile.vue";
// import 'bootstrap/dist/css/bootstrap.css'
import TeacherPost from './components/Teacher-Post.vue'
import teacherChangePassword from "./components/changePass.vue";
// import 'bootstrap-vue/dist/bootstrap-vue.css'
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
      path: "/profil",
      name: "profil",
      component: profile
    },
    {

      path: '/post', 
      name:'post',
      
      component: TeacherPost
    },
    {
      path: '/teacherChangePass', 
      name:'teacherChangePassword',
      component: teacherChangePassword
    }
  ]
});

new Vue({
  router,
  el: "#app",
  render: h => h(App)
});

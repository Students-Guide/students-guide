import Vue from 'vue'
import App from './App.vue'
import Router from "vue-router";
import courses from "./components/courses.vue";
import editP from "./components/editProfil.vue";
import profile from "./components/profile.vue";
import editPS from "./components/editProfil-stu.vue"
import techersFS from "./components/teachersforstudent.vue"
import feed from './components/studentFeed.vue'
// import 'bootstrap/dist/css/bootstrap.css'
import TeacherPost from "./components/Teacher-Post.vue";
import teacherChangePassword from "./components/changePass.vue";
import studentChangePassword from "./components/studentChangePassword.vue";
import signin from "./components/signin.vue";
import studentProfile from "./components/studentProfil.vue";
import about from "./components/about.vue";
import detail from "./components/coursedetail.vue";
import signUp from "./components/signUp.vue";
import forgotPassword from "./components/forgotPassword.vue"
import premium from './components/premium/premium.vue'
import Purchase from './components/premium/purchase.vue'
import Footer from "./components/footer.vue"

import Mypannel from "./components/Mypannel.vue"
Vue.use(Router);
var router = new Router({
  mode: "history",

  routes: [
    {
      path: "/purchase",
      name: "Purchase",
      props:true,
      component: Purchase
    },
    {
      path: "/premium",
      name: "premium",

      component: premium
    },
    {
      path: "/editstudent",
      name: "editstudent",

      component: editPS
    },
    {  
    path: "/footer",
      name: "footer",

      component: Footer
    },

    {
      path: "/edit",
      name: "edit",

      component: editP
    },
    {
      path: "/editStudent",
      name: "editStudent",

      component: editPS
    },

    {

      path: '/mypannel', 
      name:'mypannel',
      
      component: Mypannel
    },
    {
      path: "/profil",
      name: "profil",
      component: profile
    },
    {
      path: "/teacherChangePass",
      name: "teacherChangePassword",
      component: teacherChangePassword
    },
    {
      path: "/homeT",
      name: "courses",
      component: courses
    },
    {
      path: "/details",
      name: "detail",
      component: detail
    },
    {
      path: "/signin",
      name: "signin",
      component: signin
    },
    {
      path: "/forgot password",
      name: "forgotPassword",
      component: forgotPassword
    },
    {
      path: "/",
      name: "signup",
      component: signUp
    },
    {
      path: "/post",
      name: "post",

      component: TeacherPost
    },
    {
      path: "/studentChangePass",
      name: "studentChangePassword",
      component: studentChangePassword
    },
    {
      path: "/signin",
      name: "signin",
      component: signin
    },

    { path: "/teachersforstudent", name: "teachers", component: techersFS },

    { path: "/post", name: "post", component: TeacherPost },
    {
      path: "/teacherChangePass",
      name: "teacherChangePassword",
      component: teacherChangePassword
    },
    {
      path: "/studentProfile",
      name: "studentProfile",
      component: studentProfile
    },
   
    {
      path: "/about",
      name: "about",
      component: about
    },
    {
      path: "/studentFeed",
      name: "studentFeed",
      component: feed
    },
  ]
});

new Vue({
  router,
  el: "#app",
  render: h => h(App)
});

<template>
   
   
  <div id="app">
    <router-view />
  </div>
</template>
<script>
// import Home from './components/coursedetail.vue'
import courses from './components/courses.vue' 
import detail from './components/coursedetail.vue'
import edit from "./components/editProfil.vue";
import Profile from "./components/profile.vue";
import teacherChangePassword from "./components/changePass.vue";
import studentChangePassword from "./components/studentChangePassword.vue";
import signin from "./components/signin.vue";
import TeacherPost from './components/teacher-post.vue'
export default {

  name: "app",
  components: {
    edit,
    Profile,
    teacherChangePassword ,
    studentChangePassword ,
    signin, TeacherPost, courses,  
       detail,
  }
};
</script>
<style lang="scss"></style>

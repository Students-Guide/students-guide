<template>
  <div id="app">
    <!-- <Purchase/> -->
    <router-view />
  </div>
</template>
//
<script>

// import Home from './components/coursedetail.vue'
import courses from "./components/courses.vue";
import detail from "./components/coursedetail.vue";
import edit from "./components/editProfil.vue";
import Profile from "./components/profile.vue";
import teacherChangePassword from "./components/changePass.vue";
import studentChangePassword from "./components/studentChangePassword.vue";
import signin from "./components/signin.vue";
import feed from './components/studentFeed.vue'
import TeacherPost from "./components/teacher-post.vue";
import addcourse from './components/studentFeedDetail.vue';
import premium from './components/premium/premium.vue';

export default {
  name: "app",
  components: {
    edit,
    Profile,
    teacherChangePassword,
    studentChangePassword,
    signin,
    TeacherPost,
    courses,
    detail,
    feed,
  
    addcourse,
    premium
  }
};
</script>
<style lang="scss"></style>

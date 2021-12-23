<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import edit from './components//editProfil.vue';
import TeacherPost from './components/teacher-post.vue'
import Profile from './components/profile.vue'
import changePass from "./components/changePass.vue";
import Mypannel from "./components/Mypannel.vue"
export default {
  name: "app",
  components: {
    edit,
     TeacherPost , 
     Profile,
     changePass,
     Mypannel

  }  
}
</script>
<style lang="scss"></style>

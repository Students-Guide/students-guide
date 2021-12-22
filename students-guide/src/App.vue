<template>
  <div id="app">
    <TeacherPost />
    <router-view/>
  </div>
</template>
<script>
import edit from './components//editProfil.vue';
import TeacherPost from './components/teacher-post.vue'
import Profile from './components/profile.vue'

export default {
  name: "app",
  components: {
    edit,
     TeacherPost , 
     Profile

  }  
}
</script>
<style lang="scss"></style>

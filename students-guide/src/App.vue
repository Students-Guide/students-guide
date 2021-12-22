<template>
  <div id="app">
    <TeacherPost />
    <edit />
    <router-view/>
  </div>
</template>
<script>
import edit from './components//editProfil.vue';
import TeacherPost from './components/teacher-post.vue'

export default {
  name: 'app',
  components: {
    edit,
     TeacherPost
  }  
}
</script>
<style lang="scss">

</style>
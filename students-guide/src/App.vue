<template>
   
   
  <div id="app">
    <!-- <detail/> -->
    <router-view />
  </div>
</template>
<script>
// import Home from './components/coursedetail.vue'
import courses from './components/courses.vue' 
import detail from './components/coursedetail.vue'
import edit from "./components/editProfil.vue";
import Profile from "./components/profile.vue";
export default {

  name: "app",
    components:{
       courses,  
       detail,
         edit,
    Profile,
    
    }
}



</script>
<style lang="scss"></style>

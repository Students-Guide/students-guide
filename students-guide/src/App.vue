<template>
  <div id="app">
    
    <router-view />
  </div>
</template>
<script>
import edit from "./components/editProfil.vue";
import Profile from "./components/profile.vue";
export default {
  name: "app",
  components: {
    edit,
    Profile
  }
};
</script>
<style lang="scss"></style>

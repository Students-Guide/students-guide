<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import edit from "./components/editProfil.vue";
import Profile from "./components/profile.vue";
import teacherChangePassword from "./components/changePass.vue";
export default {
  name: "app",
  components: {
    edit,
    Profile,
    teacherChangePassword
  }
};
</script>
<style lang="scss"></style>

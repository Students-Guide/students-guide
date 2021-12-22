<template>
  <div id="app">
    
    <changePass />
    <router-view/>
  </div>
</template>
<script>
import edit from './components//editProfil.vue';
import changePass from "./components/changePass.vue"

export default {
  name: 'app',
  components: {
    edit, changePass
  }  
}
</script>
<style lang="scss">

</style>
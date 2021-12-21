<template>
  <div id="app">
    
    <edit />
    <router-view/>
  </div>
</template>
<script>
import edit from './components//editProfil.vue';
export default {
  name: 'app',
  components: {
    edit
  }  
}
</script>
<style lang="scss">

</style>
import Vue from 'vue'
import App from './App.vue'
import BootstrapVue, { bootstrapVue, IconsPlugin } from 'bootstrap-vue'
// import post from './components/teacherPost.vue'
// components/teacherPost.vue
Vue.use(BootstrapVue)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

new Vue({
  el: '#app',
  render: h => h(App)
})

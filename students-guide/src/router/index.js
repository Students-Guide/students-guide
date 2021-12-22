import Vue from 'vue'
import Router from 'vue-router'
import editP from '../components/editProfil.vue'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'edit',
      component: editP
    }
  ]
})
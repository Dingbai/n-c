import Vue from 'vue'
import Router from 'vue-router'
import Form from './views/form.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'form',
      component: Form 
    },
    {
      path: '/checkbox',
      name: 'checkbox',
      component: () => import('./views/checkbox.vue')
    },
    {
      path: '/radio',
      name: 'radio',
      component: () => import('./views/radio.vue')
    },
  ]
})

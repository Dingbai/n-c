import Vue from 'vue'
import Router from 'vue-router'
import Form from './views/form.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
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
    {
      path: '/alert',
      name: 'alert',
      component: () => import('./views/alert.vue')
    },
    {
      path: '/test',
      name: 'test',
      children: [
        {
          path: '/t',
          component: () => import('./views/t/t.vue')
        }
      ],
      component: () => import('./views/test.vue')
    },
    {
      path: '/table-render',
      component: () => import('./views/table-render.vue')
    },
    {
      path: '/table-slot',
      component: () => import('./views/table-slot.vue')
    },
    {
      path: '/tree',
      component: () => import('./views/tree.vue')
    },
    {
      path: '/select',
      component: () => import('./views/select.vue')
    },
    {
      path: '/menu',
      component: () => import('./views/menu.vue')
    },
    {
      path: '/button',
      component: () => import('./views/button.vue')
    }
  ]
})

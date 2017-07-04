import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Table from '@/components/Table'
import Charts from '@/components/Charts'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/table',
      name: 'Table',
      component: Table
    },
    {
      path: '/charts',
      name: 'Charts',
      component: Charts
    }
  ]
})

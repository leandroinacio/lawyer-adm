import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Owner from '@/components/Owner'
import CreateOwner from '@/components/CreateOwner'
import Records from '@/components/Records'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/owner',
      name: 'Owner',
      component: Owner
    },
    {
      path: '/create.owner',
      name: 'CreateOwner',
      component: CreateOwner
    },
    {
      path: '/records',
      name: 'Records',
      component: Records
    }
  ]
})

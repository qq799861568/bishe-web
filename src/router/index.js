import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Account from '@/pages/Account/Account.vue'
import Hotspot from '@/pages/Hotspot/Hotspot.vue'
import Quotation from '@/pages/Quotation/Quotation.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path: '/Account',
      name: 'Account',
      component: Account
    },{
      path: '/Hotspot',
      name: 'Hotspot',
      component: Hotspot
    },{
      path: '/Quotation',
      name: 'Quotation',
      component: Quotation
    }
    
  ]
})

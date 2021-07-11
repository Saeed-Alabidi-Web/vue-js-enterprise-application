
import Home from '@/views/views/Home.vue'
import NotFoumd from '@/views/views/NotFoumd.vue'
import NetWorkError from '@/views/views/NetWorkError.vue'

export default [
    {
      path: '/',
      name: 'Home',
      props: true,
      component: Home,
    },
    {
      path: '/about',
      name: 'About',
      props: true,
      component: () => import('@/views/views/About.vue')
    }
    ,
    {
      path: '/404',
      name: '404',
      props: true,
      component: NotFoumd,
    }
  
    ,
    {
      path: '/408',
      name: '408',
      props: true,
      component: NetWorkError,
    }
  
    ,
    {
      path: '*',
    redirect:{name:'404',params:{resource:'page'}}
    }
  ]
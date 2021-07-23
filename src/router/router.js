
import Home from '@/views/views/home/Home.vue'
import NotFoumd from '@/views/views/notFoumd/NotFoumd.vue'
import NetWorkError from '@/views/views/netWorkError/NetWorkError.vue'

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
      component: () => import('@/views/views/about/About.vue')
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
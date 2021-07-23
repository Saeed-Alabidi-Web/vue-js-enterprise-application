
import Vue from 'vue'
import VueRouter from 'vue-router'
import services from '@/infrastructure/services'
import event from '../infrastructure/core/globalEvent'

 Vue.use(VueRouter)
 export default ({progress,routes}) => {

  

  const router = new VueRouter({
    mode: 'history',
    routes
  })

  router.beforeEach((routeTo, routeFrom, next) => {
    progress.start();
    event.route_before_each(routeTo, routeFrom)?
    next():false;

  });
  router.afterEach(() => {
    event.route_after_each()
    progress.done()

  });

  router.onError(error => {
    services.log(error,'Router')
  });

  return router; 

}


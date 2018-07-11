import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: () => import('@/page/Index.vue')
    },
    {
      path: '/movie',
      component: () => import('@/page/movie.vue')
    },
    {
      path: '/book',
      component: () => import('@/page/book.vue')
    },
    {
      path: '/mine',
      component: () => import('@/page/mine.vue')
    }
  ]
})

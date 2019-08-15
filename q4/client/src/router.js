import Vue from 'vue'
import Router from 'vue-router'
import Books from './views/Books.vue'
import BookDetail from './views/BookDetail.vue'
import NotFound from './views/NotFound.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Books',
      component: Books
    },
    {
      path: '/book/:slug',
      name: 'BookDetail',
      component: BookDetail
    },
    { path: '*', component: NotFound }
  ]
})

import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      component: () => import('@/pages/LoginPage.vue'),
    },
    {
      path: '/register',
      component: () => import('@/pages/RegisterPage.vue'),
    },
    {
      path: '/tasks/:id',
      component: () => import('@/pages/TodoPage.vue'),
    },
  ],
});

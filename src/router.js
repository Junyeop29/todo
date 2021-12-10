import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/tasks/today',
    },
    {
      path: '/tasks/:id',
      component: () => import('@/components/todo/TodoList.vue'),
    },
  ],
});

export default router;

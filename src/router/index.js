import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Empty from '../views/Empty.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    hidden: true,
  },
  {
    path: '/',
    name: 'About',
    component: Home,
    children: [
      {
        path: '/about',
        component: About,
      },
    ],
    hidden: true,
  },
  {
    path: '/',
    name: 'code',
    component: Home,
    icon: 'near_me',
    children: [
      {
        path: '/code/html',
        name: 'html',
        component: Empty,
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;

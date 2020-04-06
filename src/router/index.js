import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Html from '../views/code/Html.vue';

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
        path: 'about',
        component: About,
      },
    ],
    hidden: true,
  },
  {
    path: '/',
    name: 'code',
    title: '代码压缩',
    component: Home,
    icon: 'near_me',
    children: [
      {
        path: '/code/html',
        name: 'html',
        title: 'HTML',
        subTitle: '格式化 / 压缩',
        component: Html,
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
});

export default router;

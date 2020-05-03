import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "index" */ '../views/About.vue'),
  },
  {
    path: '/code/html',
    name: 'html',
    component: () => import(/* webpackChunkName: "code" */ '../views/code/Html.vue'),
  },
  {
    path: '/code/css',
    name: 'css',
    component: () => import(/* webpackChunkName: "code" */ '../views/code/Css.vue'),
  },
  {
    path: '/code/js',
    name: 'javascript',
    component: () => import(/* webpackChunkName: "icodemage" */ '../views/code/Js.vue'),
  },
  {
    path: '/image/dataurl',
    name: 'picture',
    component: () => import(/* webpackChunkName: "image" */ '../views/picture/DataUrl.vue'),
  },
  {
    path: '/crypto/base64',
    name: 'base64',
    component: () => import(/* webpackChunkName: "crypto" */ '../views/crypto/Base64.vue'),
  },
  {
    path: '/crypto/encodeurl',
    name: 'encodeurl',
    component: () => import(/* webpackChunkName: "crypto" */ '../views/crypto/EncodeUrl.vue'),
  },
  {
    path: '/crypto/encrypt',
    name: 'encrypt',
    component: () => import(/* webpackChunkName: "crypto" */ '../views/crypto/Encrypt.vue'),
  },
  {
    path: '/crypto/unicode',
    name: 'unicode',
    component: () => import(/* webpackChunkName: "crypto" */ '../views/crypto/Unicode.vue'),
  },
];

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
});

export default router;

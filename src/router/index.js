import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Html from '../views/code/Html.vue';
import Css from '../views/code/Css.vue';
import Js from '../views/code/Js.vue';
import DataUrl from '../views/picture/DataUrl.vue';
import Base64 from '../views/crypto/Base64.vue';
import EncodeUrl from '../views/crypto/EncodeUrl.vue';

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
    title: '代码辅助',
    component: Home,
    icon: 'code',
    children: [
      {
        path: '/code/html',
        name: 'html',
        title: 'HTML',
        subTitle: '美化 / 压缩',
        component: Html,
      },
      {
        path: '/code/css',
        name: 'css',
        title: 'CSS',
        subTitle: '美化 / 优化 / 压缩',
        component: Css,
      },
      {
        path: '/code/js',
        name: 'javascript',
        title: 'JavaScript',
        subTitle: '美化 / 净化 / 混淆',
        component: Js,
      },
    ],
  },
  {
    path: '/',
    name: 'picture',
    title: '图片处理',
    component: Home,
    icon: 'image',
    children: [
      {
        path: '/image/dataurl',
        name: 'dataurl',
        title: 'Data URL',
        subTitle: '图片 ⇔ Base64',
        component: DataUrl,
      },
    ],
  },
  {
    path: '/',
    name: 'crypto',
    title: '编码加密',
    component: Home,
    icon: 'lock_outline',
    children: [
      {
        path: '/crypto/base64',
        name: 'base64',
        title: 'Base64',
        subTitle: '编码 / 解码',
        component: Base64,
      },
      {
        path: '/crypto/encodeurl',
        name: 'encodeurl',
        title: 'URL转码',
        subTitle: 'encodeURI()',
        component: EncodeUrl,
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

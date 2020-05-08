<template>
  <div id="app">
    <nav-bar :title="title"/>
    <aside-menu :menu="menu"/>
    <div class="mdui-container">
      <div class="mdui-row">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import AsideMenu from './components/AsideMenu.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    AsideMenu,
  },
  data: () => ({
    //
    title: 'Yuusha Tool',
    drawer: true,
  }),
  computed: {
    menu() {
      return [
        {
          icon: 'home',
          text: '首页',
          url: '/',
        },
        {
          icon: 'info_outline',
          text: '关于',
          url: '/about',
        },
        {
          icon: 'code',
          text: '代码辅助',
          children: [
            {
              text: 'HTML',
              url: '/code/html',
            },
            {
              text: 'CSS',
              url: '/code/css',
            },
            {
              text: 'JavaScript',
              url: '/code/js',
            },
          ],
        },
        {
          icon: 'image',
          text: '图片处理',
          children: [
            {
              text: 'Data URL',
              url: '/image/dataurl',
            },
          ],
        },
        {
          icon: 'lock_outline',
          text: '信息编解码',
          children: [
            {
              text: 'Base64',
              url: '/crypto/base64',
            },
            {
              text: 'URL转码',
              url: '/crypto/encodeurl',
            },
            {
              text: '加密解密',
              url: '/crypto/encrypt',
            },
            {
              text: 'Unicode',
              url: '/crypto/unicode',
            },
          ],
        },
      ];
    },
  },
};
</script>

<style>
  .row-btn {
    display: flex;
    flex-wrap: wrap;
  }
  .row-btn > * {
    margin-right: 16px;
  }
  .mdui-list-item-title {
    font-size: 14px;
  }
  .mdui-list-item-text {
    font-size: 12px;
  }
  .clean-float {
    float: none;
  }
</style>

<template>
  <header class="mdui-appbar mdui-appbar-fixed">
      <div class="mdui-toolbar mdui-color-theme">
        <span
          class="mdui-btn mdui-btn-icon mdui-ripple mdui-ripple-white"
          mdui-drawer="{target: '#main-drawer', swipe: true}"
        >
          <i class="mdui-icon material-icons">menu</i>
        </span>
        <a href="/" class="mdui-typo-headline mdui-hidden-xs">{{title}}</a>
        <div class="mdui-toolbar-spacer"></div>
        <router-link
          to="/about"
          class="mdui-btn mdui-btn-icon mdui-ripple mdui-ripple-white"
          mdui-tooltip="{content: '关于'}"
        >
          <i class="mdui-icon material-icons">info_outline</i>
        </router-link>
      </div>
    </header>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    title: {
      type: String,
      default: 'Sample Title',
    },
  },
  data() {
    return {

    };
  },
};
</script>

<style>
</style>

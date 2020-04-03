<template>
  <div id="toolbox">
    <header class="mdui-appbar mdui-appbar-fixed">
      <div class="mdui-toolbar mdui-color-theme">
        <span
          class="mdui-btn mdui-btn-icon mdui-ripple mdui-ripple-white"
          mdui-drawer="{target: '#main-drawer', swipe: true}"
        >
          <i class="mdui-icon material-icons">menu</i>
        </span>
        <a href="/" class="mdui-typo-headline mdui-hidden-xs">Yuusha.dev</a>
        <span class="mdui-typo-title">工具箱</span>
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
    <div class="mdui-drawer mdui-shadow-4" id="main-drawer">
      <div class="mdui-list" mdui-collapse="{accordion: true}">
        <div
          class="mdui-collapse-item mdui-collapse-item-open"
          v-for="(route, index) in menus"
          :key="index"
        >
          <div class="mdui-collapse-item-header mdui-list-item mdui-ripple">
            <i
              class="mdui-list-item-icon mdui-icon material-icons mdui-text-color-blue"
            >{{route.icon}}</i>
            <div class="mdui-list-item-content">{{route.title}}</div>
            <i
              class="mdui-collapse-item-arrow mdui-icon material-icons"
              v-if="route.children"
            >keyboard_arrow_down</i>
          </div>
          <div class="mdui-collapse-item-body mdui-list" style="height: auto;">
            <router-link
              v-for="(subRoute, subIndex) in route.children"
              :key="subIndex"
              :to="{name : subRoute.name}"
              v-slot="{ href, navigate, isActive }"
            >
              <a
                :class="['mdui-list-item','mdui-ripple', isActive && 'mdui-list-item-active']"
                :href="href"
                :click="navigate"
              >
              <div class="mdui-list-item-content">
                <div class="mdui-list-item-title">{{subRoute.title}}</div>
                <div class="mdui-list-item-text">{{subRoute.subTitle}}</div>
              </div>
              </a>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="mdui-container">
      <div class="mdui-row">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  computed: {
    menus() {
      return this.$router.options.routes.filter((item) => !item.hidden);
    },
  },
};
</script>

<style>
</style>

<template>
  <div id="app">
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
    <div class="mdui-drawer" id="main-drawer">
      <div class="mdui-list" mdui-collapse="{accordion: true}">
        <div class="mdui-collapse-item mdui-collapse-item-open">
          <div class="mdui-collapse-item-header mdui-list-item mdui-ripple">
            <i class="mdui-list-item-icon mdui-icon material-icons mdui-text-color-blue">near_me</i>
            <div class="mdui-list-item-content">开始使用</div>
            <i class="mdui-collapse-item-arrow mdui-icon material-icons">keyboard_arrow_down</i>
          </div>
          <div class="mdui-collapse-item-body mdui-list" style="height: auto;">
            <router-link to="/" class="mdui-list-item mdui-ripple">安装</router-link>
            <router-link to="/" class="mdui-list-item mdui-ripple">兼容性</router-link>
            <router-link to="/" class="mdui-list-item mdui-ripple">JavaScript 工具库</router-link>
            <router-link to="/" class="mdui-list-item mdui-ripple">JavaScript 全局方法</router-link>
          </div>
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<style>
</style>

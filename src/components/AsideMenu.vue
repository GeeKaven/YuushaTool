<template>
  <div class="mdui-drawer mdui-shadow-4" id="main-drawer">
    <div class="mdui-list" mdui-collapse="{accordion: false}">
      <template v-for="(item, index) in menu">
        <div v-if="!item.children" :key="index" class="mdui-collapse-item">
          <router-link :to="item.url" v-slot="{href, navigate}">
            <div class="mdui-list-item mdui-ripple" style="height: auto;">
              <i
                class="mdui-list-item-icon mdui-icon material-icons mdui-text-color-blue"
              >{{item.icon}}</i>
              <a class="mdui-list-item-content" :href="href" :click="navigate">{{item.text}}</a>
            </div>
          </router-link>
        </div>
        <div v-else :key="item.index" class="mdui-collapse-item mdui-collapse-item-open">
          <div class="mdui-collapse-item-header mdui-list-item mdui-ripple">
            <i
              class="mdui-list-item-icon mdui-icon material-icons mdui-text-color-blue"
            >{{item.icon}}</i>
            <div class="mdui-list-item-content">{{item.text}}</div>
            <i class="mdui-collapse-item-arrow mdui-icon material-icons">keyboard_arrow_down</i>
          </div>
          <div class="mdui-collapse-item-body mdui-list" style="height: auto;">
            <router-link
              v-for="(child, childIndex) in item.children"
              :key="childIndex"
              :to="child.url"
              v-slot="{href, navigate, isActive}"
            >
              <a
                :class="['mdui-list-item','mdui-ripple', isActive && 'mdui-list-item-active']"
                :href="href"
                :click="navigate"
              >
                <div class="mdui-list-item-content">{{child.text}}</div>
              </a>
            </router-link>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AsideMenu',
  props: {
    drawer: {
      type: Boolean,
      default: null,
    },
    menu: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style>
</style>

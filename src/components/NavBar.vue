<template>
  <b-navbar>
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img
          src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
          alt="Lightweight UI components for Vue.js based on Bulma"
        />
      </b-navbar-item>
    </template>
    <template slot="start">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">首页</b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ path: '/about' }">关于</b-navbar-item>
    </template>
    <template slot="end">
      <b-navbar-item>
        <b-icon icon="github-circle">
          <a href="https://github.com/GeeKaven/YuTool" target="_blank"/>
        </b-icon>
      </b-navbar-item>
    </template>
  </b-navbar>
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
    return {};
  },
};
</script>

<style>
</style>

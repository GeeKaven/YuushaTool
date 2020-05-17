<template>
  <div id="app">
    <main class="main">
      <nav-bar />
      <router-view />
      <footer-bar />
    </main>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import FooterBar from './components/FooterBar.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    FooterBar,
  },
  data: () => ({
    //
    title: 'Yuusha Tool',
    drawer: true,
  }),
};
</script>

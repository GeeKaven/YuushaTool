<template>
  <v-app-bar :clipped-left="$vuetify.breakpoint.lgAndUp" app dark>
    <v-app-bar-nav-icon @click.stop/>
    <v-toolbar-title class="ml-0 pl-4">
      <span class="hidden-sm-and-down">{{title}}</span>
    </v-toolbar-title>
    <v-spacer />
    <v-btn icon class="mr-0">
      <v-icon>info_outline</v-icon>
    </v-btn>
  </v-app-bar>
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

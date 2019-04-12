<template>
  <div class=" header">
    <b-navbar toggleable fluid type="light" variant="light">
      <b-button class="material-icons" @click="toggleDrawer()">dehaze</b-button>
      <b-nav-item-dropdown right>
        <!-- Using 'button-content' slot -->
        <template slot="button-content"
          ><em>User</em></template
        >
        <b-dropdown-item href="#">Profile</b-dropdown-item>
        <b-dropdown-item href="#">Sign Out</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar>
  </div>
</template>

<script>
export default {
  methods: {
    toggleDrawer() {
      this.$store.commit('toggleDrawer')
    }
  }
}
</script>

<style>
.container {
  min-height: unset !important;
}
.header nav {
  height: 94px;
}
</style>

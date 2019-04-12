<template>
  <div class="left-drawer">
    <div v-show="toggleDrawer" class="large-drawer">
      <div class="brand text-center" href="#">X3English</div>
      <ul class="left-menu">
        <li class="">
          <nuxt-link to="/" class="row-custom">
            <i class="material-icons">home</i>
            <span>Home</span>
          </nuxt-link>
        </li>

        <li class="">
          <nuxt-link to="/" class="row-custom">
            <i class="material-icons">home</i>
            <span>Home</span>
          </nuxt-link>
        </li>
        <li class="">
          <nuxt-link to="/" class="row-custom">
            <i class="material-icons">home</i>
            <span>Home</span>
          </nuxt-link>
        </li>
        <li class="">
          <nuxt-link to="/" class="row-custom">
            <i class="material-icons">home</i>
            <span>Home</span>
          </nuxt-link>
        </li>
        <li class="">
          <nuxt-link to="/" class="row-custom">
            <i class="material-icons">home</i>
            <span>Home</span>
          </nuxt-link>
        </li>
        <li class="">
          <nuxt-link to="/" class="row-custom">
            <i class="material-icons">home</i>
            <span>Home</span>
          </nuxt-link>
        </li>
      </ul>
    </div>

    <div v-show="!toggleDrawer" class="mini-drawer">
      <div class="brand text-center" href="#">X3English</div>
      <ul class="left-menu">
        <li class="">
          <nuxt-link to="/" class="row-custom">
            <i class="material-icons">home</i>
          </nuxt-link>
        </li>

        <li class="">
          <nuxt-link to="/" class="row-custom">
            <i class="material-icons">home</i>
          </nuxt-link>
        </li>
        <li class="">
          <nuxt-link to="/" class="row-custom">
            <i class="material-icons">home</i>
          </nuxt-link>
        </li>
        <li class="">
          <nuxt-link to="/" class="row-custom">
            <i class="material-icons">home</i>
          </nuxt-link>
        </li>
        <li class="">
          <nuxt-link to="/" class="row-custom">
            <i class="material-icons">home</i>
          </nuxt-link>
        </li>
        <li class="">
          <nuxt-link to="/" class="row-custom">
            <i class="material-icons">home</i>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      toggleDrawer: 'toggleDrawer'
    })
  }
}
</script>

<style>
.large-drawer,
.mini-drawer {
  min-height: 100vh;
}
.row-custom {
  display: flex;
  flex-wrap: wrap;
}
.large-drawer {
  width: 271px;
  background: #f8f9fa;
}
.mini-drawer {
  width: 113px;
}
.brand {
  background: #f8f9fa;
  padding: 15px 20px;
  height: 94px;
}
.left-menu a {
  color: #575757;
}
a.row-custom:hover {
  text-decoration: none;
  color: white;
}
.left-menu a i {
  margin-right: 8px;
}
ul.left-menu li {
  margin: 0px 0px 20px 0px;
  padding: 10px 10px 10px 40px;
}

ul.left-menu li:hover {
  background: black;
  cursor: pointer;
}

ul.left-menu {
  padding: 0;
}
.mini-drawer {
  background: #f8f9fa;
}
</style>

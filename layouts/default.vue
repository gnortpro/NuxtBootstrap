<template>
  <div class="wrapper left-drawer-collapse">
    <Draw />
    <div class="body-content">
      <Toolbar />
      <div class="main-content">
        <div class="container-fluid">
          <nuxt />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {
    Toolbar: () => import('~/components/core/Toolbar.vue'),
    Draw: () => import('~/components/core/Draw.vue')
  }
}
</script>
<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
ul,
li {
  list-style: none !important;
}
.main-content {
  padding: 20px;
}
.wrapper {
  display: flex;
  width: 100%;
  overflow-x: hidden;
  display: -ms-flex;
  display: -webkit-flex;
  min-height: 100%;
}
.body-content {
  width: 100%;
}
.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
.border-bottom {
  border-bottom: 1px solid #e7eaec !important;
}
.left-drawer {
  background: #f8f9fa;
}
/* public css */
.public-title {
  color: #20a850;
  font-size: 29.5px;
  font-weight: 600;
  margin-bottom: 23px;
}
</style>

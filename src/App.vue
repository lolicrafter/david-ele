<template>
  <div id="app">
    <table-page></table-page>
    <div style="width: 500px">
      <vue-video-player></vue-video-player>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    tablePage: () => import('./components/table.vue'),
    VueVideoPlayer: () => import('./components/video.vue')
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.customClassDropdown11111 .el-dropdown-menu__item{
  background-color: red;
  border-width: 10px;
}
</style>

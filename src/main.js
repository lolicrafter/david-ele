import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui-david';
import 'element-ui-david/lib/theme-chalk/index.css';
Vue.config.productionTip = false
Vue.use(ElementUI);
// import VueVideoPlayer from 'vue-video-player'
// require videojs style
import 'video.js/dist/video-js.css'
import 'vue-video-player/src/custom-theme.css'
//引入 hls
import 'videojs-contrib-hls'

// Vue.use(VueVideoPlayer)

new Vue({
  render: h => h(App),
}).$mount('#app')

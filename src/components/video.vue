<template>
  <video-player class="video-player vjs-custom-skin" :options="playerOptions"></video-player>
</template>

<script>
import 'video.js/dist/video-js.css'
import 'vue-video-player/src/custom-theme.css'
import VueVideoPlayer from 'vue-video-player'
import Vue from "vue";
Vue.use(VueVideoPlayer)
 export default {
  name: 'ThisvideoPlayer',
  data() {
    return {
      // 视频播放器配置
      playerOptions: {
        height: 400,
        playbackRates: [0.7, 1.0, 1.5, 2.0], // 播放速度
        autoplay: true, // 如果true,浏览器准备好时开始回放。
        muted: true, // 默认情况下将会消除任何音频。
        loop: true, // 导致视频一结束就重新开始。
        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: 'zh-CN',
        aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        crossorigin: 'anonymous', // 设置HTML5视频播放器的crossOrigin属性。要求使用服务器配置CORS响应头。有关详细信息，请参阅MDN文档
        sources: [
          {
            // type: 'video/x-mpegURL', // 这里的种类支持很多种：基本视频格式、直播、流媒体等，具体可以参看git网址项目
            // src: require("../../assets/277003.mp4") // url地址
            // src: require('./testVideo.mp4') // url地址
            // src: 'https://vjs.zencdn.net/v/oceans.mp4' // url地址
            // src: 'https://d2zihajmogu5jn.cloudfront.net/sintel/master.m3u8' // url地址
            // src: 'http://cg12.hunancatv.cn:9090/live/CWJD.m3u8?t=Q3ZTI5YWVmMmUwM==&d=7e29aef2e03907f&pid=&cid=20&u=freeuser&l=001&sid=My5f5evM7A+JM7kBEt7zRg==&r=20240116195900&e=20240117195900&nc=5juVZbdBPOgB&a=7&v=2&hlsSessionID=7114844658832085543&srchost=172.16.22.158:8060&gid=1cTuE8i8Z%2F6MoBf3Sw1THw%3D%3D' // url地址
            // src: 'https://gctxyc.liveplay.myqcloud.com/gc/emsyh_1/index.m3u8?contentid=2820180516001' // url地址
            src:'https://iptv.luas.edu.cn/liverespath/b455c7a019d404d571655c457e0ee8a9440a7802/e0eea3f2cd-0-0-7b16046e28b9e794d06c5fbcc82d37b9/index.m3u8'
          }
        ],
        // poster: require('../../assets/loading.gif'), // 你的封面地址
        // width: document.documentElement.clientWidth, //播放器宽度
        notSupportedMessage: '此视频暂无法播放，请稍后再试', // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true // 全屏按钮
        }
      }
    }
  }
}

</script>

<style scoped>
.vjs-custom-skin{
  width: 100%;
  height: 100%;
}
</style>


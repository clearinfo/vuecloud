<template>
  <div id="app">
    <div align="center"><img alt="Vue logo" src="./assets/logo.png"></div>
    <router-view></router-view>
    <footer class="aui-bar aui-bar-tab">
        <div class="aui-bar-tab-item aui-active" tapmode>
          <router-link to="/">
            <i class="aui-iconfont aui-icon-home"></i>
            <div class="aui-bar-tab-label">首页</div>
          </router-link>
        </div>
        <div class="aui-bar-tab-item" tapmode>
          <router-link to="/HelloWorld">
            <i class="aui-iconfont aui-icon-star"></i>
            <div class="aui-bar-tab-label">收藏</div>
          </router-link>
        </div>
        <div class="aui-bar-tab-item" tapmode>
            <div class="aui-badge">99</div>
            <i class="aui-iconfont aui-icon-cart"></i>
            <div class="aui-bar-tab-label">购物车</div>
        </div>
        <div class="aui-bar-tab-item" tapmode>
            <div class="aui-dot"></div>
            <i class="aui-iconfont aui-icon-my"></i>
            <div class="aui-bar-tab-label">我的</div>
        </div>
    </footer>
  </div>
</template>
<script>
export default {
  name: 'app',
  data(){
    return {
      msg:''
    }
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

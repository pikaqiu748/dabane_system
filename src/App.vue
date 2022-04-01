<template>
  <div id="app">
    <keep-alive include="Home">
      <router-view></router-view>
    </keep-alive>
    <!-- <div><img src="E:\dabane\dbe_system\src\assets\gif\zuoshang.gif"></div> -->
  </div>
</template>
<style>
@import './assets/css/main.css';
@import './assets/css/color-dark.css'; /*深色主题*/
/*@import "./assets/css/theme-green/color-green.css";   浅绿色主题*/
/*取消百度地图logo*/
.anchorBL {
    display: none;
}
</style>
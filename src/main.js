import Vue from 'vue';
import App from './App.vue';
import router from './router';
import ElementUI from 'element-ui';
import VueI18n from 'vue-i18n';
import { messages } from './components/common/i18n';
import 'element-ui/lib/theme-chalk/index.css'; // 默认主题
// import './assets/css/theme-green/index.css'; // 浅绿色主题
import './assets/css/icon.css';
import './components/common/directives';
import 'babel-polyfill';
import vueParticles from 'vue-particles'
// import Vcomp from './components/common/index.js'
import Vcomp from './components/common/index'
import Toast from './components/common/toast/index.js'
import { zrender } from 'zrender';
import axios from 'axios'
import '@/assets/styles/base.scss'
import '@/assets/styles/common.scss'
import '@/assets/iconfont/iconfont.css'
import Cookies from 'js-cookie'
import * as echarts from 'echarts'
import 'echarts-wordcloud';
import dataV from '@jiaminghi/data-view'

import VueAMap from 'vue-amap';
// import 'lib-flexible';

Vue.use(VueAMap);
Vue.use(dataV)

Vue.prototype.axios = axios;
Vue.prototype.$echarts = echarts
Vue.prototype.$zrender = zrender
Vue.use(vueParticles)
Vue.use(Vcomp)
Vue.use(VueI18n);


// Vue.prototype.$show=true

VueAMap.initAMapApiLoader({
  // 高德的key
  key: 'YOUR_KEY',
  // 插件集合
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
  // 高德 sdk 版本，默认为 1.4.4
  v: '1.4.4'
});

Vue.use(ElementUI, {
  size: 'small'
});

Vue.use(dataV)
Vue.prototype.$Toast = Toast
Vue.config.productionTip = false;

const i18n = new VueI18n({
  locale: 'zh',
  messages
});

//使用钩子函数对路由进行权限跳转
router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | 大班额可视化`;
  // const role = localStorage.getItem('ms_username');
  const role = Cookies.get('role')
  // const role = '2'
  if (!role && to.path !== '/login') {
    next('/login');
  } else if (to.meta.permission) {
    if (role !== '1') {
      alert('请先登录!!')
    }
    // 如果是管理员权限则可进入，这里只是简单的模拟管理员权限而已
    console.log('permission:', role)
    role === '1' ? next() : next('/dashboard');

    // next()
  } else {
    // 简单的判断IE10及以下不进入富文本编辑器，该组件不兼容
    if (navigator.userAgent.indexOf('MSIE') > -1 && to.path === '/editor') {
      Vue.prototype.$alert('vue-quill-editor组件不兼容IE10及以下浏览器，请使用更高版本的浏览器查看', '浏览器不兼容通知', {
        confirmButtonText: '确定'
      });
    } else {
      next();
    }
  }
});

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app');

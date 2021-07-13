import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import singleSpaVue from 'single-spa-vue'

Vue.config.productionTip = false

// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount('#app')

const appOptions = {
  el: '#vue',   //挂载到父应用中的id为vue的标签中
  router,
  store,
  render: h => h(App)
}

const vueLifeCycle = singleSpaVue({        
  Vue,
  appOptions
})
//如果是父应用引用我
if(window.singleSpaNavigate){
  __webpack_public_path__ = 'http://localhost:10000/'             //父应用调用时都会加个绝对路径，应为父应用切换路由时用的是子路由
}



//协议接入   定义好了协议  父应用会调用这些方法
export const bootstrap = vueLifeCycle.bootstrap;
export const mount = vueLifeCycle.mount;
export const unmount = vueLifeCycle.unmount;

//父应用加载子应用，将子应用打包成一个个lib去给父应用使用
//子应用暴露bootstrap mount unmount
//single-spa / npm i single-spa-vue -D
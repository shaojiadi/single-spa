import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { registerApplication, start } from 'single-spa'

async function loadScript(url){
  return new Promise((resolve,reject)=>{
    let script = document.createElement('script');
    script.src = url;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  })
}


registerApplication('myVueApp',      
  async ()=>{
    //systemJS 模块规范 
    console.log('load');
    await loadScript(`http://localhost:10000/js/chunk-vendors.js`);
    await loadScript(`http://localhost:10000/js/app.js`);
    return window.singleVue; //window的方法都有了，bootstrap mount unmount
  },
  location => location.pathname.startsWith('/vue')   //用户切换到/vue的路径下，我需要加载刚才定义的子应用
)
start();

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

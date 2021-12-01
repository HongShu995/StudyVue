import Vue from 'vue'
import App from './App'
// import VueRouter from "vue-router";
import router from '../router' //自动扫描里面的路由配置
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Axios from "axios";
import VueAxios from 'vue-axios'

Vue.config.productionTip = false

//显示声明使用VueRouter
// Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.use(VueAxios,Axios);


new Vue({
  el: '#app',
  router,
  render: h => h(App),//ElementUI
  components: { App },
  template: '<App/>'
})

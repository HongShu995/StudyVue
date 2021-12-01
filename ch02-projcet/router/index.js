import Vue from 'vue'
import VueRouter from 'vue-router';
import Content from "../src/views/Content";
import Main from "../src/views/Main";
import Java from "../src/views/Java";
import Login from "../src/views/Login";
import List from "../src/views/user/List";
import UserProfile from "../src/views/user/Profile";
import NotFound from "../src/views/NotFound";

//安装路由
Vue.use(VueRouter);


//配置导出路由
export default new VueRouter({
  mode: "history",
  routes: [
    {
      //路由路径
      path: '/content',
      name: 'content',
      //跳转的组件
      component: Content
    },
    {
      path: '/main/:name',
      name: 'name',
      component: Main,
      props: true,
      //嵌套路由
      children: [
        {path: '/user/profile/:id',name: "UserProfile",component: UserProfile,props: true},
        {path: '/user/list',component: List}
      ]
    },
    {
      path: '/java',
      name: 'java',
      component: Java
    },
    {
      path: '/login',
      component: Login,
    },
    {
      path: "/goHome",
      redirect: '/main'
    },
    {
      path: '*',
      component: NotFound
    }
  ]
});

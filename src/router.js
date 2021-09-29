import Vue from 'vue'
import Router from 'vue-router'
// import { nextTick } from 'vue/types/umd'
// import Home from './components/Home.vue'
// import Login from './components/Login.vue'
// import store from './vuex'
Vue.use(Router)
const router = new Router({
    mode:'history',
    routes:[
        {
            path:'/home',
            name:"home", 
            component:() => import("./components/Home.vue"),
            meta:{isLogin:true}
        },
        {
            path:'/login',
            name:"login",
            component:() => import("./components/Login.vue")
        }
        
    ]
})

router.beforeEach((to, from, next) => { 
    const token = localStorage.getItem("state");

    if (token) {
       if (to.matched.some(route => route.meta.isLogin)) {
          next();
       } else {
          next({name: 'home'})
       }
    } else if (!token &&
       (to.name === 'login' )) {
       next()
    } else {
       next({name: 'login'});
    }
})

export default router;
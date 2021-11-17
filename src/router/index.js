import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'

Vue.use(Router)
const router = new Router({
    mode: 'history',
    routes
})

router.beforeEach((to, from, next) => {
    const token = localStorage.getItem("state");

    if (token) {
        if (to.matched.some(route => route.meta.isLogin)) {
            next();
        } else {
            next({ name: 'home' })
        }
    } else if (!token &&
        (to.name === 'login')) {
        next()
    } else {
        next({ name: 'login' });
    }
})

export default router;
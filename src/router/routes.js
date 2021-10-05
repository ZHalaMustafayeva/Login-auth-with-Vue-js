
const routes =  [
    {
        path: '/home',
        name: "home",
        component: () => import("../components/Home.vue"),
        meta: { isLogin: true }
    },
    {
        path: '/login',
        name: "login",
        component: () => import("../components/Login.vue")
    }
]

export default routes;
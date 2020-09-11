import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [{
        path: "/",
        redirect: "/index"
    },
    {
        path: "/index",
        component: () =>
            import ("@/views/Index")
    },
    {
        path: "/find",
        component: () =>
            import ("@/views/Find")
    },
    {
        path: "/city",
        component: () =>
            import ("@/views/City")
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
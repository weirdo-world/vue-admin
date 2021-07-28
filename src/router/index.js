import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from '../views/Index'
import Home from '../views/Home'
import About from '../views/About'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const routes = [
    {
        path: '/', //路径
        id: 0,
        name: '导航一',
        component: Index, //组件
        show: true,
        redirect: "Index",
        children: [
            {
                path: 'Home',
                id: 2,
                name: '菜单一',
                component: Home,
            },
            {
                path: 'About',
                id: 3,
                name: '菜单二',
                component: About,
            }
        ]
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router

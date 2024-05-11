import { createRouter, createWebHashHistory } from 'vue-router';
import Login from '../views/Login.vue';
import Dashboard from '../views/Dashboard.vue';
import Notice from '../views/system/Notice';

const routes = [
    {
        path: '/',
        name: 'home',
        component: Login,
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        children: [
            {
                path: ':type/:menu',
                component: () => import('../views/Content.vue'),
            },
            {
                path: 'home',
                component: () => import('../views/Home.vue'),
            },
            {
                path: 'notice',
                children: [
                    {
                        path: 'notice',
                        component: <Notice />,
                    },
                ],
            },
        ],
        component: Dashboard,
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    },
];

const router = createRouter({
    history: createWebHashHistory('/'),
    routes,
});

export default router;

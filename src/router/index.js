import { createRouter, createWebHashHistory } from 'vue-router';
import Login from '../views/Login.vue';
import Dashboard from '../views/Dashboard.vue';
import Notice from '../views/system/Notice';
import SamplePage5 from '../views/sampletest/SamplePage5';
import LectureDetail from '../views/sampletest/sampletest5/LectureDetail';

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
            {
                path: 'sampletest',
                children: [
                    {
                        path: 'samplepage5',
                        component: <SamplePage5 />,
                    },
                    {
                        path: 'detail/:id',
                        component: <LectureDetail />,
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

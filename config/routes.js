const { resolve } = require('path');
export default[
    {
        path: '/',
        name: 'Home',
        component: resolve(__dirname, '../pages/Home'),
    },
    {
        path: '/login',
        name: 'Login',
        component: resolve(__dirname, '../pages/auth/Login'),
    },
    {
        path: '/register',
        name: 'Register',
        component: resolve(__dirname, '../pages/auth/Register'),
    },
    {
        path: '/user-profile',
        name: 'UserProfile',
        component: resolve(__dirname, '../pages/user/UserProfile'),
    },
    {
        path: '/project-detail',
        name: 'ProjectDetail',
        component: resolve(__dirname, '../pages/ProjectDetail'),
    },
    {
        path: '/:slug',
        name: 'ProjectsPage',
        component: resolve(__dirname, '../pages/ProjectsPage'),
    },
]
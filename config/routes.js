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
        path: '/user/:slug',
        name: 'UserProfile',
        component: resolve(__dirname, '../pages/user/UserProfile'),
    },
    {
        path: '/project-detail/:slug',
        name: 'ProjectDetail',
        component: resolve(__dirname, '../pages/ProjectDetail'),
    },
    {
        path: '/menu/:slug',
        name: 'ProjectsPage',
        component: resolve(__dirname, '../pages/ProjectsPage'),
    },
    {
        path: '/social-media',
        name: 'SocialMedia',
        component: resolve(__dirname, '../pages/SocialMedia'),
    },
    {
        path: '/find-job',
        name : 'FindWork',
        component: resolve(__dirname,'../pages/FindWork.vue')
    },
    {
        path: '/find-job/:id',
        name : 'FindJobDetail',
        component: resolve(__dirname,'../pages/FindJobDetail.vue')
    },
    {
        path: '/blog',
        name : 'Blog',
        component: resolve(__dirname,'../pages/Blog.vue')
    },
    {
        path: '/blog/:slug',
        name : 'BlogDetail',
        component: resolve(__dirname,'../pages/BlogDetail.vue')
    },
    {
        path: '/upload-project',
        name : 'UploadProject',
        component: resolve(__dirname,'../pages/UploadProject.vue')
    }
]
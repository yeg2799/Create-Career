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
]
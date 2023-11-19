export const routes = [
    { path: '/', name: '', title: '首页', component: ()=>import('@/components/HelloWorld.vue') },
	{ path: '/index', name: 'index', title: '首页', component: ()=>import('@/components/HelloWorld.vue') },
	{ path: '/main', name: '', title: 'main', component: ()=>import('@/pages/MainPage.vue') },

	{ path: '/login', name: 'Login', title: '登录', component: ()=>import('@/pages/NewLogin.vue') },
]
export const routes = [
    { path: '/', name: '', title: '首页', component: ()=>import('@/components/HelloWorld.vue') },
	{ path: '/index', name: 'index', title: '首页', component: ()=>import('@/components/HelloWorld.vue') },
	{ path: '/main', name: '', title: 'main', component: ()=>import('@/pages/MainPage.vue') },

	{ path: '/login', name: 'Login', title: '登录', component: ()=>import('@/pages/NewLogin.vue') },
	{ path: '/admin', name: 'admin', title: '管理审核', component: ()=>import('@/pages/AdminPage.vue')},
    { path: '/', name: '', title: '首页', component: ()=>import('@/pages/MainPage.vue') },
	{ path: '/index', name: 'index', title: '首页', component: ()=>import('@/pages/MainPage.vue') },
	{ path: '/main', name: '', title: 'main', component: ()=>import('@/components/HelloWorld.vue') },
	{ path: '/person', name: '', title: 'person', component: ()=>import('@/pages/PersonPage.vue') },
	{ path: '/editinfo', name: '', title: 'editinfo', component: ()=>import('@/pages/EditInfoPage.vue') },
]
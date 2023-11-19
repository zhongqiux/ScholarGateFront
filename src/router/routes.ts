export const routes = [
    { path: '/', name: '', title: '首页', component: ()=>import('@/pages/MainPage.vue') },
	{ path: '/index', name: 'index', title: '首页', component: ()=>import('@/pages/MainPage.vue') },
	{ path: '/main', name: '', title: 'main', component: ()=>import('@/components/HelloWorld.vue') },
	{ path: '/person', name: '', title: 'person', component: ()=>import('@/pages/PersonPage.vue') },
	{ path: '/editinfo', name: '', title: 'editinfo', component: ()=>import('@/pages/EditInfoPage.vue') },
]
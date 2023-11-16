export const routes = [
    { path: '/', name: '', title: '首页', component: ()=>import('@/components/HelloWorld.vue') },
	{ path: '/index', name: 'index', title: '首页', component: ()=>import('@/components/HelloWorld.vue') },
	{ path: '/main', name: '', title: 'main', component: ()=>import('@/pages/MainPage.vue') },
	{path: '/explore', name: 'explore', title: '检索结果', component: ()=>import('@/pages/SearchDetail.vue')},
]
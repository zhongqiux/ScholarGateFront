export const routes = [
    {path: '/admin', name: 'admin', title: '管理审核', component: () => import('@/pages/AdminPage.vue'),
        children:[{
          path: 'issue',
          name: 'issue',
          component: ()=>import('../components/Admin/Issue.vue'),
        }, 
        {
          path: 'board',
          name: 'board',
          component: ()=>import('../components/Admin/DashBoard.vue')
        }
      ]
    },
    {path: '/', name: '', title: '首页', component: () => import('@/pages/MainPage.vue')},
    {path: '/index', name: 'index', title: '首页', component: () => import('@/pages/MainPage.vue')},
    {path: '/main', name: '', title: 'main', component: () => import('@/components/HelloWorld.vue')},
    {path: '/person', name: '', title: 'person', component: () => import('@/pages/PersonPage.vue')},
    {path: '/editinfo', name: '', title: 'editinfo', component: () => import('@/pages/EditInfoPage.vue')},
    {path: '/result', name: '', title: 'result', component: () => import('@/pages/ResultPage.vue')},
    {path: '/patent', name: '', title: 'patent', component: () => import('@/pages/PatentPage.vue')},
    {path: '/explore', name: '', title: 'explore', component: () => import('@/pages/SearchDetail.vue')},
    {path: '/login', name: '', title: '登录', component: () => import('@/pages/NewLogin.vue')},

	{ path: '/login', name: 'Login', title: '登录', component: ()=>import('@/pages/NewLogin.vue') },
	{ path: '/field', name: '', title: '领域', component: ()=>import('@/pages/FieldPage.vue') },
]
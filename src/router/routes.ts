export const routes = [
    {path: '/admin', name: 'admin', title: '管理审核', component: () => import('@/pages/AdminPage.vue')},
    {path: '/', name: '', title: '首页', component: () => import('@/pages/MainPage.vue')},
    {path: '/index', name: 'index', title: '首页', component: () => import('@/pages/MainPage.vue')},
    {path: '/main', name: '', title: 'main', component: () => import('@/components/HelloWorld.vue')},
    {path: '/person', name: '', title: 'person', component: () => import('@/pages/PersonPage.vue')},
    {path: '/researcher', name: '', title: 'researcher', component: () => import('@/pages/ResearcherPage.vue')},
    {path: '/result', name: '', title: 'result', component: () => import('@/pages/ResultPage.vue')},
    {path: '/patent', name: '', title: 'patent', component: () => import('@/pages/PatentPage.vue')},
    {path: '/explore', name: '', title: 'explore', component: () => import('@/pages/SearchDetail.vue')},
    {path: '/login', name: '', title: '登录', component: () => import('@/pages/NewLogin.vue')}
]
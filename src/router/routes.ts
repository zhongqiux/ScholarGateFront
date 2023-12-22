import { RouteLocationNormalized } from 'vue-router';

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
    {path: '/hotInformation', name: '', title: '热门数据', component: ()=>import('@/pages/HotInformation'),
      children:[
        { path: 'field', name: '', title: '领域热门数据', component: ()=>import('@/pages/HotInformation/Field.vue') },
        { path: 'institution', name: '', title: '机构热门数据', component: ()=>import('@/pages/HotInformation/Institution.vue') },
        { path: 'scholar', name: '', title: '学者热门数据', component: ()=>import('@/pages/HotInformation/Scholar.vue')},
      ]
    },
    {path: '/', name: '', title: '首页', component: () => import('@/pages/MainPage.vue')},
    // {path: '/index', name: 'index', title: '首页', component: () => import('@/pages/MainPage.vue')},
    {path: '/main', name: '', title: 'main', component: () => import('@/components/HelloWorld.vue')},
    {path: '/person', name: '', title: 'person', component: () => import('@/pages/PersonPage.vue')},
    {path: '/researcher', name: '', title: 'researcher', component: () => import('@/pages/ResearcherPage.vue')},
    {path: '/result', name: '', title: 'result', component: () => import('@/pages/ResultPage.vue')},
    {path: '/patent', name: '', title: 'patent', component: () => import('@/pages/PatentPage.vue')},
    {path: '/explorePaper', name: '', title: 'explorePaper', component: () => import('@/pages/SearchDetail.vue')},
    {path: '/exploreAuthor', name: '', title: 'exploreAuthor', component: () => import('@/pages/SearchAuthor.vue')},
    {path: '/login', name: '', title: '登录', component: () => import('@/pages/NewLogin.vue')},
	  { path: '/field', name: '', title: '领域', component: ()=>import('@/pages/FieldPage.vue') },
    {path: '/messages', name: 'Messages', title: '消息中心', component: ()=>import('@/pages/Messages.vue')},
    {path: '/messagedetail', name: '', title: '消息', component: ()=>import('@/pages/MessageDetail.vue')},
    {
      path: '/index',
      component: () => import('@/pages/VerifyPage.vue'), // 你的 Index 页面组件
      props: (route: RouteLocationNormalized) => ({
        token: route.query.token as string,
        user: route.query.user as string,
        mail: route.query.mail as string,
        doi: route.query.doi as string,
      }),
    },
]
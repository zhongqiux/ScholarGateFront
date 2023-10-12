import { routes } from "./routes";
import { createRouter, createWebHistory } from 'vue-router'
import { useCounterStore } from '@/store'

// 路由参数配置
export const router = createRouter({
    // 使用hash(createWebHashHistory)模式，(createWebHistory是HTML5历史模式，支持SEO)
    history: createWebHistory(),
    routes: routes,
})

// 全局前置守卫，这里可以加入用户登录判断
router.beforeEach((to, from, next) => {
    // 继续前进 next()
    // 返回 false 以取消导
	const store = useCounterStore()
    console.log(from)
    console.log(to)
	console.log(store.count)
    next()
})

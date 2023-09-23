import {createRouter, createWebHashHistory} from 'vue-router'

// 本地静态路由
export const constantRoutes = [
	{
		path: '/login',
		component: () => import('../views/auth/login/Login.vue'),
		meta: {
			isParentView: true
		}
	},
	{
		path: '/test',
		component: () => import('../views/test/test.vue'),
	},
	{
		path: '/:pathMatch(.*)*', // 防止刷新时路由未找到警告提示
		component: () => import('../views/error/404/404.vue'),
	}
];

// 创建路由
const router = createRouter({
	history: createWebHashHistory(),
	routes: constantRoutes,
})

export default router;
import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store/store';
Vue.use(VueRouter);

const routes = [
	{
		path: '/login',
		name: '로그인 페이지',
		meta: { auth: true },
		component: () => import('@/views/Login.vue'),
	},
	{
		path: '/admin/deptRegistration',
		meta: { admin: true },
		component: () => import('@/views/admin/DeptRegistration.vue'),
	},
	{
		path: '/admin/holiday',
		meta: { admin: true },
		component: () => import('@/views/admin/Holiday.vue'),
	},
	{
		path: '/admin/permissions',
		meta: { admin: true },
		component: () => import('@/views/admin/Permission.vue'),
	},
	{
		path: '/admin/permissionsGroup',
		meta: { admin: true },
		component: () => import('@/views/admin/PermissionsGroup.vue'),
	},
	{
		path: '/admin/userRegistration',
		meta: { admin: true },
		component: () => import('@/views/admin/UserRegistration.vue'),
	},
	{
		path: '/my/myPage',
		component: () => import('@/views/my/MyPage.vue'),
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

router.beforeEach((to, from, next) => {
	if (to.meta.admin && !store.getters.isAdmin) {
		store._vm.$message({
			type: 'info',
			message: '해당 페이지에 접근 권한이 없습니다.',
		});
		next(from.path);
		return;
	} else if (!to.meta.auth && !store.getters.isLogin) {
		if (to.path != '/' && to.path != '/login') {
			store._vm.$message({
				type: 'info',
				message: '인증이 필요합니다',
			});
		}

		next('/login');
		return;
	} else if (to.path == '/login' && store.getters.getToken) {
		next('/');
	}
	next();
});

export default router;

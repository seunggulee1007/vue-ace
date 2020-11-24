import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store/store';
Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		redirect: '/admin/deptRegistration',
	},
	{
		path: '/login',
		name: '로그인 페이지',
		meta: { auth: true },
		component: () => import('@/views/Login.vue'),
	},
	{
		path: '/admin/deptRegistration',
		component: () => import('@/views/admin/DeptRegistration.vue'),
	},
	{
		path: '/admin/holiday',
		component: () => import('@/views/admin/Holiday.vue'),
	},
	{
		path: '/admin/permission',
		component: () => import('@/views/admin/Permission.vue'),
	},
	{
		path: '/admin/permissionGroup',
		component: () => import('@/views/admin/PermissionsGroup.vue'),
	},
	{
		path: '/admin/userRegistration',
		component: () => import('@/views/admin/UserRegistration.vue'),
	},
	{
		path: '*',
		component: () => import('@/views/NotFoundPage.vue'),
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

router.beforeEach((to, from, next) => {
	if (!to.meta.auth && !store.getters.isLogin) {
		console.log('인증이 필요합니다.');
		next('/login');
		return;
	} else if (to.path == '/login' && store.getters.getToken) {
		next('/');
	}
	next();
});

export default router;

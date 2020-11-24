import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store/store';
Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		redirect: '/menu/module',
	},
	{
		path: '/login',
		name: '로그인 페이지',
		meta: { auth: true },
		component: () => import('@/views/Login.vue'),
	},
	{
		path: '/menu/module',
		component: () => import('@/views/menu/Module.vue'),
	},
	{
		path: '/menu/program',
		component: () => import('@/views/menu/Program.vue'),
	},
	{
		path: '/contract/client',
		component: () => import('@/views/contract/Client.vue'),
	},
	{
		path: '/contract/clientModule',
		component: () => import('@/views/contract/ClientModule.vue'),
	},
	{
		path: '/menu/systemCode',
		component: () => import('@/views/menu/SystemCode.vue'),
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

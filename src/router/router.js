import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store/store';
Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		redirect: '/flexibleWork/agile/agileWorking',
	},
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
		path: '/flexibleWork/agile/agileWorking',
		component: () => import('@/views/flexibleWork/agile/AgileWorking.vue'),
	},
	{
		path: '/flexibleWork/agile/agileWorkingList',
		component: () => import('@/views/flexibleWork/agile/AgileWorkingList.vue'),
	},
	{
		path: '/flexibleWork/approval/approvalChange',
		component: () => import('@/views/flexibleWork/approval/ApprovalChange.vue'),
	},
	{
		path: '/flexibleWork/approval/approvalStatus',
		component: () => import('@/views/flexibleWork/approval/ApprovalStatus.vue'),
	},
	{
		path: '/flexibleWork/punctuality/attendance',
		component: () => import('@/views/flexibleWork/punctuality/Attendance.vue'),
	},
	{
		path: '/flexibleWork/punctuality/workingTime',
		component: () => import('@/views/flexibleWork/punctuality/WorkingTime.vue'),
	},
	{
		path: '/flexibleWork/punctuality/workingPattern',
		component: () => import('@/views/flexibleWork/punctuality/WorkingPattern.vue'),
	},
	{
		path: '/flexibleWork/punctuality/overtime',
		component: () => import('@/views/flexibleWork/punctuality/Overtime.vue'),
	},
	{
		path: '/flexibleWork/punctuality/fieldWork',
		component: () => import('@/views/flexibleWork/punctuality/FieldWork.vue'),
	},
	{
		path: '/flexibleWork/punctuality/leave',
		component: () => import('@/views/flexibleWork/punctuality/Leave.vue'),
	},
	{
		path: '/flexibleWork/punctuality/businessTrip',
		component: () => import('@/views/flexibleWork/punctuality/BusinessTrip.vue'),
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
	console.log(store.getters.isAdmin);
	if (to.meta.admin && !store.getters.isAdmin) {
		store._vm.$message({
			type: 'info',
			message: '해당 페이지에 접근 권한이 없습니다.',
		});
		next(from.path);
		return;
	} else if (!to.meta.auth && !store.getters.isLogin) {
		store._vm.$message({
			type: 'info',
			message: '인증이 필요합니다',
		});
		next('/login');
		return;
	} else if (to.path == '/login' && store.getters.getToken) {
		next('/');
	}
	next();
});

export default router;

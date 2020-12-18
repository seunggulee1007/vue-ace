<template>
	<header class="header user-header">
		<a href="/">
			<h1 class="logo logo-line">
				<p class="mark">
					<span>A</span>
				</p>
				<p>
					<span><span class="color">ACE</span> Business Portal</span>
					<span>Agile Centric Efficiency</span>
				</p>
			</h1>
		</a>
		<ul class="util-menu">
			<li class="util-menu__link">
				<button type="button" class="button__alert">
					<span class="icon icon-alert">
						<span class="blind">알림</span>
					</span>
				</button>
			</li>
			<li class="util-menu__link">
				<div class="user-name">
					<div class="img-user">
						<img src="/images/sample1.jpeg" alt="" />
					</div>
					<p>{{ this.$store.getters.getUserNm }}</p>
				</div>
				<span class="icon icon-arrow"></span>
				<ul class="account-menu">
					<li>
						<a href="/mypage.html">마이페이지</a>
					</li>
					<li>
						<button class="button__logout">로그아웃</button>
					</li>
				</ul>
				<button class="button" @click="goAdminView" v-if="this.$store.getters.isAdmin">관리자 페이지</button>
			</li>
		</ul>
	</header>
</template>

<script>
import { selectRouterMenuList } from '@/api/menu';

export default {
	async mounted() {
		let res = await selectRouterMenuList();

		if (res.result == 0) {
			let list = [];
			for (let route of res.data) {
				list.push({
					path: route.path,
					name: route.name,
					component: () =>
						import(
							`@/views${route.path.substring(0, route.path.lastIndexOf('/') + 1)}${route.component}.vue`
						),
				});
			}
			// 리스트 중 가장 첫번째로 보낸다
			list.push({ path: '/', redirect: list[0].path });
			list.push({ path: '*', component: () => import('@/views/NotFoundPage.vue') });
			this.$store.commit('setRouterMenuList', res.data);
			console.log(this.$router);
			this.$router.addRoutes(list);
			console.log(this.$router);
			console.log('router에 값 넣음');
		}
	},
	methods: {
		async logoutUser() {
			if (await this.sConfirm('로그아웃 하시겠습니까?')) {
				this.$store.commit('clearLoginInfo');
				this.$router.push('/login');
			}
		},
		goAdminView() {
			this.$store.commit('setAdminView');
			this.$router.push('/admin/deptRegistration');
		},
	},
};
</script>

<style></style>

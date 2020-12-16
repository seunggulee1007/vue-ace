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
					<p>홍길동</p>
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
import { deleteCookie } from '@/utils/cookies';
export default {
	computed: {
		isUserLogin() {
			return this.$store.getters.isLogin;
		},
	},
	methods: {
		async logoutUser() {
			if (await this.sConfirm('로그아웃 하시겠습니까?')) {
				this.$store.commit('clearLoginInfo');
				deleteCookie(process.env.VUE_APP_USER_NM);
				deleteCookie(process.env.VUE_APP_AUTH_TOKEN);
				deleteCookie(process.env.VUE_APP_USER_ID);
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

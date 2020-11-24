<template>
	<header class="header admin-header" v-if="isUserLogin">
		<div>
			<h1 class="logo logo-vertical">
				<p class="mark">
					<span>A</span>
				</p>
				<p>
					<span><span class="color">ACE</span> Business Portal</span>
					<span>Agile Centric Efficiency</span>
				</p>
			</h1>
			<h2 class="page-title">관리자센터</h2>
			<nav class="gnb">
				<ul class="lst-gnb">
					<li class="lst-gnb__title">
						<p>부서/사용자</p>
					</li>
					<li class="lst-gnb__item on">
						<a href="/admin/dept-registration" class="lst-gnb__link">부서 등록</a>
					</li>
					<li class="lst-gnb__item">
						<a href="/admin/user-registration" class="lst-gnb__link">사용자 등록</a>
					</li>
					<li class="lst-gnb__title">
						<p>권한</p>
					</li>
					<li class="lst-gnb__item">
						<a href="/admin/permissions-group" class="lst-gnb__link">권한그룹 등록</a>
					</li>
					<li class="lst-gnb__item">
						<a href="/admin/permissions" class="lst-gnb__link">권한 등록</a>
					</li>
					<li class="lst-gnb__title">
						<p>휴일</p>
					</li>
					<li class="lst-gnb__item">
						<a href="/admin/holiday" class="lst-gnb__link">휴일 등록</a>
					</li>
				</ul>
			</nav>
		</div>
		<button class="button__logout" @click="logoutUser">로그아웃</button>
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
	},
};
</script>

<style></style>

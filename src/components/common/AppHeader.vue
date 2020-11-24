<template>
	<header class="header admin-header" v-if="isUserLogin">
		<div>
			<h1 class="logo">
				<p class="mark">
					<span>A</span>
				</p>
				<p>
					<span><span class="color">ACE</span> Business Portal</span>
					<span>Agile Centric Efficiency</span>
				</p>
			</h1>
			<h2 class="page-title">슈퍼관리자센터</h2>
			<nav class="gnb">
				<ul class="lst-gnb">
					<li class="lst-gnb__title">
						<p>메뉴</p>
					</li>
					<li class="lst-gnb__item on">
						<a href="/menu/module" class="lst-gnb__link">모듈 등록</a>
					</li>
					<li class="lst-gnb__item">
						<a href="/menu/program" class="lst-gnb__link">프로그램 등록</a>
					</li>
					<li class="lst-gnb__item">
						<a href="/menu/systemCode" class="lst-gnb__link">시스템 코드 등록</a>
					</li>
					<li class="lst-gnb__title">
						<p>계약관리</p>
					</li>
					<li class="lst-gnb__item">
						<a href="/contract/client" class="lst-gnb__link">고객사 등록</a>
					</li>
					<li class="lst-gnb__item">
						<a href="/contract/clientModule" class="lst-gnb__link">고객사 모듈 등록</a>
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

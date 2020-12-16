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
			<h2 class="page__title">관리자센터</h2>
			<nav class="admin-gnb">
				<ul class="lst-gnb">
					<li class="lst-gnb__title">
						<p>부서/사용자</p>
					</li>
					<li class="lst-gnb__item">
						<a href="/admin/deptRegistration" class="lst-gnb__link">부서 등록</a>
					</li>
					<li class="lst-gnb__item">
						<a href="/admin/userRegistration" class="lst-gnb__link">사용자 등록</a>
					</li>
					<li class="lst-gnb__title">
						<p>권한</p>
					</li>
					<li class="lst-gnb__item">
						<a href="/admin/permissionsGroup" class="lst-gnb__link">권한그룹 등록</a>
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
		<button class="button__logout" @click="goUserView">사용자 화면</button>
		<button class="button__logout" @click="logoutUser">로그아웃</button>
	</header>
</template>

<script>
export default {
	computed: {
		isUserLogin() {
			return this.$store.getters.isLogin;
		},
	},
	methods: {
		logoutUser() {
			this.sConfirm('로그아웃 하시겠습니까?', () => {
				this.$store.commit('clearLoginInfo');
				this.$router.push('/login');
			});
		},
		goUserView() {
			this.$store.commit('setAdminView');
			this.$router.push('/flexibleWork/agile/agileWorking');
		},
	},
};
</script>

<style></style>

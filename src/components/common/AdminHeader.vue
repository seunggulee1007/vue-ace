<template>
	<header class="header admin-header">
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
			<button type="button" class="button__nav">
				<span class="nav-bar"></span>
				<span class="nav-bar"></span>
				<span class="nav-bar"></span>
				<span class="blind">메뉴열기</span>
			</button>
			<div class="gnb-wrap">
				<nav class="admin-gnb">
					<ul class="lst-gnb">
						<li class="lst-gnb__title">
							<p>부서/사용자</p>
						</li>
						<li class="lst-gnb__item">
							<router-link to="/admin/deptRegistration" class="lst-gnb__link">부서 등록</router-link>
						</li>
						<li class="lst-gnb__item">
							<router-link to="/admin/userRegistration" class="lst-gnb__link">사용자 등록</router-link>
						</li>
						<li class="lst-gnb__title">
							<p>권한</p>
						</li>
						<li class="lst-gnb__item">
							<router-link to="/admin/permissionsGroup" class="lst-gnb__link">권한그룹 등록</router-link>
						</li>
						<li class="lst-gnb__item">
							<router-link to="/admin/permissions" class="lst-gnb__link">권한 등록</router-link>
						</li>
						<li class="lst-gnb__title">
							<p>휴일</p>
						</li>
						<li class="lst-gnb__item">
							<router-link to="/admin/holiday" class="lst-gnb__link">휴일 등록</router-link>
						</li>
					</ul>
				</nav>
				<div class="buttons">
					<button class="button__main" @click="goUserView">
						<span class="icon icon-user"></span>
						사용자 화면
					</button>
					<button class="button__logout" @click="logoutUser">
						<span class="icon icon-logout"></span>
						로그아웃
					</button>
				</div>
				<button class="button__close mobile"><span class="icon icon-close"></span></button>
			</div>
		</div>
	</header>
</template>

<script>
export default {
	methods: {
		logoutUser() {
			this.sConfirm('로그아웃 하시겠습니까?', () => {
				this.$store.commit('clearLoginInfo');
				this.$store.commit('clearUserInfo');
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

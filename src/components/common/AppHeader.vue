<template>
	<header class="header user-header">
		<div class="header-top">
			<a href="/" class="no-mobile">
				<h1 class="logo logo-line">
					<p class="mark">
						<span>A</span>
					</p>
					<p>
						<span>ACE Business Portal</span>
						<span>Agile Centric Efficiency</span>
					</p>
				</h1>
			</a>
			<button type="button" class="button__back mobile" @click="$router.go(-1)">
				<span class="icon icon-prev-page"></span>
				<span class="blind">이전페이지</span>
			</button>
			<h2 class="section__title mobile">{{ this.$route.name }}</h2>
			<ul class="util-menu no-mobile">
				<li class="util-menu__link">
					<button class="button" @click="goAdminView" v-if="this.$store.getters.isAdmin">
						관리자 페이지
					</button>
				</li>
				<li class="util-menu__link">
					<button type="button" class="button__alert">
						<span class="icon icon-alert">
							<span class="blind">알림</span>
						</span>
					</button>
				</li>
				<li class="util-menu__link" :class="{ show: myPageFlag }">
					<div class="user-name">
						<div class="img-user">
							<img :src="SERVER_URL + getPhoto" alt="" />
						</div>
						<p>{{ this.$store.getters.getUserNm }}</p>
					</div>
					<span class="icon icon-arrow" @click="myPageFlag = !myPageFlag"></span>
					<ul class="account-menu" @click="myPageFlag = !myPageFlag">
						<li>
							<router-link to="/my/myPage">마이페이지</router-link>
						</li>
						<li>
							<button @click="logoutUser">로그아웃</button>
						</li>
					</ul>
				</li>
			</ul>
		</div>
		<nav class="gnb">
			<button type="button" class="lnb-icon flex-box no-mobile">
				<div class="button__lnb">
					<span class="nav-bar"></span>
					<span class="nav-bar"></span>
					<span class="nav-bar"></span>
				</div>
				<span>메뉴</span>
			</button>
			<div class="nav-icon mobile">
				<button type="button" class="button__nav" @click="setMenuOpen">
					<span class="nav-bar"></span>
					<span class="nav-bar"></span>
					<span class="nav-bar"></span>
				</button>
			</div>
			<div class="gnb-wrap" :class="{ show: getMenuOpen }">
				<div class="gnb-top mobile">
					<div class="user-name">
						<div class="img-user">
							<img :src="SERVER_URL + getPhoto" alt="" />
						</div>
						<div class="user-info-box">
							<p class="info__name">
								<span class="bold">{{ this.$store.getters.getUserNm }}</span> 님
							</p>
							<p class="info__dept">컨설팅본부</p>
							<p class="info__id">사원번호 <span class="bold">676324</span></p>
						</div>
						<!-- <p clas="user-name__txt">{{ this.$store.getters.getUserNm }} 님</p> -->
					</div>
					<router-link to="/my/myPage" class="link link-mypage flex-box">마이페이지</router-link>
				</div>
				<ul class="lst-gnb">
					<li class="lst-gnb__item" v-for="(item, idx) in menuList" :key="idx">
						<span>{{ item.menuNm }}</span>
						<div class="gnb-sub" v-if="item.children && item.children.length > 0">
							<ul class="lst-gnb-sub" v-for="children in item.children" :key="children.menuId">
								<li class="lst-sub__title">
									<p>{{ children.menuNm }}</p>
								</li>
								<li class="lst-sub__item" v-for="subChild in children.children" :key="subChild.menuId">
									<router-link :to="subChild.pageUrl" class="lst-sub__link" v-if="subChild.pageUrl">
										<span>{{ subChild.menuNm }}</span>
									</router-link>
									<span v-else>{{ subChild.menuNm }}</span>
								</li>
							</ul>
						</div>
					</li>
				</ul>
				<div class="buttons mobile">
					<button class="button__admin" @click="goAdminView" v-if="this.$store.getters.isAdmin">
						<span class="icon icon-module"></span>
						관리자 페이지
					</button>
					<button class="button__logout" @click="logoutUser">
						<span class="icon icon-logout"></span>
						로그아웃
					</button>
				</div>
				<button class="button__close mobile" @click="setMenuOpen">
					<span class="icon icon-close"></span>
				</button>
			</div>
		</nav>
	</header>
</template>

<script>
import { selectMenuList } from '@/api/menu';
import { mapGetters, mapMutations } from 'vuex';
export default {
	created() {
		this.selectMenuList();
	},
	computed: {
		...mapGetters(['getPhoto', 'getMenuOpen']),
	},
	data() {
		return {
			menuList: [],
			myPageFlag: false,
		};
	},
	methods: {
		...mapMutations(['setMenuOpen']),
		logoutUser() {
			this.sConfirm('로그아웃 하시겠습니까?', () => {
				this.$store.commit('clearLoginInfo');
				this.$store.commit('clearUserInfo');
				this.$router.push('/login');
			});
		},
		goAdminView() {
			this.$store.commit('setAdminView');
			this.$router.push('/admin/deptRegistration');
		},
		async selectMenuList() {
			let res = await selectMenuList();

			if (res.result == 0) {
				this.menuList = res.data.menuList;
				this.routerMenuList = res.data.routerMenuList;
				let list = [];
				for (let route of res.data.routerMenuList) {
					if (!route.pageUrl) {
						continue;
					}
					list.push({
						path: route.pageUrl,
						name: route.menuNm,
						component: () =>
							import(
								`@/views${route.pageUrl.substring(0, route.pageUrl.lastIndexOf('/') + 1)}${
									route.component
								}.vue`
							),
					});
				}
				// 리스트 중 가장 첫번째로 보낸다
				list.push({ path: '/', redirect: list[0].path });
				list.push({ path: '*', component: () => import('@/views/NotFoundPage.vue') });
				this.$store.commit('setRouterMenuList', res.data);
				this.$router.addRoutes(list);
				this.$store.commit('setMenuList', this.menuList);
			}
		},
	},
};
</script>

<style></style>

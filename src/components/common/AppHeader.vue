<template>
	<header class="header user-header">
		<div class="header-top">
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
					<button class="button" @click="goAdminView" v-if="this.$store.getters.isAdmin">
						관리자 페이지
					</button>
				</li>
			</ul>
		</div>
		<nav class="gnb">
			<ul class="lst-gnb">
				<li class="lst-gnb__item" v-for="(item, idx) in menuList" :key="idx">
					<span>{{ item.menuNm }}</span>
					<div class="gnb-sub" v-if="item.children && item.children.length > 0">
						<ul class="lst-gnb-sub" v-for="children in item.children" :key="children.menuId">
							<li class="lst-sub__title">
								<p>{{ item.menuNm }}</p>
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
		</nav>
	</header>
</template>

<script>
import { selectMenuList } from '@/api/menu';
export default {
	created() {
		this.selectMenuList();
	},

	data() {
		return {
			menuList: [],
		};
	},
	methods: {
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

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
				<li class="lst-gnb__item">
					<span class="icon icon-gnb1"></span>
					<span>영업 CRM</span>
					<div class="gnb-sub">
						<ul class="lst-gnb-sub">
							<li class="lst-sub__title">
								<p>영업 기회</p>
							</li>
							<li class="lst-sub__item">
								<a href="../crm/vendor-form.html" class="lst-sub__link">
									<span>거래처 등록</span>
								</a>
							</li>
							<li class="lst-sub__item">
								<a href="../crm/vendor-list.html" class="lst-sub__link">
									<span>거래처 조회</span>
								</a>
							</li>
							<li class="lst-sub__item">
								<a href="../crm/opportunities-form.html" class="lst-sub__link">
									<span>영업 기회 등록</span>
								</a>
							</li>
							<li class="lst-sub__item">
								<a href="../crm/opportunities.html" class="lst-sub__link">
									<span>영업 기회 현황</span>
								</a>
							</li>
						</ul>
						<ul class="lst-gnb-sub">
							<li class="lst-sub__title">
								<p>영업 활동</p>
							</li>
							<li class="lst-sub__item">
								<a href="../crm/activities-form.html" class="lst-sub__link">
									<span>영업 활동 등록</span>
								</a>
							</li>
							<li class="lst-sub__item">
								<a href="../crm/activities.html" class="lst-sub__link">
									<span>영업 활동 현황</span>
								</a>
							</li>
						</ul>
						<ul class="lst-gnb-sub">
							<li class="lst-sub__title">
								<p>고객</p>
							</li>
							<li class="lst-sub__item">
								<a href="../crm/client-form.html" class="lst-sub__link">
									<span>고객 등록</span>
								</a>
							</li>
							<li class="lst-sub__item">
								<a href="../crm/clients.html" class="lst-sub__link">
									<span>고객 현황</span>
								</a>
							</li>
						</ul>
					</div>
				</li>
				<li class="lst-gnb__item on">
					<span class="icon icon-gnb2"></span>
					<span>유연 근무</span>
					<div class="gnb-sub">
						<ul class="lst-gnb-sub">
							<li class="lst-sub__title">
								<p>유연 근무 유형</p>
							</li>
							<li class="lst-lnb__item on">
								<a href="/flexibleWork/agile/agileWorking" class="lst-sub__link">
									<span>유연 근무 등록</span>
								</a>
							</li>
							<li class="lst-sub__item">
								<a href="/flexibleWork/agile/agileWorkingList" class="lst-sub__link">
									<span>유연 근무 조회</span>
								</a>
							</li>
						</ul>
						<ul class="lst-gnb-sub">
							<li class="lst-sub__title">
								<p>근태 관리</p>
							</li>
							<li class="lst-sub__item">
								<a href="/flexibleWork/punctuality/attendance" class="lst-sub__link">
									<span>출/퇴근 등록</span>
								</a>
							</li>
							<li class="lst-sub__item">
								<a href="/flexibleWork/punctuality/workingTime" class="lst-sub__link">
									<span>근무 실적 조회</span>
								</a>
							</li>
							<li class="lst-sub__item">
								<a href="/flexibleWork/punctuality/workingPattern" class="lst-sub__link">
									<span>근무 계획 변경 신청</span>
								</a>
							</li>
							<li class="lst-sub__item">
								<a href="/flexibleWork/punctuality/overtime" class="lst-sub__link">
									<span>연장 근무 신청</span>
								</a>
							</li>
							<li class="lst-sub__item">
								<a href="/flexibleWork/punctuality/fieldWork" class="lst-sub__link">
									<span>외근 신청</span>
								</a>
							</li>
							<li class="lst-sub__item">
								<a href="/flexibleWork/punctuality/leave" class="lst-sub__link">
									<span>휴가 신청</span>
								</a>
							</li>
							<li class="lst-sub__item">
								<a href="/flexibleWork/punctuality/businessTrip" class="lst-sub__link">
									<span>출장 신청</span>
								</a>
							</li>
						</ul>
						<ul class="lst-gnb-sub">
							<li class="lst-sub__title">
								<p>승인 처리</p>
							</li>
							<li class="lst-sub__item">
								<a href="/flexibleWork/approval/approvalChange" class="lst-sub__link">
									<span>승인 처리 (근무 계획 변경)</span>
								</a>
							</li>
							<li class="lst-sub__item">
								<a href="/flexibleWork/approval/approvalStatus" class="lst-sub__link">
									<span>승인 처리 (연장/휴가/외근/출장)</span>
								</a>
							</li>
						</ul>
					</div>
				</li>
				<li class="lst-gnb__item">
					<span class="icon icon-gnb3"></span>
					<span>비용 정산</span>
					<div class="gnb-sub">
						<ul class="lst-gnb-sub">
							<li class="lst-sub__title">
								<p>법인 카드</p>
							</li>
							<li class="lst-sub__item">
								<a href="../expense/expense-card.html" class="lst-sub__link">
									<span>카드 정산 신청</span>
								</a>
							</li>
							<li class="lst-sub__item">
								<a href="../expense/history-card-usage.html" class="lst-sub__link">
									<span>카드 정산 내역</span>
								</a>
							</li>
						</ul>
						<ul class="lst-gnb-sub">
							<li class="lst-sub__title">
								<p>일반 비용</p>
							</li>
							<li class="lst-sub__item">
								<a href="../expense/applying-expense.html" class="lst-sub__link">
									<span>비용 정산 신청</span>
								</a>
							</li>
							<li class="lst-sub__item">
								<a href="../expense/history-expense.html" class="lst-sub__link">
									<span>비용 정산 내역</span>
								</a>
							</li>
						</ul>
					</div>
				</li>
				<li class="lst-gnb__item">
					<span class="icon icon-gnb4"></span>
					<span>WEB 주문</span>
					<div class="gnb-sub">
						<ul class="lst-gnb-sub">
							<li class="lst-sub__item">
								<a href="../order/product-registration.html" class="lst-sub__link">
									<span>품목 등록</span>
								</a>
							</li>
							<li class="lst-sub__item">
								<a href="../order/product-list.html" class="lst-sub__link">
									<span>품목 조회</span>
								</a>
							</li>
							<li class="lst-sub__item">
								<a href="../order/order.html" class="lst-sub__link">
									<span>주문 등록</span>
								</a>
							</li>
							<li class="lst-sub__item">
								<a href="../order/cart.html" class="lst-sub__link">
									<span>장바구니</span>
								</a>
							</li>
							<li class="lst-sub__item">
								<a href="../order/invoice.html" class="lst-sub__link">
									<span>주문서</span>
								</a>
							</li>
							<li class="lst-sub__item">
								<a href="../order/order-list.html" class="lst-sub__link">
									<span>주문 조회</span>
								</a>
							</li>
							<li class="lst-sub__item">
								<a href="../order/payment-confirmation.html" class="lst-sub__link">
									<span>입금 내역 조회</span>
								</a>
							</li>
						</ul>
					</div>
				</li>
				<li class="lst-gnb__item">
					<span class="icon icon-gnb5"></span>
					<span>구매 SCM</span>
				</li>
				<li class="lst-gnb__item">
					<span class="icon icon-gnb6"></span>
					<span>EIS</span>
					<div class="gnb-sub">
						<ul class="lst-gnb-sub">
							<li class="lst-sub__title">
								<p>재무 관리</p>
							</li>
							<li class="lst-sub__item">
								<a href="../eis/financial-analysis.html" class="lst-sub__link">
									<span>재무 분석</span>
								</a>
							</li>
							<li class="lst-sub__item">
								<a href="../eis/profit-and-loss.html" class="lst-sub__link">
									<span>손익 상세</span>
								</a>
							</li>
						</ul>
						<ul class="lst-gnb-sub">
							<li class="lst-sub__title">
								<p>영업 관리</p>
							</li>
							<li class="lst-sub__item">
								<a href="../eis/performance.html" class="lst-sub__link">
									<span>영업 실적</span>
								</a>
							</li>
						</ul>
						<ul class="lst-gnb-sub">
							<li class="lst-sub__title">
								<p>CRM</p>
							</li>
							<li class="lst-sub__item">
								<a href="../eis/eis-opportunities.html" class="lst-sub__link">
									<span>영업 기회 현황</span>
								</a>
							</li>
							<li class="lst-sub__item">
								<a href="../eis/eis-activities.html" class="lst-sub__link">
									<span>영업 활동 현황</span>
								</a>
							</li>
							<li class="lst-sub__item">
								<a href="../eis/revenue-forecast.html" class="lst-sub__link">
									<span>예상 매출 현황</span>
								</a>
							</li>
						</ul>
						<ul class="lst-gnb-sub">
							<li class="lst-sub__title">
								<p>구매 관리</p>
							</li>
							<li class="lst-sub__item">
								<a href="../eis/purchasing-performance.html" class="lst-sub__link">
									<span>구매 실적</span>
								</a>
							</li>
						</ul>
						<ul class="lst-gnb-sub">
							<li class="lst-sub__title">
								<p>프로젝트</p>
							</li>
							<li class="lst-sub__item">
								<a href="../eis/cost-analysis.html" class="lst-sub__link">
									<span>프로젝트 원가 분석</span>
								</a>
							</li>
						</ul>
					</div>
				</li>
			</ul>
		</nav>
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

<template>
	<div class="lnb">
		<ul class="lst-lnb lst-lnb__crm">
			<li class="lst-lnb__item">
				<div>
					영업 CRM
					<span>-</span>
				</div>
				<ul>
					<li class="lst-lnb__item">
						<div>
							영업 기회
							<span>+</span>
						</div>
						<ul>
							<li class="lst-lnb__item">
								<div>
									<router-link to="" class="lst-lnb__link">
										<span>거래처 등록</span>
									</router-link>
								</div>
							</li>
							<li class="lst-lnb__item">
								<div>
									<router-link to="" class="lst-lnb__link">
										<span>거래처 조회</span>
									</router-link>
								</div>
							</li>
							<li class="lst-lnb__item">
								<div>
									<router-link to="" class="lst-lnb__link">
										<span>영업 기회 등록</span>
									</router-link>
								</div>
							</li>
							<li class="lst-lnb__item">
								<div>
									<router-link to="" class="lst-lnb__link">
										<span>영업 기회 현황</span>
									</router-link>
								</div>
							</li>
						</ul>
					</li>
					<li class="lst-lnb__item">
						<div>
							영업 활동
							<span>+</span>
						</div>
						<ul>
							<li class="lst-lnb__item">
								<div>
									<router-link to="" class="lst-lnb__link">
										<span>영업 활동 등록</span>
									</router-link>
								</div>
							</li>
							<li class="lst-lnb__item">
								<div>
									<router-link to="" class="lst-lnb__link">
										<span>영업 활동 현황</span>
									</router-link>
								</div>
							</li>
						</ul>
					</li>
					<li class="lst-lnb__item">
						<div>
							고객
							<span>+</span>
						</div>
						<ul>
							<li class="lst-lnb__item">
								<div>
									<router-link to="" class="lst-lnb__link">
										<span>고객 등록</span>
									</router-link>
								</div>
							</li>
							<li class="lst-lnb__item">
								<div>
									<router-link to="" class="lst-lnb__link">
										<span>고객 현황</span>
									</router-link>
								</div>
							</li>
						</ul>
					</li>
				</ul>
			</li>
		</ul>

		<ul class="lst-lnb lst-lnb__agile">
			<li class="lst-lnb__item">
				<div>
					유연 근무
					<span>-</span>
				</div>
				<ul>
					<li class="lst-lnb__item">
						<div>
							유연 근무 유형
							<span>+</span>
						</div>
						<ul>
							<li class="lst-lnb__item">
								<div>
									<router-link to="/flexibleWork/agile/agileWorking" class="lst-lnb__link">
										<span>유연 근무 등록</span>
									</router-link>
								</div>
							</li>
							<li class="lst-lnb__item">
								<div>
									<router-link to="/flexibleWork/agile/agileWorkingList" class="lst-lnb__link">
										<span>유연 근무 조회</span>
									</router-link>
								</div>
							</li>
						</ul>
					</li>
					<li class="lst-lnb__item">
						<div>
							근태 관리
							<span>+</span>
						</div>
						<ul>
							<li class="lst-lnb__item">
								<div>
									<router-link to="/flexibleWork/punctuality/attendance" class="lst-lnb__link">
										<span>출/퇴근 등록</span>
									</router-link>
								</div>
							</li>
							<li class="lst-lnb__item">
								<div>
									<router-link to="/flexibleWork/punctuality/workingTime" class="lst-lnb__link">
										<span>근무 실적 조회</span>
									</router-link>
								</div>
							</li>
							<li class="lst-lnb__item">
								<div>
									<router-link to="/flexibleWork/punctuality/workingPattern" class="lst-lnb__link">
										<span>근무 계획 변경 신청</span>
									</router-link>
								</div>
							</li>
							<li class="lst-lnb__item">
								<div>
									<router-link to="/flexibleWork/punctuality/overtime" class="lst-lnb__link">
										<span>연장 근무 신청</span>
									</router-link>
								</div>
							</li>
							<li class="lst-lnb__item">
								<div>
									<router-link to="/flexibleWork/punctuality/fieldWork" class="lst-lnb__link">
										<span>외근 신청</span>
									</router-link>
								</div>
							</li>
							<li class="lst-lnb__item">
								<div>
									<router-link to="/flexibleWork/punctuality/leave" class="lst-lnb__link">
										<span>휴가 신청</span>
									</router-link>
								</div>
							</li>
							<li class="lst-lnb__item">
								<div>
									<router-link to="/flexibleWork/punctuality/businessTrip" class="lst-lnb__link">
										<span>출장 신청</span>
									</router-link>
								</div>
							</li>
						</ul>
					</li>
					<li class="lst-lnb__item">
						<div>
							승인 처리
							<span>+</span>
						</div>
						<ul>
							<li class="lst-lnb__item">
								<div>
									<router-link to="/flexibleWork/approval/approvalChange" class="lst-lnb__link">
										<span>승인 처리 (근무 계획 변경)</span>
									</router-link>
								</div>
							</li>
							<li class="lst-lnb__item">
								<div>
									<router-link to="/flexibleWork/approval/approvalStatus" class="lst-lnb__link">
										<span>승인 처리 (연장/휴가/외근/출장)</span>
									</router-link>
								</div>
							</li>
						</ul>
					</li>
				</ul>
			</li>
		</ul>

		<ul class="lst-lnb lst-lnb__expense">
			<li class="lst-lnb__item">
				<div>
					비용 정산
					<span>+</span>
				</div>
				<ul>
					<li class="lst-lnb__item">
						<div>
							법인 카드
							<span>+</span>
						</div>
						<ul>
							<li class="lst-lnb__item">
								<div>
									<router-link to="" class="lst-lnb__link">
										<span>카드 정산 신청</span>
									</router-link>
								</div>
							</li>
							<li class="lst-lnb__item">
								<div>
									<router-link to="" class="lst-lnb__link">
										<span>카드 정산 내역</span>
									</router-link>
								</div>
							</li>
						</ul>
					</li>
					<li class="lst-lnb__item">
						<div>
							일반 비용
							<span>+</span>
						</div>
						<ul>
							<li class="lst-lnb__item">
								<div>
									<router-link to="" class="lst-lnb__link">
										<span>비용 정산 신청</span>
									</router-link>
								</div>
							</li>
							<li class="lst-lnb__item">
								<div>
									<router-link to="" class="lst-lnb__link">
										<span>비용 정산 내역</span>
									</router-link>
								</div>
							</li>
						</ul>
					</li>
				</ul>
			</li>
		</ul>

		<ul class="lst-lnb lst-lnb__order">
			<li class="lst-lnb__item">
				<div>
					WEB 주문
					<span>+</span>
				</div>
				<ul>
					<li class="lst-lnb__item">
						<div>
							<router-link to="" class="lst-lnb__link">
								<span>품목 등록</span>
							</router-link>
						</div>
					</li>
					<li class="lst-lnb__item">
						<div>
							<router-link to="" class="lst-lnb__link">
								<span>품목 조회</span>
							</router-link>
						</div>
					</li>
					<li class="lst-lnb__item">
						<div>
							<router-link to="" class="lst-lnb__link">
								<span>주문 등록</span>
							</router-link>
						</div>
					</li>
					<li class="lst-lnb__item">
						<div>
							<router-link to="" class="lst-lnb__link">
								<span>장바구니</span>
							</router-link>
						</div>
					</li>
					<li class="lst-lnb__item">
						<div>
							<router-link to="" class="lst-lnb__link">
								<span>주문서</span>
							</router-link>
						</div>
					</li>
					<li class="lst-lnb__item">
						<div>
							<router-link to="" class="lst-lnb__link">
								<span>주문 조회</span>
							</router-link>
						</div>
					</li>
					<li class="lst-lnb__item">
						<div>
							<router-link to="" class="lst-lnb__link">
								<span>입금 내역 조회</span>
							</router-link>
						</div>
					</li>
				</ul>
			</li>
		</ul>

		<ul class="lst-lnb lst-lnb__scm">
			<li class="lst-lnb__item">
				<div>
					구매 SCM
					<span>+</span>
				</div>
				<ul>
					<li class="lst-lnb__item">
						<div>
							<router-link to="" class="lst-lnb__link">
								<span>구매 SCM 메뉴</span>
							</router-link>
						</div>
					</li>
				</ul>
			</li>
		</ul>

		<ul class="lst-lnb lst-lnb__eis">
			<li class="lst-lnb__item">
				<div>
					EIS
					<span>+</span>
				</div>
				<ul>
					<li class="lst-lnb__item">
						<div>
							재무 관리
							<span>+</span>
						</div>
						<ul>
							<li class="lst-lnb__item">
								<div>
									<router-link to="" class="lst-lnb__link">
										<span>재무 분석</span>
									</router-link>
								</div>
							</li>
							<li class="lst-lnb__item">
								<div>
									<router-link to="" class="lst-lnb__link">
										<span>손익 상세</span>
									</router-link>
								</div>
							</li>
						</ul>
					</li>
					<li class="lst-lnb__item">
						<div>
							영업 관리
							<span>+</span>
						</div>
						<ul>
							<li class="lst-lnb__item">
								<div>
									<router-link to="" class="lst-lnb__link">
										<span>영업 실적</span>
									</router-link>
								</div>
							</li>
						</ul>
					</li>
					<li class="lst-lnb__item">
						<div>
							CRM
							<span>+</span>
						</div>
						<ul>
							<li class="lst-lnb__item">
								<div>
									<router-link to="" class="lst-lnb__link">
										<span>영업 기회 현황</span>
									</router-link>
								</div>
							</li>
							<li class="lst-lnb__item">
								<div>
									<router-link to="" class="lst-lnb__link">
										<span>영업 활동 현황</span>
									</router-link>
								</div>
							</li>
							<li class="lst-lnb__item">
								<div>
									<router-link to="" class="lst-lnb__link">
										<span>영업 매출 현황</span>
									</router-link>
								</div>
							</li>
						</ul>
					</li>
					<li class="lst-lnb__item">
						<div>
							구매 관리
							<span>+</span>
						</div>
						<ul>
							<li class="lst-lnb__item">
								<div>
									<router-link to="" class="lst-lnb__link">
										<span>구매 실적</span>
									</router-link>
								</div>
							</li>
						</ul>
					</li>
					<li class="lst-lnb__item">
						<div>
							프로젝트
							<span>+</span>
						</div>
						<ul>
							<li class="lst-lnb__item">
								<div>
									<router-link to="" class="lst-lnb__link">
										<span>프로젝트 원가 분석</span>
									</router-link>
								</div>
							</li>
						</ul>
					</li>
				</ul>
			</li>
		</ul>

		<!-- <ul class="lst-lnb lst-lnb__crm">
			<li class="lst-lnb__item">
				<p>영업 기회</p>
				<ul class="lst-lnb-sub">
					<li class="lst-lnb-sub__item">
						<router-link to="" class="lst-lnb-sub__link">
							<span>거래처 등록</span>
						</router-link>
					</li>
					<li class="lst-lnb-sub__item">
						<router-link to="" class="lst-lnb-sub__link">
							<span>거래처 조회</span>
						</router-link>
					</li>
					<li class="lst-lnb-sub__item">
						<router-link to="" class="lst-lnb-sub__link">
							<span>영업 기회 등록</span>
						</router-link>
					</li>
					<li class="lst-lnb-sub__item">
						<router-link to="" class="lst-lnb-sub__link">
							<span>영업 기회 현황</span>
						</router-link>
					</li>
				</ul>
			</li>
			<li class="lst-lnb__item">
				<p>영업 활동</p>
				<ul class="lst-lnb-sub">
					<li class="lst-lnb-sub__item">
						<router-link to="" class="lst-lnb-sub__link">
							<span>영업 활동 등록</span>
						</router-link>
					</li>
					<li class="lst-lnb-sub__item">
						<router-link to="" class="lst-lnb-sub__link">
							<span>영업 활동 현황</span>
						</router-link>
					</li>
				</ul>
			</li>
			<li class="lst-lnb__item">
				<p>고객</p>
				<ul class="lst-lnb-sub">
					<li class="lst-lnb-sub__item">
						<router-link to="" class="lst-lnb-sub__link">
							<span>고객 등록</span>
						</router-link>
					</li>
					<li class="lst-lnb-sub__item">
						<router-link to="" class="lst-lnb-sub__link">
							<span>고객 현황</span>
						</router-link>
					</li>
				</ul>
			</li>
		</ul>
		<ul class="lst-lnb lst-lnb__agile">
			<li class="lst-lnb__title">
				유연 근무
			</li>
			<li class="lst-lnb__item">
				<p>유연 근무 유형</p>
				<ul class="lst-lnb-sub">
					<li class="lst-lnb-sub__item">
						<router-link to="/flexibleWork/agile/agileWorking" class="lst-lnb-sub__link">
							<span>유연 근무 등록</span>
						</router-link>
					</li>
					<li class="lst-lnb-sub__item">
						<router-link to="/flexibleWork/agile/agileWorkingList" class="lst-lnb-sub__link">
							<span>유연 근무 조회</span>
						</router-link>
					</li>
				</ul>
			</li>
			<li class="lst-lnb__item">
				<p>근태 관리</p>
				<ul class="lst-lnb-sub">
					<li class="lst-lnb-sub__item">
						<router-link to="/flexibleWork/punctuality/attendance" class="lst-lnb-sub__link">
							<span>출/퇴근 등록</span>
						</router-link>
					</li>
					<li class="lst-lnb-sub__item">
						<router-link to="/flexibleWork/punctuality/workingTime" class="lst-lnb-sub__link">
							<span>근무 실적 조회</span>
						</router-link>
					</li>
					<li class="lst-lnb-sub__item">
						<router-link to="/flexibleWork/punctuality/workingPattern" class="lst-lnb-sub__link">
							<span>근무 계획 변경 신청</span>
						</router-link>
					</li>
					<li class="lst-lnb-sub__item">
						<router-link to="/flexibleWork/punctuality/overtime" class="lst-lnb-sub__link">
							<span>연장 근무 신청</span>
						</router-link>
					</li>
					<li class="lst-lnb-sub__item">
						<router-link to="/flexibleWork/punctuality/fieldWork" class="lst-lnb-sub__link">
							<span>외근 신청</span>
						</router-link>
					</li>
					<li class="lst-lnb-sub__item">
						<router-link to="/flexibleWork/punctuality/leave" class="lst-lnb-sub__link">
							<span>휴가 신청</span>
						</router-link>
					</li>
					<li class="lst-lnb-sub__item">
						<router-link to="/flexibleWork/punctuality/businessTrip" class="lst-lnb-sub__link">
							<span>출장 신청</span>
						</router-link>
					</li>
				</ul>
			</li>
			<li class="lst-lnb__item">
				<p>승인 처리</p>
				<ul class="lst-lnb-sub">
					<li class="lst-lnb-sub__item">
						<router-link to="/flexibleWork/approval/approvalChange" class="lst-lnb-sub__link">
							<span>승인 처리 (근무 계획 변경)</span>
						</router-link>
					</li>
					<li class="lst-lnb-sub__item">
						<router-link to="/flexibleWork/approval/approvalStatus" class="lst-lnb-sub__link">
							<span>승인 처리 (연장/휴가/외근/출장)</span>
						</router-link>
					</li>
				</ul>
			</li>
		</ul>
		<ul class="lst-lnb lst-lnb__expense">
			<li class="lst-lnb__title">
				비용정산
			</li>
			<li class="lst-lnb__item">
				<p>법인 카드</p>
				<ul class="lst-lnb-sub">
					<li class="lst-lnb-sub__item">
						<router-link to="" class="lst-lnb-sub__link">
							<span>카드 정산 신청</span>
						</router-link>
					</li>
					<li class="lst-lnb-sub__item">
						<router-link to="" class="lst-lnb-sub__link">
							<span>카드 정산 내역</span>
						</router-link>
					</li>
				</ul>
			</li>
			<li class="lst-lnb__item">
				<p>일반 비용</p>
				<ul class="lst-lnb-sub">
					<li class="lst-lnb-sub__item">
						<router-link to="" class="lst-lnb-sub__link">
							<span>비용 정산 신청</span>
						</router-link>
					</li>
					<li class="lst-lnb-sub__item">
						<router-link to="" class="lst-lnb-sub__link">
							<span>비용 정산 내역</span>
						</router-link>
					</li>
				</ul>
			</li>
		</ul>
		<ul class="lst-lnb lst-lnb__order">
			<li class="lst-lnb__title">
				WEB 주문
			</li>
			<li class="lst-lnb__item">
				<router-link to="" class="lst-lnb__link">
					<span>품목 등록</span>
				</router-link>
			</li>
			<li class="lst-lnb__item">
				<router-link to="" class="lst-lnb__link">
					<span>품목 조회</span>
				</router-link>
			</li>
			<li class="lst-lnb__item">
				<router-link to="" class="lst-lnb__link">
					<span>주문 등록</span>
				</router-link>
			</li>
			<li class="lst-lnb__item">
				<router-link to="" class="lst-lnb__link">
					<span>장바구니</span>
				</router-link>
			</li>
			<li class="lst-lnb__item">
				<router-link to="" class="lst-lnb__link">
					<span>주문서</span>
				</router-link>
			</li>
			<li class="lst-lnb__item">
				<router-link to="" class="lst-lnb__link">
					<span>주문 조회</span>
				</router-link>
			</li>
			<li class="lst-lnb__item">
				<router-link to="" class="lst-lnb__link">
					<span>입금 내역 조회</span>
				</router-link>
			</li>
		</ul>
		<ul class="lst-lnb lst-lnb__scm">
			<li class="lst-lnb__title">
				구매 SCM
			</li>
			<li class="lst-lnb__item">
				<router-link to="" class="lst-lnb__link">
					<span>구매 SCM 메뉴</span>
				</router-link>
			</li>
		</ul>
		<ul class="lst-lnb lst-lnb__eis">
			<li class="lst-lnb__title">
				EIS
			</li>
			<li class="lst-lnb__item">
				<p>재무 관리</p>
				<ul class="lst-lnb-sub">
					<li class="lst-lnb-sub__item">
						<router-link to="" class="lst-lnb-sub__link">
							<span>재무 분석</span>
						</router-link>
					</li>
					<li class="lst-lnb-sub__item">
						<router-link to="" class="lst-lnb-sub__link">
							<span>손익 상세</span>
						</router-link>
					</li>
				</ul>
			</li>
			<li class="lst-lnb__item">
				<p>영업 관리</p>
				<ul class="lst-lnb-sub">
					<li class="lst-lnb-sub__item">
						<router-link to="" class="lst-lnb-sub__link">
							<span>영업 실적</span>
						</router-link>
					</li>
				</ul>
			</li>
			<li class="lst-lnb__item">
				<p>CRM</p>
				<ul class="lst-lnb-sub">
					<li class="lst-lnb-sub__item">
						<router-link to="" class="lst-lnb-sub__link">
							<span>영업 기회 현황</span>
						</router-link>
					</li>
					<li class="lst-lnb-sub__item">
						<router-link to="" class="lst-lnb-sub__link">
							<span>영업 활동 현황</span>
						</router-link>
					</li>
					<li class="lst-lnb-sub__item">
						<router-link to="" class="lst-lnb-sub__link">
							<span>예상 매출 현황</span>
						</router-link>
					</li>
				</ul>
			</li>
			<li class="lst-lnb__item">
				<p>구매 관리</p>
				<ul class="lst-lnb-sub">
					<li class="lst-lnb-sub__item">
						<router-link to="" class="lst-lnb-sub__link">
							<span>구매 실적</span>
						</router-link>
					</li>
				</ul>
			</li>
			<li class="lst-lnb__item">
				<p>프로젝트</p>
				<ul class="lst-lnb-sub">
					<li class="lst-lnb-sub__item">
						<router-link to="" class="lst-lnb-sub__link">
							<span>프로젝트 원가 분석</span>
						</router-link>
					</li>
				</ul>
			</li>
		</ul> -->
	</div>
	<!-- <el-row class="tac lnb user-lnb">
		<el-col :span="12">
			<el-menu
				default-active="2"
				class="el-menu-vertical-demo"
				@open="handleOpen"
				@close="handleClose"
				background-color="#545c64"
				text-color="#fff"
				active-text-color="#ffd04b"
			>
				<div v-for="item in menuList" :key="item.menuId">
					<el-submenu index="item.menuId">
						<template slot="title">
							<i class=""></i>
							<span>{{ item.menuNm }}</span>
						</template>
					</el-submenu>
				</div>

				<div>
					<el-submenu index="1">
						<template slot="title">
							<i class="el-icon-location"></i>
							<span>Navigator One</span>
						</template>
						<el-menu-item-group title="Group One">
							<el-menu-item index="1-1">item one</el-menu-item>
							<el-menu-item index="1-2">item one</el-menu-item>
						</el-menu-item-group>
						<el-menu-item-group title="Group Two">
							<el-menu-item index="1-3">item three</el-menu-item>
						</el-menu-item-group>
						<el-submenu index="1-4">
							<template slot="title">item four</template>
							<el-menu-item index="1-4-1">item one</el-menu-item>
						</el-submenu>
					</el-submenu>
				</div>
				<div>
					<el-menu-item index="2">
						<i class="el-icon-menu"></i>
						<span>Navigator Two</span>
					</el-menu-item>
				</div>
				<div>
					<el-menu-item index="3">
						<i class="el-icon-document"></i>
						<span>Navigator Three</span>
					</el-menu-item>
				</div>
				<div>
					<el-menu-item index="4">
						<i class="el-icon-setting"></i>
						<span>Navigator Four</span>
					</el-menu-item>
				</div>
			</el-menu>
		</el-col>
	</el-row> -->
</template>

<script>
// import { selectMenuList } from '@/api/menu';
export default {
	computed: {
		isUserLogin() {
			return this.$store.getters.isLogin;
		},
	},
	// async created() {
	// 	console.log(this.$store.state.token);
	// 	await this.selectMenuList();
	// },
	// data() {
	// 	return {
	// 		menuList: [],
	// 	};
	// },
	// methods: {
	// 	async selectMenuList() {
	// 		let res = await selectMenuList();
	// 		console.log(res);
	// 		if (res.result == 0) {
	// 			this.menuList = res.data;
	// 		}
	// 	},
	// 	handleOpen(key, keyPath) {
	// 		console.log(key, keyPath);
	// 	},
	// 	handleClose(key, keyPath) {
	// 		console.log(key, keyPath);
	// 	},
	// },
};
</script>

<style></style>

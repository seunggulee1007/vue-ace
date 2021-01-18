<template>
	<div class="container user-container">
		<section class="section__contents">
			<div class="inner-wrap">
				<div class="section-top">
					<h3 class="section__title">고객 현황</h3>
				</div>
				<div class="component-area">
					<div class="component-box component__search">
						<form>
							<div class="input-term">
								<div class="input-box input-box-icon">
									<input class="input input-icon" type="text" placeholder="등록일자" />
									<span class="icon icon-calendar"></span>
								</div>
								<!-- <div class="input-box">
										<template>
											<div class="block">
												<el-date-picker
													v-model="contractDateFrom"
													type="date"
													placeholder="Pick a day"
													ref="contractDateFrom"
													format="yyyy-MM-dd"
												>
												</el-date-picker>
											</div>
										</template>
									</div>
									<p>~</p>
									<div class="input-box">
										<template>
											<div class="block">
												<el-date-picker
													v-model="contractDateTo"
													type="date"
													placeholder="Pick a day"
													ref="contractDateTo"
													format="yyyy-MM-dd"
												>
												</el-date-picker>
											</div>
										</template> 
									</div>-->
							</div>
							<div class="input-select input-box input-box-icon">
								<select class="selectbox" v-model="pagingVO.searchKind">
									<option value="1">고객명</option>
									<option value="2">거래처명</option>
									<option value="3">영업담당자</option>
								</select>
								<span class="icon icon-arrow"></span>
							</div>
							<div class="input-box input-box-icon">
								<input
									class="input input-icon"
									type="text"
									placeholder="검색어를 입력하세요"
									v-model="pagingVO.searchKeyword"
								/>
								<span class="icon icon-search"></span>
							</div>
							<button class="button button__search" @click="selectCustomerList">조회</button>
						</form>
					</div>
					<div class="component-box table-wrap table--horizontal no-mobile">
						<table class="table">
							<thead>
								<tr>
									<th>No.</th>
									<th>거래처명</th>
									<th>영업 담당자</th>
									<th>고객명</th>
									<th>직위/직책</th>
									<th>부서</th>
									<th>휴대전화</th>
									<th>E-mail</th>
									<th>퇴사유무</th>
									<th>비고</th>
									<th>등록일자</th>
								</tr>
							</thead>
							<tbody>
								<tr class="row" v-for="(item, idx) in customerList" :key="item.customerId">
									<td>{{ idx + 1 }}</td>
									<td>{{ item.clientNm }}</td>
									<td>{{ item.manager }}</td>
									<td>{{ item.customerNm }}</td>
									<td>{{ item.rankCdNm }}</td>
									<td>{{ item.deptNm }}</td>
									<td>{{ item.phone }}</td>
									<td>{{ item.email }}</td>
									<td>
										<div
											class="lst-status opt5"
											:class="{
												opt5: item.resignationYn == 'Y',
												opt6: item.resignationYn == 'N',
											}"
										>
											<span class="opt5__txt opt__txt">재직</span>
											<span class="opt6__txt opt__txt">퇴사</span>
										</div>
									</td>
									<td></td>
									<td>{{ item.crtDtm }}</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div class="lst-wrap mobile">
						<div class="lst-vender lst__item">
							<div class="lst-vender__item element bold">
								<p>(주)아이에스전자</p>
							</div>
							<div class="lst-vender__item element">
								<p>513-81-51116</p>
							</div>
							<div class="lst-vender__item element">
								<p>유영빈</p>
							</div>
							<div class="lst-vender__item element">
								<p>경북 구미시 임수동 92-9 구미산업유통단지 6동 213호</p>
							</div>
							<div class="lst-vender__item element">
								<button type="button" class="button button--small">상세</button>
							</div>
						</div>
						<div class="lst-vender lst__item">
							<div class="lst-vender__item element bold">
								<p>거래처명</p>
							</div>
							<div class="lst-vender__item element">
								<p>사업자번호</p>
							</div>
							<div class="lst-vender__item element">
								<p>대표자명</p>
							</div>
							<div class="lst-vender__item element">
								<p>주소</p>
							</div>
							<div class="lst-vender__item element">
								<button type="button" class="button button--small">상세</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
import { selectCustomerList } from '@/api/crm/customer/customer';
export default {
	created() {
		this.selectCustomerList();
	},
	data() {
		return {
			customerList: [],
			pagingVO: {
				pageNo: 0,
			},
		};
	},
	methods: {
		async selectCustomerList() {
			let res = await selectCustomerList(this.pagingVO);
			if (res == 0) {
				this.customerList = res.data;
			}
		},
	},
};
</script>

<style></style>

<template>
	<div class="container user-container">
		<section class="section__contents">
			<div class="inner-wrap">
				<div class="section-top">
					<h3 class="section__title">거래처 조회</h3>
				</div>
				<div class="component-area">
					<div class="component-box component__search">
						<form>
							<div class="input-select input-box input-box-icon">
								<select name="" id="" class="selectbox">
									<option value="">거래처명</option>
									<option value="">사업자번호</option>
								</select>
								<span class="icon icon-arrow"></span>
							</div>
							<div class="input-box input-box-icon">
								<input class="input input-icon" type="text" placeholder="검색어를 입력하세요" />
								<span class="icon icon-search"></span>
							</div>
							<button class="button button__search">조회</button>
						</form>
					</div>
					<div class="component-box table-wrap table--horizontal no-mobile">
						<table class="table">
							<thead>
								<tr>
									<th>No.</th>
									<th>거래처 종류</th>
									<th>거래처명</th>
									<th>사업자번호</th>
									<th>대표자명</th>
									<th>주소</th>
									<th>담당자</th>
									<th>휴대전화</th>
									<th>E-mail</th>
								</tr>
							</thead>
							<tbody>
								<tr class="row" v-for="(item, idx) in clientList" :key="item.clientId">
									<td>{{ idx + 1 }}</td>
									<td>{{ item.bizCondNm }}</td>
									<td>{{ item.clientNm }}</td>
									<td>{{ item.bizNo | bizNoFilter }}</td>
									<td>{{ item.ceoNm }}</td>
									<td>{{ item.addr }} {{ item.addrDetail }}</td>
									<td>{{ item.manager }}</td>
									<td>{{ item.phone | phoneFormat }}</td>
									<td>{{ item.email }}</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div class="lst-wrap mobile">
						<div class="lst-clients lst__item">
							<div class="lst-clients__item element">
								<p>최수현 과장</p>
								<p>영업1팀</p>
							</div>
							<div class="lst-clients__item element">
								<p>(주)아이에스전자</p>
							</div>
							<div class="lst-clients__item element">
								<p>이선원</p>
							</div>
							<div class="lst-clients__item element">
								<p>과장</p>
							</div>
							<div class="lst-clients__item element">
								<p>010-1234-5678</p>
							</div>
						</div>
						<div class="lst-clients lst__item">
							<div class="lst-clients__item element">
								<p>영업담당자</p>
							</div>
							<div class="lst-clients__item element">
								<p>거래처명</p>
							</div>
							<div class="lst-clients__item element">
								<p>고객명</p>
							</div>
							<div class="lst-clients__item element">
								<p>직위/직책</p>
							</div>
							<div class="lst-clients__item element">
								<p>휴대전화</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
import { selectClientList } from '@/api/crm/client/client';
export default {
	async created() {
		await this.selectClientList();
	},
	data() {
		return {
			clientList: [],
		};
	},
	methods: {
		async selectClientList() {
			let res = await selectClientList(this.pagingVO);
			console.log(res);
			if (res.result == 0) {
				this.clientList = res.data;
			}
		},
	},
};
</script>

<style></style>

<template>
	<div class="container user-container">
		<section class="section__contents">
			<div class="inner-wrap">
				<div class="section-top">
					<h3 class="section__title">유연 근무 조회</h3>
				</div>
				<div class="component-area">
					<div class="component-box component__search">
						<form>
							<!-- <div class="input-box input-box-icon">
								<input class="input input-icon" type="text" placeholder="적용일자를 입력하세요" />
								<span class="icon icon-clock"></span>
							</div> -->
							<div class="input-select input-box input-box-icon">
								<select name="" id="" class="selectbox">
									<option value="">검색조건</option>
									<option value="">유연근무유형</option>
									<option value="">근무그룹명</option>
									<option value="">부서명</option>
									<option value="">사원명</option>
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
					<div class="component-box table-wrap">
						<table class="table table-hover">
							<thead>
								<tr>
									<th>No.</th>
									<th>근무 그룹명</th>
									<th>사원명</th>
									<th>부서명</th>
									<th>유연 근무 유형</th>
									<th>근무 시간</th>
									<th>등록일자</th>
								</tr>
							</thead>
							<tbody v-for="item in workGroupList" :key="item.workGroupId">
								<tr class="group-header">
									<td></td>
									<td colspan="6">
										<div class="flex-box">
											<span class="bold">{{ item.workGroupNm }}</span>
											<span class="icon icon-arrow"></span>
										</div>
									</td>
								</tr>
								<tr class="row" v-for="(subItem, idx) in item.workUserResList" :key="subItem.userNm">
									<td>{{ idx + 1 }}</td>
									<td>{{ item.workGroupNm }}</td>
									<td>
										<div class="user-name">
											<div class="img-user">
												<img :src="SERVER_URL + subItem.photo" alt="" />
											</div>
											<p>{{ subItem.userNm }} {{ subItem.rankCdNm }}</p>
										</div>
									</td>
									<td>{{ subItem.deptNm }}</td>
									<td>{{ item.workTypeNm }}</td>
									<td>09:00 ~ 18:00</td>
									<td>{{ item.crtDtm }}</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
import { selectWorkGroupList } from '@/api/agile/workGroup';
export default {
	created() {
		this.selectWorkGroupList();
	},
	data() {
		return {
			pagingVO: {
				pageNo: 0,
			},
			workGroupList: [],
		};
	},
	methods: {
		async selectWorkGroupList() {
			let res = await selectWorkGroupList(this.pagingVO);
			console.log(res);
			if (res.result == 0) {
				this.workGroupList = res.data;
			}
		},
	},
};
</script>

<style></style>

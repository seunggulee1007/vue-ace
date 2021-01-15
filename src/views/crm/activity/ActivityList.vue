<template>
	<div class="container user-container">
		<section class="section__contents">
			<div class="inner-wrap">
				<div class="section-top">
					<h3 class="section__title">영업 활동 현황</h3>
				</div>
				<div class="component-area">
					<div class="component-box component__search">
						<form>
							<div class="input-term">
								<div class="input-box input-box-icon">
									<input class="input input-icon" type="text" placeholder="활동일자" />
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
								<select name="" id="" class="selectbox">
									<option value="">영업기회명</option>
									<option value="">거래처명</option>
									<option value="">영업담당자</option>
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
									<th>방문 일자</th>
									<th>방문 시간</th>
									<th>영업 기회명</th>
									<th>거래처명</th>
									<th>영업 담당자</th>
									<th>영업 활동 방법</th>
									<th>영업 활동 목적</th>
									<th>세부 활동 내역</th>
									<th>동행자</th>
									<th>고객명</th>
								</tr>
							</thead>
							<tbody>
								<tr class="row">
									<td>1</td>
									<td>2021-01-04</td>
									<td>10:00 ~ 12:00</td>
									<td>스마트팩토리 ERP 구축 사업</td>
									<td>(주)아이에스전자</td>
									<td>최수현</td>
									<td>전화</td>
									<td>계약체결</td>
									<td>안내메일 발송</td>
									<td></td>
									<td>담당자명</td>
								</tr>
								<tr class="row">
									<td>2</td>
									<td>2021-01-04</td>
									<td>10:00 ~ 12:00</td>
									<td>스마트팩토리 ERP 구축 사업</td>
									<td>(주)아이에스전자</td>
									<td>최수현</td>
									<td>전화</td>
									<td>계약체결</td>
									<td>안내메일 발송</td>
									<td></td>
									<td>담당자명</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div class="component-box lst-wrap mobile">
							<div class="lst-activities lst__item">
								<div class="lst-activities__item element">
									<p>방문일자</p>
								</div>
								<div class="lst-activities__item element">
									<p>담당자</p>
								</div>
								<div class="lst-activities__item element">
									<p>거래처명</p>
								</div>
								<div class="lst-activities__item element">
									<p>영업활동목적</p>
								</div>
								<div class="lst-activities__item element">
									<p>방문시간</p>
								</div>
								<div class="lst-activities__item element">
									<p>부서</p>
								</div>
								<div class="lst-activities__item element">
									<p>영업기회명</p>
								</div>
								<div class="lst-activities__item element">
									<button type="button" class="button button--small">상세</button>
								</div>
							</div>
							<div class="lst-activities lst__item">
								<div class="lst-activities__item element">
									<p>2020-12-01 화</p>
								</div>
								<div class="lst-activities__item element">
									<p>최수현</p>
								</div>
								<div class="lst-activities__item element">
									<p>(주)아이에스전자</p>
								</div>
								<div class="lst-activities__item element">
									<p>영업활동목적</p>
								</div>
								<div class="lst-activities__item element">
									<p>10:00 ~ 12:00</p>
								</div>
								<div class="lst-activities__item element">
									<p>영업1팀</p>
								</div>
								<div class="lst-activities__item element">
									<p>스마트팩토리 ERP 구축 사업</p>
								</div>
								<div class="lst-activities__item element">
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
export default {};
</script>

<style></style>

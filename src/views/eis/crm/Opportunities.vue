<template>
	<div class="container user-container">
		<section class="section__contents">
			<div class="inner-wrap">
				<div class="section-top">
					<h3 class="section__title">영업 기회 분석</h3>
					<div class="input-box-wrap">
						<div class="input-box">
							<el-date-picker
								v-model="value1"
								type="daterange"
								range-separator="~"
								start-placeholder="기회일자"
								end-placeholder="기회일자"
							>
							</el-date-picker>
							<div class="input-select input-box input-box-icon">
								<select name="" id="" class="select-box">
									<option value="" selected>부서명</option>
									<option value="">사원명</option>
								</select>
								<span class="icon icon-arrow"></span>
							</div>
							<div class="input-box">
								<input type="text" class="input" placeholder="검색어를 입력하세요" />
							</div>
							<button type="button" class="button button__search">검색</button>
						</div>
					</div>
				</div>
				<div class="component-area-wrap lst-cards lst-cards__6colums">
					<div class="component-area">
						<div class="component-box">
							<p class="component__title">인지</p>
							<p class="status-txt--large"><span class="bold">15</span>건</p>
						</div>
					</div>
					<div class="component-area">
						<div class="component-box">
							<p class="component__title">제안</p>
							<p class="status-txt--large"><span class="bold">25</span>건</p>
						</div>
					</div>
					<div class="component-area">
						<div class="component-box">
							<p class="component__title">견적</p>
							<p class="status-txt--large"><span class="bold">20</span>건</p>
						</div>
					</div>
					<div class="component-area">
						<div class="component-box">
							<p class="component__title">협상</p>
							<p class="status-txt--large"><span class="bold">10</span>건</p>
						</div>
					</div>
					<div class="component-area">
						<div class="component-box">
							<p class="component__title">계약</p>
							<p class="status-txt--large"><span class="bold">7</span>건</p>
						</div>
					</div>
					<div class="component-area">
						<div class="component-box">
							<p class="component__title">실패</p>
							<p class="status-txt--large"><span class="bold">3</span>건</p>
						</div>
					</div>
				</div>
				<div class="component-area">
					<strong class="content__title">부서/담당자 파이프라인</strong>
					<div class="table-wrap">
						<table class="table" style="table-layout: fixed">
							<thead>
								<tr>
									<th>부서</th>
									<th class="data__number">인지</th>
									<th class="data__number">제안</th>
									<th class="data__number">견적</th>
									<th class="data__number">협상</th>
									<th class="data__number">계약</th>
									<th class="data__number">실패</th>
								</tr>
							</thead>
							<tbody>
								<tr class="row">
									<td>
										<div class="flex-box">
											영업1팀
											<button type="button" class="button button--small">상세보기</button>
										</div>
									</td>
									<td class="data__number">10</td>
									<td class="data__number">5</td>
									<td class="data__number">5</td>
									<td class="data__number">3</td>
									<td class="data__number">2</td>
									<td class="data__number">2</td>
								</tr>
								<tr class="row">
									<td>
										<div class="flex-box">
											영업2팀
											<button type="button" class="button button--small">상세보기</button>
										</div>
									</td>
									<td class="data__number">12</td>
									<td class="data__number">7</td>
									<td class="data__number">4</td>
									<td class="data__number">6</td>
									<td class="data__number">3</td>
									<td class="data__number">3</td>
								</tr>
								<tr class="row">
									<td>
										<div class="flex-box">
											영업3팀
											<button type="button" class="button button--small">상세보기</button>
										</div>
									</td>
									<td class="data__number">8</td>
									<td class="data__number">2</td>
									<td class="data__number">6</td>
									<td class="data__number">1</td>
									<td class="data__number">1</td>
									<td class="data__number">1</td>
								</tr>
							</tbody>
							<tfoot>
								<tr>
									<td>TOTAL</td>
									<td class="data__number">30</td>
									<td class="data__number">14</td>
									<td class="data__number">15</td>
									<td class="data__number">10</td>
									<td class="data__number">6</td>
									<td class="data__number">6</td>
								</tr>
							</tfoot>
						</table>

						<table class="table" style="table-layout: fixed">
							<thead>
								<tr>
									<th>담당자</th>
									<th class="data__number">인지</th>
									<th class="data__number">제안</th>
									<th class="data__number">견적</th>
									<th class="data__number">협상</th>
									<th class="data__number">계약</th>
									<th class="data__number">실패</th>
								</tr>
							</thead>
							<tbody>
								<tr class="row">
									<td>차장 김정환</td>
									<td class="data__number">5</td>
									<td class="data__number">2</td>
									<td class="data__number">3</td>
									<td class="data__number">1</td>
									<td class="data__number">1</td>
									<td class="data__number">1</td>
								</tr>
								<tr class="row">
									<td>과장 최수현</td>
									<td class="data__number">3</td>
									<td class="data__number">2</td>
									<td class="data__number">2</td>
									<td class="data__number">1</td>
									<td class="data__number">1</td>
									<td class="data__number"></td>
								</tr>
								<tr class="row">
									<td>대리 김우중</td>
									<td class="data__number">2</td>
									<td class="data__number">1</td>
									<td class="data__number"></td>
									<td class="data__number">1</td>
									<td class="data__number"></td>
									<td class="data__number">1</td>
								</tr>
							</tbody>
							<tfoot>
								<tr>
									<td>TOTAL</td>
									<td class="data__number">10</td>
									<td class="data__number">5</td>
									<td class="data__number">5</td>
									<td class="data__number">3</td>
									<td class="data__number">2</td>
									<td class="data__number">2</td>
								</tr>
							</tfoot>
						</table>
					</div>
				</div>
				<div class="component-area">
					<strong class="content__title">담당자별 영업 기회 현황</strong>
					<div class="table-wrap">
						<table class="table">
							<thead>
								<tr>
									<th>영업 기회 일자</th>
									<th>부서</th>
									<th>담당자</th>
									<th>파이프라인</th>
									<th>영업 활동 건수</th>
									<th>영업 기회명</th>
									<th>거래처</th>
								</tr>
							</thead>
							<tbody>
								<tr class="row">
									<td>2020-12-01 화</td>
									<td>영업1팀</td>
									<td>차장 김정환</td>
									<td>인지</td>
									<td>
										<div class="flex-box">
											3
											<button type="button" class="button button--small">상세보기</button>
										</div>
									</td>
									<td>ERP 구축 (스마트팩토리)</td>
									<td>고운세상코스메틱</td>
								</tr>
								<tr class="row">
									<td>2020-12-01 화</td>
									<td>영업2팀</td>
									<td>과장 최수현</td>
									<td>견적</td>
									<td></td>
									<td></td>
									<td></td>
								</tr>
								<tr class="row">
									<td>2020-12-01 화</td>
									<td>영업3팀</td>
									<td>대리 김우중</td>
									<td>협상</td>
									<td>
										<div class="flex-box">
											1
											<button type="button" class="button button--small">상세보기</button>
										</div>
									</td>
									<td></td>
									<td></td>
								</tr>
							</tbody>
						</table>

						<table class="table">
							<thead>
								<tr>
									<th>방문일자</th>
									<th>방문시간</th>
									<th>영업 담당자</th>
									<th>영업 활동 방법</th>
									<th>영업 활동 목적</th>
									<th>동행자</th>
									<th>고객명</th>
								</tr>
							</thead>
							<tbody>
								<tr class="row">
									<td>2020-12-01 화</td>
									<td>10:00 ~ 12:00</td>
									<td>차장 김정환</td>
									<td>방문</td>
									<td>업무 협의</td>
									<td></td>
									<td>대리 이선원</td>
								</tr>
								<tr class="row">
									<td>2020-12-04 금</td>
									<td>14:00 ~ 15:00</td>
									<td>차장 김정환</td>
									<td>방문</td>
									<td>견적 제출</td>
									<td></td>
									<td>대리 이선원</td>
								</tr>
								<tr class="row">
									<td>2020-12-10 목</td>
									<td>09:00 ~ 11:00</td>
									<td>차장 김정환</td>
									<td>방문</td>
									<td>데모 시연</td>
									<td>수석 남재곤</td>
									<td>대리 이선원</td>
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
export default {};
</script>

<style></style>

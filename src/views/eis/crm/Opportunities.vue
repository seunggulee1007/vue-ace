<template>
	<div class="container user-container">
		<section class="section__contents">
			<div class="inner-wrap">
				<div class="section-top component__o-top">
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
							<div>
								<div class="input-select input-box input-box-icon">
									<select name="" id="" class="selectbox">
										<option value="" selected>부서명</option>
										<option value="">사원명</option>
									</select>
									<span class="icon icon-arrow"></span>
								</div>
								<div class="input-box">
									<input type="text" class="input" placeholder="검색어를 입력하세요" />
								</div>
								<button type="button" class="button button__search">조회</button>
							</div>
						</div>
					</div>
				</div>
				<div class="component-area-wrap component__eis-1 component__o-1">
					<strong class="content__title">파이프라인</strong>
					<div class="lst-cards lst-cards__6colums">
						<div class="component-area">
							<div class="component-box">
								<div class="img-box icon-eis-pipeline">
									<img src="../../../images/eis-o-1.png" />
								</div>
								<div class="component-box-top">
									<p class="component__title">인지</p>
								</div>
								<p class="status-txt--large"><span class="bold">15</span>건</p>
							</div>
						</div>
						<div class="component-area">
							<div class="component-box">
								<div class="img-box icon-eis-pipeline">
									<img src="../../../images/eis-o-2.png" alt="" />
								</div>
								<div class="component-box-top">
									<p class="component__title">제안</p>
								</div>
								<p class="status-txt--large"><span class="bold">25</span>건</p>
							</div>
						</div>
						<div class="component-area">
							<div class="component-box">
								<div class="img-box icon-eis-pipeline">
									<img src="../../../images/eis-o-3.png" />
								</div>
								<div class="component-box-top">
									<p class="component__title">견적</p>
								</div>
								<p class="status-txt--large"><span class="bold">20</span>건</p>
							</div>
						</div>
						<div class="component-area">
							<div class="component-box">
								<div class="img-box icon-eis-pipeline">
									<img src="../../../images/eis-o-4.png" />
								</div>
								<div class="component-box-top">
									<p class="component__title">협상</p>
								</div>
								<p class="status-txt--large"><span class="bold">10</span>건</p>
							</div>
						</div>
						<div class="component-area">
							<div class="component-box">
								<div class="img-box icon-eis-pipeline">
									<img src="../../../images/eis-o-5.png" />
								</div>
								<div class="component-box-top">
									<p class="component__title">계약</p>
								</div>
								<p class="status-txt--large"><span class="bold">7</span>건</p>
							</div>
						</div>
						<div class="component-area">
							<div class="component-box">
								<div class="img-box icon-eis-pipeline">
									<img src="../../../images/eis-o-6.png" />
								</div>
								<div class="component-box-top">
									<p class="component__title">실패</p>
								</div>
								<p class="status-txt--large"><span class="bold">3</span>건</p>
							</div>
						</div>
					</div>
				</div>
				<div class="component__eis-2 component__o-2">
					<strong class="content__title">부서/담당자 파이프라인</strong>
					<!-- <div class="component-area">
						<div class="lst-cards lst-cards__6colums">
							<div class="flex-box">
								<p class="component__title">영업1팀</p>
								<button type="button" class="button button--small">상세보기</button>
							</div>
							<div class="flex-box">
								<p class="lst-status opt5">인지</p>
								<p>10</p>
							</div>
							<div class="flex-box">
								<p class="lst-status opt6">제안</p>
								<p>5</p>
							</div>
							<div class="flex-box">
								<p class="lst-status opt3">견적</p>
								<p>5</p>
							</div>
							<div class="flex-box">
								<p class="lst-status opt4">협상</p>
								<p>3</p>
							</div>
							<div class="flex-box">
								<p class="lst-status opt1">계약</p>
								<p>2</p>
							</div>
							<div class="flex-box">
								<p class="lst-status opt2">실패</p>
								<p>2</p>
							</div>
							<div class="detail">
								<div class="table-wrap">
									<table class="table">
										<thead>
											<tr>
												<th>담당자</th>
												<th>인지</th>
												<th>제안</th>
												<th>견적</th>
												<th>협상</th>
												<th>계약</th>
												<th>실패</th>
											</tr>
										</thead>
										<tbody>
											<tr class="row">
												<td>차장 김정환</td>
												<td>5</td>
												<td>2</td>
												<td>3</td>
												<td>1</td>
												<td>1</td>
												<td>1</td>
											</tr>
											<tr class="row">
												<td>과장 최수현</td>
												<td>3</td>
												<td>2</td>
												<td>2</td>
												<td>1</td>
												<td>1</td>
												<td></td>
											</tr>
											<tr class="row">
												<td>대리 김우중</td>
												<td>2</td>
												<td>1</td>
												<td></td>
												<td>1</td>
												<td></td>
												<td>1</td>
											</tr>
										</tbody>
										<tfoot>
											<tr>
												<td>TOTAL</td>
												<td>10</td>
												<td>5</td>
												<td>5</td>
												<td>3</td>
												<td>2</td>
												<td>2</td>
											</tr>
										</tfoot>
									</table>
								</div>
							</div>
						</div>
						<div class="lst-cards lst-cards__6colums">
							<div class="flex-box">
								<p class="component__title">영업2팀</p>
								<button type="button" class="button button--small">상세보기</button>
							</div>
							<div class="flex-box">
								<p class="lst-status opt5">인지</p>
								<p>10</p>
							</div>
							<div class="flex-box">
								<p class="lst-status opt6">제안</p>
								<p>5</p>
							</div>
							<div class="flex-box">
								<p class="lst-status opt3">견적</p>
								<p>5</p>
							</div>
							<div class="flex-box">
								<p class="lst-status opt4">협상</p>
								<p>3</p>
							</div>
							<div class="flex-box">
								<p class="lst-status opt1">계약</p>
								<p>2</p>
							</div>
							<div class="flex-box">
								<p class="lst-status opt2">실패</p>
								<p>2</p>
							</div>
						</div>
						<div class="lst-cards lst-cards__6colums">
							<div class="flex-box">
								<p class="component__title">영업3팀</p>
								<button type="button" class="button button--small">상세보기</button>
							</div>
							<div class="flex-box">
								<p class="lst-status opt5">인지</p>
								<p>10</p>
							</div>
							<div class="flex-box">
								<p class="lst-status opt6">제안</p>
								<p>5</p>
							</div>
							<div class="flex-box">
								<p class="lst-status opt3">견적</p>
								<p>5</p>
							</div>
							<div class="flex-box">
								<p class="lst-status opt4">협상</p>
								<p>3</p>
							</div>
							<div class="flex-box">
								<p class="lst-status opt1">계약</p>
								<p>2</p>
							</div>
							<div class="flex-box">
								<p class="lst-status opt2">실패</p>
								<p>2</p>
							</div>
						</div>
					</div> -->
					<div class="component-area">
						<div class="table-wrap">
							<table class="table">
								<thead>
									<tr>
										<th>부서</th>
										<th>인지</th>
										<th>제안</th>
										<th>견적</th>
										<th>협상</th>
										<th>계약</th>
										<th>실패</th>
									</tr>
								</thead>
								<tbody>
									<tr class="row">
										<td>
											영업1팀
											<button type="button" class="button button--small">상세</button>
										</td>
										<td>10</td>
										<td>5</td>
										<td>5</td>
										<td>3</td>
										<td>2</td>
										<td>2</td>
									</tr>
									<tr class="row__sub show">
										<td colspan="7">
											<div class="table-sub-wrap">
												<table class="table">
													<thead>
														<tr>
															<th>담당자</th>
															<th>인지</th>
															<th>제안</th>
															<th>견적</th>
															<th>협상</th>
															<th>계약</th>
															<th>실패</th>
														</tr>
													</thead>
													<tbody>
														<tr class="row">
															<td>김정환 차장</td>
															<td>5</td>
															<td>2</td>
															<td>3</td>
															<td>1</td>
															<td>1</td>
															<td>1</td>
														</tr>
														<tr class="row">
															<td>최수현 과장</td>
															<td>3</td>
															<td>2</td>
															<td>2</td>
															<td>1</td>
															<td>1</td>
															<td></td>
														</tr>
														<tr class="row">
															<td>김우중 대리</td>
															<td>2</td>
															<td>1</td>
															<td></td>
															<td>1</td>
															<td></td>
															<td>1</td>
														</tr>
													</tbody>
													<tfoot>
														<tr>
															<td>TOTAL</td>
															<td>10</td>
															<td>5</td>
															<td>5</td>
															<td>3</td>
															<td>2</td>
															<td>2</td>
														</tr>
													</tfoot>
												</table>
											</div>
										</td>
									</tr>
									<tr class="row">
										<td>
											영업2팀
											<button type="button" class="button button--small">상세</button>
										</td>
										<td>12</td>
										<td>7</td>
										<td>4</td>
										<td>6</td>
										<td>3</td>
										<td>3</td>
									</tr>
									<tr class="row__sub">
										<td colspan="7">
											<div class="table-sub-wrap">
												<table class="table">
													<thead>
														<tr>
															<th>담당자</th>
															<th>인지</th>
															<th>제안</th>
															<th>견적</th>
															<th>협상</th>
															<th>계약</th>
															<th>실패</th>
														</tr>
													</thead>
													<tbody>
														<tr class="row">
															<td>김정환 차장</td>
															<td>5</td>
															<td>2</td>
															<td>3</td>
															<td>1</td>
															<td>1</td>
															<td>1</td>
														</tr>
														<tr class="row">
															<td>최수현 과장</td>
															<td>3</td>
															<td>2</td>
															<td>2</td>
															<td>1</td>
															<td>1</td>
															<td></td>
														</tr>
														<tr class="row">
															<td>김우중 대리</td>
															<td>2</td>
															<td>1</td>
															<td></td>
															<td>1</td>
															<td></td>
															<td>1</td>
														</tr>
													</tbody>
													<tfoot>
														<tr>
															<td>TOTAL</td>
															<td>10</td>
															<td>5</td>
															<td>5</td>
															<td>3</td>
															<td>2</td>
															<td>2</td>
														</tr>
													</tfoot>
												</table>
											</div>
										</td>
									</tr>
									<tr class="row">
										<td>
											영업3팀
											<button type="button" class="button button--small">상세</button>
										</td>
										<td>8</td>
										<td>2</td>
										<td>6</td>
										<td>1</td>
										<td>1</td>
										<td>1</td>
									</tr>
									<tr class="row__sub">
										<td colspan="7">
											<div class="table-sub-wrap">
												<table class="table">
													<thead>
														<tr>
															<th>담당자</th>
															<th>인지</th>
															<th>제안</th>
															<th>견적</th>
															<th>협상</th>
															<th>계약</th>
															<th>실패</th>
														</tr>
													</thead>
													<tbody>
														<tr class="row">
															<td>김정환 차장</td>
															<td>5</td>
															<td>2</td>
															<td>3</td>
															<td>1</td>
															<td>1</td>
															<td>1</td>
														</tr>
														<tr class="row">
															<td>최수현 과장</td>
															<td>3</td>
															<td>2</td>
															<td>2</td>
															<td>1</td>
															<td>1</td>
															<td></td>
														</tr>
														<tr class="row">
															<td>김우중 대리</td>
															<td>2</td>
															<td>1</td>
															<td></td>
															<td>1</td>
															<td></td>
															<td>1</td>
														</tr>
													</tbody>
													<tfoot>
														<tr>
															<td>TOTAL</td>
															<td>10</td>
															<td>5</td>
															<td>5</td>
															<td>3</td>
															<td>2</td>
															<td>2</td>
														</tr>
													</tfoot>
												</table>
											</div>
										</td>
									</tr>
								</tbody>
								<tfoot>
									<tr>
										<td>TOTAL</td>
										<td>30</td>
										<td>14</td>
										<td>15</td>
										<td>10</td>
										<td>6</td>
										<td>6</td>
									</tr>
								</tfoot>
							</table>
						</div>
					</div>
				</div>
				<div class="component__eis-3 component__o-3">
					<strong class="content__title">담당자별 영업 기회 현황</strong>
					<div class="component-area">
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
										<td>김정환 차장</td>
										<td>
											<div class="lst-status opt1">
												<span class="opt1__txt opt__txt">인지</span>
												<span class="opt2__txt opt__txt">제안</span>
												<span class="opt3__txt opt__txt">견적</span>
												<span class="opt4__txt opt__txt">협상</span>
												<span class="opt5__txt opt__txt">계약</span>
												<span class="opt6__txt opt__txt">실패</span>
											</div>
										</td>
										<td>
											<div class="bold">3</div>
											<button type="button" class="button button--small">상세</button>
										</td>
										<td>ERP 구축 (스마트팩토리)</td>
										<td>고운세상코스메틱</td>
									</tr>
									<tr class="row__sub show">
										<td colspan="7">
											<div class="table-sub-wrap">
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
															<td>김정환 차장</td>
															<td>방문</td>
															<td>업무 협의</td>
															<td></td>
															<td>이선원 대리</td>
														</tr>
														<tr class="row">
															<td>2020-12-04 금</td>
															<td>14:00 ~ 15:00</td>
															<td>김정환 차장</td>
															<td>방문</td>
															<td>견적 제출</td>
															<td></td>
															<td>이선원 대리</td>
														</tr>
														<tr class="row">
															<td>2020-12-10 목</td>
															<td>09:00 ~ 11:00</td>
															<td>김정환 차장</td>
															<td>방문</td>
															<td>데모 시연</td>
															<td>남재곤 수석</td>
															<td>이선원 대리</td>
														</tr>
													</tbody>
												</table>
											</div>
										</td>
									</tr>
									<tr class="row">
										<td>2020-12-01 화</td>
										<td>영업2팀</td>
										<td>최수현 과장</td>
										<td>
											<div class="lst-status opt3">
												<span class="opt1__txt opt__txt">인지</span>
												<span class="opt2__txt opt__txt">제안</span>
												<span class="opt3__txt opt__txt">견적</span>
												<span class="opt4__txt opt__txt">협상</span>
												<span class="opt5__txt opt__txt">계약</span>
												<span class="opt6__txt opt__txt">실패</span>
											</div>
										</td>
										<td></td>
										<td></td>
										<td></td>
									</tr>
									<tr class="row__sub">
										<td colspan="7">
											<div class="table-sub-wrap">
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
															<td>김정환 차장</td>
															<td>방문</td>
															<td>업무 협의</td>
															<td></td>
															<td>이선원 대리</td>
														</tr>
														<tr class="row">
															<td>2020-12-04 금</td>
															<td>14:00 ~ 15:00</td>
															<td>김정환 차장</td>
															<td>방문</td>
															<td>견적 제출</td>
															<td></td>
															<td>이선원 대리</td>
														</tr>
														<tr class="row">
															<td>2020-12-10 목</td>
															<td>09:00 ~ 11:00</td>
															<td>김정환 차장</td>
															<td>방문</td>
															<td>데모 시연</td>
															<td>남재곤 수석</td>
															<td>이선원 대리</td>
														</tr>
													</tbody>
												</table>
											</div>
										</td>
									</tr>
									<tr class="row">
										<td>2020-12-01 화</td>
										<td>영업3팀</td>
										<td>김우중 대리</td>
										<td>
											<div class="lst-status opt4">
												<span class="opt1__txt opt__txt">인지</span>
												<span class="opt2__txt opt__txt">제안</span>
												<span class="opt3__txt opt__txt">견적</span>
												<span class="opt4__txt opt__txt">협상</span>
												<span class="opt5__txt opt__txt">계약</span>
												<span class="opt6__txt opt__txt">실패</span>
											</div>
										</td>
										<td>
											<span class="bold">1</span>
											<button type="button" class="button button--small">상세</button>
										</td>
										<td></td>
										<td></td>
									</tr>
									<tr class="row__sub">
										<td colspan="7">
											<div class="table-sub-wrap">
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
															<td>김정환 차장</td>
															<td>방문</td>
															<td>업무 협의</td>
															<td></td>
															<td>이선원 대리</td>
														</tr>
														<tr class="row">
															<td>2020-12-04 금</td>
															<td>14:00 ~ 15:00</td>
															<td>김정환 차장</td>
															<td>방문</td>
															<td>견적 제출</td>
															<td></td>
															<td>이선원 대리</td>
														</tr>
														<tr class="row">
															<td>2020-12-10 목</td>
															<td>09:00 ~ 11:00</td>
															<td>김정환 차장</td>
															<td>방문</td>
															<td>데모 시연</td>
															<td>남재곤 수석</td>
															<td>이선원 대리</td>
														</tr>
													</tbody>
												</table>
											</div>
										</td>
									</tr>
								</tbody>
							</table>
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

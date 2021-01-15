<template>
	<div class="container user-container">
		<section class="section__contents">
			<div class="inner-wrap">
				<div class="section-top">
					<h3 class="section__title">영업 기회 현황</h3>
				</div>
				<div class="component-area">
					<div class="component-box component__search">
						<form>
							<div class="input-box input-box-icon">
								<input class="input input-icon" type="text" placeholder="적용일자를 입력하세요" />
								<span class="icon icon-clock"></span>
							</div>
							<div class="input-select input-box input-box-icon">
								<select name="" id="" class="selectbox">
									<option value="">영업 기회명</option>
									<option value="">거래처</option>
									<option value="">영업 담당자</option>
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
									<th>파이프라인</th>
									<th>기회일자</th>
									<th>영업 기회명</th>
									<th>거래처</th>
									<th>정보 출처</th>
									<th>지역</th>
									<th>경쟁업체</th>
									<th>성공 확률 (%)</th>
									<th>예상 매출월</th>
									<th>예상 매출액</th>
									<th>등록일자</th>
								</tr>
							</thead>
							<tbody>
								<tr class="row">
									<td>1</td>
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
									<td>2021-01-04</td>
									<td>
										스마트팩토리 ERP 구축 사업
										<button type="button" class="button on">활동내역</button>
									</td>
									<td>(주)아이에스전자</td>
									<td></td>
									<td>경북 구미시</td>
									<td>더존비즈온</td>
									<td>확도 30%</td>
									<td>2021-05</td>
									<td>5,000만원</td>
									<td>2021-01-04</td>
								</tr>
								<tr class="row__sub">
									<td colspan="12">
										<div class="table-sub-wrap">
											<table class="table">
												<thead>
													<tr>
														<th>No.</th>
														<th>방문 일자</th>
														<th>방문 시간</th>
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
														<td>14:00</td>
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
														<td>14:00</td>
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
									</td>
								</tr>
								<tr class="row">
									<td>2</td>
									<td>
										<div class="lst-status opt2">
											<span class="opt1__txt opt__txt">인지</span>
											<span class="opt2__txt opt__txt">제안</span>
											<span class="opt3__txt opt__txt">견적</span>
											<span class="opt4__txt opt__txt">협상</span>
											<span class="opt5__txt opt__txt">계약</span>
											<span class="opt6__txt opt__txt">실패</span>
										</div>
									</td>
									<td>2021-01-04</td>
									<td>
										스마트팩토리 ERP 구축 사업
										<button type="button" class="button">활동내역</button>
									</td>
									<td>(주)아이에스전자</td>
									<td></td>
									<td>경북 구미시</td>
									<td>더존비즈온</td>
									<td>확도 30%</td>
									<td>2021-05</td>
									<td>5,000만원</td>
									<td>2021-01-04</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div class="component-box lst-wrap mobile">
							<div class="lst-opportunities lst__item">
								<div class="lst-opportunities__item element bold">
									<p>담당자</p>
								</div>
								<div class="lst-opportunities__item element">
									<div class="lst-status opt2">
										<span class="opt1__txt opt__txt">인지</span>
										<span class="opt2__txt opt__txt">제안</span>
										<span class="opt3__txt opt__txt">견적</span>
										<span class="opt4__txt opt__txt">협상</span>
										<span class="opt5__txt opt__txt">계약</span>
										<span class="opt6__txt opt__txt">실패</span>
									</div>
								</div>
								<div class="lst-opportunities__item element">
									<p>거래처명</p>
								</div>
								<div class="lst-opportunities__item element">
									<p>제품유형</p>
								</div>
								<div class="lst-opportunities__item element">
									<p>부서</p>
								</div>
								<div class="lst-opportunities__item element">
									<p>성공확률</p>
								</div>
								<div class="lst-opportunities__item element">
									<p>영업기회명</p>
								</div>
								<div class="lst-opportunities__item element">
									<button type="button" class="button button--small">상세</button>
								</div>
							</div>
							<div class="lst-opportunities lst__item">
								<div class="lst-opportunities__item element bold">
									<p>최수현</p>
								</div>
								<div class="lst-opportunities__item element">
									<div class="lst-status opt1">
										<span class="opt1__txt opt__txt">인지</span>
										<span class="opt2__txt opt__txt">제안</span>
										<span class="opt3__txt opt__txt">견적</span>
										<span class="opt4__txt opt__txt">협상</span>
										<span class="opt5__txt opt__txt">계약</span>
										<span class="opt6__txt opt__txt">실패</span>
									</div>
								</div>
								<div class="lst-opportunities__item element">
									<p>(주)아이에스전자</p>
								</div>
								<div class="lst-opportunities__item element">
									<p>Genuine</p>
								</div>
								<div class="lst-opportunities__item element">
									<p>영업1팀</p>
								</div>
								<div class="lst-opportunities__item element">
									<p>확도: 100%</p>
								</div>
								<div class="lst-opportunities__item element">
									<p>스마트팩토리 ERP 구축 사업</p>
								</div>
								<div class="lst-opportunities__item element">
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

<template>
	<div class="container user-container">
		<section class="section__contents">
			<div class="inner-wrap">
				<div class="section-top">
					<h3 class="section__title">카드 정산 내역</h3>
				</div>
				<div class="component-area">
					<div class="component-box component__search">
						<form>
							<input type="text" class="input" value="사용자" readonly />
							<div class="input-term">
								<div class="input-box input-box-icon">
									<input class="input input-icon" type="text" placeholder="기준년도" />
									<span class="icon icon-calendar"></span>
								</div>
							</div>
							<select name="" id="">
								<option value="">카드번호1</option>
								<option value="">카드번호2</option>
							</select>
							<button class="button button__search">조회</button>
						</form>
					</div>
				</div>
				<div class="component-area">
					<div class="table-wrap table--horizontal">
						<table class="table">
							<thead>
								<tr>
									<th>No.</th>
									<th>카드 사용자</th>
									<th>1월</th>
									<th>2월</th>
									<th>3월</th>
									<th>4월</th>
									<th>5월</th>
									<th>6월</th>
									<th>7월</th>
									<th>8월</th>
									<th>9월</th>
									<th>10월</th>
									<th>11월</th>
									<th>12월</th>
									<th>TOTAL</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td colspan="2">TOTAL</td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
								</tr>
								<tr class="row">
									<td>1</td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
								</tr>
								<tr class="row">
									<td>2</td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
								</tr>
								<tr class="row__sub">
									<td colspan="15">
										<div class="table-sub-wrap">
											<table class="table">
												<thead>
													<tr>
														<th>No.</th>
														<th>정산상태</th>
														<th>정산번호</th>
														<th>카드번호</th>
														<th>일자</th>
														<th>시간</th>
														<th>가맹점</th>
														<th>비용-중분류</th>
														<th>비용-소분류</th>
														<th>승인금액</th>
														<th>부가세 별도</th>
														<th>공급가액</th>
														<th>부가세</th>
													</tr>
												</thead>
												<tbody>
													<tr class="row">
														<td>1</td>
														<td>
															<div class="lst-status opt1">
																<span class="opt1__txt opt__txt">미정산</span>
																<span class="opt2__txt opt__txt">정산처리</span>
																<span class="opt3__txt opt__txt">승인요청</span>
																<span class="opt4__txt opt__txt">승인완료</span>
																<span class="opt5__txt opt__txt">전표완료</span>
															</div>
														</td>
														<td></td>
														<td></td>
														<td></td>
														<td></td>
														<td></td>
														<td></td>
														<td></td>
														<td></td>
														<td></td>
														<td></td>
														<td></td>
													</tr>
													<tr class="row">
														<td>2</td>
														<td>
															<div class="lst-status opt3">
																<span class="opt1__txt opt__txt">미정산</span>
																<span class="opt2__txt opt__txt">정산처리</span>
																<span class="opt3__txt opt__txt">승인요청</span>
																<span class="opt4__txt opt__txt">승인완료</span>
																<span class="opt5__txt opt__txt">전표완료</span>
															</div>
														</td>
														<td></td>
														<td></td>
														<td></td>
														<td></td>
														<td></td>
														<td></td>
														<td></td>
														<td></td>
														<td></td>
														<td></td>
														<td></td>
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
		</section>
	</div>
</template>

<script>
export default {};
</script>

<style></style>

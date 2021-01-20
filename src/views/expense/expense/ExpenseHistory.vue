<template>
	<div class="container user-container">
		<section class="section__contents">
			<div class="inner-wrap">
				<div class="section-top">
					<h3 class="section__title">비용 정산 내역</h3>
					<div class="input-box-wrap">
						<div class="input-box input-box-icon">
							<input type="text" class="input input-icon" placeholder="기준년월" />
							<span class="icon icon-calendar"></span>
							<button type="button" class="button button__search">조회</button>
						</div>
					</div>
				</div>

				<div class="component-area">
					<div class="table-wrap table--horizontal">
						<table class="table">
							<thead>
								<tr>
									<th>No.</th>
									<th>구분</th>
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
														<th>사용일자</th>
														<th>사용자</th>
														<th>비용-중분류</th>
														<th>비용-소분류</th>
														<th>적요</th>
														<th>거래처</th>
														<th>사용금액</th>
														<th>부가세 별도</th>
														<th>공급가액</th>
														<th>부가세</th>
													</tr>
												</thead>
												<tbody>
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

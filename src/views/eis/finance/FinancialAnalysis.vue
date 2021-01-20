<template>
	<div class="container user-container">
		<section class="section__contents">
			<div class="inner-wrap">
				<div class="section-top">
					<h3 class="section__title">재무 분석</h3>
					<div class="input-box">
						<el-date-picker v-model="value1" type="month" placeholder="기준년월"></el-date-picker>
						<button type="button" class="button button__search">
							조회
						</button>
					</div>
				</div>
				<div class="component-area">
					<p class="content__title">손익 분석</p>
					<div class="">
						<p class="bold">매출액</p>
						<div class="lst-cards lst-cards__5colums">
							<div class="lst-cards__item">
								<div class="component-box">
									<p class="component__title">당월</p>
									<p class="status-txt--large bold">64.3억원</p>
								</div>
							</div>
							<div class="lst-cards__item">
								<div class="component-box">
									<p class="component__title">전월</p>
									<p class="status-txt--large bold">50.1억원</p>
								</div>
							</div>
							<div class="lst-cards__item">
								<div class="component-box">
									<p class="component__title">전년 동기</p>
									<p class="status-txt--large bold">46.7억원</p>
								</div>
							</div>
							<div class="lst-cards__item">
								<div class="component-box">
									<p class="component__title">전월 대비</p>
									<p class="status-txt--large bold status--up">
										<span class="icon-triangle"></span>
										10.7억원 (27.8%)
									</p>
								</div>
							</div>
							<div class="lst-cards__item">
								<div class="component-box">
									<p class="component__title">전년 동기 대비</p>
									<p class="status-txt--large bold status--down">
										<span class="icon-triangle"></span>
										27.7억원 (38.9%)
									</p>
								</div>
							</div>
						</div>
					</div>
					<div class="">
						<p class="bold">영업 이익</p>
						<div class="lst-cards lst-cards__5colums">
							<div class="lst-cards__item">
								<div class="component-box">
									<p class="component__title">당월</p>
									<p class="status-txt--large bold">64.3억원</p>
								</div>
							</div>
							<div class="lst-cards__item">
								<div class="component-box">
									<p class="component__title">전월</p>
									<p class="status-txt--large bold">50.1억원</p>
								</div>
							</div>
							<div class="lst-cards__item">
								<div class="component-box">
									<p class="component__title">전년 동기</p>
									<p class="status-txt--large bold">46.7억원</p>
								</div>
							</div>
							<div class="lst-cards__item">
								<div class="component-box">
									<p class="component__title">전월 대비</p>
									<p class="status-txt--large bold status--up">
										<span class="icon-triangle"></span>
										10.7억원(27.8%)
									</p>
								</div>
							</div>
							<div class="lst-cards__item">
								<div class="component-box">
									<p class="component__title">전년 동기 대비</p>
									<p class="status-txt--large bold status--down">
										<span class="icon-triangle"></span>
										27.7억원(38.9%)
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="component-area">
					<p class="content__title">재무 비율 분석</p>
					<div class="flex-box">
						<div class="">
							<p class="bold">안정성</p>
							<div class="lst-cards lst-cards__3colums">
								<div class="lst-cards__item">
									<div class="component-box">
										<p class="component__title">유동 비율</p>
										<div class="">
											<div class="flex-box">
												<p class="">당기 누계</p>
												<p>193.0%</p>
											</div>
											<div class="flex-box">
												<p>전년 누계</p>
												<p>198.0%</p>
											</div>
											<div class="flex-box">
												<p>전년 대비</p>
												<p>2.5%</p>
											</div>
										</div>
									</div>
								</div>
								<div>
									<p class="component__title">당좌 비율</p>
									<div class="">
										<div class="flex-box">
											<p>당기 누계</p>
											<p>193.0%</p>
										</div>
										<div class="flex-box">
											<p>전년 누계</p>
											<p>198.0%</p>
										</div>
										<div class="flex-box">
											<p>전년 대비</p>
											<p>2.5%</p>
										</div>
									</div>
								</div>
								<div>
									<p class="component__title">부채 비율</p>
									<div class="">
										<div class="flex-box">
											<p>당기 누계</p>
											<p>193.0%</p>
										</div>
										<div class="flex-box">
											<p>전년 누계</p>
											<p>198.0%</p>
										</div>
										<div class="flex-box">
											<p>전년 대비</p>
											<p>2.5%</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="">
							<p class="bold">성장성</p>
							<div class="lst-cards lst-cards__3colums">
								<div>
									<p class="component__title">매출액 증가율</p>
									<div class="">
										<div class="flex-box">
											<p>당기 누계</p>
											<p>193.0%</p>
										</div>
										<div class="flex-box">
											<p>전년 누계</p>
											<p>198.0%</p>
										</div>
										<div class="flex-box">
											<p>전년 대비</p>
											<p>2.5%</p>
										</div>
									</div>
								</div>
								<div>
									<p class="component__title">영업 이익 증가율</p>
									<div class="">
										<div class="flex-box">
											<p>당기 누계</p>
											<p>193.0%</p>
										</div>
										<div class="flex-box">
											<p>전년 누계</p>
											<p>198.0%</p>
										</div>
										<div class="flex-box">
											<p>전년 대비</p>
											<p>2.5%</p>
										</div>
									</div>
								</div>
								<div>
									<p class="component__title">순이익 증가률</p>
									<div class="">
										<div class="flex-box">
											<p>당기 누계</p>
											<p>193.0%</p>
										</div>
										<div class="flex-box">
											<p>전년 누계</p>
											<p>198.0%</p>
										</div>
										<div class="flex-box">
											<p>전년 대비</p>
											<p>2.5%</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<!-- <div class="component-area-wrap">
					<div class="flex-box">
						<div class="component-area">
							<strong class="content__title">매출액</strong>
							<div class="lst-cards lst-cards__3colums">
								<div class="lst-cards__item">
									<div class="component-box">
										<p class="bold">64.3억원</p>
										<p class="component__title">당월</p>
									</div>
								</div>
								<div class="lst-cards__item">
									<div class="component-box">
										<p class="bold">50.1억원</p>
										<p class="component__title">전월</p>
									</div>
								</div>
								<div class="lst-cards__item">
									<div class="component-box">
										<p class="bold">46.7억원</p>
										<p class="component__title">전년동기</p>
									</div>
								</div>
							</div>
							<div class="flex-box">
								<p class="component__title">전월대비</p>
								<div class="component-box flex-box">
									<p>46.7 (+)</p>
									<p>27.8% (+)</p>
								</div>
							</div>
							<div class="flex-box">
								<p class="component__title">전년 동기 대비</p>
								<div class="component-box flex-box">
									<p>27.7 (-)</p>
									<p>38.9% (-)</p>
								</div>
							</div>
						</div>

						<div class="component-area">
							<strong class="content__title">영업이익</strong>
							<div class="lst-cards lst-cards__3colums">
								<div class="lst-cards__item">
									<div class="component-box">
										<p class="bold">64.3</p>
										<p class="component__title">당월</p>
									</div>
								</div>
								<div class="lst-cards__item">
									<div class="component-box">
										<p class="bold">50.1</p>
										<p class="component__title">전월</p>
									</div>
								</div>
								<div class="lst-cards__item">
									<div class="component-box">
										<p class="bold">46.7</p>
										<p class="component__title">전년동기</p>
									</div>
								</div>
							</div>
							<div class="flex-box">
								<p class="component__title">전월대비</p>
								<div class="component-box flex-box">
									<p>46.7 (+)</p>
									<p>27.8% (+)</p>
								</div>
							</div>
							<div class="flex-box">
								<p class="component__title">전년 동기 대비</p>
								<div class="component-box flex-box">
									<p>27.7 (-)</p>
									<p>38.9% (-)</p>
								</div>
							</div>
						</div>
					</div>
					<div>
						<div class="component-area">
							<strong class="content__title">재무 비율 분석</strong>
							<div class="table-wrap">
								<table class="table">
									<thead>
										<tr>
											<th>대상항목</th>
											<th>당기누계</th>
											<th>전기누계</th>
											<th>전년대비</th>
										</tr>
									</thead>
									<tbody>
										<tr class="row">
											<td>유동비율</td>
											<td>193.0%</td>
											<td>198.0%</td>
											<td>2.5%</td>
										</tr>
										<tr class="row">
											<td>당좌비율</td>
											<td>193.0%</td>
											<td>198.0%</td>
											<td>2.5%</td>
										</tr>
										<tr class="row">
											<td>부채비율</td>
											<td>193.0%</td>
											<td>198.0%</td>
											<td>2.5%</td>
										</tr>
										<tr class="row">
											<td>매출액증가율</td>
											<td>193.0%</td>
											<td>198.0%</td>
											<td>2.5%</td>
										</tr>
										<tr class="row">
											<td>영업이익증가율</td>
											<td>193.0%</td>
											<td>198.0%</td>
											<td>2.5%</td>
										</tr>
										<tr class="row">
											<td>순이익증가율</td>
											<td>193.0%</td>
											<td>198.0%</td>
											<td>2.5%</td>
										</tr>
										<tr class="row">
											<td>매출액이익율</td>
											<td>193.0%</td>
											<td>198.0%</td>
											<td>2.5%</td>
										</tr>
										<tr class="row">
											<td>총자본이익율(ROI)</td>
											<td>193.0%</td>
											<td>198.0%</td>
											<td>2.5%</td>
										</tr>
										<tr class="row">
											<td>자기자본이익율(ROE)</td>
											<td>193.0%</td>
											<td>198.0%</td>
											<td>2.5%</td>
										</tr>
										<tr class="row">
											<td>총자산회전율</td>
											<td>193.0%</td>
											<td>198.0%</td>
											<td>2.5%</td>
										</tr>
										<tr class="row">
											<td>재고자자산회전율</td>
											<td>193.0%</td>
											<td>198.0%</td>
											<td>2.5%</td>
										</tr>
										<tr class="row">
											<td>매출채권회전율</td>
											<td>193.0%</td>
											<td>198.0%</td>
											<td>2.5%</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div> -->
			</div>
		</section>
	</div>
</template>

<script>
export default {};
</script>

<style></style>

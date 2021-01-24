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
				<div class="component-area-wrap component__fa-1">
					<!-- <p class="content__title">손익 분석</p> -->
					<div class="component-area">
						<p class="sub__title">매출액</p>
						<div class="flex-box">
							<div class="">
								<div class="component-box-top">
									<p class="component__title">당월</p>
								</div>
								<p class="status-txt--large bold">64.3억원</p>
							</div>
							<div class="">
								<div class="component-box-top">
									<p class="component__title">전월</p>
								</div>
								<p class="status-txt--large bold">50.1억원</p>
							</div>
							<div class="">
								<div class="component-box-top">
									<p class="component__title">전년 동기</p>
								</div>
								<p class="status-txt--large bold">46.7억원</p>
							</div>
							<div class="">
								<div class="component-box-top">
									<p class="component__title">전월 대비</p>
								</div>
								<div class="status--up flex-box">
									<span class="icon-triangle"></span>
									<p class="status-txt--large bold">
										10.7억원
										<span>+ 27.8%</span>
									</p>
								</div>
							</div>
							<div class="">
								<div class="component-box-top">
									<p class="component__title">전년 동기 대비</p>
								</div>
								<div class="status--down flex-box">
									<span class="icon-triangle"></span>
									<p class="status-txt--large bold">
										27.7억원
										<span>- 38.9%</span>
									</p>
								</div>
							</div>
						</div>
					</div>
					<div class="component-area">
						<p class="sub__title">영업 이익</p>
						<div class="flex-box">
							<div class="">
								<div class="component-box-top">
									<p class="component__title">당월</p>
								</div>
								<p class="status-txt--large bold">64.3억원</p>
							</div>
							<div class="">
								<div class="component-box-top">
									<p class="component__title">전월</p>
								</div>
								<p class="status-txt--large bold">50.1억원</p>
							</div>
							<div class="">
								<div class="component-box-top">
									<p class="component__title">전년 동기</p>
								</div>
								<p class="status-txt--large bold">46.7억원</p>
							</div>
							<div class="">
								<div class="component-box-top">
									<p class="component__title">전월 대비</p>
								</div>
								<div class="status--up flex-box">
									<span class="icon-triangle"></span>
									<p class="status-txt--large bold">
										10.7억원
										<span>+ 27.8%</span>
									</p>
								</div>
							</div>
							<div class="">
								<div class="component-box-top">
									<p class="component__title">전년 동기 대비</p>
								</div>
								<div class="status--down flex-box">
									<span class="icon-triangle"></span>
									<p class="status-txt--large bold">
										27.7억원
										<span>- 38.9%</span>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="component-area component__fa-2">
					<p class="content__title">재무 비율 분석</p>
					<div class="flex-box">
						<div class="table-wrap">
							<p class="sub__title text-align__center">안정성</p>
							<table class="table">
								<colgroup>
									<col>
									<col>
									<col>
									<col>
								</colgroup>
								<thead>
									<tr>
										<td></td>
										<th>유동 비율</th>
										<th>당좌 비율</th>
										<th>부채 비율</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<th>
											<p class="component__title">
												당기 누계
											</p>
										</th>
										<td class="">193.0%</td>
										<td class="">193.0%</td>
										<td class="">193.0%</td>
									</tr>
									<tr>
										<th>
											<p class="component__title">
												전년 누계
											</p>
										</th>
										<td class="">193.0%</td>
										<td class="">193.0%</td>
										<td class="">193.0%</td>
									</tr>
									<tr>
										<th>
											<p class="component__title">
												전년 대비
											</p>
										</th>
										<td class="">
											<p class="status--down flex-box">
												<span class="icon-triangle"></span>2.5%
											</p>
										</td>
										<td class="">
											<p class="status--down flex-box">
												<span class="icon-triangle"></span>2.5%
											</p>
										</td>
										<td class="">
											<p class="status--down flex-box">
												<span class="icon-triangle"></span>2.5%
											</p>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
						<div class="table-wrap">
							<p class="sub__title text-align__center">성장성</p>
							<table class="table">
								<colgroup>
									<col>
									<col>
									<col>
									<col>
								</colgroup>
								<thead>
									<tr>
										<td></td>
										<th>매출액 증가율</th>
										<th>영업이익 증가율</th>
										<th>순이익 증가율</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<th>
											<p class="component__title">
												당기 누계
											</p>
										</th>
										<td class="">193.0%</td>
										<td class="">193.0%</td>
										<td class="">193.0%</td>
									</tr>
									<tr>
										<th>
											<p class="component__title">
												전년 누계
											</p>
										</th>
										<td class="">193.0%</td>
										<td class="">193.0%</td>
										<td class="">193.0%</td>
									</tr>
									<tr>
										<th>
											<p class="component__title">
												전년 대비
											</p>
										</th>
										<td class="">
											<p class="status--down flex-box">
												<span class="icon-triangle"></span>2.5%
											</p>
										</td>
										<td class="">
											<p class="status--down flex-box">
												<span class="icon-triangle"></span>2.5%
											</p>
										</td>
										<td class="">
											<p class="status--down flex-box">
												<span class="icon-triangle"></span>2.5%
											</p>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<div class="flex-box">
						<div class="table-wrap">
							<p class="sub__title text-align__center">수익성</p>
							<table class="table">
								<colgroup>
									<col>
									<col>
									<col>
									<col>
								</colgroup>
								<thead>
									<tr>
										<td></td>
										<th>매출액 이익율</th>
										<th>출자본 이익율 (ROI)</th>
										<th>자기 자본 이익율 (ROE)</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<th>
											<p class="component__title">
												당기 누계
											</p>
										</th>
										<td class="">193.0%</td>
										<td class="">193.0%</td>
										<td class="">193.0%</td>
									</tr>
									<tr>
										<th>
											<p class="component__title">
												전년 누계
											</p>
										</th>
										<td class="">193.0%</td>
										<td class="">193.0%</td>
										<td class="">193.0%</td>
									</tr>
									<tr>
										<th>
											<p class="component__title">
												전년 대비
											</p>
										</th>
										<td class="">
											<p class="status--down flex-box">
												<span class="icon-triangle"></span>2.5%
											</p>
										</td>
										<td class="">
											<p class="status--down flex-box">
												<span class="icon-triangle"></span>2.5%
											</p>
										</td>
										<td class="">
											<p class="status--down flex-box">
												<span class="icon-triangle"></span>2.5%
											</p>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
						<div class="table-wrap">
							<p class="sub__title text-align__center">활동성</p>
							<table class="table">
								<colgroup>
									<col>
									<col>
									<col>
									<col>
								</colgroup>
								<thead>
									<tr>
										<td></td>
										<th>총 자산 회전율</th>
										<th>재고 자산 회전율</th>
										<th>매출 채권 회전율</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<th>
											<p class="component__title">
												당기 누계
											</p>
										</th>
										<td class="">193.0%</td>
										<td class="">193.0%</td>
										<td class="">193.0%</td>
									</tr>
									<tr>
										<th>
											<p class="component__title">
												전년 누계
											</p>
										</th>
										<td class="">193.0%</td>
										<td class="">193.0%</td>
										<td class="">193.0%</td>
									</tr>
									<tr>
										<th>
											<p class="component__title">
												전년 대비
											</p>
										</th>
										<td class="">
											<p class="status--down flex-box">
												<span class="icon-triangle"></span>2.5%
											</p>
										</td>
										<td class="">
											<p class="status--down flex-box">
												<span class="icon-triangle"></span>2.5%
											</p>
										</td>
										<td class="">
											<p class="status--down flex-box">
												<span class="icon-triangle"></span>2.5%
											</p>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
				<!-- <div class="component-area component__fa-2">
					<p class="content__title">재무 비율 분석</p>
					<div class="flex-box">
						<div class="component-box">
							<p class="sub__title">안정성</p>
							<div class="lst-cards lst-cards__3colums">
								<div class="">
									<p class="title-box opt1 bold">유동 비율</p>
									<div class="component-box">
										<div class="flex-box">
											<p class="component__title">당기 누계</p>
											<p class="">193.0%</p>
										</div>
										<div class="flex-box">
											<p class="component__title">전년 누계</p>
											<p class="">198.0%</p>
										</div>
										<div class="flex-box">
											<p class="component__title">전년 대비</p>
											<p class="status--down flex-box">
												<span class="icon-triangle"></span>2.5%
											</p>
										</div>
									</div>
								</div>
								<div class="">
									<p class="title-box opt1 bold">당좌 비율</p>
									<div class="component-box">
										<div class="flex-box">
											<p class="component__title">당기 누계</p>
											<p class="">193.0%</p>
										</div>
										<div class="flex-box">
											<p class="component__title">전년 누계</p>
											<p class="">198.0%</p>
										</div>
										<div class="flex-box">
											<p class="component__title">전년 대비</p>
											<p class="status--down flex-box">
												<span class="icon-triangle"></span>2.5%
											</p>
										</div>
									</div>
								</div>
								<div class="">
									<p class="title-box opt1 bold">부채 비율</p>
									<div class="component-box">
										<div class="flex-box">
											<p class="component__title">당기 누계</p>
											<p class="">193.0%</p>
										</div>
										<div class="flex-box">
											<p class="component__title">전년 누계</p>
											<p class="">198.0%</p>
										</div>
										<div class="flex-box">
											<p class="component__title">전년 대비</p>
											<p class="status--down flex-box">
												<span class="icon-triangle"></span>2.5%
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="component-box">
							<p class="sub__title">성장성</p>
							<div class="lst-cards lst-cards__3colums">
								<div class="">
									<p class="title-box opt1 bold">매출액 증가율</p>
									<div class="component-box">
										<div class="flex-box">
											<p class="component__title">당기 누계</p>
											<p class="">193.0%</p>
										</div>
										<div class="flex-box">
											<p class="component__title">전년 누계</p>
											<p class="">198.0%</p>
										</div>
										<div class="flex-box">
											<p class="component__title">전년 대비</p>
											<p class="status--down flex-box">
												<span class="icon-triangle"></span>2.5%
											</p>
										</div>
									</div>
								</div>
								<div class="">
									<p class="title-box opt1 bold">영업 이익 증가율</p>
									<div class="component-box">
										<div class="flex-box">
											<p class="component__title">당기 누계</p>
											<p class="">193.0%</p>
										</div>
										<div class="flex-box">
											<p class="component__title">전년 누계</p>
											<p class="">198.0%</p>
										</div>
										<div class="flex-box">
											<p class="component__title">전년 대비</p>
											<p class="status--down flex-box">
												<span class="icon-triangle"></span>2.5%
											</p>
										</div>
									</div>
								</div>
								<div class="">
									<p class="title-box opt1 bold">순이익 증가률</p>
									<div class="component-box">
										<div class="flex-box">
											<p class="component__title">당기 누계</p>
											<p class="">193.0%</p>
										</div>
										<div class="flex-box">
											<p class="component__title">전년 누계</p>
											<p class="">198.0%</p>
										</div>
										<div class="flex-box">
											<p class="component__title">전년 대비</p>
											<p class="status--down flex-box">
												<span class="icon-triangle"></span>2.5%
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>	
					<div class="flex-box">
						<div class="component-box">
							<p class="sub__title">수익성</p>
							<div class="lst-cards lst-cards__3colums">
								<div class="">
									<p class="title-box opt1 bold">매출액 이익율</p>
									<div class="component-box">
										<div class="flex-box">
											<p class="component__title">당기 누계</p>
											<p class="bold">193.0%</p>
										</div>
										<div class="flex-box">
											<p class="component__title">전년 누계</p>
											<p class="bold">198.0%</p>
										</div>
										<div class="flex-box">
											<p class="component__title">전년 대비</p>
											<p class="status--down flex-box bold">
												<span class="icon-triangle"></span>2.5%
											</p>
										</div>
									</div>
								</div>
								<div class="">
									<p class="title-box opt1 bold">출자본 이익율 (ROI)</p>
									<div class="component-box">
										<div class="flex-box">
											<p class="component__title">당기 누계</p>
											<p class="bold">193.0%</p>
										</div>
										<div class="flex-box">
											<p class="component__title">전년 누계</p>
											<p class="bold">198.0%</p>
										</div>
										<div class="flex-box">
											<p class="component__title">전년 대비</p>
											<p class="status--down flex-box bold">
												<span class="icon-triangle"></span>2.5%
											</p>
										</div>
									</div>
								</div>
								<div class="">
									<p class="title-box opt1 bold">자기 자본 이익율 (ROE)</p>
									<div class="component-box">
										<div class="flex-box">
											<p class="component__title">당기 누계</p>
											<p class="bold">193.0%</p>
										</div>
										<div class="flex-box">
											<p class="component__title">전년 누계</p>
											<p class="bold">198.0%</p>
										</div>
										<div class="flex-box">
											<p class="component__title">전년 대비</p>
											<p class="status--down flex-box bold">
												<span class="icon-triangle"></span>2.5%
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="component-box">
							<p class="sub__title">활동성</p>
							<div class="lst-cards lst-cards__3colums">
								<div class="">
									<p class="title-box opt1 bold">총 자산 회전율</p>
									<div class="component-box">
										<div class="flex-box">
											<p class="component__title">당기 누계</p>
											<p class="bold">193.0%</p>
										</div>
										<div class="flex-box">
											<p class="component__title">전년 누계</p>
											<p class="bold">198.0%</p>
										</div>
										<div class="flex-box">
											<p class="component__title">전년 대비</p>
											<p class="status--down flex-box bold">
												<span class="icon-triangle"></span>2.5%
											</p>
										</div>
									</div>
								</div>
								<div class="">
									<p class="title-box opt1 bold">재고 자산 회전율</p>
									<div class="component-box">
										<div class="flex-box">
											<p class="component__title">당기 누계</p>
											<p class="bold">193.0%</p>
										</div>
										<div class="flex-box">
											<p class="component__title">전년 누계</p>
											<p class="bold">198.0%</p>
										</div>
										<div class="flex-box">
											<p class="component__title">전년 대비</p>
											<p class="status--down flex-box bold">
												<span class="icon-triangle"></span>2.5%
											</p>
										</div>
									</div>
								</div>
								<div class="">
									<p class="title-box opt1 bold">매출 채권 회전율</p>
									<div class="component-box">
										<div class="flex-box">
											<p class="component__title">당기 누계</p>
											<p class="bold">193.0%</p>
										</div>
										<div class="flex-box">
											<p class="component__title">전년 누계</p>
											<p class="bold">198.0%</p>
										</div>
										<div class="flex-box">
											<p class="component__title">전년 대비</p>
											<p class="status--down bold flex-box">
												<span class="icon-triangle"></span>2.5%
											</p>
										</div>
									</div>
								</div>
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

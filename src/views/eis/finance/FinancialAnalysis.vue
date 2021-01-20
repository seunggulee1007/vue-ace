<template>
	<div class="container user-container">
		<section class="section__contents">
			<div class="inner-wrap">
				<div class="section-top">
					<h3 class="section__title">재무 분석</h3>
					<div class="input-box-wrap">
						<div class="input-box input-box-icon">
							<input class="input input-icon" type="text" placeholder="기준년월" />
							<span class="icon icon-calendar"></span>
							<select name="" id="">
								<option value="" selected>억원</option>
								<option value="">백만원</option>
								<option value="">십만원</option>
								<option value="">만원</option>
								<option value="">천원</option>
								<option value="">원</option>
							</select>
							<button type="button" class="button button__search">
								조회
							</button>
						</div>
					</div>
				</div>

				<div class="component-area-wrap">
					<div class="flex-box">
						<div class="component-area">
							<strong class="content__title">매출액</strong>
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
				</div>
			</div>
		</section>
	</div>
</template>

<script>
export default {};
</script>

<style></style>

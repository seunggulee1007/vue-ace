<template>
	<div class="container user-container">
		<section class="section__contents">
			<div class="inner-wrap">
				<div class="section-top">
					<h3 class="section__title">손익 분석</h3>
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

				<div class="component-area">
					<div class="table-wrap">
						<table class="table">
							<thead>
								<tr>
									<th rowspan="2">구분</th>
									<th rowspan="2" class="data__number">당월</th>
									<th rowspan="2" class="data__number">전월</th>
									<th rowspan="2" class="data__number">전년동기</th>
									<th colspan="2">전월 대비</th>
									<th colspan="2">전년동기 대비</th>
									<th rowspan="2" class="highlight data__number">당기 누계</th>
									<th rowspan="2" class="highlight data__number">전기 누계</th>
									<th colspan="2" class="highlight">전년 대비</th>
								</tr>
								<tr>
									<th class="data__number">증감액</th>
									<th class="data__number">증감율(%)</th>
									<th class="data__number">증감액</th>
									<th class="data__number">증감율(%)</th>
									<th class="highlight data__number">증감액</th>
									<th class="highlight data__number">증감율(%)</th>
								</tr>
							</thead>
							<tbody>
								<tr class="row">
									<td>매출액</td>
									<td class="data__number">1,226.0</td>
									<td class="data__number">986.0</td>
									<td class="data__number">1,470.0</td>
									<td class="data__number">240.0 (+)</td>
									<td class="data__number">24.3% (+)</td>
									<td class="data__number">244.0 (-)</td>
									<td class="data__number">16.6% (-)</td>
									<td class="data__number">1,363.0</td>
									<td class="data__number">1,381.0</td>
									<td class="data__number">18.0 (-)</td>
									<td class="data__number">1.3% (-)</td>
								</tr>
								<tr class="row">
									<td>매출원가</td>
									<td class="data__number">528.0</td>
									<td class="data__number">391.0</td>
									<td class="data__number">602.0</td>
									<td class="data__number">137.0 (+)</td>
									<td class="data__number">35.0% (+)</td>
									<td class="data__number">74.0 (-)</td>
									<td class="data__number">12.3% (-)</td>
									<td class="data__number">550.0</td>
									<td class="data__number">550.0</td>
									<td class="data__number">0.0 (+)</td>
									<td class="data__number">0.0% (+)</td>
								</tr>
								<tr class="row">
									<td>매출총이익</td>
									<td class="data__number">1,226.0</td>
									<td class="data__number">986.0</td>
									<td class="data__number">1,470.0</td>
									<td class="data__number">240.0 (+)</td>
									<td class="data__number">24.3% (+)</td>
									<td class="data__number">244.0 (-)</td>
									<td class="data__number">16.6% (-)</td>
									<td class="data__number">1,363.0</td>
									<td class="data__number">1,381.0</td>
									<td class="data__number">18.0 (-)</td>
									<td class="data__number">1.3% (-)</td>
								</tr>
								<tr class="row">
									<td>판매관리비</td>
									<td class="data__number">528.0</td>
									<td class="data__number">391.0</td>
									<td class="data__number">602.0</td>
									<td class="data__number">137.0 (+)</td>
									<td class="data__number">35.0% (+)</td>
									<td class="data__number">74.0 (-)</td>
									<td class="data__number">12.3% (-)</td>
									<td class="data__number">550.0</td>
									<td class="data__number">550.0</td>
									<td class="data__number">0.0 (+)</td>
									<td class="data__number">0.0% (+)</td>
								</tr>
								<tr class="row">
									<td>영업이익</td>
									<td class="data__number">1,226.0</td>
									<td class="data__number">986.0</td>
									<td class="data__number">1,470.0</td>
									<td class="data__number">240.0 (+)</td>
									<td class="data__number">24.3% (+)</td>
									<td class="data__number">244.0 (-)</td>
									<td class="data__number">16.6% (-)</td>
									<td class="data__number">1,363.0</td>
									<td class="data__number">1,381.0</td>
									<td class="data__number">18.0 (-)</td>
									<td class="data__number">1.3% (-)</td>
								</tr>
								<tr class="row">
									<td>당기순이익</td>
									<td class="data__number">528.0</td>
									<td class="data__number">391.0</td>
									<td class="data__number">602.0</td>
									<td class="data__number">137.0 (+)</td>
									<td class="data__number">35.0% (+)</td>
									<td class="data__number">74.0 (-)</td>
									<td class="data__number">12.3% (-)</td>
									<td class="data__number">550.0</td>
									<td class="data__number">550.0</td>
									<td class="data__number">0.0 (+)</td>
									<td class="data__number">0.0% (+)</td>
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

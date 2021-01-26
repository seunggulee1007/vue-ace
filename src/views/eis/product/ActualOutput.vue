<template>
	<div class="container user-container">
		<section class="section__contents">
			<div class="inner-wrap">
				<div class="section-top">
					<h3 class="section__title">생산 실적</h3>
					<div class="input-box-wrap">
						<div class="input-box">
							<el-date-picker v-model="value1" type="month" placeholder="기준년월"></el-date-picker>
							<div class="input-select input-box input-box-icon">
								<select name="" id="" class="selectbox">
									<option value="" selected>억원</option>
									<option value="">백만원</option>
									<option value="">십만원</option>
									<option value="">만원</option>
									<option value="">천원</option>
									<option value="">원</option>
								</select>
								<span class="icon icon-arrow"></span>
							</div>
							<div class="input-select input-box input-box-icon">
								<select name="" id="" class="selectbox">
									<option value="">품목자산분류</option>
									<option value="">분류1</option>
									<option value="">분류2</option>
									<option value="">분류3</option>
								</select>
								<span class="icon icon-arrow"></span>
							</div>
							<button type="button" class="button button__search">
								조회
							</button>
						</div>
					</div>
				</div>
				<div class="component__eis-1 component__ao-1">
					<strong class="content__title">유형별 생산 실적</strong>
					<div class="component-area">
						<div class="lst-cards lst-cards__8colums">
							<div class="box">
								<div class="box-top">
									<p class="component__title">품목 자산 분류</p>
								</div>
								<div class="box-cnt">
									<p class="bold">제품</p>
								</div>
							</div>
							<div class="box">
								<div class="box-top bg-opt2">
									<p class="component__title">품목 유형</p>
								</div>
								<div class="box-cnt">
									<p class="bold">유형1</p>
								</div>
							</div>
							<div class="box">
								<div class="box-top bg-opt3">
									<p class="component__title">생산 단위</p>
								</div>
								<div class="box-cnt">
									<p class="bold">EA</p>
								</div>
							</div>
							<div class="box">
								<div class="box-top">
									<p class="component__title">당월</p>
								</div>
								<div class="box-cnt">
									<p class="bold">64.3억원</p>
								</div>
							</div>
							<div class="box">
								<div class="box-top">
									<p class="component__title">전월</p>
								</div>
								<div class="box-cnt">
									<p class="bold">50.1억원</p>
								</div>
							</div>
							<div class="box">
								<div class="box-top">
									<p class="component__title">전년 동기</p>
								</div>
								<div class="box-cnt">
									<p class="bold">46.7억원</p>
								</div>
							</div>
							<div class="box">
								<div class="box-top bg-opt4">
									<p class="component__title">전월 대비</p>
								</div>
								<div class="box-cnt">
									<div class="status--up flex-box">
										<span class="icon-triangle"></span>
										<p class="bold">
											10.7억원
											<span>+ 27.8%</span>
										</p>
									</div>
								</div>
							</div>
							<div class="box">
								<div class="box-top bg-opt5">
									<p class="component__title">전년 동기 대비</p>
								</div>
								<div class="box-cnt">
									<div class="status--down flex-box">
										<span class="icon-triangle"></span>
										<p class="bold">
											27.7억원
											<span>- 38.9%</span>
										</p>
									</div>
								</div>
							</div>
						</div>
						<div class="lst-cards lst-cards__8colums">
							<div class="box">
								<div class="box-cnt">
									<p class="bold">제품</p>
								</div>
							</div>
							<div class="box">
								<div class="box-cnt">
									<p class="bold">유형2</p>
								</div>
							</div>
							<div class="box">
								<div class="box-cnt">
									<p class="bold">EA</p>
								</div>
							</div>
							<div class="box">
								<div class="box-cnt">
									<p class="bold">64.3억원</p>
								</div>
							</div>
							<div class="box">
								<div class="box-cnt">
									<p class="bold">50.1억원</p>
								</div>
							</div>
							<div class="box">
								<div class="box-cnt">
									<p class="bold">46.7억원</p>
								</div>
							</div>
							<div class="box">
								<div class="box-cnt">
									<div class="status--up flex-box">
										<span class="icon-triangle"></span>
										<p class="bold">
											10.7억원
											<span>+ 27.8%</span>
										</p>
									</div>
								</div>
							</div>
							<div class="box">
								<div class="box-cnt">
									<div class="status--down flex-box">
										<span class="icon-triangle"></span>
										<p class="bold">
											27.7억원
											<span>- 38.9%</span>
										</p>
									</div>
								</div>
							</div>
						</div>
						<div class="lst-cards lst-cards__8colums">
							<div class="box">
								<div class="box-cnt">
									<p class="bold">제품</p>
								</div>
							</div>
							<div class="box">
								<div class="box-cnt">
									<p class="bold">유형3</p>
								</div>
							</div>
							<div class="box">
								<div class="box-cnt">
									<p class="bold">EA</p>
								</div>
							</div>
							<div class="box">
								<div class="box-cnt">
									<p class="bold">64.3억원</p>
								</div>
							</div>
							<div class="box">
								<div class="box-cnt">
									<p class="bold">50.1억원</p>
								</div>
							</div>
							<div class="box">
								<div class="box-cnt">
									<p class="bold">46.7억원</p>
								</div>
							</div>
							<div class="box">
								<div class="box-cnt">
									<div class="status--up flex-box">
										<span class="icon-triangle"></span>
										<p class="bold">
											10.7억원
											<span>+ 27.8%</span>
										</p>
									</div>
								</div>
							</div>
							<div class="box">
								<div class="box-cnt">
									<div class="status--down flex-box">
										<span class="icon-triangle"></span>
										<p class="bold">
											27.7억원
											<span>- 38.9%</span>
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="component__eis-2 component__ao-2">
					<div class="component-box component-box-top">
						<strong class="content__title">유형별/월별 생산 실적 </strong>
						<div class="input-box">
							<div class="input-select input-box input-box-icon">
								<select name="" id="" class="selectbox">
									<option value="">품목자산분류</option>
									<option value="">분류1</option>
									<option value="">분류2</option>
									<option value="">분류3</option>
								</select>
								<span class="icon icon-arrow"></span>
							</div>
							<div class="input-select input-box input-box-icon">
								<select name="" id="" class="selectbox">
									<option value="">품목유형</option>
									<option value="">유형1</option>
									<option value="">유형2</option>
									<option value="">유형3</option>
								</select>
								<span class="icon icon-arrow"></span>
							</div>
							<button type="button" class="button button__search">
								조회
							</button>
						</div>
					</div>
					<div class="component-area">
						<div class="chart-wrap" ref="chartdiv">
							chart1
						</div>
					</div>
				</div>
				<div class="component__eis-3 component__ao-3">
					<div class="component-box component-box-top">
						<strong class="content__title">제품별 생산 실적</strong>
						<div class="input-box">
							<div class="input-select input-box input-box-icon">
								<select name="" id="" class="selectbox">
									<option value="">품목자산분류</option>
									<option value="">분류1</option>
									<option value="">분류2</option>
									<option value="">분류3</option>
								</select>
								<span class="icon icon-arrow"></span>
							</div>
							<div class="input-select input-box input-box-icon">
								<select name="" id="" class="selectbox">
									<option value="">품목유형</option>
									<option value="">유형1</option>
									<option value="">유형2</option>
									<option value="">유형3</option>
								</select>
								<span class="icon icon-arrow"></span>
							</div>
							<input type="text" class="input" placeholder="품명을 입력하세요" />
							<button type="button" class="button button__search">
								조회
							</button>
						</div>
					</div>
					<div class="component-area">
						.
						<div class="table-wrap">
							<table class="table">
								<colgroup>
									<col />
									<col />
									<col />
									<col />
									<col />
									<col />
									<col />
									<col />
									<col />
									<col />
									<col />
									<col />
									<col />
									<col />
									<col />
								</colgroup>
								<thead>
									<tr>
										<th rowspan="2">No.</th>
										<th rowspan="2">품목 자산 분류</th>
										<th rowspan="2">품목 유형</th>
										<th rowspan="2">품명</th>
										<th rowspan="2">전년동기</th>
										<th rowspan="2">전월</th>
										<th rowspan="2">당월</th>
										<th colspan="2">전월 대비</th>
										<th colspan="2">전년동기 대비</th>
										<th rowspan="2" class="highlight">전기 누계</th>
										<th rowspan="2" class="highlight">당기 누계</th>
										<th colspan="2" class="highlight">전년 대비</th>
									</tr>
									<tr>
										<th>증감액</th>
										<th>증감율(%)</th>
										<th>증감액</th>
										<th>증감율(%)</th>
										<th class="highlight">증감액</th>
										<th class="highlight">증감율(%)</th>
									</tr>
								</thead>
								<tbody>
									<tr class="row">
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td class="data__number"></td>
										<td class="data__number"></td>
										<td class="data__number"></td>
										<td class="data__number"></td>
										<td class="data__number"></td>
										<td class="data__number"></td>
										<td class="data__number"></td>
										<td class="data__number"></td>
										<td class="data__number"></td>
										<td class="data__number"></td>
										<td class="data__number"></td>
									</tr>
									<tr class="row">
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td class="data__number"></td>
										<td class="data__number"></td>
										<td class="data__number"></td>
										<td class="data__number"></td>
										<td class="data__number"></td>
										<td class="data__number"></td>
										<td class="data__number"></td>
										<td class="data__number"></td>
										<td class="data__number"></td>
										<td class="data__number"></td>
										<td class="data__number"></td>
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

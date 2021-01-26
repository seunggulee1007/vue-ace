<template>
	<div class="container user-container">
		<section class="section__contents">
			<div class="inner-wrap">
				<div class="section-top">
					<h3 class="section__title">구매 실적</h3>
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
							<button type="button" class="button button__search">
								조회
							</button>
						</div>
					</div>
				</div>
				<div class="component__eis-1 component__pp-1">
					<strong class="content__title">매입 금액</strong>
					<div class="flex-box">
						<div>
							<div class="lst-cards lst-cards__3colums">
								<div class="component-area flex-box">
									<div class="component-box">
										<div class="component-box-top">
											<p class="component__title">당월</p>
										</div>
										<p class="status-txt--large bold">64.3억원</p>
									</div>
								</div>
								<div class="component-area flex-box">
									<div class="component-box">
										<div class="component-box-top">
											<p class="component__title">전월</p>
										</div>
										<p class="status-txt--large bold">50.1억원</p>
									</div>
								</div>
								<div class="component-area flex-box">
									<div class="component-box">
										<div class="component-box-top">
											<p class="component__title">전년동기</p>
										</div>
										<p class="status-txt--large bold">46.7억원</p>
									</div>
								</div>
							</div>
							<div class="lst-cards lst-cards__2colums">
								<div class="component-area">
									<div class="component-box">
										<div class="component-box-top">
											<p class="component__title">전월 대비</p>
										</div>
										<div class="status--up flex-box">
											<span class="icon-triangle"></span>
											<p class="status-txt--large bold">
												46.7억원
												<span>+ 27.8%</span>
											</p>
										</div>
									</div>
								</div>
								<div class="component-area">
									<div class="component-box">
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
						<div>
							<div class="component-area">
								<div class="chart-wrap" ref="chartdiv">
									chart1
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="component__eis-2 component__pp-2">
					<strong class="content__title">유형별 매입 분석</strong>
					<div class="component-area">
						<div class="chart-wrap" ref="chartdiv2">
							chart2
						</div>
					</div>
				</div>
				<div class="component__eis-3 component__pp-3">
					<strong class="content__title">구매처별 매입 현황</strong>
					<div class="component-area">
						<div class="chart-wrap" ref="chartdiv3">
							chart3
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

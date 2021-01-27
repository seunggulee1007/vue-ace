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
								<div class="chart-wrap" ref="chartdiv"></div>
							</div>
						</div>
					</div>
				</div>
				<div class="component__eis-2 component__pp-2">
					<div class="component-box component-box-top">
						<strong class="content__title">유형별 매입 분석</strong>
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
							<button type="button" class="button button__search">
								조회
							</button>
						</div>
					</div>
					<div class="component-area">
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
				<div class="component__eis-3 component__pp-3">
					<div class="component-box component-box-top">
						<strong class="content__title">구매처별 매입 현황</strong>
						<div class="input-box">
							<input type="text" class="input" placeholder="구매처명" />
							<button type="button" class="button button__search">
								조회
							</button>
						</div>
					</div>
					<div class="component-area">
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
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
am4core.useTheme(am4themes_animated);
export default {
	mounted() {
		this.chart = am4core.create(this.$refs.chartdiv, am4charts.XYChart);
		this.chart.colors.step = 2;

		this.chart.legend = new am4charts.Legend();
		this.chart.legend.position = 'bottom';
		this.chart.legend.paddingBottom = 20;
		this.chart.legend.labels.template.maxWidth = 95;

		this.xAxis = this.chart.xAxes.push(new am4charts.CategoryAxis());
		this.xAxis.dataFields.category = 'category';
		this.xAxis.renderer.cellStartLocation = 0.1;
		this.xAxis.renderer.cellEndLocation = 0.9;
		this.xAxis.renderer.grid.template.location = 0;

		let yAxis = this.chart.yAxes.push(new am4charts.ValueAxis());
		yAxis.min = 0;
		this.chart.data = [
			{
				category: '1월',
				first: 81,
				second: 70,
			},
			{
				category: '2월',
				first: 62,
				second: 62,
			},
			{
				category: '3월',
				first: 34,
				second: 37,
			},
			{
				category: '4월',
				first: 38,
				second: 29,
			},
			{
				category: '5월',
				first: 37,
				second: 34,
			},
			{
				category: '6월',
				first: 67,
				second: 41,
			},
			{
				category: '7월',
				first: 50,
				second: 72,
			},
			{
				category: '8월',
				first: 64,
				second: 46,
			},
			{
				category: '9월',
				first: 0,
				second: 26,
			},
			{
				category: '10월',
				first: 0,
				second: 34,
			},
			{
				category: '11월',
				first: 0,
				second: 32,
			},
			{
				category: '12월',
				first: 0,
				second: 30,
			},
		];
		this.createSeries('first', '2020년');
		this.createSeries('second', '2019년');
	},
	methods: {
		createSeries(value, name) {
			let series = this.chart.series.push(new am4charts.ColumnSeries());
			series.dataFields.valueY = value;
			series.dataFields.categoryX = 'category';
			series.name = name;

			series.events.on('hidden', this.arrangeColumns);
			series.events.on('shown', this.arrangeColumns);

			let bullet = series.bullets.push(new am4charts.LabelBullet());
			bullet.interactionsEnabled = false;
			bullet.dy = 30;
			bullet.label.text = '{valueY}';
			bullet.label.fill = am4core.color('#ffffff');

			return series;
		},
		arrangeColumns() {
			let series = this.chart.series.getIndex(0);

			let w = 1 - this.xAxis.renderer.cellStartLocation - (1 - this.xAxis.renderer.cellEndLocation);
			if (series.dataItems.length > 1) {
				let x0 = this.xAxis.getX(series.dataItems.getIndex(0), 'categoryX');
				let x1 = this.xAxis.getX(series.dataItems.getIndex(1), 'categoryX');
				let delta = ((x1 - x0) / this.chart.series.length) * w;
				if (am4core.isNumber(delta)) {
					let middle = this.chart.series.length / 2;

					let newIndex = 0;
					this.chart.series.each(series => {
						if (!series.isHidden && !series.isHiding) {
							series.dummyData = newIndex;
							newIndex++;
						} else {
							series.dummyData = this.chart.series.indexOf(series);
						}
					});
					let visibleCount = newIndex;
					let newMiddle = visibleCount / 2;

					this.chart.series.each(series => {
						let trueIndex = this.chart.series.indexOf(series);
						let newIndex = series.dummyData;

						let dx = (newIndex - trueIndex + middle - newMiddle) * delta;

						series.animate(
							{ property: 'dx', to: dx },
							series.interpolationDuration,
							series.interpolationEasing,
						);
						series.bulletsContainer.animate(
							{ property: 'dx', to: dx },
							series.interpolationDuration,
							series.interpolationEasing,
						);
					});
				}
			}
		},
	},
	data() {
		return {
			chart: '',
			xAxis: '',
		};
	},
};
</script>

<style></style>

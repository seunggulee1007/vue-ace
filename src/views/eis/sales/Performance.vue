<template>
	<div class="container user-container">
		<section class="section__contents">
			<div class="inner-wrap">
				<div class="section-top">
					<h3 class="section__title">영업 실적 분석</h3>
					<div class="input-box-wrap">
						<div class="input-box">
							<el-date-picker v-model="searchDt" type="month" placeholder="기준년월"></el-date-picker>
							<div class="input-select input-box input-box-icon">
								<select name="" id="" class="selectbox">
									<option
										v-for="item in unitList"
										:key="item.SMQryUnitSeq"
										:value="item.SMQryUnitSeq"
										>{{ item.SMQryUnitName }}</option
									>
								</select>
								<span class="icon icon-arrow"></span>
							</div>
							<button type="button" class="button button__search">
								조회
							</button>
						</div>
					</div>
				</div>
				<div class="component__eis-1 component__p-1">
					<strong class="content__title">매출 실적</strong>
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
							<div class="lst-cards lst-cards__2colums">
								<div class="component-area flex-box">
									<div class="component-box">
										<div class="component-box-top">
											<p class="component__title">당기누계</p>
										</div>
										<p class="status-txt--large bold">1,363억원</p>
									</div>
								</div>
								<div class="component-area flex-box">
									<div class="component-box">
										<div class="component-box-top">
											<p class="component__title">전기누계</p>
										</div>
										<p class="status-txt--large bold">1,381억원</p>
									</div>
								</div>
							</div>
							<div class="lst-cards flex-box">
								<div class="component-area">
									<div class="component-box">
										<div class="component-box-top">
											<p class="component__title">전년대비</p>
										</div>
										<div class="status--down flex-box">
											<span class="icon-triangle"></span>
											<p class="status-txt--large bold">
												18.0억원
												<span>- 1.3%</span>
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="component__eis-2 component__p-2">
					<strong class="content__title">매출 채권 연령 분석</strong>
					<div class="component-area">
						<div class="chart-wrap1" ref="chartdiv"></div>
					</div>
				</div>
				<div class="component__eis-3 component__p-3">
					<strong class="content__title">월별 실적</strong>
					<div class="component-area">
						<div class="chart-wrap" ref="chartdiv2"></div>
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
		// Add data
		this.chart.data = [
			{
				year: '전사',
				europe: 9.4,
				namerica: 6.1,
				asia: 4.6,
				lamerica: 2.8,
				meast: 8.7,
			},
		];

		this.chart.legend = new am4charts.Legend();
		this.chart.legend.position = 'bottom';

		// Create axes
		let categoryAxis = this.chart.yAxes.push(new am4charts.CategoryAxis());
		categoryAxis.dataFields.category = 'year';
		categoryAxis.renderer.grid.template.opacity = 0;

		let valueAxis = this.chart.xAxes.push(new am4charts.ValueAxis());
		valueAxis.min = 0;
		valueAxis.renderer.grid.template.opacity = 0;
		valueAxis.renderer.ticks.template.strokeOpacity = 0.5;
		valueAxis.renderer.ticks.template.stroke = am4core.color('#495C43');
		valueAxis.renderer.ticks.template.length = 10;
		valueAxis.renderer.line.strokeOpacity = 0.5;
		valueAxis.renderer.baseGrid.disabled = true;
		valueAxis.renderer.minGridDistance = 40;

		this.createSeries('europe', '30일 이하', '#3A579B');
		this.createSeries('namerica', '30~60일', '#FE8F00');
		this.createSeries('asia', '60~90일', '#AEB9CB');
		this.createSeries('lamerica', '90~120일', '#FFCC42');
		this.createSeries('meast', '120일 이상', '#3C7DFF');

		this.chart2 = am4core.create(this.$refs.chartdiv2, am4charts.XYChart);
		this.chart2.colors.step = 2;

		this.chart2.legend = new am4charts.Legend();
		this.chart2.legend.position = 'bottom';
		this.chart2.legend.paddingBottom = 20;
		this.chart2.legend.labels.template.maxWidth = 95;

		this.xAxis = this.chart2.xAxes.push(new am4charts.CategoryAxis());
		this.xAxis.dataFields.category = 'category';
		this.xAxis.renderer.cellStartLocation = 0.1;
		this.xAxis.renderer.cellEndLocation = 0.9;
		this.xAxis.renderer.grid.template.location = 0;

		let yAxis = this.chart2.yAxes.push(new am4charts.ValueAxis());
		yAxis.min = 0;
		this.chart2.data = [
			{
				category: '1월',
				first: 81,
				second: 70,
			},
			{
				category: '2월',
				first: 62,
				second: 51,
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
		this.createSeries2('first', '2020년');
		this.createSeries2('second', '2019년');
	},
	methods: {
		createSeries(field, name, color) {
			let series = this.chart.series.push(new am4charts.ColumnSeries());
			series.dataFields.valueX = field;
			series.dataFields.categoryY = 'year';
			series.stacked = true;
			series.name = name;
			series.columns.template.fill = am4core.color(color);
			series.columns.template.stroke = am4core.color('#e7ecf0');

			let labelBullet = series.bullets.push(new am4charts.LabelBullet());
			labelBullet.locationX = 0.5;
			labelBullet.label.text = '{valueX}';
			labelBullet.label.fill = am4core.color('#fff');
		},
		createSeries2(value, name) {
			let series = this.chart2.series.push(new am4charts.ColumnSeries());
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
			let series = this.chart2.series.getIndex(0);

			let w = 1 - this.xAxis.renderer.cellStartLocation - (1 - this.xAxis.renderer.cellEndLocation);
			if (series.dataItems.length > 1) {
				let x0 = this.xAxis.getX(series.dataItems.getIndex(0), 'categoryX');
				let x1 = this.xAxis.getX(series.dataItems.getIndex(1), 'categoryX');
				let delta = ((x1 - x0) / this.chart2.series.length) * w;
				if (am4core.isNumber(delta)) {
					let middle = this.chart2.series.length / 2;

					let newIndex = 0;
					this.chart2.series.each(series => {
						if (!series.isHidden && !series.isHiding) {
							series.dummyData = newIndex;
							newIndex++;
						} else {
							series.dummyData = this.chart2.series.indexOf(series);
						}
					});
					let visibleCount = newIndex;
					let newMiddle = visibleCount / 2;

					this.chart2.series.each(series => {
						let trueIndex = this.chart2.series.indexOf(series);
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
			chart2: '',
			xAxis: '',
			value1: '',
			searchDt: this.getYearMonth(),
			unitList: [
				{ SMQryUnitSeq: 1060001, SMQryUnitName: '원' },
				{ SMQryUnitSeq: 1060002, SMQryUnitName: '천원' },
				{ SMQryUnitSeq: 1060003, SMQryUnitName: '만원' },
				{ SMQryUnitSeq: 1060004, SMQryUnitName: '십만원' },
				{ SMQryUnitSeq: 1060005, SMQryUnitName: '백만원' },
				{ SMQryUnitSeq: 1060006, SMQryUnitName: '천만원' },
				{ SMQryUnitSeq: 1060007, SMQryUnitName: '억원' },
			],
		};
	},
};
</script>

<style scoped>
.chart-wrap {
	height: 300px;
}
</style>

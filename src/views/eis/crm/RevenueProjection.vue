<template>
	<div class="container user-container">
		<section class="section__contents">
			<div class="inner-wrap">
				<div class="section-top">
					<h3 class="section__title">예상 매출 분석</h3>
					<div class="input-box-wrap">
						<div class="input-box input-box-icon">
							<input class="input input-icon" type="text" placeholder="예상매출월" />
							<span class="icon icon-calendar"></span>
							<select name="" id="">
								<option value="" selected>부서명</option>
								<option value="">사원명</option>
							</select>
							<div class="input-box">
								<input type="text" class="input" placeholder="검색어를 입력하세요" />
							</div>
							<select name="" id="">
								<option value="" selected>억원</option>
								<option value="">백만원</option>
								<option value="">십만원</option>
								<option value="">만원</option>
								<option value="">천원</option>
								<option value="">원</option>
							</select>
							<button type="button" class="button button__search">검색</button>
						</div>
					</div>
				</div>

				<div class="component-area">
					<strong class="content__title">성공 확률별 예상 매출</strong>
					<div class="lst-cards lst-cards__6colums">
						<div class="component-box">
							<p class="bold">4.8억원</p>
							<p>15건</p>
							<p class="component__title">50%</p>
						</div>
						<div class="component-box">
							<p class="bold">4.8억원</p>
							<p>15건</p>
							<p class="component__title">60%</p>
						</div>
						<div class="component-box">
							<p class="bold">4.8억원</p>
							<p>15건</p>
							<p class="component__title">70%</p>
						</div>
						<div class="component-box">
							<p class="bold">4.8억원</p>
							<p>15건</p>
							<p class="component__title">80%</p>
						</div>
						<div class="component-box">
							<p class="bold">4.8억원</p>
							<p>15건</p>
							<p class="component__title">90%</p>
						</div>
						<div class="component-box">
							<p class="bold">4.8억원</p>
							<p>15건</p>
							<p class="component__title">100%</p>
						</div>
					</div>
				</div>
				<div class="component-area">
					<strong class="content__title">월별 예상 매출</strong>
					<div class="chart-wrap" ref="chartdiv"></div>
				</div>
				<div class="component-area">
					<strong class="content__title">담당자별 영업 기회</strong>
					<div class="table-wrap">
						<table class="table">
							<thead>
								<tr>
									<th>영업 기회 일자</th>
									<th>부서</th>
									<th>담당자</th>
									<th>영업 기회명</th>
									<th>거래처</th>
									<th>성공확율</th>
									<th>예상년월</th>
									<th>예상매출</th>
								</tr>
							</thead>
							<tbody>
								<tr class="row">
									<td>2020-11-01</td>
									<td>영업1팀</td>
									<td>차장 김정환</td>
									<td>ERP 구축 (스마트팩토리)</td>
									<td>고운세상코스메틱</td>
									<td>50%</td>
									<td>2020-12</td>
									<td>4.8</td>
								</tr>
								<tr class="row">
									<td>2020-10-01</td>
									<td>영업2팀</td>
									<td>과장 최수현</td>
									<td>ERP 구축 (스마트팩토리)</td>
									<td>고운세상코스메틱</td>
									<td>50%</td>
									<td>2021-01</td>
									<td>3.5</td>
								</tr>
								<tr class="row">
									<td>2020-12-01</td>
									<td>영업3팀</td>
									<td>대리 김우중</td>
									<td>ERP 구축 (스마트팩토리)</td>
									<td>고운세상코스메틱</td>
									<td>60%</td>
									<td>2021-02</td>
									<td>4.1</td>
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
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end
export default {
	mounted() {
		this.chart = am4core.create(this.$refs.chartdiv, am4charts.XYChart);
		this.chart.scrollbarX = new am4core.Scrollbar();
		this.chart.data = [
			{
				country: '2019년10월',
				visits: 6.7,
			},
			{
				country: '2019년11월',
				visits: 17.3,
			},
			{
				country: '2019년12월',
				visits: 14.5,
			},
			{
				country: '2020년1월',
				visits: 10.5,
			},
			{
				country: '2020년2월',
				visits: 7.5,
			},
			{
				country: '2020년3월',
				visits: 9.3,
			},
		];

		// Create axes
		let categoryAxis = this.chart.xAxes.push(new am4charts.CategoryAxis());
		categoryAxis.dataFields.category = 'country';
		categoryAxis.renderer.grid.template.location = 0;
		categoryAxis.renderer.minGridDistance = 30;
		categoryAxis.renderer.labels.template.horizontalCenter = 'right';
		categoryAxis.renderer.labels.template.verticalCenter = 'middle';
		// categoryAxis.renderer.labels.template.rotation = 270;
		categoryAxis.tooltip.disabled = true;
		categoryAxis.renderer.minHeight = 110;

		let valueAxis = this.chart.yAxes.push(new am4charts.ValueAxis());
		valueAxis.renderer.minWidth = 50;

		// Create series
		let series = this.chart.series.push(new am4charts.ColumnSeries());
		series.sequencedInterpolation = true;
		series.dataFields.valueY = 'visits';
		series.dataFields.categoryX = 'country';
		series.tooltipText = '[{categoryX}: bold]{valueY}[/]';
		series.columns.template.strokeWidth = 0;

		series.tooltip.pointerOrientation = 'vertical';

		series.columns.template.column.cornerRadiusTopLeft = 10;
		series.columns.template.column.cornerRadiusTopRight = 10;
		series.columns.template.column.fillOpacity = 0.8;

		// on hover, make corner radiuses bigger
		let hoverState = series.columns.template.column.states.create('hover');
		hoverState.properties.cornerRadiusTopLeft = 0;
		hoverState.properties.cornerRadiusTopRight = 0;
		hoverState.properties.fillOpacity = 1;

		series.columns.template.adapter.add('fill', (fill, target) => {
			return this.chart.colors.getIndex(target.dataItem.index);
		});

		// Cursor
		this.chart.cursor = new am4charts.XYCursor();
	},
	data() {
		return {
			chart: Object,
		};
	},
};
</script>

<style scoped>
.chart-wrap {
	height: 300px;
}
</style>

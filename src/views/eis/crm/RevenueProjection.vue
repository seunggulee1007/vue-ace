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
					<div class="chart-wrap"></div>
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
export default {};
</script>

<style></style>

<template>
	<div class="container user-container">
		<section class="section__contents">
			<div class="inner-wrap">
				<div class="section-top">
					<h3 class="section__title">영업 실적 분석</h3>
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
					<strong class="content__title">매출 실적</strong>
					<div class="flex-box">
						<div>
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
						<div>
							<div class="lst-cards lst-cards__2colums">
								<div class="lst-cards__item">
									<div class="component-box">
										<p class="bold">1,363</p>
										<p class="component__title">당기누계</p>
									</div>
								</div>
								<div class="lst-cards__item">
									<div class="component-box">
										<p class="bold">1,381</p>
										<p class="component__title">전기누계</p>
									</div>
								</div>
							</div>
							<div class="flex-box">
								<p class="component__title">전년대비</p>
								<div class="component-box flex-box">
									<p>18.0 (-)</p>
									<p>1.3% (-)</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="component-area">
					<strong class="content__title">매출 채권 연령분석</strong>
					<div class="chart-wrap"></div>
				</div>
				<div class="component-area">
					<strong class="content__title">월별 실적</strong>
					<div class="chart-wrap"></div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
export default {};
</script>

<style></style>

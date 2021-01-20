<template>
	<div class="container user-container">
		<section class="section__contents">
			<div class="inner-wrap">
				<div class="section-top">
					<h3 class="section__title">프로젝트 원가 분석</h3>
				</div>
				<div class="component-area">
					<div class="component-box component__search">
						<form>
							<div class="input-box input-box-icon">
								<input class="input input-icon" type="text" placeholder="기준년월" />
								<span class="icon icon-calendar"></span>
							</div>
							<div class="input-box">
								<input type="text" class="input" placeholder="프로젝트명을 입력하세요" />
							</div>
							<button class="button button__search">
								<span class="icon icon-search"></span>
								조회
							</button>
						</form>
					</div>
				</div>
				<div class="component-area">
					<div class="component-box">
						<p class="">재무시스템 2차 구축 프로젝트</p>
						<p>스마일게이트</p>
						<p>2019-11-14 ~ 2020-10-31</p>
					</div>
					<div class="compoonent-box">
						<p class="component__title">계약금액</p>
						<p>2.77억원</p>
					</div>
					<div class="compoonent-box">
						<p class="component__title">예산금액</p>
						<p>2.40억원</p>
					</div>
					<div class="compoonent-box">
						<p class="component__title">투입금액</p>
						<p>2.40억원</p>
					</div>
					<div class="compoonent-box">
						<p class="component__title">예산 대비 계약 집행율(%)</p>
						<p>86.9%</p>
					</div>
					<div class="compoonent-box">
						<p class="component__title">예산 대비 예산 집행율(%)</p>
						<p>105%</p>
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

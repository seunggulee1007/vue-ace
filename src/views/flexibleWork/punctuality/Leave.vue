<template>
	<div class="container user-container">
		<section class="section__contents">
			<div class="inner-wrap">
				<div class="section-top">
					<h3 class="section__title">휴가 신청</h3>
				</div>
				<div class="component-area">
					<div class="component-box">
						<p class="content__title">연차 현황</p>
						<div class="lst-leave">
							<div class="lst-leave__item">
								<p class="component__title">발생</p>
								<p class="status-leave"><span class="bold">15.0</span>개</p>
							</div>
							<div class="lst-leave__item">
								<p class="component__title">사용</p>
								<p class="status-leave"><span class="bold">6.0</span>개</p>
							</div>
							<div class="lst-leave__item">
								<p class="component__title">잔여</p>
								<p class="status-leave"><span class="bold">9.0</span>개</p>
							</div>
							<div class="lst-leave__item">
								<p class="component__title">신청</p>
								<p class="status-leave"><span class="bold">3.0</span>개</p>
							</div>
							<div class="lst-leave__item">
								<p class="component__title">신청 후 잔여</p>
								<p class="status-leave"><span class="bold">6.0</span>개</p>
							</div>
						</div>
					</div>
				</div>
				<div class="component-area">
					<div class="component-box">
						<div class="component-box-top">
							<p class="component__title">휴가 구분</p>
						</div>
						<div class="component-box-cnt">
							<ul class="select-options">
								<li class="select-options__item select">
									<span>연차</span>
								</li>
								<li class="select-options__item">
									<span>반차</span>
								</li>
								<li class="select-options__item">
									<span>반반차</span>
								</li>
								<li class="select-options__item">
									<span>시간연차</span>
								</li>
							</ul>
						</div>
					</div>
					<div class="component-box">
						<div class="component-box-top">
							<p class="component__title">휴가 기간</p>
						</div>
						<div class="component-box-cnt">
							<div class="input-box-wrap input-term">
								<div class="input-box input-box-icon">
									<input class="input input-icon" type="text" placeholder="시작일" />
									<span class="icon icon-calendar"></span>
								</div>
								<p>~</p>
								<div class="input-box input-box-icon">
									<input class="input input-icon" type="text" placeholder="종료일" />
									<span class="icon icon-calendar"></span>
								</div>
							</div>
							<div class="input-box-wrap input-term">
								<div class="input-box input-box-icon">
									<input class="input input-icon" type="text" placeholder="시작시간" />
									<span class="icon icon-clock"></span>
								</div>
								<p>~</p>
								<div class="input-box input-box-icon">
									<input class="input input-icon" type="text" placeholder="종료시간" />
									<span class="icon icon-clock"></span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="buttons-complete">
					<div class="buttons">
						<button type="submit" class="button button__submit">승인요청</button>
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

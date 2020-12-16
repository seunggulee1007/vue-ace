<template>
	<div class="container user-container">
		<section class="section__contents">
			<div class="inner-wrap">
				<div class="section-top">
					<h3 class="section__title">연장 근무 신청</h3>
				</div>
				<div class="component-area">
					<div class="component-box">
						<div class="component-box-top">
							<p class="component__title">연장/휴일 구분</p>
						</div>
						<div class="component-box-cnt">
							<ul class="select-options">
								<li class="select-options__item select">
									<span>연장근무</span>
								</li>
								<li class="select-options__item">
									<span>휴일근무</span>
								</li>
							</ul>
						</div>
					</div>
					<div class="component-box">
						<div class="component-box-top">
							<p class="component__title">신청사유</p>
						</div>
						<div class="component-box-cnt">
							<div class="input-box">
								<input class="input " type="text" placeholder="입력하세요" />
							</div>
						</div>
					</div>
					<div class="component-box">
						<div class="component-box-top">
							<p class="component__title">일자 및 시간</p>
						</div>
						<div class="component-box-cnt">
							<div class="input-box-wrap input-term">
								<div class="input-box input-box-icon">
									<input class="input input-icon" type="text" placeholder="연장근무일" readonly />
									<span class="icon icon-calendar"></span>
								</div>
								<div class="input-box input-box-icon">
									<input class="input input-icon" type="text" placeholder="시작시간" readonly />
									<span class="icon icon-clock"></span>
								</div>
								<p>~</p>
								<div class="input-box input-box-icon">
									<input class="input input-icon" type="text" placeholder="연장근무일" readonly />
									<span class="icon icon-calendar"></span>
								</div>
								<div class="input-box input-box-icon">
									<input class="input input-icon" type="text" placeholder="종료시간" readonly />
									<span class="icon icon-clock"></span>
								</div>
							</div>
							<button type="button" class="button button__add">
								<span class="icon icon-add"></span>
								추가
							</button>
						</div>
					</div>
					<div class="component-box">
						<div class="component-box-top">
							<p class="component__title">총 신청 근무시간 ①</p>
						</div>
						<div class="component-box-cnt">
							<div class="input-box">
								<input class="input " type="text" placeholder="자동표시" readonly />
							</div>
						</div>
					</div>
					<div class="component-box">
						<div class="component-box-top">
							<p class="component__title">총 신청 근무시간 조정 ②</p>
						</div>
						<div class="component-box-cnt">
							<div class="input-box">
								<input class="input " type="text" placeholder="자동표시" readonly />
							</div>
						</div>
					</div>
					<div class="component-box">
						<div class="component-box-top">
							<p class="component__title">총 인정 근무시간</p>
						</div>
						<div class="component-box-cnt">
							<div class="input-box">
								<input class="input " type="text" placeholder="자동표시 ① + ②" readonly />
							</div>
						</div>
					</div>
					<div class="component-box">
						<div class="component-box-top">
							<p class="component__title">근무시간 조정 사유</p>
						</div>
						<div class="component-box-cnt">
							<div class="input-box">
								<input class="input " type="text" placeholder="입력하세요" />
							</div>
						</div>
					</div>
					<div class="component-box">
						<div class="component-box-top">
							<p class="component__title">작성일자</p>
						</div>
						<div class="component-box-cnt">
							<div class="input-box">
								<input class="input " type="text" placeholder="자동 생성" readonly />
							</div>
						</div>
					</div>
					<div class="component-box">
						<div class="component-box-top">
							<p class="component__title">작성번호</p>
						</div>
						<div class="component-box-cnt">
							<div class="input-box">
								<input class="input " type="text" placeholder="자동 생성" readonly />
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

<template>
	<div class="container user-container">
		<section class="section__contents">
			<div class="inner-wrap">
				<div class="section-top">
					<h3 class="section__title">재무 분석</h3>
					<div class="input-box">
						<el-date-picker v-model="value1" type="month" placeholder="기준년월"></el-date-picker>
						<button type="button" class="button button__search">
							조회
						</button>
					</div>
				</div>
				<div class="component-area">
					<p class="content__title">손익 분석</p>
					<div class="">
						<p class="bold">매출액</p>
						<div class="lst-cards lst-cards__5colums">
							<div class="lst-cards__item">
								<div class="component-box">
									<p class="component__title">당월</p>
									<p class="status-txt--large bold">64.3억원</p>
								</div>
							</div>
							<div class="lst-cards__item">
								<div class="component-box">
									<p class="component__title">전월</p>
									<p class="status-txt--large bold">50.1억원</p>
								</div>
							</div>
							<div class="lst-cards__item">
								<div class="component-box">
									<p class="component__title">전년 동기</p>
									<p class="status-txt--large bold">46.7억원</p>
								</div>
							</div>
							<div class="lst-cards__item">
								<div class="component-box">
									<p class="component__title">전월 대비</p>
									<p class="status-txt--large bold status--up">
										<span class="icon-triangle"></span>
										10.7억원 (27.8%)
									</p>
								</div>
							</div>
							<div class="lst-cards__item">
								<div class="component-box">
									<p class="component__title">전년 동기 대비</p>
									<p class="status-txt--large bold status--down">
										<span class="icon-triangle"></span>
										27.7억원 (38.9%)
									</p>
								</div>
							</div>
						</div>
					</div>
					<div class="">
						<p class="bold">영업 이익</p>
						<div class="lst-cards lst-cards__5colums">
							<div class="lst-cards__item">
								<div class="component-box">
									<p class="component__title">당월</p>
									<p class="status-txt--large bold">64.3억원</p>
								</div>
							</div>
							<div class="lst-cards__item">
								<div class="component-box">
									<p class="component__title">전월</p>
									<p class="status-txt--large bold">50.1억원</p>
								</div>
							</div>
							<div class="lst-cards__item">
								<div class="component-box">
									<p class="component__title">전년 동기</p>
									<p class="status-txt--large bold">46.7억원</p>
								</div>
							</div>
							<div class="lst-cards__item">
								<div class="component-box">
									<p class="component__title">전월 대비</p>
									<p class="status-txt--large bold status--up">
										<span class="icon-triangle"></span>
										10.7억원(27.8%)
									</p>
								</div>
							</div>
							<div class="lst-cards__item">
								<div class="component-box">
									<p class="component__title">전년 동기 대비</p>
									<p class="status-txt--large bold status--down">
										<span class="icon-triangle"></span>
										27.7억원(38.9%)
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="component-area">
					<p class="content__title">재무 비율 분석</p>
					<div class="flex-box">
						<div class="">
							<p class="bold">안정성</p>
							<div class="lst-cards lst-cards__3colums">
								<div class="lst-cards__item">
									<div class="component-box">
										<p class="component__title">유동 비율</p>
										<div class="">
											<div class="flex-box">
												<p class="">당기 누계</p>
												<p>193.0%</p>
											</div>
											<div class="flex-box">
												<p>전년 누계</p>
												<p>198.0%</p>
											</div>
											<div class="flex-box">
												<p>전년 대비</p>
												<p>2.5%</p>
											</div>
										</div>
									</div>
								</div>
								<div class="lst-cards__item">
									<div class="component-box">
										<p class="component__title">당좌 비율</p>
										<div class="">
											<div class="flex-box">
												<p>당기 누계</p>
												<p>193.0%</p>
											</div>
											<div class="flex-box">
												<p>전년 누계</p>
												<p>198.0%</p>
											</div>
											<div class="flex-box">
												<p>전년 대비</p>
												<p>2.5%</p>
											</div>
										</div>
									</div>
								</div>
								<div class="lst-cards__item">
									<div class="component-box">
										<p class="component__title">부채 비율</p>
										<div class="">
											<div class="flex-box">
												<p>당기 누계</p>
												<p>193.0%</p>
											</div>
											<div class="flex-box">
												<p>전년 누계</p>
												<p>198.0%</p>
											</div>
											<div class="flex-box">
												<p>전년 대비</p>
												<p>2.5%</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="">
							<p class="bold">성장성</p>
							<div class="lst-cards lst-cards__3colums">
								<div class="lst-cards__item">
									<div class="component-box">
										<p class="component__title">매출액 증가율</p>
										<div class="">
											<div class="flex-box">
												<p>당기 누계</p>
												<p>193.0%</p>
											</div>
											<div class="flex-box">
												<p>전년 누계</p>
												<p>198.0%</p>
											</div>
											<div class="flex-box">
												<p>전년 대비</p>
												<p>2.5%</p>
											</div>
										</div>
									</div>
								</div>
								<div class="lst-cards__item">
									<div class="component-box">
										<p class="component__title">영업 이익 증가율</p>
										<div class="">
											<div class="flex-box">
												<p>당기 누계</p>
												<p>193.0%</p>
											</div>
											<div class="flex-box">
												<p>전년 누계</p>
												<p>198.0%</p>
											</div>
											<div class="flex-box">
												<p>전년 대비</p>
												<p>2.5%</p>
											</div>
										</div>
									</div>
								</div>
								<div class="lst-cards__item">
									<div class="component-box">
										<p class="component__title">순이익 증가률</p>
										<div class="">
											<div class="flex-box">
												<p>당기 누계</p>
												<p>193.0%</p>
											</div>
											<div class="flex-box">
												<p>전년 누계</p>
												<p>198.0%</p>
											</div>
											<div class="flex-box">
												<p>전년 대비</p>
												<p>2.5%</p>
											</div>
										</div>
									</div>
								</div>
							</div>
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

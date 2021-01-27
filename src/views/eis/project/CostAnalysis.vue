<template>
	<div class="container user-container">
		<section class="section__contents">
			<div class="inner-wrap">
				<div class="section-top">
					<h3 class="section__title">프로젝트 원가 분석</h3>
					<div class="input-box-wrap">
						<div class="input-box">
							<el-date-picker v-model="value2" type="month" placeholder="기준년월"> </el-date-picker>
							<div class="input-box">
								<input type="text" class="input" placeholder="프로젝트명" />
							</div>
							<button type="button" class="button button__search">조회</button>
						</div>
					</div>
				</div>
				<div class="component__eis-2 component__ca-1">
					<!-- <strong class="content__title">프로젝트별 원가 분석</strong> -->
					<div class="component-area">
						<div class="lst-cards lst-cards__4colums">
							<div class="box">
								<div class="box-top">
									<p class="component__title">프로젝트명</p>
								</div>
								<div class="box-cnt">
									<div class="component-box text-align__center">
										<p class="bold">재무시스템 2차 구축 프로젝트</p>
										<p>스마일게이트</p>
										<p>2019-11-14 ~ 2020-10-31</p>
									</div>
								</div>
							</div>
							<div class="box">
								<div class="box-top">
									<p class="component__title">예산 금액</p>
								</div>
								<div class="box-cnt">
									<div class="component-box">
										<div class="box box--horizontal">
											<div class="box-top bg-opt7">재료비</div>
											<div class="box-cnt">1.20억원</div>
										</div>
										<div class="box box--horizontal">
											<div class="box-top bg-opt7">노무비</div>
											<div class="box-cnt">0.80억원</div>
										</div>
										<div class="box box--horizontal">
											<div class="box-top bg-opt7">경비</div>
											<div class="box-cnt">1.20억원</div>
										</div>
									</div>
								</div>
							</div>
							<div class="box">
								<div class="box-top">
									<p class="component__title">투입 금액 (직접비)</p>
								</div>
								<div class="box-cnt">
									<div class="component-box">
										<div class="box box--horizontal">
											<div class="box-top bg-opt7">재료비</div>
											<div class="box-cnt">1.20억원</div>
										</div>
										<div class="box box--horizontal">
											<div class="box-top bg-opt7">노무비</div>
											<div class="box-cnt">0.80억원</div>
										</div>
										<div class="box box--horizontal">
											<div class="box-top bg-opt7">경비</div>
											<div class="box-cnt">1.20억원</div>
										</div>
									</div>
								</div>
							</div>
							<div class="box">
								<div class="box-top">
									<p class="component__title">투입 금액 (간접비)</p>
								</div>
								<div class="box-cnt">
									<div class="component-box">
										<div class="box box--horizontal">
											<div class="box-top bg-opt7">재료비</div>
											<div class="box-cnt">1.20억원</div>
										</div>
										<div class="box box--horizontal">
											<div class="box-top bg-opt7">노무비</div>
											<div class="box-cnt">0.80억원</div>
										</div>
										<div class="box box--horizontal">
											<div class="box-top bg-opt7">경비</div>
											<div class="box-cnt">1.20억원</div>
										</div>
									</div>
								</div>
							</div>
							<div class="box">
								<div class="box-top">
									<p class="component__title">총 투입 금액</p>
								</div>
								<div class="box-cnt">
									<div class="component-box">
										<div class="box box--horizontal">
											<div class="box-top bg-opt7">재료비</div>
											<div class="box-cnt">1.20억원</div>
										</div>
										<div class="box box--horizontal">
											<div class="box-top bg-opt7">노무비</div>
											<div class="box-cnt">0.80억원</div>
										</div>
										<div class="box box--horizontal">
											<div class="box-top bg-opt7">경비</div>
											<div class="box-cnt">1.20억원</div>
										</div>
									</div>
								</div>
							</div>
							<div class="box">
								<div class="box-top">
									<p class="component__title">예산 증감액</p>
								</div>
								<div class="box-cnt">
									<div class="component-box">
										<div class="box box--horizontal">
											<div class="box-top bg-opt7">재료비</div>
											<div class="box-cnt">
												<p class="status--up flex-box">
													<span class="icon-triangle"></span>1.06억원
												</p>
											</div>
										</div>
										<div class="box box--horizontal">
											<div class="box-top bg-opt7">노무비</div>
											<div class="box-cnt">
												<p class="status--down flex-box">
													<span class="icon-triangle"></span>1.06억원
												</p>
											</div>
										</div>
										<div class="box box--horizontal">
											<div class="box-top bg-opt7">경비</div>
											<div class="box-cnt">
												<p class="status--up flex-box">
													<span class="icon-triangle"></span>1.06억원
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="box">
								<div class="box-top">
									<p class="component__title">예산 집행율(%)</p>
								</div>
								<div class="box-cnt">
									<div class="component-box">
										<div class="box box--horizontal">
											<div class="box-top bg-opt7">재료비</div>
											<div class="box-cnt">0.0%</div>
										</div>
										<div class="box box--horizontal">
											<div class="box-top bg-opt7">노무비</div>
											<div class="box-cnt">0.0%</div>
										</div>
										<div class="box box--horizontal">
											<div class="box-top bg-opt7">경비</div>
											<div class="box-cnt">0.0%</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="component-area">
						<div class="lst-cards lst-cards__4colums">
							<div class="box">
								<div class="box-top">
									<p class="component__title">프로젝트명</p>
								</div>
								<div class="box-cnt">
									<div class="component-box text-align__center">
										<p class="bold">스마트팩토리 (ERP) 구축</p>
										<p>고운세상코스메틱</p>
										<p>2020-12-01 ~ 2021-12-31</p>
									</div>
								</div>
							</div>
							<div class="box">
								<div class="box-top">
									<p class="component__title">예산 금액</p>
								</div>
								<div class="box-cnt">
									<div class="component-box">
										<div class="box box--horizontal">
											<div class="box-top bg-opt7">재료비</div>
											<div class="box-cnt">1.20억원</div>
										</div>
										<div class="box box--horizontal">
											<div class="box-top bg-opt7">노무비</div>
											<div class="box-cnt">0.80억원</div>
										</div>
										<div class="box box--horizontal">
											<div class="box-top bg-opt7">경비</div>
											<div class="box-cnt">1.20억원</div>
										</div>
									</div>
								</div>
							</div>
							<div class="box">
								<div class="box-top">
									<p class="component__title">투입 금액 (직접비)</p>
								</div>
								<div class="box-cnt">
									<div class="component-box">
										<div class="box box--horizontal">
											<div class="box-top bg-opt7">재료비</div>
											<div class="box-cnt">1.20억원</div>
										</div>
										<div class="box box--horizontal">
											<div class="box-top bg-opt7">노무비</div>
											<div class="box-cnt">0.80억원</div>
										</div>
										<div class="box box--horizontal">
											<div class="box-top bg-opt7">경비</div>
											<div class="box-cnt">1.20억원</div>
										</div>
									</div>
								</div>
							</div>
							<div class="box">
								<div class="box-top">
									<p class="component__title">투입 금액 (간접비)</p>
								</div>
								<div class="box-cnt">
									<div class="component-box">
										<div class="box box--horizontal">
											<div class="box-top bg-opt7">재료비</div>
											<div class="box-cnt">1.20억원</div>
										</div>
										<div class="box box--horizontal">
											<div class="box-top bg-opt7">노무비</div>
											<div class="box-cnt">0.80억원</div>
										</div>
										<div class="box box--horizontal">
											<div class="box-top bg-opt7">경비</div>
											<div class="box-cnt">1.20억원</div>
										</div>
									</div>
								</div>
							</div>
							<div class="box">
								<div class="box-top">
									<p class="component__title">총 투입 금액</p>
								</div>
								<div class="box-cnt">
									<div class="component-box">
										<div class="box box--horizontal">
											<div class="box-top bg-opt7">재료비</div>
											<div class="box-cnt">1.20억원</div>
										</div>
										<div class="box box--horizontal">
											<div class="box-top bg-opt7">노무비</div>
											<div class="box-cnt">0.80억원</div>
										</div>
										<div class="box box--horizontal">
											<div class="box-top bg-opt7">경비</div>
											<div class="box-cnt">1.20억원</div>
										</div>
									</div>
								</div>
							</div>
							<div class="box">
								<div class="box-top">
									<p class="component__title">예산 증감액</p>
								</div>
								<div class="box-cnt">
									<div class="component-box">
										<div class="box box--horizontal">
											<div class="box-top bg-opt7">재료비</div>
											<div class="box-cnt">
												<p class="status--up flex-box">
													<span class="icon-triangle"></span>1.06억원
												</p>
											</div>
										</div>
										<div class="box box--horizontal">
											<div class="box-top bg-opt7">노무비</div>
											<div class="box-cnt">
												<p class="status--down flex-box">
													<span class="icon-triangle"></span>1.06억원
												</p>
											</div>
										</div>
										<div class="box box--horizontal">
											<div class="box-top bg-opt7">경비</div>
											<div class="box-cnt">
												<p class="status--up flex-box">
													<span class="icon-triangle"></span>1.06억원
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="box">
								<div class="box-top">
									<p class="component__title">예산 집행율(%)</p>
								</div>
								<div class="box-cnt">
									<div class="component-box">
										<div class="box box--horizontal">
											<div class="box-top bg-opt7">재료비</div>
											<div class="box-cnt">0.0%</div>
										</div>
										<div class="box box--horizontal">
											<div class="box-top bg-opt7">노무비</div>
											<div class="box-cnt">0.0%</div>
										</div>
										<div class="box box--horizontal">
											<div class="box-top bg-opt7">경비</div>
											<div class="box-cnt">0.0%</div>
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

<template>
	<div class="container user-container">
		<section class="section__contents">
			<div class="inner-wrap">
				<div class="section-top">
					<h3 class="section__title">재무 분석</h3>
					<div class="input-box">
						<el-date-picker v-model="searchDt" type="month" placeholder="기준년월"></el-date-picker>
						<button type="button" class="button button__search">
							조회
						</button>
					</div>
				</div>
				<div class="component-area-wrap component__eis-1  component__fa-1">
					<strong class="content__title">
						손익 분석
						<a href="#" class="link">손익 상세보기</a>
					</strong>
					<div class="flex-box">
						<div class="component-area">
							<p class="sub__title text-align__center">매출액</p>
							<div class="lst-cards lst-cards__5colums">
								<div class="box">
									<div class="box-top">
										<p class="component__title">당월</p>
									</div>
									<div class="box-cnt">
										<p class="bold">64.3억원</p>
									</div>
								</div>
								<div class="box">
									<div class="box-top">
										<p class="component__title">전월</p>
									</div>
									<div class="box-cnt">
										<p class="bold">50.1억원</p>
									</div>
								</div>
								<div class="box">
									<div class="box-top">
										<p class="component__title">전년 동기</p>
									</div>
									<div class="box-cnt">
										<p class="bold">46.7억원</p>
									</div>
								</div>
								<div class="box">
									<div class="box-top bg-opt4">
										<p class="component__title">전월 대비</p>
									</div>
									<div class="box-cnt">
										<div class="status--up flex-box">
											<span class="icon-triangle"></span>
											<p class="bold">
												10.7억원
												<span>+ 27.8%</span>
											</p>
										</div>
									</div>
								</div>
								<div class="box">
									<div class="box-top bg-opt5">
										<p class="component__title">전년 동기 대비</p>
									</div>
									<div class="box-cnt">
										<div class="status--down flex-box">
											<span class="icon-triangle"></span>
											<p class="bold">
												27.7억원
												<span>- 38.9%</span>
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="component-area">
							<p class="sub__title text-align__center">영업 이익</p>
							<div class="lst-cards lst-cards__5colums">
								<div class="box">
									<div class="box-top">
										<p class="component__title">당월</p>
									</div>
									<div class="box-cnt">
										<p class="bold">64.3억원</p>
									</div>
								</div>
								<div class="box">
									<div class="box-top">
										<p class="component__title">전월</p>
									</div>
									<div class="box-cnt">
										<p class="bold">50.1억원</p>
									</div>
								</div>
								<div class="box">
									<div class="box-top">
										<p class="component__title">전년 동기</p>
									</div>
									<div class="box-cnt">
										<p class="bold">46.7억원</p>
									</div>
								</div>
								<div class="box">
									<div class="box-top bg-opt4">
										<p class="component__title">전월 대비</p>
									</div>
									<div class="box-cnt">
										<div class="status--up flex-box">
											<span class="icon-triangle"></span>
											<p class="bold">
												10.7억원
												<span>+ 27.8%</span>
											</p>
										</div>
									</div>
								</div>
								<div class="box">
									<div class="box-top bg-opt5">
										<p class="component__title">전년 동기 대비</p>
									</div>
									<div class="box-cnt">
										<div class="status--down flex-box">
											<span class="icon-triangle"></span>
											<p class="bold">
												27.7억원
												<span>- 38.9%</span>
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="component__eis-2 component__fa-2">
					<strong class="content__title">재무 비율 분석</strong>
					<div class="flex-box">
						<div class="component-area">
							<p class="sub__title text-align__center">안정성</p>
							<div class="lst-cards lst-cards__3colums">
								<div class="">
									<div class="component-box-top">
										<p class="component__title">유동 비율</p>
									</div>
									<div class="component-box">
										<div class="box box--horizontal">
											<div class="box-top">
												<p class="">당기 누계</p>
											</div>
											<div class="box-cnt">
												<p class="">193.0%</p>
											</div>
										</div>
										<div class="box box--horizontal">
											<div class="box-top">
												<p class="">전년 누계</p>
											</div>
											<div class="box-cnt">
												<p class="">198.0%</p>
											</div>
										</div>
										<div class="box box--horizontal">
											<div class="box-top bg-opt5">
												<p class="">전년 대비</p>
											</div>
											<div class="box-cnt">
												<p class="status--down flex-box">
													<span class="icon-triangle"></span>2.5%
												</p>
											</div>
										</div>
									</div>
								</div>
								<div class="">
									<div class="component-box-top">
										<p class="component__title">당좌 비율</p>
									</div>
									<div class="component-box">
										<div class="box box--horizontal">
											<div class="box-top">
												<p class="">당기 누계</p>
											</div>
											<div class="box-cnt">
												<p class="">193.0%</p>
											</div>
										</div>
										<div class="box box--horizontal">
											<div class="box-top">
												<p class="">전년 누계</p>
											</div>
											<div class="box-cnt">
												<p class="">198.0%</p>
											</div>
										</div>
										<div class="box box--horizontal">
											<div class="box-top bg-opt5">
												<p class="">전년 대비</p>
											</div>
											<div class="box-cnt">
												<p class="status--down flex-box">
													<span class="icon-triangle"></span>2.5%
												</p>
											</div>
										</div>
									</div>
								</div>
								<div class="">
									<div class="component-box-top">
										<p class="component__title">부채 비율</p>
									</div>
									<div class="component-box">
										<div class="box box--horizontal">
											<div class="box-top">
												<p class="">당기 누계</p>
											</div>
											<div class="box-cnt">
												<p class="">193.0%</p>
											</div>
										</div>
										<div class="box box--horizontal">
											<div class="box-top">
												<p class="">전년 누계</p>
											</div>
											<div class="box-cnt">
												<p class="">198.0%</p>
											</div>
										</div>
										<div class="box box--horizontal">
											<div class="box-top bg-opt5">
												<p class="">전년 대비</p>
											</div>
											<div class="box-cnt">
												<p class="status--down flex-box">
													<span class="icon-triangle"></span>2.5%
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="component-area">
							<p class="sub__title text-align__center">성장성</p>
							<div class="lst-cards lst-cards__3colums">
								<div class="">
									<div class="component-box-top">
										<p class="component__title">매출액 증가율</p>
									</div>
									<div class="component-box">
										<div class="box box--horizontal">
											<div class="box-top">
												<p class="">당기 누계</p>
											</div>
											<div class="box-cnt">
												<p class="">193.0%</p>
											</div>
										</div>
										<div class="box box--horizontal">
											<div class="box-top">
												<p class="">전년 누계</p>
											</div>
											<div class="box-cnt">
												<p class="">198.0%</p>
											</div>
										</div>
										<div class="box box--horizontal">
											<div class="box-top bg-opt5">
												<p class="">전년 대비</p>
											</div>
											<div class="box-cnt">
												<p class="status--down flex-box">
													<span class="icon-triangle"></span>2.5%
												</p>
											</div>
										</div>
									</div>
								</div>
								<div class="">
									<div class="component-box-top">
										<p class="component__title">영업 이익 증가율</p>
									</div>
									<div class="component-box">
										<div class="box box--horizontal">
											<div class="box-top">
												<p class="">당기 누계</p>
											</div>
											<div class="box-cnt">
												<p class="">193.0%</p>
											</div>
										</div>
										<div class="box box--horizontal">
											<div class="box-top">
												<p class="">전년 누계</p>
											</div>
											<div class="box-cnt">
												<p class="">198.0%</p>
											</div>
										</div>
										<div class="box box--horizontal">
											<div class="box-top bg-opt5">
												<p class="">전년 대비</p>
											</div>
											<div class="box-cnt">
												<p class="status--down flex-box">
													<span class="icon-triangle"></span>2.5%
												</p>
											</div>
										</div>
									</div>
								</div>
								<div class="">
									<div class="component-box-top">
										<p class="component__title">순이익 증가률</p>
									</div>
									<div class="component-box">
										<div class="box box--horizontal">
											<div class="box-top">
												<p class="">당기 누계</p>
											</div>
											<div class="box-cnt">
												<p class="">193.0%</p>
											</div>
										</div>
										<div class="box box--horizontal">
											<div class="box-top">
												<p class="">전년 누계</p>
											</div>
											<div class="box-cnt">
												<p class="">198.0%</p>
											</div>
										</div>
										<div class="box box--horizontal">
											<div class="box-top bg-opt5">
												<p class="">전년 대비</p>
											</div>
											<div class="box-cnt">
												<p class="status--down flex-box">
													<span class="icon-triangle"></span>2.5%
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="flex-box">
						<div class="component-area">
							<p class="sub__title text-align__center">수익성</p>
							<div class="lst-cards lst-cards__3colums">
								<div class="">
									<div class="component-box-top">
										<p class="component__title">매출액 이익율</p>
									</div>
									<div class="component-box">
										<div class="box box--horizontal">
											<div class="box-top">
												<p class="">당기 누계</p>
											</div>
											<div class="box-cnt">
												<p class="">193.0%</p>
											</div>
										</div>
										<div class="box box--horizontal">
											<div class="box-top">
												<p class="">전년 누계</p>
											</div>
											<div class="box-cnt">
												<p class="">198.0%</p>
											</div>
										</div>
										<div class="box box--horizontal">
											<div class="box-top bg-opt5">
												<p class="">전년 대비</p>
											</div>
											<div class="box-cnt">
												<p class="status--down flex-box">
													<span class="icon-triangle"></span>2.5%
												</p>
											</div>
										</div>
									</div>
								</div>
								<div class="">
									<div class="component-box-top">
										<p class="component__title">출자본 이익율 (ROI)</p>
									</div>
									<div class="component-box">
										<div class="box box--horizontal">
											<div class="box-top">
												<p class="">당기 누계</p>
											</div>
											<div class="box-cnt">
												<p class="">193.0%</p>
											</div>
										</div>
										<div class="box box--horizontal">
											<div class="box-top">
												<p class="">전년 누계</p>
											</div>
											<div class="box-cnt">
												<p class="">198.0%</p>
											</div>
										</div>
										<div class="box box--horizontal">
											<div class="box-top bg-opt5">
												<p class="">전년 대비</p>
											</div>
											<div class="box-cnt">
												<p class="status--down flex-box">
													<span class="icon-triangle"></span>2.5%
												</p>
											</div>
										</div>
									</div>
								</div>
								<div class="">
									<div class="component-box-top">
										<p class="component__title">자기 자본 이익율 (ROE)</p>
									</div>
									<div class="component-box">
										<div class="box box--horizontal">
											<div class="box-top">
												<p class="">당기 누계</p>
											</div>
											<div class="box-cnt">
												<p class="">193.0%</p>
											</div>
										</div>
										<div class="box box--horizontal">
											<div class="box-top">
												<p class="">전년 누계</p>
											</div>
											<div class="box-cnt">
												<p class="">198.0%</p>
											</div>
										</div>
										<div class="box box--horizontal">
											<div class="box-top bg-opt5">
												<p class="">전년 대비</p>
											</div>
											<div class="box-cnt">
												<p class="status--down flex-box">
													<span class="icon-triangle"></span>2.5%
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="component-area">
							<p class="sub__title text-align__center">활동성</p>
							<div class="lst-cards lst-cards__3colums">
								<div class="">
									<div class="component-box-top">
										<p class="component__title">총 자산 회전율</p>
									</div>
									<div class="component-box">
										<div class="box box--horizontal">
											<div class="box-top">
												<p class="">당기 누계</p>
											</div>
											<div class="box-cnt">
												<p class="">193.0%</p>
											</div>
										</div>
										<div class="box box--horizontal">
											<div class="box-top">
												<p class="">전년 누계</p>
											</div>
											<div class="box-cnt">
												<p class="">198.0%</p>
											</div>
										</div>
										<div class="box box--horizontal">
											<div class="box-top bg-opt5">
												<p class="">전년 대비</p>
											</div>
											<div class="box-cnt">
												<p class="status--down flex-box">
													<span class="icon-triangle"></span>2.5%
												</p>
											</div>
										</div>
									</div>
								</div>
								<div class="">
									<div class="component-box-top">
										<p class="component__title">재고 자산 회전율</p>
									</div>
									<div class="component-box">
										<div class="box box--horizontal">
											<div class="box-top">
												<p class="">당기 누계</p>
											</div>
											<div class="box-cnt">
												<p class="">193.0%</p>
											</div>
										</div>
										<div class="box box--horizontal">
											<div class="box-top">
												<p class="">전년 누계</p>
											</div>
											<div class="box-cnt">
												<p class="">198.0%</p>
											</div>
										</div>
										<div class="box box--horizontal">
											<div class="box-top bg-opt5">
												<p class="">전년 대비</p>
											</div>
											<div class="box-cnt">
												<p class="status--down flex-box">
													<span class="icon-triangle"></span>2.5%
												</p>
											</div>
										</div>
									</div>
								</div>
								<div class="">
									<div class="component-box-top">
										<p class="component__title">매출 채권 회전율</p>
									</div>
									<div class="component-box">
										<div class="box box--horizontal">
											<div class="box-top">
												<p class="">당기 누계</p>
											</div>
											<div class="box-cnt">
												<p class="">193.0%</p>
											</div>
										</div>
										<div class="box box--horizontal">
											<div class="box-top">
												<p class="">전년 누계</p>
											</div>
											<div class="box-cnt">
												<p class="">198.0%</p>
											</div>
										</div>
										<div class="box box--horizontal">
											<div class="box-top bg-opt5">
												<p class="">전년 대비</p>
											</div>
											<div class="box-cnt">
												<p class="status--down flex-box">
													<span class="icon-triangle"></span>2.5%
												</p>
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
export default {
	data() {
		return {
			searchDt: this.getYearMonth(),
		};
	},
};
</script>

<style></style>

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
				<div class="component-area-wrap component__fa-1">
					<!-- <p class="content__title">손익 분석</p> -->
					<div class="component-area">
						<p class="sub__title">매출액</p>
						<div class="flex-box">
							<div class="">
								<div class="component-box-top">
									<p class="component__title">당월</p>
								</div>
								<p class="status-txt--large bold">64.3억원</p>
							</div>
							<div class="">
								<div class="component-box-top">
									<p class="component__title">전월</p>
								</div>
								<p class="status-txt--large bold">50.1억원</p>
							</div>
							<div class="">
								<div class="component-box-top">
									<p class="component__title">전년 동기</p>
								</div>
								<p class="status-txt--large bold">46.7억원</p>
							</div>
							<div class="">
								<div class="component-box-top">
									<p class="component__title">전월 대비</p>
								</div>
								<div class="status--up flex-box">
									<span class="icon-triangle"></span>
									<p class="status-txt--large bold">
										10.7억원
										<span>27.8%</span>
									</p>
								</div>
							</div>
							<div class="">
								<div class="component-box-top">
									<p class="component__title">전년 동기 대비</p>
								</div>
								<div class="status--down flex-box">
									<span class="icon-triangle"></span>
									<p class="status-txt--large bold">
										27.7억원
										<span>38.9%</span>
									</p>
								</div>
							</div>
						</div>
					</div>
					<div class="component-area">
						<p class="sub__title">영업 이익</p>
						<div class="flex-box">
							<div class="">
								<div class="component-box-top">
									<p class="component__title">당월</p>
								</div>
								<p class="status-txt--large bold">64.3억원</p>
							</div>
							<div class="">
								<div class="component-box-top">
									<p class="component__title">전월</p>
								</div>
								<p class="status-txt--large bold">50.1억원</p>
							</div>
							<div class="">
								<div class="component-box-top">
									<p class="component__title">전년 동기</p>
								</div>
								<p class="status-txt--large bold">46.7억원</p>
							</div>
							<div class="">
								<div class="component-box-top">
									<p class="component__title">전월 대비</p>
								</div>
								<div class="status--up flex-box">
									<span class="icon-triangle"></span>
									<p class="status-txt--large bold">
										10.7억원
										<span>27.8%</span>
									</p>
								</div>
							</div>
							<div class="">
								<div class="component-box-top">
									<p class="component__title">전년 동기 대비</p>
								</div>
								<div class="status--down flex-box">
									<span class="icon-triangle"></span>
									<p class="status-txt--large bold">
										27.7억원
										<span>38.9%</span>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="component-area component__fa-2">
					<p class="content__title">재무 비율 분석</p>
					<div class="component-box">
						<p class="sub__title">안정성</p>
						<div class="lst-cards lst-cards__3colums">
							<div class="lst-cards__item">
								<p class="title-box opt1 bold">유동 비율</p>
								<div class="component-box flex-box">
									<div>
										<p class="component__title">당기 누계</p>
										<p class="status-txt--large bold">193.0%</p>
									</div>
									<div>
										<p class="component__title">전년 누계</p>
										<p class="status-txt--large bold">198.0%</p>
									</div>
									<div>
										<p class="component__title">전년 대비</p>
										<p class="status-txt--large status--down flex-box bold">
											<span class="icon-triangle"></span>2.5%
										</p>
									</div>
								</div>
							</div>
							<div class="lst-cards__item">
								<p class="title-box opt1 bold">당좌 비율</p>
								<div class="component-box flex-box">
									<div>
										<p class="component__title">당기 누계</p>
										<p class="status-txt--large bold">193.0%</p>
									</div>
									<div>
										<p class="component__title">전년 누계</p>
										<p class="status-txt--large bold">198.0%</p>
									</div>
									<div>
										<p class="component__title">전년 대비</p>
										<p class="status-txt--large status--down flex-box bold">
											<span class="icon-triangle"></span>2.5%
										</p>
									</div>
								</div>
							</div>
							<div class="lst-cards__item">
								<p class="title-box opt1 bold">부채 비율</p>
								<div class="component-box flex-box">
									<div>
										<p class="component__title">당기 누계</p>
										<p class=" status-txt--large bold">193.0%</p>
									</div>
									<div>
										<p class="component__title">전년 누계</p>
										<p class="status-txt--large bold">198.0%</p>
									</div>
									<div>
										<p class="component__title">전년 대비</p>
										<p class="status-txt--large status--down flex-box bold">
											<span class="icon-triangle"></span>2.5%
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="component-box">
						<p class="sub__title">성장성</p>
						<div class="lst-cards lst-cards__3colums">
							<div class="lst-cards__item">
								<p class="title-box opt1 bold">매출액 증가율</p>
								<div class="component-box flex-box">
									<div>
										<p class="component__title">당기 누계</p>
										<p class="status-txt--large bold">193.0%</p>
									</div>
									<div>
										<p class="component__title">전년 누계</p>
										<p class="status-txt--large bold">198.0%</p>
									</div>
									<div>
										<p class="component__title">전년 대비</p>
										<p class="status-txt--large status--down flex-box bold">
											<span class="icon-triangle"></span>2.5%
										</p>
									</div>
								</div>
							</div>
							<div class="lst-cards__item">
								<p class="title-box opt1 bold">영업 이익 증가율</p>
								<div class="component-box flex-box">
									<div>
										<p class="component__title">당기 누계</p>
										<p class="status-txt--large bold">193.0%</p>
									</div>
									<div>
										<p class="component__title">전년 누계</p>
										<p class="status-txt--large bold">198.0%</p>
									</div>
									<div>
										<p class="component__title">전년 대비</p>
										<p class="status-txt--large status--down flex-box bold">
											<span class="icon-triangle"></span>2.5%
										</p>
									</div>
								</div>
							</div>
							<div class="lst-cards__item">
								<p class="title-box opt1 bold">순이익 증가률</p>
								<div class="component-box flex-box">
									<div>
										<p class="component__title">당기 누계</p>
										<p class="status-txt--large bold">193.0%</p>
									</div>
									<div>
										<p class="component__title">전년 누계</p>
										<p class="status-txt--large bold">198.0%</p>
									</div>
									<div>
										<p class="component__title">전년 대비</p>
										<p class="status-txt--large status--down bold flex-box bold">
											<span class="icon-triangle"></span>2.5%
										</p>
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

<template>
	<div class="container user-container">
		<section class="section__contents">
			<div class="inner-wrap">
				<div class="section-top">
					<h3 class="section__title">근무 실적 조회</h3>
					<div class="buttons">
						<button type="button" class="button button__dept">부서별 조회</button>
						<button type="button" class="button button__member">사원별 조회</button>
					</div>
				</div>

				<div class="component-area">
					<div class="select-month">
						<button type="button" class="button__prev">
							<span class="icon icon-triangle"></span>
							<span class="blind">이전달</span>
						</button>
						<p>2021년 1월</p>
						<button type="button" class="button__next">
							<span class="icon icon-triangle"></span>
							<span class="blind">다음달</span>
						</button>
					</div>
					<div class="tab-area">
						<el-tabs v-model="activeName" @tab-click="handleClick">
							<el-tab-pane label="리스트" name="first">
								<div class="tab-cnt">
									<div class="table-wrap">
										<table class="table">
											<thead>
												<tr>
													<th>년월</th>
													<th>부서명</th>
													<th>기본 근무 시간</th>
													<th>연장 근무 시간</th>
													<th>총 근무 시간</th>
													<th>주 평균 근로 시간</th>
												</tr>
											</thead>
											<tbody>
												<tr class="row">
													<td>2020-08</td>
													<td>
														개발1팀
														<button type="button" class="button button--small">
															상세
														</button>
													</td>
													<td>4시간</td>
													<td></td>
													<td>4시간</td>
													<td>49.5시간</td>
												</tr>
												<tr class="row__sub show">
													<td colspan="6">
														<div class="table-sub-wrap">
															<table class="table table__detail">
																<thead>
																	<tr>
																		<th>년월</th>
																		<th>유연 근무 유형</th>
																		<th>사원명</th>
																		<th>기본 근무 시간</th>
																		<th>연장 근무 시간</th>
																		<th>총 근무 시간</th>
																		<th>주 평균 근로 시간</th>
																	</tr>
																</thead>
																<tbody>
																	<tr class="row">
																		<td>2020-08</td>
																		<td>시차 출퇴근제</td>
																		<td>홍길동 차장</td>
																		<td>169.5시간</td>
																		<td>50.5시간</td>
																		<td>50.5시간</td>
																		<td>50.5시간</td>
																	</tr>
																	<tr class="row">
																		<td>2020-08</td>
																		<td>시차 출퇴근제</td>
																		<td>최수현 과장</td>
																		<td>188.8시간</td>
																		<td>60.0시간</td>
																		<td>60.0시간</td>
																		<td>60.0시간</td>
																	</tr>
																</tbody>
															</table>
														</div>
													</td>
												</tr>
												<tr class="row">
													<td>2020-08</td>
													<td>
														개발2팀
														<button type="button" class="button button--small">
															상세
														</button>
													</td>
													<td>8시간</td>
													<td>2시간</td>
													<td>8시간</td>
													<td>51.7시간</td>
												</tr>
												<tr class="row__sub">
													<td colspan="6">
														<div class="table-sub-wrap">
															<table class="table table__detail">
																<thead>
																	<tr>
																		<th>년월</th>
																		<th>유연 근무 유형</th>
																		<th>사원명</th>
																		<th>기본 근무 시간</th>
																		<th>연장 근무 시간</th>
																		<th>총 근무 시간</th>
																		<th>주 평균 근로 시간</th>
																	</tr>
																</thead>
																<tbody>
																	<tr class="row">
																		<td>2020-08</td>
																		<td>시차 출퇴근제</td>
																		<td>홍길동 차장</td>
																		<td>169.5시간</td>
																		<td>50.5시간</td>
																		<td>50.5시간</td>
																		<td>50.5시간</td>
																	</tr>
																	<tr class="row">
																		<td>2020-08</td>
																		<td>시차 출퇴근제</td>
																		<td>최수현 과장</td>
																		<td>188.8시간</td>
																		<td>60.0시간</td>
																		<td>60.0시간</td>
																		<td>60.0시간</td>
																	</tr>
																</tbody>
															</table>
														</div>
													</td>
												</tr>
											</tbody>
											<tfoot>
												<tr>
													<td colspan="2">TOTAL</td>
													<td>8시간</td>
													<td>2시간</td>
													<td>8시간</td>
													<td>51.7시간</td>
												</tr>
											</tfoot>
										</table>
									</div>
									
								</div>
							</el-tab-pane>
							<el-tab-pane label="달력" name="second">
								<div class="tab-cnt">
									<FullCalendar :options="calendarOptions1" class="calendar" />
								</div>
							</el-tab-pane>
							<el-tab-pane label="그래프" name="third">
								<div class="tab-cnt">
									chart
								</div>
							</el-tab-pane>
						</el-tabs>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
import FullCalendar from '@fullcalendar/vue';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
export default {
	components: {
		FullCalendar,
	},
	data() {
		return {
			activeName: 'first',
			value1: '',
			value2: '',
			calendarOptions1: {
				plugins: [dayGridPlugin, interactionPlugin],
				initialView: 'dayGridMonth',
			},
		};
	},
};
</script>

<style></style>

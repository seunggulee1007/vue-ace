<template>
	<div class="container user-container">
		<section class="section__contents">
			<div class="inner-wrap">
				<div class="section-top">
					<h3 class="section__title">출/퇴근 등록</h3>
				</div>

				<div class="component-area-wrap lst-cards lst-cards__4colums info-attendance">
					<div class="component-area stamp-time">
						<div class="component-box time-recording-wrap">
							<p><span class="bold">홍길동</span>님의 <br />근무시간을 기록합니다</p>
							<div class="clock">
								<span class="clock__hour">00</span>
								<span class="clock__icon">:</span>
								<span class="clock__minutes">00</span>
							</div>
							<div class="buttons">
								<button type="button" class="button button__start">
									<span>
										<span class="icon__work"></span>
										출근
									</span>
									<span class="stamp-time">00:00</span>
								</button>
								<button type="button" class="button button__end">
									<span>
										<span class="icon__leave"></span>
										퇴근
									</span>
									<span class="stamp-time">00:00</span>
								</button>
							</div>
						</div>
					</div>
					<div class="component-area">
						<div class="component-box">
							<p class="component__title">주 평균 근로시간</p>
							<p class="status-time"><span class="bold">38.6</span>시간</p>
						</div>
						<p>시차 출퇴근제</p>
						<div class="progress-box-wrap progress__2bars">
							<div class="progress-box progress__bar1">
								<span class="progress__bar"></span>
								<span class="progress__bg"></span>
							</div>
							<div class="progress-box progress__bar2">
								<span class="progress__bar"></span>
								<span class="progress__bg"></span>
							</div>
						</div>
						<div class="component-box">
							<span>주 40시간</span>
							<span>주 52시간</span>
						</div>
					</div>
					<div class="component-area">
						<div class="component-box">
							<p class="component__title">잔여 근무 가능 시간</p>
							<p class="status-time"><span class="bold">18.5</span>시간</p>
						</div>
						<p>총 근로시간 <span class="bold">198시간</span></p>
						<div class="progress-box-wrap progress__2bars">
							<div class="progress-box progress__bar1">
								<span class="progress__bar"></span>
								<span class="progress__bg"></span>
							</div>
							<div class="progress-box progress__bar2">
								<span class="progress__bar"></span>
								<span class="progress__bg"></span>
							</div>
						</div>
						<div class="component-box">
							<span>기본 164.0시간</span>
							<span>연장 34.0시간</span>
						</div>
					</div>
					<div class="component-area">
						<div class="component-box">
							<p class="component__title">잔여 연차</p>
							<p class="status-time"><span class="bold">8.5</span>개</p>
						</div>
						<p>발생 <span class="bold">15.0</span>개</p>
						<div class="progress-box">
							<span class="progress__bar"></span>
							<span class="progress__bg"></span>
						</div>

						<div class="component-box">
							<span class="">사용 6.5시간</span>
						</div>
					</div>
				</div>

				<div class="component-area">
					<div class="component-box component-box-top">
						<div class="select-month">
							<button type="button" class="button__prev">
								<span class="icon icon-triangle"></span>
								<span class="blind">이전달</span>
							</button>
							<p>2020년 8월</p>
							<button type="button" class="button__next">
								<span class="icon icon-triangle"></span>
								<span class="blind">다음달</span>
							</button>
						</div>
						<div class="lst-working">
							<button type="button" class="button">근무 계획 변경</button>
							<ul>
								<li>
									<a href="overtime.html">연장 근무 신청</a>
								</li>
								<li>
									<a href="#">휴일 근무 신청</a>
								</li>
								<li>
									<a href="leave.html">휴가 신청</a>
								</li>
								<li>
									<a href="#">외근 신청</a>
								</li>
								<li>
									<a href="business-trip.html">출장 신청</a>
								</li>
							</ul>
						</div>
					</div>
					<div class="tab-area">
						<el-tabs v-model="activeName" @tab-click="handleClick">
							<el-tab-pane label="리스트" name="first">
								<div class="tab-cnt">
									<div class="table-wrap table--horizontal">
										<table class="table table__detail">
											<thead>
												<tr>
													<th>일자</th>
													<th>유연 근무 유형</th>
													<th>상태</th>
													<th>출/퇴근 시간</th>
													<th>기본 근무 시간</th>
													<th>연장 근무 시간</th>
													<th>총 근무 시간</th>
													<th>연차(시간)</th>
												</tr>
											</thead>
											<tbody>
												<tr class="row">
													<td>08-03 월</td>
													<td>시차 출퇴근제</td>
													<td>
														<ul class="lst-status lst-status-multiple opt1 opt2">
															<li class="opt1__txt opt__txt">정상</li>
															<li class="opt2__txt opt__txt">연차</li>
															<li class="opt3__txt opt__txt">반차</li>
															<li class="opt4__txt opt__txt">시간연차</li>
															<li class="opt5__txt opt__txt">출장</li>
															<li class="opt6__txt opt__txt">반반차</li>
														</ul>
													</td>
													<td>09:00 ~ 13:00</td>
													<td>4시간</td>
													<td></td>
													<td>4시간</td>
													<td>0.5시간</td>
												</tr>
												<tr class="row">
													<td>08-04 화</td>
													<td>시차 출퇴근제</td>
													<td>
														<ul class="lst-status lst-status-multiple opt1">
															<li class="opt1__txt opt__txt">정상</li>
															<li class="opt2__txt opt__txt">연차</li>
															<li class="opt3__txt opt__txt">반차</li>
															<li class="opt4__txt opt__txt">시간연차</li>
															<li class="opt5__txt opt__txt">출장</li>
															<li class="opt6__txt opt__txt">반반차</li>
														</ul>
													</td>
													<td>09:00 ~ 20:00</td>
													<td>8시간</td>
													<td>2시간</td>
													<td>8시간</td>
													<td></td>
												</tr>
											</tbody>
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
				<!-- <div class="component-area tab-cnt-wrap">
					<div class="tab-cnt show">
						<div class="component-box component-box-top">
							<div class="select-month">
								<button type="button" class="button__prev">
									<span class="icon icon-triangle"></span>
									<span class="blind">이전달</span>
								</button>
								<p>2020년 8월</p>
								<button type="button" class="button__next">
									<span class="icon icon-triangle"></span>
									<span class="blind">다음달</span>
								</button>
							</div>
							<div class="flex-box">
								<div class="lst-working">
									<button type="button" class="button">근무 계획 변경</button>
									<ul>
										<li>
											<a href="overtime.html">연장 근무 신청</a>
										</li>
										<li>
											<a href="#">휴일 근무 신청</a>
										</li>
										<li>
											<a href="leave.html">휴가 신청</a>
										</li>
										<li>
											<a href="#">외근 신청</a>
										</li>
										<li>
											<a href="business-trip.html">출장 신청</a>
										</li>
									</ul>
								</div>
								<ul class="lst-tab">
									<li class="lst-tab__item on">
										<a href="#" class="lst-tab__link">
											<span class="icon icon-list"></span>
											리스트
										</a>
									</li>
									<li class="lst-tab__item">
										<a href="#" class="lst-tab__link">
											<span class="icon icon-calendar"></span>
											달력
										</a>
									</li>
									<li class="lst-tab__item">
										<a href="#" class="lst-tab__link">
											<span class="icon icon-chart"></span>
											그래프
										</a>
									</li>
								</ul>
							</div>
						</div>
						<div class="component-box tab-cnt-wrap">
							<div class="tab-cnt show">
								<div class="table-wrap">
									<table class="table table-hover table__detail">
										<thead>
											<tr>
												<th>일자</th>
												<th>유연 근무 유형</th>
												<th>상태</th>
												<th>출/퇴근 시간</th>
												<th>기본 근무 시간</th>
												<th>연장 근무 시간</th>
												<th>총 근무 시간</th>
												<th>연차(시간)</th>
											</tr>
										</thead>
										<tbody>
											<tr class="row">
												<td>08-03 월</td>
												<td>시차 출퇴근제</td>
												<td>
													<ul class="lst-status lst-status-multiple">
														<li class="lst-status__item show">정상</li>
														<li class="lst-status__item">연차</li>
														<li class="lst-status__item">출장</li>
														<li class="lst-status__item">시간연차</li>
														<li class="lst-status__item">반반차</li>
														<li class="lst-status__item show">반차</li>
													</ul>
												</td>
												<td>09:00 ~ 13:00</td>
												<td>4시간</td>
												<td></td>
												<td>4시간</td>
												<td>0.5시간</td>
											</tr>
											<tr class="row">
												<td>08-04 화</td>
												<td>시차 출퇴근제</td>
												<td>
													<ul class="lst-status lst-status-multiple">
														<li class="lst-status__item show">정상</li>
														<li class="lst-status__item">연차</li>
														<li class="lst-status__item">출장</li>
														<li class="lst-status__item">시간연차</li>
														<li class="lst-status__item">반반차</li>
														<li class="lst-status__item">반차</li>
													</ul>
												</td>
												<td>09:00 ~ 20:00</td>
												<td>8시간</td>
												<td>2시간</td>
												<td>8시간</td>
												<td></td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
							<div class="tab-cnt">
								<div class="calendar-wrap">
									calendar
								</div>
							</div>
							<div class="tab-cnt">
								<div class="chart-wrap">
									chart
								</div>
							</div>
						</div>
					</div>
				</div> -->
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
			activeName: 'second',
			value1: '',
			value2: '',
			calendarOptions1: {
				plugins: [dayGridPlugin, interactionPlugin],
				initialView: 'dayGridMonth',
			},
		}
	}
};
</script>

<style></style>

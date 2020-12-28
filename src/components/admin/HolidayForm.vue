<template>
	<div class="container admin-container">
		<section class="section__contents">
			<div class="inner-wrap">
				<div class="section-top">
					<h3 class="section__title">휴일 등록</h3>
				</div>

				<div class="component-area">
					<div class="component-box component-box-top">
						<div class="input-box">
							<el-date-picker
								v-model="value1"
								type="year"
								placeholder="기준 연도를 입력하세요"
							></el-date-picker>
						</div>
						<div class="buttons">
							<button type="button" class="button button__add">
								<span class="icon icon-add"></span> 휴일 등록
							</button>
							<button type="button" class="button button__import">
								<span class="icon icon-import"></span>법정 공휴일 가져오기
							</button>
						</div>
					</div>
					<div class="component-box">
						<div class="tab-area">
							<el-tabs v-model="activeName" @tab-click="handleClick">
								<el-tab-pane label="달력" name="first">
									<div class="tab-cnt">
										<FullCalendar :options="calendarOptions" class="calendar" />
									</div>
								</el-tab-pane>
								<el-tab-pane label="리스트" name="second">
									<div class="tab-cnt">
										<div class="table-wrap">
											<table class="table table-hover">
												<thead>
													<tr>
														<th>No.</th>
														<th>날짜</th>
														<th>휴일명</th>
														<th>휴일종류</th>
														<th></th>
													</tr>
												</thead>
												<tbody>
													<tr class="row">
														<td>1</td>
														<td>2020-01-01 수요일</td>
														<td>신정</td>
														<td>공휴일</td>
														<td></td>
													</tr>
													<tr class="row">
														<td>2</td>
														<td>2020-01-24 금요일</td>
														<td>설날연휴</td>
														<td>공휴일</td>
														<td></td>
													</tr>
													<tr class="row">
														<td>3</td>
														<td>2020-01-25 토요일</td>
														<td>설날</td>
														<td>공휴일</td>
														<td></td>
													</tr>
													<tr class="row">
														<td>4</td>
														<td>2020-01-27 월요일</td>
														<td>대체휴일</td>
														<td>공휴일</td>
														<td></td>
													</tr>
													<tr class="row">
														<td>5</td>
														<td>2020-01-31 금요일</td>
														<td>창립기념일</td>
														<td>휴일</td>
														<td class="options row-options">
															<button type="button" class="button__options">
																<span class="icon icon-more-vertical"></span>
																<span class="blind">변경메뉴</span>
															</button>
															<ul class="lst-options">
																<li class="lst-options__item">
																	<button
																		type="button"
																		class="button-list button__modify"
																	>
																		수정
																	</button>
																</li>
																<li class="lst-options__item">
																	<button
																		type="button"
																		class="button-list button__delete"
																	>
																		삭제
																	</button>
																</li>
															</ul>
														</td>
													</tr>
												</tbody>
											</table>
										</div>
									</div>
								</el-tab-pane>
							</el-tabs>
							<!-- <ul class="lst-tab">
								<li class="lst-tab__item on">
									<a href="#" class="lst-tab__link"> <span class="icon icon-calendar"></span>달력 </a>
								</li>
								<li class="lst-tab__item">
									<a href="#" class="lst-tab__link"> <span class="icon icon-list"></span>리스트 </a>
								</li>
							</ul> -->
						</div>
						<!-- <div class="tab-cnt-wrap">
							<div class="tab-cnt show">
								<el-calendar v-model="value2" class="calendar"></el-calendar>
							</div>
							<div class="tab-cnt">
								<div class="table-wrap">
									<table class="table table-hover">
										<thead>
											<tr>
												<th>No.</th>
												<th>날짜</th>
												<th>휴일명</th>
												<th>휴일종류</th>
												<th></th>
											</tr>
										</thead>
										<tbody>
											<tr class="row">
												<td>1</td>
												<td>2020-01-01 수요일</td>
												<td>신정</td>
												<td>공휴일</td>
												<td></td>
											</tr>
											<tr class="row">
												<td>2</td>
												<td>2020-01-24 금요일</td>
												<td>설날연휴</td>
												<td>공휴일</td>
												<td></td>
											</tr>
											<tr class="row">
												<td>3</td>
												<td>2020-01-25 토요일</td>
												<td>설날</td>
												<td>공휴일</td>
												<td></td>
											</tr>
											<tr class="row">
												<td>4</td>
												<td>2020-01-27 월요일</td>
												<td>대체휴일</td>
												<td>공휴일</td>
												<td></td>
											</tr>
											<tr class="row">
												<td>5</td>
												<td>2020-01-31 금요일</td>
												<td>창립기념일</td>
												<td>휴일</td>
												<td class="options row-options">
													<button type="button" class="button__options">
														<span class="icon icon-more-vertical"></span>
														<span class="blind">변경메뉴</span>
													</button>
													<ul class="lst-options">
														<li class="lst-options__item">
															<button type="button" class="button-list button__modify">
																수정
															</button>
														</li>
														<li class="lst-options__item">
															<button type="button" class="button-list button__delete">
																삭제
															</button>
														</li>
													</ul>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div> -->
					</div>
				</div>
			</div>
		</section>

		<!-- popup -->
		<div class="popup popup__add-holiday">
			<div class="component-area">
				<div class="inner-wrap">
					<div class="popup-top">
						<strong class="popup__title">휴일 등록</strong>
					</div>
					<div class="popup-contents">
						<div class="component-box">
							<div class="component-box-top">
								<p class="component__title">날짜</p>
							</div>
							<div class="component-box-cnt">
								<div class="input-box">
									<el-date-picker v-model="value2" type="date"></el-date-picker>
								</div>
							</div>
						</div>
						<div class="component-box">
							<div class="component-box-top">
								<p class="component__title">휴일명</p>
							</div>
							<div class="component-box-cnt">
								<div class="input-box">
									<input type="text" class="input" />
								</div>
							</div>
						</div>
						<div class="component-box">
							<div class="component-box-top">
								<p class="component__title">휴일 종류</p>
							</div>
							<div class="component-box-cnt">
								<div class="input-box">
									<select name="" id="" class="input-select">
										<option value="공휴일">공휴일</option>
										<option value="휴일">휴일</option>
									</select>
								</div>
							</div>
						</div>
					</div>
					<div class="popup-bottom buttons-complete">
						<div class="buttons">
							<button type="submit" class="button button__save">등록</button>
							<button type="button" class="button button__cancel">취소</button>
						</div>
					</div>
				</div>
				<button type="button" class="button__close" @click="closeModal">
					<span class="icon icon-close"></span>
					<span class="blind">닫기</span>
				</button>
			</div>
		</div>
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
			calendarOptions: {
				plugins: [dayGridPlugin, interactionPlugin],
				initialView: 'dayGridMonth',
			},
		};
	},
};
</script>

<style></style>

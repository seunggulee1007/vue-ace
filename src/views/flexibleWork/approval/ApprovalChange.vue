<template>
	<div class="container user-container">
		<section class="section__contents">
			<div class="inner-wrap">
				<div class="section-top">
					<h3 class="section__title">승인 처리 (근무 계획 변경)</h3>
				</div>
				<div class="component-area">
					<div class="component-box component__search">
						<form>
							<div class="input-box">
								<el-date-picker
									v-model="value1"
									type="daterange"
									range-separator="~"
									start-placeholder="작성기준시작일"
									end-placeholder="작성기준종료일"
								>
								</el-date-picker>
							</div>
							<div class="input-select input-box input-box-icon">
								<select name="" id="" class="selectbox">
									<option value="">검색조건을 선택하세요</option>
									<option value="">부서명</option>
									<option value="">사원명</option>
								</select>
								<span class="icon icon-arrow"></span>
							</div>
							<div class="input-box input-box-icon">
								<input class="input input-icon" type="text" placeholder="검색어를 입력하세요" />
								<span class="icon icon-search"></span>
							</div>
							<div class="input-checkbox">
								<input type="checkbox" id="checkboxNotUse" />
								<label for="checkboxNotUse" class="input-checkbox__label  icon-checkbox-purple">
									<span>미승인건만 조회하기</span>
								</label>
							</div>
							<button class="button button__search">조회</button>
						</form>
					</div>
				</div>
				<div class="component-area">
					<div class="component-box table-wrap">
						<table class="table table-hover">
							<thead>
								<tr>
									<th rowspan="2">
										<div class="input-box">
											<span class="input-checkbox">
												<input type="checkbox" id="checkboxSelectAll" />
												<label
													for="checkboxAll"
													class="input-checkbox__label icon-checkbox-purple"
												>
													<span class="blind">선택</span>
												</label>
											</span>
										</div>
									</th>
									<th rowspan="2">승인상태</th>
									<th rowspan="2">사원명</th>
									<th colspan="2">변경전</th>
									<th colspan="4">변경후</th>
								</tr>
								<tr>
									<th>유연 근무 유형</th>
									<th>근무 시간</th>
									<th>유연 근무 유형</th>
									<th>근무 시간</th>
									<th>적용 시작일</th>
									<th>적용 종료일</th>
								</tr>
							</thead>
							<tbody>
								<tr class="row">
									<td class="column-check">
										<div class="input-box">
											<span class="input-checkbox">
												<input type="checkbox" id="checkboxSelect1" />
												<label
													for="checkboxSelect1"
													class="input-checkbox__label icon-checkbox-purple"
												>
													<span class="blind">선택</span>
												</label>
											</span>
										</div>
									</td>
									<td>
										<ul class="lst-status opt3">
											<li class="opt1__txt opt__txt">승인 요청</li>
											<li class="opt2__txt opt__txt">미승인</li>
											<li class="opt3__txt opt__txt">승인</li>
										</ul>
									</td>
									<td>
										<div class="user-name">
											<div class="img-user">
												<img src="/images/sample1.jpeg" alt="" />
											</div>
											<p>
												홍길동
												<span class="user-position">차장</span>
												<span class="user-dept">개발1팀</span>
											</p>
										</div>
									</td>
									<td>시차출퇴근제</td>
									<td>09:00 ~ 18:00</td>
									<td>시차출퇴근제</td>
									<td>08:00 ~ 17:00</td>
									<td>2020-10-01</td>
									<td>2020-12-31</td>
								</tr>
								<tr class="row">
									<td class="column-check">
										<div class="input-box">
											<span class="input-checkbox">
												<input type="checkbox" id="checkboxSelect2" />
												<label
													for="checkboxSelect2"
													class="input-checkbox__label icon-checkbox-purple"
												>
													<span class="blind">선택</span>
												</label>
											</span>
										</div>
									</td>
									<td>
										<ul class="lst-status opt1">
											<li class="opt1__txt opt__txt">승인 요청</li>
											<li class="opt2__txt opt__txt">미승인</li>
											<li class="opt3__txt opt__txt">승인</li>
										</ul>
									</td>
									<td>
										<div class="user-name">
											<div class="img-user">
												<img src="/images/sample2.jpeg" alt="" />
											</div>
											<p>
												최수현
												<span class="user-position">과장</span>
												<span class="user-dept">개발2팀</span>
											</p>
										</div>
									</td>
									<td>시차출퇴근제</td>
									<td>09:00 ~ 18:00</td>
									<td>시차출퇴근제</td>
									<td>08:00 ~ 17:00</td>
									<td>2020-10-01</td>
									<td>2020-12-31</td>
								</tr>
								<tr class="row">
									<td class="column-check">
										<div class="input-box">
											<span class="input-checkbox">
												<input type="checkbox" id="checkboxSelect3" />
												<label
													for="checkboxSelect3"
													class="input-checkbox__label icon-checkbox-purple"
												>
													<span class="blind">선택</span>
												</label>
											</span>
										</div>
									</td>
									<td>
										<ul class="lst-status opt2">
											<li class="opt1__txt opt__txt">승인 요청</li>
											<li class="opt2__txt opt__txt">미승인</li>
											<li class="opt3__txt opt__txt">승인</li>
										</ul>
										<p class="msg-canceled">미승인사유</p>
									</td>
									<td>
										<div class="user-name">
											<div class="img-user">
												<img src="/images/sample3.jpeg" alt="" />
											</div>
											<p>
												김우중
												<span class="user-position">대리</span>
												<span class="user-dept">개발2팀</span>
											</p>
										</div>
									</td>
									<td>시차출퇴근제</td>
									<td>09:00 ~ 18:00</td>
									<td>시차출퇴근제</td>
									<td>08:00 ~ 17:00</td>
									<td>2020-10-01</td>
									<td>2020-12-31</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="buttons-complete">
					<div class="buttons">
						<button type="submit" class="button button__approval button__submit">승인</button>
						<button type="button" class="button button__cancel">미승인</button>
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

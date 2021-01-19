<template>
	<div class="container user-container">
		<section class="section__contents">
			<div class="inner-wrap">
				<div class="section-top">
					<h3 class="section__title">승인 처리 (연장/휴가/외근/출장)</h3>
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
					<div class="table-wrap table--horizontal">
						<table class="table">
							<thead>
								<tr>
									<th>
										<div class="input-box">
											<span class="input-checkbox">
												<input type="checkbox" id="checkboxSelectAll" />
												<label
													for="checkboxSelectAll"
													class="input-checkbox__label icon-checkbox-purple"
												>
													<span class="blind">선택</span>
												</label>
											</span>
										</div>
									</th>
									<th>처리유형</th>
									<th>승인상태</th>
									<th>사유</th>
									<th>신청자</th>
									<th>기간 및 시간</th>
									<th>총 시간</th>
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
									<td>연장근무</td>
									<td>
										<ul class="lst-status opt1">
											<li class="opt1__txt opt__txt">승인 요청</li>
											<li class="opt2__txt opt__txt">미승인</li>
											<li class="opt3__txt opt__txt">승인</li>
										</ul>
									</td>
									<td>결산 지원</td>
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
									<td>2020-09-07 월 18:00 ~ 22:00</td>
									<td>3시간</td>
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
									<td>외근</td>
									<td>
										<ul class="lst-status opt3">
											<li class="opt1__txt opt__txt">승인 요청</li>
											<li class="opt2__txt opt__txt">미승인</li>
											<li class="opt3__txt opt__txt">승인</li>
										</ul>
									</td>
									<td>외근</td>
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
									<td>2020-09-09 수 09:00 ~ 14:00</td>
									<td>5시간</td>
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
									<td>휴가</td>
									<td>
										<ul class="lst-status opt2">
											<li class="opt1__txt opt__txt">승인 요청</li>
											<li class="opt2__txt opt__txt">미승인</li>
											<li class="opt3__txt opt__txt">승인</li>
										</ul>
										<p class="msg-canceled">미승인사유</p>
									</td>
									<td>시간 연차</td>
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
									<td>2020-09-14 월 09:00 ~ 12:00</td>
									<td>3시간</td>
								</tr>
								<tr class="row">
									<td class="column-check">
										<div class="input-box">
											<span class="input-checkbox">
												<input type="checkbox" id="checkboxSelect4" />
												<label
													for="checkboxSelect4"
													class="input-checkbox__label icon-checkbox-purple"
												>
													<span class="blind">선택</span>
												</label>
											</span>
										</div>
									</td>
									<td>국내출장</td>
									<td>
										<ul class="lst-status opt1">
											<li class="opt1__txt opt__txt">승인 요청</li>
											<li class="opt2__txt opt__txt">미승인</li>
											<li class="opt3__txt opt__txt">승인</li>
										</ul>
									</td>
									<td>국내 출장</td>
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
									<td>2020-09-16 수 ~ 2020-09-17 목</td>
									<td>16시간</td>
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

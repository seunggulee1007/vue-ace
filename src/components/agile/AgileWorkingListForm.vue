<template>
	<div class="container user-container">
		<section class="section__contents">
			<div class="inner-wrap">
				<div class="section-top">
					<h3 class="section__title">유연 근무 조회</h3>
				</div>
				<div class="component-area">
					<div class="component-box component__search">
						<form>
							<div class="input-box input-box-icon">
								<input class="input input-icon" type="text" placeholder="적용일자를 입력하세요" />
								<span class="icon icon-clock"></span>
							</div>
							<select name="" id="">
								<option value="">검색조건을 선택하세요</option>
								<option value="">유연근무유형</option>
								<option value="">근무그룹명</option>
								<option value="">부서명</option>
								<option value="">사원명</option>
							</select>
							<div class="input-box input-box-icon">
								<input class="input input-icon" type="text" placeholder="검색어를 입력하세요" />
								<span class="icon icon-search"></span>
							</div>
							<button class="button button__search">조회</button>
						</form>
						<p class="result-search">검색결과 <span class="font-">100</span>건</p>
					</div>
				</div>
				<div class="component-area">
					<div class="component-box table-wrap">
						<table class="table table-hover">
							<thead>
								<tr>
									<th>No.</th>
									<th>근무 그룹명</th>
									<th>사원명</th>
									<th>부서명</th>
									<th>유연 근무 유형</th>
									<th>근무 시간</th>
									<th>등록일자</th>
								</tr>
							</thead>
							<tbody>
								<tr class="group-header">
									<td></td>
									<td colspan="6">
										<div class="flex-box">
											<span class="bold">개발사업부</span>
											<span class="icon icon-arrow"></span>
										</div>
									</td>
								</tr>
								<tr class="row">
									<td>1</td>
									<td>개발사업부</td>
									<td>
										<div class="user-name">
											<div class="img-user">
												<img src="/images/sample1.jpeg" alt="" />
											</div>
											<p>홍길동 차장</p>
										</div>
									</td>
									<td>개발1팀</td>
									<td>시차 출퇴근제</td>
									<td>09:00 ~ 18:00</td>
									<td>2020-03-01</td>
								</tr>
								<tr class="row">
									<td>2</td>
									<td>개발사업부</td>
									<td>
										<div class="user-name">
											<div class="img-user">
												<img src="/images/sample2.jpeg" alt="" />
											</div>
											<p>최수현 과장</p>
										</div>
									</td>
									<td>개발2팀</td>
									<td>시차 출퇴근제</td>
									<td>09:00 ~ 18:00</td>
									<td>2020-03-01</td>
								</tr>
								<tr class="row">
									<td>3</td>
									<td>개발사업부</td>
									<td>
										<div class="user-name">
											<div class="img-user">
												<img src="/images/sample3.jpeg" alt="" />
											</div>
											<p>김우중 대리</p>
										</div>
									</td>
									<td>개발2팀</td>
									<td>시차 출퇴근제</td>
									<td>09:00 ~ 18:00</td>
									<td>2020-03-01</td>
								</tr>
								<tr class="row">
									<td>4</td>
									<td>개발사업부</td>
									<td>
										<div class="user-name">
											<div class="img-user">
												<img src="/images/sample1.jpeg" alt="" />
											</div>
											<p>홍길동 차장</p>
										</div>
									</td>
									<td>개발1팀</td>
									<td>시차 출퇴근제</td>
									<td>09:00 ~ 18:00</td>
									<td>2020-03-01</td>
								</tr>
								<tr class="row">
									<td>5</td>
									<td>개발사업부</td>
									<td>
										<div class="user-name">
											<div class="img-user">
												<img src="/images/sample1.jpeg" alt="" />
											</div>
											<p>홍길동 차장</p>
										</div>
									</td>
									<td>개발1팀</td>
									<td>시차 출퇴근제</td>
									<td>09:00 ~ 18:00</td>
									<td>2020-03-01</td>
								</tr>
								<tr class="row">
									<td>6</td>
									<td>개발사업부</td>
									<td>
										<div class="user-name">
											<div class="img-user">
												<img src="/images/sample3.jpeg" alt="" />
											</div>
											<p>김우중 대리</p>
										</div>
									</td>
									<td>개발2팀</td>
									<td>시차 출퇴근제</td>
									<td>09:00 ~ 18:00</td>
									<td>2020-03-01</td>
								</tr>
								<tr class="row">
									<td>7</td>
									<td>개발사업부</td>
									<td>
										<div class="user-name">
											<div class="img-user">
												<img src="/images/sample1.jpeg" alt="" />
											</div>
											<p>홍길동 차장</p>
										</div>
									</td>
									<td>개발1팀</td>
									<td>시차 출퇴근제</td>
									<td>09:00 ~ 18:00</td>
									<td>2020-03-01</td>
								</tr>
								<!-- <tr class="row">
										<td>8</td>
										<td>개발사업부</td>
										<td>
											<div class="user-name">
												<div class="img-user">
													<img src="../images/sample1.jpeg" alt="">
												</div>
												<p>홍길동 차장</p>
											</div>
										</td>
										<td>개발1팀</td>
										<td>시차 출퇴근제</td>
										<td>09:00 ~ 18:00</td>
										<td>2020-03-01</td>
									</tr> -->
							</tbody>
						</table>
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

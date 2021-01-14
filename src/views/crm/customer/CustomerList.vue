<template>
	<div class="container user-container">
		<section class="section__contents">
			<div class="inner-wrap">
				<div class="section-top">
					<h3 class="section__title">고객 현황</h3>
				</div>
				<div class="component-area">
					<div class="component-box component__search">
						<form>
							<div class="input-term">
								<div class="input-box input-box-icon">
									<input class="input input-icon" type="text" placeholder="등록일자" />
									<span class="icon icon-calendar"></span>
								</div>
								<!-- <div class="input-box">
										<template>
											<div class="block">
												<el-date-picker
													v-model="contractDateFrom"
													type="date"
													placeholder="Pick a day"
													ref="contractDateFrom"
													format="yyyy-MM-dd"
												>
												</el-date-picker>
											</div>
										</template>
									</div>
									<p>~</p>
									<div class="input-box">
										<template>
											<div class="block">
												<el-date-picker
													v-model="contractDateTo"
													type="date"
													placeholder="Pick a day"
													ref="contractDateTo"
													format="yyyy-MM-dd"
												>
												</el-date-picker>
											</div>
										</template> 
									</div>-->
							</div>
							<select name="" id="">
								<option value="">고객명</option>
								<option value="">거래처명</option>
								<option value="">영업담당자</option>
							</select>
							<div class="input-box input-box-icon">
								<input class="input input-icon" type="text" placeholder="검색어를 입력하세요" />
								<span class="icon icon-search"></span>
							</div>
							<button class="button button__search">조회</button>
						</form>
					</div>
				</div>
				<div class="component-area">
					<div class="table-wrap table--horizontal no-mobile">
						<table class="table">
							<thead>
								<tr>
									<th>No.</th>
									<th>거래처명</th>
									<th>영업 담당자</th>
									<th>고객명</th>
									<th>직위/직책</th>
									<th>부서</th>
									<th>휴대전화</th>
									<th>E-mail</th>
									<th>퇴사유무</th>
									<th>비고</th>
									<th>등록일자</th>
								</tr>
							</thead>
							<tbody>
								<tr class="row">
									<td>1</td>
									<td>(주)아이에스전자</td>
									<td>최수현 과장</td>
									<td>이선원</td>
									<td>과장</td>
									<td>마케팅부서</td>
									<td>010-0000-0000</td>
									<td>abcd@abc.com</td>
									<td>
										<div class="lst-status opt5">
											<span class="opt5__txt opt__txt">재직</span>
											<span class="opt6__txt opt__txt">퇴사</span>
										</div>
									</td>
									<td></td>
									<td>2020-12-20</td>
								</tr>
								<tr class="row">
									<td>2</td>
									<td>(주)아이에스전자</td>
									<td>최수현 과장</td>
									<td>이선원</td>
									<td>과장</td>
									<td>마케팅부서</td>
									<td>010-0000-0000</td>
									<td>abcd@abc.com</td>
									<td>
										<div class="lst-status opt6">
											<span class="opt5__txt opt__txt">재직</span>
											<span class="opt6__txt opt__txt">퇴사</span>
										</div>
									</td>
									<td></td>
									<td>2020-12-20</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div class="lst-wrap mobile">
							<div class="lst-vender lst__item">
								<div class="lst-vender__item element bold">
									<p>(주)아이에스전자</p>
								</div>
								<div class="lst-vender__item element">
									<p>513-81-51116</p>
								</div>
								<div class="lst-vender__item element">
									<p>유영빈</p>
								</div>
								<div class="lst-vender__item element">
									<p>경북 구미시 임수동 92-9 구미산업유통단지 6동 213호</p>
								</div>
								<div class="lst-vender__item element">
									<button type="button" class="button button--small">상세</button>
								</div>
							</div>
							<div class="lst-vender lst__item">
								<div class="lst-vender__item element bold">
									<p>거래처명</p>
								</div>
								<div class="lst-vender__item element">
									<p>사업자번호</p>
								</div>
								<div class="lst-vender__item element">
									<p>대표자명</p>
								</div>
								<div class="lst-vender__item element">
									<p>주소</p>
								</div>
								<div class="lst-vender__item element">
									<button type="button" class="button button--small">상세</button>
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

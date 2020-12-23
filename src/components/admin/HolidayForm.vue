<template>
	<div class="container admin-container">
		<section class="section__contents">
			<div class="inner-wrap">
				<div class="section-top">
					<h3 class="section__title">휴일 등록</h3>
				</div>

				<div class="component-area">
					<div class="component-box">
						<div class="input-box">
							<input class="input" type="text" placeholder="기준년도를 입력하세요" />
							<button class="button">조회</button>
						</div>
					</div>
					<div class="component-box">
						<div class="component-box component-box-top">
							<ul class="lst-tab">
								<li class="lst-tab__item">
									<a href="#" class="lst-tab__link"> <span class="icon icon-calendar"></span>달력 </a>
								</li>
								<li class="lst-tab__item on">
									<a href="#" class="lst-tab__link"> <span class="icon icon-list"></span>리스트 </a>
								</li>
							</ul>
							<div class="buttons">
								<button type="button" class="button button__add">
									<span class="icon icon-add"></span> 휴일 등록
								</button>
								<button type="button" class="button button__import">
									<span class="icon icon-import"></span>법정 공휴일 가져오기
								</button>
							</div>
						</div>
						<div class="tab-cnt-wrap">
							<div class="tab-cnt show">
								<el-calendar v-model="value"></el-calendar>
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
						</div>
					</div>
				</div>
				<div class="buttons-complete">
					<div class="buttons">
						<button type="submit" class="button button__save">저장</button>
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
			value: new Date(),
		};
	},
};
</script>

<style></style>

<template>
	<div class="container user-container">
		<section class="section__contents">
			<div class="inner-wrap">
				<div class="section-top">
					<h3 class="section__title">영업 활동 등록</h3>
				</div>
				<div class="component-area">
					<div class="component-box">
						<div class="component-box-top">
							<p class="component__title">영업기회명</p>
						</div>
						<div class="component-box-cnt">
							<div class="input-box">
								<!-- element - select - Remote Search -->
								<input class="input " type="text" placeholder="입력하세요" />
							</div>
						</div>
					</div>
					<div class="component-box">
						<div class="component-box-top">
							<p class="component__title">거래처</p>
						</div>
						<div class="component-box-cnt">
							<div class="input-box">
								<input class="input " type="text" readonly />
							</div>
						</div>
					</div>
					<div class="component-box">
						<div class="component-box-top">
							<p class="component__title">영업 담당자</p>
						</div>
						<div class="component-box-cnt">
							<div class="input-box">
								<input class="input" type="text" />
								<button type="button" class="button button__add">
									<span class="icon icon-user"></span>검색
								</button>
							</div>
						</div>
					</div>
					<div class="component-box">
						<div class="component-box-top">
							<p class="component__title">방문일자 및 시간</p>
						</div>
						<div class="component-box-cnt">
							<div class="input-box-wrap">
								<div class="input-box input-box-icon">
									<!-- element-datepicker -->
									<input class="input input-icon" type="text" placeholder="입력하세요" />
									<span class="icon icon-calendar"></span>
								</div>
								<div class="input-box input-box-icon">
									<!-- element-timepicker -->
									<input class="input input-icon" type="text" placeholder="입력하세요" />
									<span class="icon icon-clock"></span>
								</div>
							</div>
						</div>
					</div>
					<div class="component-box">
						<div class="component-box-top">
							<p class="component__title">영업 활동 방법</p>
						</div>
						<div class="component-box-cnt">
							<div class="input-select input-box input-box-icon">
								<select name="" id="" class="selectbox">
									<option value="">방법1</option>
									<option value="">방법2</option>
								</select>
								<span class="icon icon-arrow"></span>
							</div>
						</div>
					</div>
					<div class="component-box">
						<div class="component-box-top">
							<p class="component__title">영업 활동 목적</p>
						</div>
						<div class="component-box-cnt">
							<div class="input-box">
								<select name="" id="">
									<option value="">목적1</option>
									<option value="">목적2</option>
								</select>
							</div>
						</div>
					</div>
					<div class="component-box">
						<div class="component-box-top">
							<p class="component__title">동행자</p>
						</div>
						<div class="component-box-cnt">
							<div class="input-box">
								<input class="input" type="text" />
								<button type="button" class="button button__add" @click="modalFlag = !modalFlag">
									<span class="icon icon-user"></span>검색
								</button>
							</div>
						</div>
					</div>
					<div class="component-box">
						<div class="component-box-top">
							<p class="component__title">고객명</p>
						</div>
						<div class="component-box-cnt">
							<div class="input-box">
								<input class="input" type="text" />
							</div>
						</div>
					</div>
					<div class="component-box">
						<div class="component-box-top">
							<p class="component__title">등록일자</p>
						</div>
						<div class="input-box">
							<input class="input" type="text" readonly />
						</div>
					</div>
					<div class="buttons-complete">
						<div class="buttons">
							<button type="submit" class="button button__save">
								등록
							</button>
							<button type="submit" class="button button__save">
								수정
							</button>
							<button type="button" class="button button__cancel">취소</button>
							<button type="button" class="button button__back">이전페이지</button>
						</div>
					</div>
				</div>
				<div class="component-area">
					<h4 class="content__title">영업 활동 내역</h4>
					<div class="table-wrap">
						<table class="table">
							<thead>
								<tr>
									<th>No.</th>
									<th>방문 일자</th>
									<th>방문 시간</th>
									<th>영업 담당자</th>
									<th>영업 활동 방법</th>
									<th>영업 활동 목적</th>
									<th>세부 활동 내역</th>
									<th>동행자</th>
									<th>고객명</th>
								</tr>
							</thead>
							<tbody>
								<tr class="row">
									<td>1</td>
									<td>2021-01-04</td>
									<td>14:00</td>
									<td>최수현</td>
									<td>전화</td>
									<td>계약체결</td>
									<td>안내메일 발송</td>
									<td></td>
									<td>담당자명</td>
								</tr>
								<tr class="row">
									<td>2</td>
									<td>2021-01-04</td>
									<td>14:00</td>
									<td>최수현</td>
									<td>전화</td>
									<td>계약체결</td>
									<td>안내메일 발송</td>
									<td></td>
									<td>담당자명</td>
								</tr>
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

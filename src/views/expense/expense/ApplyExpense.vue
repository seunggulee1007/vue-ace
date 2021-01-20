<template>
	<div class="container user-container">
		<section class="section__contents">
			<div class="inner-wrap">
				<div class="section-top">
					<h3 class="section__title">비용 정산 신청</h3>
				</div>
				<div class="component-area">
					<div class="component-box component__search">
						<form>
							<div class="input-box">
								<input type="text" class="input" value="작성자" readonly />
							</div>
							<div class="input-term">
								<div class="input-box input-box-icon">
									<input class="input input-icon" type="text" placeholder="신청일자" />
									<span class="icon icon-calendar"></span>
								</div>
							</div>
							<div class="input-box">
								<input type="text" class="input" placeholder="신청번호" readonly />
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
									<th>No.</th>
									<th>정산상태</th>
									<th>정산번호</th>
									<th>카드번호</th>
									<th>일자</th>
									<th>시간</th>
									<th>가맹점</th>
									<th>비용-중분류</th>
									<th>비용-소분류</th>
									<th>승인금액</th>
									<th>부가세 별도</th>
									<th>공급가액</th>
									<th>부가세</th>
								</tr>
							</thead>
							<tbody>
								<tr class="row">
									<td>1</td>
									<td>
										<div class="lst-status opt1">
											<span class="opt1__txt opt__txt">미정산</span>
											<span class="opt2__txt opt__txt">정산처리</span>
											<span class="opt3__txt opt__txt">승인요청</span>
											<span class="opt4__txt opt__txt">승인완료</span>
											<span class="opt5__txt opt__txt">전표완료</span>
										</div>
									</td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
								</tr>
								<tr class="row">
									<td>2</td>
									<td>
										<div class="lst-status opt2">
											<span class="opt1__txt opt__txt">미정산</span>
											<span class="opt2__txt opt__txt">정산처리</span>
											<span class="opt3__txt opt__txt">승인요청</span>
											<span class="opt4__txt opt__txt">승인완료</span>
											<span class="opt5__txt opt__txt">전표완료</span>
										</div>
									</td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
								</tr>
							</tbody>
						</table>
					</div>
					<div class="buttons-complete">
						<div class="buttons">
							<button type="submit" class="button button__save">등록</button>
							<button type="button" class="button button__delete">삭제</button>
							<button type="button" class="button button__back">이전페이지</button>
							<button type="submit" class="button button__approval">승인요청</button>
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

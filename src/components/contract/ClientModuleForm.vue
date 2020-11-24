<template>
	<div class="container admin-container">
		<section class="section__list">
			<h4 class="section-title">
				<span>고객사 현황</span>
			</h4>
			<div class="lst-wrap">
				<div class="input-box">
					<input class="input " type="text" placeholder="입력하세요" />
					<button type="button" class="button">
						<span class="icon icon-search"></span>
						조회
					</button>
				</div>
				<div class="table-wrap">
					<table class="table table-hover">
						<thead>
							<tr>
								<th>No.</th>
								<th>고객사명</th>
								<th>사업자번호</th>
								<th>계약기간</th>
								<th>계약해지</th>
							</tr>
						</thead>
						<tbody>
							<tr class="row">
								<td>1</td>
								<td>고객사1</td>
								<td>123-45-67890</td>
								<td>2020-01-01 ~ 2020-12-31</td>
								<td>
									<button type="button" class="button-state">
										<span class="button-txt button-txt__true on">계약중</span>
										<span class="button-txt button-txt__false">계약해지</span>
									</button>
								</td>
							</tr>
							<tr class="row">
								<td>2</td>
								<td>고객사2</td>
								<td>123-45-67890</td>
								<td>2020-01-01 ~ 2020-12-31</td>
								<td>
									<button type="button" class="button-state">
										<span class="button-txt button-txt__true on">계약중</span>
										<span class="button-txt button-txt__false">계약해지</span>
									</button>
								</td>
							</tr>
							<tr class="row">
								<td>3</td>
								<td>고객사3</td>
								<td>123-45-67890</td>
								<td>2020-01-01 ~ 2020-12-31</td>
								<td>
									<button type="button" class="button-state">
										<span class="button-txt button-txt__true">계약중</span>
										<span class="button-txt button-txt__false on">계약해지</span>
									</button>
								</td>
							</tr>
							<tr class="row">
								<td>4</td>
								<td>고객사4</td>
								<td>123-45-67890</td>
								<td>2020-01-01 ~ 2020-12-31</td>
								<td>
									<button type="button" class="button-state">
										<span class="button-txt button-txt__true on">계약중</span>
										<span class="button-txt button-txt__false">계약해지</span>
									</button>
								</td>
							</tr>
							<tr class="row">
								<td>5</td>
								<td>고객사5</td>
								<td>123-45-67890</td>
								<td>2020-01-01 ~ 2020-12-31</td>
								<td>
									<button type="button" class="button-state">
										<span class="button-txt button-txt__true">계약중</span>
										<span class="button-txt button-txt__false on">계약해지</span>
									</button>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</section>
		<section class="section__contents">
			<div class="inner-wrap">
				<div class="section-top">
					<h3 class="section-title">고객사 모듈 등록</h3>
				</div>
				<article class="article">
					<div class="article-top">
						<strong class="content-title">
							고객사명
						</strong>
					</div>
					<div class="article-content">
						<div class="table-wrap">
							<table class="table table-hover">
								<thead>
									<tr>
										<th>No.</th>
										<th>모듈명</th>
										<th>사용여부</th>
									</tr>
								</thead>
								<tbody>
									<tr class="row">
										<td>1</td>
										<td>유연근무</td>
										<td>
											<button type="button" class="button-state">
												<span class="button-txt button-txt__true on">사용</span>
												<span class="button-txt button-txt__false">미사용</span>
											</button>
										</td>
									</tr>
									<tr class="row">
										<td>2</td>
										<td>영업CRM</td>
										<td>
											<button type="button" class="button-state">
												<span class="button-txt button-txt__true on">사용</span>
												<span class="button-txt button-txt__false">미사용</span>
											</button>
										</td>
									</tr>
									<tr class="row">
										<td>3</td>
										<td>비용정산</td>
										<td>
											<button type="button" class="button-state">
												<span class="button-txt button-txt__true">사용</span>
												<span class="button-txt button-txt__false on">미사용</span>
											</button>
										</td>
									</tr>
									<tr class="row">
										<td>4</td>
										<td>WEB 주문</td>
										<td>
											<button type="button" class="button-state">
												<span class="button-txt button-txt__true">사용</span>
												<span class="button-txt button-txt__false on">미사용</span>
											</button>
										</td>
									</tr>
									<tr class="row">
										<td>5</td>
										<td>구매 SCM</td>
										<td>
											<button type="button" class="button-state">
												<span class="button-txt button-txt__true">사용</span>
												<span class="button-txt button-txt__false on">미사용</span>
											</button>
										</td>
									</tr>
									<tr class="row">
										<td>6</td>
										<td>EIS</td>
										<td>
											<button type="button" class="button-state">
												<span class="button-txt button-txt__true on">사용</span>
												<span class="button-txt button-txt__false">미사용</span>
											</button>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</article>
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
export default {};
</script>

<style></style>

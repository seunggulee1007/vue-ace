<template>
	<div class="container admin-container">
		<section class="section__tree">
			<h4 class="section-title">
				<span>시스템 코드</span>
			</h4>
			<div class="tree-area">
				<ul class="tree-container tree__module">
					<li class="tree-item">
						<a href="#" class="tree-item__link">
							<span class="icon-tree"></span>
							영업CRM
						</a>
					</li>
					<li class="tree-item on">
						<a href="#" class="tree-item__link">
							<span class="icon-tree"></span>
							유연근무
						</a>
						<ul class="tree-sub-container">
							<li class="tree-item">
								<a href="#" class="tree-item__link tree-item__no-icon">
									<span class="icon-tree"></span>
									유연근무유형
								</a>
							</li>
							<li class="tree-item">
								<a href="#" class="tree-item__link tree-item__no-icon">
									<span class="icon-tree"></span>
									근태관리
								</a>
							</li>
							<li class="tree-item">
								<a href="#" class="tree-item__link tree-item__no-icon">
									<span class="icon-tree"></span>
									승인처리
								</a>
							</li>
						</ul>
					</li>
					<li class="tree-item">
						<a href="#" class="tree-item__link">
							<span class="icon-tree"></span>
							비용정산
						</a>
					</li>
					<li class="tree-item">
						<a href="#" class="tree-item__link">
							<span class="icon-tree"></span>
							WEB주문
						</a>
					</li>
					<li class="tree-item">
						<a href="#" class="tree-item__link">
							<span class="icon-tree"></span>
							구매SCM
						</a>
					</li>
					<li class="tree-item">
						<a href="#" class="tree-item__link">
							<span class="icon-tree"></span>
							EIS
						</a>
					</li>
				</ul>
			</div>
		</section>
		<section class="section__contents">
			<div class="inner-wrap">
				<div class="section-top">
					<h3 class="section-title">시스템 코드 등록</h3>
					<div class="buttons">
						<button type="button" class="button button__add">
							<span class="icon icon-add"></span>
							상위코드 추가
						</button>
						<button type="button" class="button button__delete">
							<span class="icon icon-delete"></span>선택 삭제
						</button>
					</div>
				</div>
				<div class="articles-wrap lst-cards lst-modules lst-depts">
					<article class="article lst-module__item">
						<div class="article-top">
							<div class="input-box">
								<span class="input-checkbox">
									<input type="checkbox" id="checkboxCheck1" />
									<label for="checkboxCheck1" class="input-checkbox__label icon-checkbox-purple">
										<span class="content-title">유연근무</span>
									</label>
								</span>
							</div>
							<button type="button" class="button button__add">
								<span class="icon icon-add"></span>
								하위코드 추가
							</button>
						</div>
						<div class="article-content">
							<div class="table-wrap lst-card-sub">
								<table class="table table-hover">
									<thead>
										<tr>
											<th class="column-check">
												<div class="input-box">
													<span class="input-checkbox">
														<input type="checkbox" id="checkboxSelectAll1" />
														<label
															for="checkboxSelectAll1"
															class="input-checkbox__label icon-checkbox-purple"
														>
															<span class="blind">선택</span>
														</label>
													</span>
												</div>
											</th>
											<th>코드명</th>
											<th>내부코드</th>
										</tr>
									</thead>
									<tbody>
										<tr class="row">
											<td class="column-check">
												<div class="input-box">
													<span class="input-checkbox">
														<input type="checkbox" id="checkboxSelect1-1" />
														<label
															for="checkboxSelect1-1"
															class="input-checkbox__label icon-checkbox-purple"
														>
															<span class="blind">선택</span>
														</label>
													</span>
												</div>
											</td>
											<td>유연근무유형</td>
											<td>20190101</td>
										</tr>
										<tr class="row">
											<td class="column-check">
												<div class="input-box">
													<span class="input-checkbox">
														<input type="checkbox" id="checkboxSelect1-2" />
														<label
															for="checkboxSelect1-2"
															class="input-checkbox__label icon-checkbox-purple"
														>
															<span class="blind">선택</span>
														</label>
													</span>
												</div>
											</td>
											<td>근태관리</td>
											<td>20190201</td>
										</tr>
										<tr class="row">
											<td class="column-check">
												<div class="input-box">
													<span class="input-checkbox">
														<input type="checkbox" id="checkboxSelect1-3" />
														<label
															for="checkboxSelect1-3"
															class="input-checkbox__label icon-checkbox-purple"
														>
															<span class="blind">선택</span>
														</label>
													</span>
												</div>
											</td>
											<td>승인처리</td>
											<td>20190301</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</article>
					<article class="article lst-module__item">
						<div class="article-top">
							<div class="input-box">
								<span class="input-checkbox">
									<input type="checkbox" id="checkboxCheck2" />
									<label for="checkboxCheck2" class="input-checkbox__label icon-checkbox-purple">
										<span class="content-title">영업CRM</span>
									</label>
								</span>
							</div>
							<button type="button" class="button button__add">
								<span class="icon icon-add"></span>
								하위코드 추가
							</button>
						</div>
						<div class="article-content">
							<div class="table-wrap lst-card-sub">
								<table class="table table-hover">
									<thead>
										<tr>
											<th class="column-check">
												<div class="input-box">
													<span class="input-checkbox">
														<input type="checkbox" id="checkboxSelectAll2" />
														<label
															for="checkboxSelectAll2"
															class="input-checkbox__label icon-checkbox-purple"
														>
															<span class="blind">선택</span>
														</label>
													</span>
												</div>
											</th>
											<th>코드명</th>
											<th>내부코드</th>
										</tr>
									</thead>
									<tbody>
										<tr class="row">
											<td class="column-check">
												<div class="input-box">
													<span class="input-checkbox">
														<input type="checkbox" id="checkboxSelect2-1" />
														<label
															for="checkboxSelect2-1"
															class="input-checkbox__label icon-checkbox-purple"
														>
															<span class="blind">선택</span>
														</label>
													</span>
												</div>
											</td>
											<td>거래처 등록</td>
											<td>20190101</td>
										</tr>
										<tr class="row">
											<td class="column-check">
												<div class="input-box">
													<span class="input-checkbox">
														<input type="checkbox" id="checkboxSelect2-2" />
														<label
															for="checkboxSelect2-2"
															class="input-checkbox__label icon-checkbox-purple"
														>
															<span class="blind">선택</span>
														</label>
													</span>
												</div>
											</td>
											<td>거래처 조회</td>
											<td>20190201</td>
										</tr>
										<tr class="row">
											<td class="column-check">
												<div class="input-box">
													<span class="input-checkbox">
														<input type="checkbox" id="checkboxSelect2-3" />
														<label
															for="checkboxSelect2-3"
															class="input-checkbox__label icon-checkbox-purple"
														>
															<span class="blind">선택</span>
														</label>
													</span>
												</div>
											</td>
											<td>영업기회 등록</td>
											<td>20190301</td>
										</tr>
										<tr class="row">
											<td class="column-check">
												<div class="input-box">
													<span class="input-checkbox">
														<input type="checkbox" id="checkboxSelect2-4" />
														<label
															for="checkboxSelect2-4"
															class="input-checkbox__label icon-checkbox-purple"
														>
															<span class="blind">선택</span>
														</label>
													</span>
												</div>
											</td>
											<td>영업기회 현황</td>
											<td>20190401</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</article>
				</div>
				<div class="buttons-complete">
					<div class="buttons">
						<button type="submit" class="button button__save">저장</button>
						<button type="button" class="button button__cancel">취소</button>
						<button type="button" class="button button__temp-save">임시저장</button>
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

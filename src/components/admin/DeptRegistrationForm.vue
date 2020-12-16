<template>
	<div class="container admin-container">
		<section class="section__tree">
			<h4 class="section__title">
				<span>조직도</span>
			</h4>
			<div class="tree-area">
				<!-- tree menu -->
			</div>
		</section>
		<section class="section__contents">
			<div class="inner-wrap">
				<div class="section-top">
					<h3 class="section__title">부서 등록</h3>
					<div class="buttons">
						<button type="button" class="button button__add">
							<span class="icon icon-add"></span>
							상위부서 추가
						</button>
						<button type="button" class="button button__delete">
							<span class="icon icon-delete"></span>선택 삭제
						</button>
					</div>
				</div>
				<div class="component-area-wrap lst-cards lst-cards__2colums">
					<div class="component-area">
						<div class="component-box component-box-top">
							<div class="input-box">
								<span class="input-checkbox">
									<input type="checkbox" id="checkboxCheck1" />
									<label for="checkboxCheck1" class="input-checkbox__label icon-checkbox-purple">
										<span class="content__title">컨설팅 본부</span>
									</label>
								</span>
							</div>
							<button type="button" class="button button__add">
								<span class="icon icon-add"></span>
								하위부서 추가
							</button>
						</div>
						<div class="table-wrap">
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
										<th>부서명</th>
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
										<td>고객전략 및 마케팅</td>
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
										<td>M&A</td>
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
										<td>기업금융</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<div class="component-area">
						<div class="component-box component-box-top">
							<div class="input-box">
								<span class="input-checkbox">
									<input type="checkbox" id="checkboxCheck2" />
									<label for="checkboxCheck2" class="input-checkbox__label icon-checkbox-purple">
										<span class="content__title">개발 본부</span>
									</label>
								</span>
							</div>
							<button type="button" class="button button__add">
								<span class="icon icon-add"></span>
								하위부서 추가
							</button>
						</div>
						<div class="table-wrap">
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
										<th>부서명</th>
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
										<td>개발1팀</td>
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
										<td>개발2팀</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<div class="component-area">
						<div class="component-box component-box-top">
							<div class="input-box">
								<span class="input-checkbox">
									<input type="checkbox" id="checkboxCheck3" />
									<label for="checkboxCheck3" class="input-checkbox__label icon-checkbox-purple">
										<span class="content__title"
											><input type="text" placeholder="상위부서명"
										/></span>
									</label>
								</span>
							</div>
							<button type="button" class="button button__add">
								<span class="icon icon-add"></span>
								하위부서 추가
							</button>
						</div>
						<div class="table-wrap">
							<table class="table table-hover">
								<thead>
									<tr>
										<th class="column-check">
											<div class="input-box">
												<span class="input-checkbox">
													<input type="checkbox" id="checkboxSelectAll3" />
													<label
														for="checkboxSelectAll3"
														class="input-checkbox__label icon-checkbox-purple"
													>
														<span class="blind">선택</span>
													</label>
												</span>
											</div>
										</th>
										<th>부서명</th>
									</tr>
								</thead>
								<tbody>
									<tr class="row">
										<td class="column-check">
											<div class="input-box">
												<span class="input-checkbox">
													<input type="checkbox" id="checkboxSelect3-1" />
													<label
														for="checkboxSelect3-1"
														class="input-checkbox__label icon-checkbox-purple"
													>
														<span class="blind">선택</span>
													</label>
												</span>
											</div>
										</td>
										<td><input type="text" placeholder="하위부서명을 입력하세요" /></td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
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

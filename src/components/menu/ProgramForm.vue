<template>
	<div class="container admin-container">
		<section class="section__tree">
			<h4 class="section-title">
				<span>모듈</span>
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
					<h3 class="section-title">프로그램 등록</h3>
				</div>
				<article class="article">
					<div class="article-content">
						<div class="table-wrap">
							<table class="table table-hover">
								<thead>
									<tr class="row">
										<th>
											<div class="input-box">
												<span class="input-checkbox">
													<input type="checkbox" id="checkboxSelectAll1" />
													<label for="checkboxSelectAll1" class="input-checkbox__label">
														<span class="blind">선택</span>
													</label>
												</span>
											</div>
											<!-- <label class="form-checkbox">
														<input type="checkbox" v-model="selectAll" @click="select">
														<i class="form-icon"></i>
													</label> -->
										</th>
										<th>No.</th>
										<th>상위모듈</th>
										<th>하위모듈</th>
										<th>프로그램명</th>
										<th>사용유무</th>
										<th>비고</th>
										<th>등록일자</th>
										<th>URL</th>
									</tr>
								</thead>
								<tbody>
									<tr class="row">
										<td class="column-check">
											<div class="input-box">
												<span class="input-checkbox">
													<input type="checkbox" id="checkboxSelect1" />
													<label for="checkboxSelect1" class="input-checkbox__label">
														<span class="blind">선택</span>
													</label>
												</span>
											</div>
											<!-- <label class="form-checkbox">
															<input type="checkbox" :value="i.id" v-model="selected">
															<i class="form-icon"></i>
														</label> -->
										</td>
										<td>1</td>
										<td>유연근무</td>
										<td>유연근무유형</td>
										<td>유연근무 등록</td>
										<td>
											<button type="button" class="button-state">
												<span class="button-txt button-txt__true on">사용</span>
												<span class="button-txt button-txt__false">미사용</span>
											</button>
										</td>
										<td></td>
										<td>20200101</td>
										<td>URL</td>
									</tr>
									<tr class="row">
										<td class="column-check">
											<div class="input-box">
												<span class="input-checkbox">
													<input type="checkbox" id="checkboxSelect2" />
													<label for="checkboxSelect2" class="input-checkbox__label">
														<span class="blind">선택</span>
													</label>
												</span>
											</div>
											<!-- <label class="form-checkbox">
															<input type="checkbox" :value="i.id" v-model="selected">
															<i class="form-icon"></i>
														</label> -->
										</td>
										<td>2</td>
										<td>유연근무</td>
										<td>유연근무유형</td>
										<td>유연근무 조회</td>
										<td>
											<button type="button" class="button-state">
												<span class="button-txt button-txt__true on">사용</span>
												<span class="button-txt button-txt__false">미사용</span>
											</button>
										</td>
										<td></td>
										<td>20200102</td>
										<td>URL</td>
									</tr>
									<tr class="row">
										<td class="column-check">
											<div class="input-box">
												<span class="input-checkbox">
													<input type="checkbox" id="checkboxSelect3" />
													<label for="checkboxSelect3" class="input-checkbox__label">
														<span class="blind">선택</span>
													</label>
												</span>
											</div>
											<!-- <label class="form-checkbox">
															<input type="checkbox" :value="i.id" v-model="selected">
															<i class="form-icon"></i>
														</label> -->
										</td>
										<td>3</td>
										<td>유연근무</td>
										<td>유연근무유형</td>
										<td>프로그램명</td>
										<td>
											<button type="button" class="button-state">
												<span class="button-txt button-txt__true">사용</span>
												<span class="button-txt button-txt__false on">미사용</span>
											</button>
										</td>
										<td></td>
										<td>20200103</td>
										<td>URL</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</article>
				<div class="buttons-complete">
					<div class="buttons">
						<button type="submit" class="button button__save">저장</button>
						<button type="button" class="button button__temp-save">임시저장</button>
						<button type="button" class="button button__delete">선택삭제</button>
						<button type="button" class="button button__cancel">취소</button>
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

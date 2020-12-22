<template>
	<div class="container admin-container">
		<section class="section__tree">
			<h4 class="section__title">
				<span>권한그룹</span>
			</h4>
			<div class="tree-area">
				<!-- tree menu -->
			</div>
		</section>
		<section class="section__contents">
			<div class="inner-wrap">
				<div class="section-top">
					<h3 class="section__title">권한그룹 등록</h3>
				</div>
				<div class="component-area">
					<div class="component-box">
						<div class="component-box-top">
							<p class="component__title">그룹명</p>
							<div class="input-box">
								<span class="input-checkbox">
									<input type="checkbox" id="checkboxNotUse" />
									<label for="checkboxNotUse" class="input-checkbox__label  icon-checkbox-purple">
										<span>미 사용 시, 체크하세요</span>
									</label>
								</span>
							</div>
						</div>
						<div class="input-box">
							<input class="input" type="text" placeholder="입력하세요" />
							<button type="button" class="button">
								<span class="icon icon-check"></span>
								중복확인
							</button>
						</div>
						<p class="msg-state">중복입니다</p>
					</div>
					<div class="component-box">
						<div class="component-box-top">
							<p class="component__title">그룹코드</p>
						</div>
						<div class="input-box">
							<input class="input " type="text" placeholder="저장 시, 자동 생성" readonly />
						</div>
					</div>
					<div class="component-box">
						<div class="component-box component-box-top">
							<p class="component__title">대상자</p>
							<div class="buttons">
								<button type="button" class="button button__add">
									<span class="icon icon-add"></span>사원 추가
								</button>
								<button type="button" class="button button__delete">
									<span class="icon icon-delete"></span>선택 삭제
								</button>
							</div>
						</div>
						<div class="table-wrap">
							<table class="table table-hover">
								<thead>
									<tr class="row">
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
											<!-- <label class="form-checkbox">
														<input type="checkbox" v-model="selectAll" @click="select">
														<i class="form-icon"></i>
													</label> -->
										</th>
										<th>No.</th>
										<th>부서명</th>
										<th>사원명</th>
										<th>재직여부</th>
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
											<!-- <label class="form-checkbox">
															<input type="checkbox" :value="i.id" v-model="selected">
															<i class="form-icon"></i>
														</label> -->
										</td>
										<td>1</td>
										<td>컨설팅본부</td>
										<td>홍길동 차장</td>
										<td>재직</td>
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
										<td>2</td>
										<td>컨설팅본부</td>
										<td>최수현 과장</td>
										<td>재직</td>
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
										<td>3</td>
										<td>컨설팅본부</td>
										<td>김우중 대리</td>
										<td>재직</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<div class="component-box">
						<div class="component-box-top">
							<p class="component__title">등록일자</p>
						</div>
						<div class="input-box">
							<input class="input" type="text" placeholder="저장 시, 자동 생성" readonly />
						</div>
					</div>
				</div>
				<div class="buttons-complete">
					<div class="buttons">
						<button type="submit" class="button button__save">등록</button>
					</div>
				</div>
			</div>
		</section>

		<!-- popup -->
		<div class="popup popup__tree popup__lst-user">
			<div class="component-area">
				<div class="inner-wrap">
					<div class="popup-top">
						<strong class="popup__title">사원 정보</strong>
					</div>
					<div class="popup-contents">
						<form action="">
							<div class="input-box">
								<input type="text" class="input" placeholder="사원명을 입력하세요" />
								<button class="button button__search">조회</button>
							</div>
						</form>
						<div class="component-box-wrap">
							<div class="component-box">
								<div class="tree-area">
									<el-tree
										:data="treeData"
										node-key="deptId"
										:default-expanded-keys="[0]"
										:props="defaultProps"
										accordion
										@node-click="choiceDept"
									>
									</el-tree>
								</div>
							</div>
							<div class="component-box search-result-box">
								<div class="component-box-top">
									<p class="component__title">검색 결과</p>
								</div>
								<div class="component-box-cnt">
									<ul class="lst-search-result">
										<li class="lst-search__item">
											<span class="item__user-name">김정환 차장</span>
											<span class="item__user-dept">개발1팀</span>
										</li>
										<li class="lst-search__item">
											<span class="item__user-name">최수현 과장</span>
											<span class="item__user-dept">개발1팀</span>
										</li>
										<li class="lst-search__item">
											<span class="item__user-name">김우중 대리</span>
											<span class="item__user-dept">개발1팀</span>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				<button type="button" class="button__close" @click="closeModal">
					<span class="icon icon-close"></span>
					<span class="blind">닫기</span>
				</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style></style>

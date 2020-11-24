<template>
	<div class="container admin-container">
		<section class="section__tree">
			<h4 class="section-title">
				<span>조직도</span>
			</h4>
			<div class="tree-area">
				<ul class="tree-container tree__module">
					<li class="tree-item on">
						<a href="#" class="tree-item__link">
							<span class="icon-tree"></span>
							컨설팅 본부
						</a>
						<ul class="tree-sub-container">
							<li class="tree-item">
								<a href="#" class="tree-item__link tree-item__no-icon">
									<span class="icon-tree"></span>
									고객전략 및 마케팅
								</a>
							</li>
							<li class="tree-item">
								<a href="#" class="tree-item__link tree-item__no-icon">
									<span class="icon-tree"></span>
									M&A
								</a>
							</li>
							<li class="tree-item">
								<a href="#" class="tree-item__link tree-item__no-icon">
									<span class="icon-tree"></span>
									기업금융
								</a>
							</li>
						</ul>
					</li>
					<li class="tree-item">
						<a href="#" class="tree-item__link">
							<span class="icon-tree"></span>
							개발 본부
						</a>
					</li>
					<li class="tree-item">
						<a href="#" class="tree-item__link">
							<span class="icon-tree"></span>
							경영관리 본부
						</a>
					</li>
					<li class="tree-item">
						<a href="#" class="tree-item__link">
							<span class="icon-tree"></span>
							영업 사업부
						</a>
					</li>
				</ul>
			</div>
		</section>
		<section class="section__contents">
			<div class="inner-wrap">
				<div class="section-top">
					<h3 class="section-title">사용자 등록</h3>
					<div class="buttons">
						<button type="button" class="button button__add">
							<span class="icon icon-add"></span>사용자 추가
						</button>
						<button type="button" class="button button__delete">
							<span class="icon icon-delete"></span>선택 삭제
						</button>
					</div>
				</div>

				<article class="article lst-user">
					<div class="article-top">
						<strong class="content-title">
							컨설팅 본부
						</strong>
					</div>
					<div class="article-content">
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
											<!-- <label class="form-checkbox">
														<input type="checkbox" v-model="selectAll" @click="select">
														<i class="form-icon"></i>
													</label> -->
										</th>
										<th>No.</th>
										<th>부서명</th>
										<th>사원명</th>
										<th>사원번호</th>
										<th>휴대폰번호</th>
										<th>Email</th>
										<th>직위</th>
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
										<td>
											<div class="user-name">
												<div class="img-user">
													<img src="images/sample1.jpeg" alt="" />
												</div>
												<p>홍길동</p>
											</div>
										</td>
										<td>20190101</td>
										<td>010-0000-0000</td>
										<td>abcde123@inno-soft.co.kr</td>
										<td>
											<select name="" id="">
												<option value="사원">사원</option>
												<option value="주임">주임</option>
												<option value="대리">대리</option>
												<option value="과장">과장</option>
												<option value="차장" selected>차장</option>
											</select>
										</td>
										<td>
											<select name="" id="">
												<option value="재직" selected>재직</option>
												<option value="휴직">휴직</option>
												<option value="퇴직">퇴직</option>
											</select>
										</td>
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
										<td>
											<div class="user-name">
												<div class="img-user">
													<img src="images/sample2.jpeg" alt="" />
												</div>
												<p>최수현</p>
											</div>
										</td>
										<td>20190101</td>
										<td>010-0000-0000</td>
										<td>fgin2@inno-soft.co.kr</td>
										<td>
											<select name="" id="">
												<option value="사원">사원</option>
												<option value="주임">주임</option>
												<option value="대리">대리</option>
												<option value="과장" selected>과장</option>
												<option value="차장">차장</option>
											</select>
										</td>
										<td>
											<select name="" id="">
												<option value="재직" selected>재직</option>
												<option value="휴직">휴직</option>
												<option value="퇴직">퇴직</option>
											</select>
										</td>
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
										<td>
											<div class="user-name">
												<div class="img-user">
													<img src="images/sample3.jpeg" alt="" />
												</div>
												<p>김우중</p>
											</div>
										</td>
										<td>20190101</td>
										<td>010-0000-0000</td>
										<td>123456x@inno-soft.co.kr</td>
										<td>
											<select name="" id="">
												<option value="사원">사원</option>
												<option value="주임">주임</option>
												<option value="대리" selected>대리</option>
												<option value="과장">과장</option>
												<option value="차장">차장</option>
											</select>
										</td>
										<td>
											<select name="" id="">
												<option value="재직" selected>재직</option>
												<option value="휴직">휴직</option>
												<option value="퇴직">퇴직</option>
											</select>
										</td>
									</tr>
									<tr class="row">
										<td class="column-check">
											<div class="input-box">
												<span class="input-checkbox">
													<input type="checkbox" id="checkboxSelect4" />
													<label
														for="checkboxSelect4"
														class="input-checkbox__label icon-checkbox-purple"
													>
														<span class="blind">선택</span>
													</label>
												</span>
											</div>
										</td>
										<td>4</td>
										<td>컨설팅본부</td>
										<td>
											<div class="user-name">
												<div class="img-user">
													<img src="images/sample1.jpeg" alt="" />
												</div>
												<p>홍길동</p>
											</div>
										</td>
										<td>20190401</td>
										<td>010-0000-0000</td>
										<td>abcde123@inno-soft.co.kr</td>
										<td>
											<select name="" id="">
												<option value="사원">사원</option>
												<option value="주임">주임</option>
												<option value="대리">대리</option>
												<option value="과장">과장</option>
												<option value="차장" selected>차장</option>
											</select>
										</td>
										<td>
											<select name="" id="">
												<option value="재직" selected>재직</option>
												<option value="휴직">휴직</option>
												<option value="퇴직">퇴직</option>
											</select>
										</td>
									</tr>
									<tr class="row">
										<td class="column-check">
											<div class="input-box">
												<span class="input-checkbox">
													<input type="checkbox" id="checkboxSelect5" />
													<label
														for="checkboxSelect5"
														class="input-checkbox__label icon-checkbox-purple"
													>
														<span class="blind">선택</span>
													</label>
												</span>
											</div>
										</td>
										<td>5</td>
										<td>컨설팅본부</td>
										<td>
											<div class="user-name">
												<div class="img-user">
													<img src="images/sample2.jpeg" alt="" />
												</div>
												<p>최수현</p>
											</div>
										</td>
										<td>20190501</td>
										<td>010-0000-0000</td>
										<td>fgin2@inno-soft.co.kr</td>
										<td>
											<select name="" id="">
												<option value="사원">사원</option>
												<option value="주임">주임</option>
												<option value="대리">대리</option>
												<option value="과장" selected>과장</option>
												<option value="차장">차장</option>
											</select>
										</td>
										<td>
											<select name="" id="">
												<option value="재직" selected>재직</option>
												<option value="휴직">휴직</option>
												<option value="퇴직">퇴직</option>
											</select>
										</td>
									</tr>
									<tr class="row">
										<td class="column-check">
											<div class="input-box">
												<span class="input-checkbox">
													<input type="checkbox" id="checkboxSelect6" />
													<label
														for="checkboxSelect6"
														class="input-checkbox__label icon-checkbox-purple"
													>
														<span class="blind">선택</span>
													</label>
												</span>
											</div>
										</td>
										<td>6</td>
										<td>컨설팅본부</td>
										<td>
											<div class="user-name">
												<div class="img-user">
													<img src="images/sample3.jpeg" alt="" />
												</div>
												<p>김우중</p>
											</div>
										</td>
										<td>20190601</td>
										<td>010-0000-0000</td>
										<td>123456x@inno-soft.co.kr</td>
										<td>
											<select name="" id="">
												<option value="사원">사원</option>
												<option value="주임">주임</option>
												<option value="대리" selected>대리</option>
												<option value="과장">과장</option>
												<option value="차장">차장</option>
											</select>
										</td>
										<td>
											<select name="" id="">
												<option value="재직" selected>재직</option>
												<option value="휴직">휴직</option>
												<option value="퇴직">퇴직</option>
											</select>
										</td>
									</tr>
									<tr class="row">
										<td class="column-check">
											<div class="input-box">
												<span class="input-checkbox">
													<input type="checkbox" id="checkboxSelect7" />
													<label
														for="checkboxSelect7"
														class="input-checkbox__label icon-checkbox-purple"
													>
														<span class="blind">선택</span>
													</label>
												</span>
											</div>
										</td>
										<td>7</td>
										<td>컨설팅본부</td>
										<td>
											<div class="user-name">
												<div class="img-user">
													<img src="images/sample1.jpeg" alt="" />
												</div>
												<p>홍길동</p>
											</div>
										</td>
										<td>20190701</td>
										<td>010-0000-0000</td>
										<td>abcde123@inno-soft.co.kr</td>
										<td>
											<select name="" id="">
												<option value="사원">사원</option>
												<option value="주임">주임</option>
												<option value="대리">대리</option>
												<option value="과장">과장</option>
												<option value="차장" selected>차장</option>
											</select>
										</td>
										<td>
											<select name="" id="">
												<option value="재직" selected>재직</option>
												<option value="휴직">휴직</option>
												<option value="퇴직">퇴직</option>
											</select>
										</td>
									</tr>
									<tr class="row">
										<td class="column-check">
											<div class="input-box">
												<span class="input-checkbox">
													<input type="checkbox" id="checkboxSelect8" />
													<label
														for="checkboxSelect8"
														class="input-checkbox__label icon-checkbox-purple"
													>
														<span class="blind">선택</span>
													</label>
												</span>
											</div>
										</td>
										<td>8</td>
										<td>컨설팅본부</td>
										<td>
											<div class="user-name">
												<div class="img-user">
													<img src="images/sample2.jpeg" alt="" />
												</div>
												<p>최수현</p>
											</div>
										</td>
										<td>20190801</td>
										<td>010-0000-0000</td>
										<td>fgin2@inno-soft.co.kr</td>
										<td>
											<select name="" id="">
												<option value="사원">사원</option>
												<option value="주임">주임</option>
												<option value="대리">대리</option>
												<option value="과장" selected>과장</option>
												<option value="차장">차장</option>
											</select>
										</td>
										<td>
											<select name="" id="">
												<option value="재직" selected>재직</option>
												<option value="휴직">휴직</option>
												<option value="퇴직">퇴직</option>
											</select>
										</td>
									</tr>
									<tr class="row">
										<td class="column-check">
											<div class="input-box">
												<span class="input-checkbox">
													<input type="checkbox" id="checkboxSelect9" />
													<label
														for="checkboxSelect9"
														class="input-checkbox__label icon-checkbox-purple"
													>
														<span class="blind">선택</span>
													</label>
												</span>
											</div>
										</td>
										<td>9</td>
										<td>컨설팅본부</td>
										<td>
											<div class="user-name">
												<div class="img-user">
													<img src="images/sample3.jpeg" alt="" />
												</div>
												<p>김우중</p>
											</div>
										</td>
										<td>20190901</td>
										<td>010-0000-0000</td>
										<td>123456x@inno-soft.co.kr</td>
										<td>
											<select name="" id="">
												<option value="사원">사원</option>
												<option value="주임">주임</option>
												<option value="대리" selected>대리</option>
												<option value="과장">과장</option>
												<option value="차장">차장</option>
											</select>
										</td>
										<td>
											<select name="" id="">
												<option value="재직" selected>재직</option>
												<option value="휴직">휴직</option>
												<option value="퇴직">퇴직</option>
											</select>
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

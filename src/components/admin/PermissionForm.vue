<template>
	<div class="container admin-container">
		<section class="section__tree">
			<h4 class="section__title">
				<span>메뉴</span>
			</h4>
			<div class="tree-area">
				<!-- tree menu -->
			</div>
		</section>
		<section class="section__contents">
			<div class="inner-wrap">
				<div class="section-top">
					<h3 class="section__title">권한 등록</h3>
				</div>
				<div class="component-area lst-user">
					<div class="table-wrap">
						<table class="table">
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
									</th>
									<th>No.</th>
									<th>프로그램ID</th>
									<th>프로그램명</th>
									<th>프로그램ID</th>
									<th>권한그룹#1</th>
									<th>권한그룹#2</th>
									<th>권한그룹#3</th>
									<th>권한그룹#4</th>
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
									<td>프로그램ID</td>
									<td>프로그램명</td>
									<td>프로그램ID</td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
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
									<td>프로그램ID</td>
									<td>프로그램명</td>
									<td>프로그램ID</td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
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
									<td>프로그램ID</td>
									<td>프로그램명</td>
									<td>프로그램ID</td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="buttons-complete">
					<div class="buttons">
						<button type="submit" class="button button__save">저장</button>
						<button type="button" class="button button__delete">선택삭제</button>
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

<template>
	<div class="container admin-container">
		<section class="section__tree">
			<h4 class="section__title">
				<span>메뉴</span>
			</h4>
			<div class="tree-area">
				<el-tree
					:data="treeData"
					node-key="menuId"
					:default-expanded-keys="[0]"
					:props="defaultProps"
					accordion
					@node-click="choiceMenu"
				>
				</el-tree>
			</div>
		</section>
		<section class="section__contents">
			<div class="inner-wrap">
				<div class="section-top">
					<h3 class="section__title">권한 등록</h3>
				</div>
				<div class="component-area">
					<div class="component-top">
						<strong class="content__title">선택된 메뉴명</strong>
					</div>
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
									<th>권한그룹명</th>
									<th>권한 범위</th>
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
									</td>
									<td>그룹1</td>
									<td>
										<button type="button" class="button button-state button-state__3options opt1">
											<span class="button-txt button-txt__opt1">읽기&쓰기</span>
											<span class="button-txt button-txt__opt2">읽기</span>
											<span class="button-txt button-txt__opt3">권한 없음</span>
										</button>
									</td>
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
									</td>
									<td>그룹2</td>
									<td>
										<button type="button" class="button button-state button-state__3options opt2">
											<span class="button-txt button-txt__opt1">읽기 및 쓰기</span>
											<span class="button-txt button-txt__opt2">읽기 전용</span>
											<span class="button-txt button-txt__opt3">권한 없음</span>
										</button>
									</td>
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
									</td>
									<td>그룹3</td>
									<td>
										<button type="button" class="button button-state button-state__3options opt3">
											<span class="button-txt button-txt__opt1">읽기 및 쓰기</span>
											<span class="button-txt button-txt__opt2">읽기 전용</span>
											<span class="button-txt button-txt__opt3">권한 없음</span>
										</button>
									</td>
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

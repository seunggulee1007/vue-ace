<template>
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
										<div class="input-checkbox">
											<input type="checkbox" id="checkUser1" />
											<label for="checkUser1" class="input-checkbox__label icon-checkbox-purple">
												<span class="item__user-name">김정환 차장</span>
												<span class="item__user-dept">개발1팀</span>
											</label>
										</div>
									</li>
									<li class="lst-search__item">
										<div class="input-checkbox">
											<input type="checkbox" id="checkUser2" />
											<label for="checkUser2" class="input-checkbox__label icon-checkbox-purple">
												<span class="item__user-name">최수현 과장</span>
												<span class="item__user-dept">개발1팀</span>
											</label>
										</div>
									</li>
									<li class="lst-search__item">
										<div class="input-checkbox">
											<input type="checkbox" id="checkUser3" />
											<label for="checkUser3" class="input-checkbox__label icon-checkbox-purple">
												<span class="item__user-name">김우중 대리</span>
												<span class="item__user-dept">개발1팀</span>
											</label>
										</div>
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
</template>

<script>
export default {};
</script>

<style></style>

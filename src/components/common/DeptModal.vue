<template>
	<div class="popup popup__tree popup__lst-dept">
		<div class="component-area">
			<div class="inner-wrap">
				<div class="popup-top">
					<strong class="popup__title">부서 정보</strong>
				</div>
				<div class="popup-contents">
					<form action="">
						<div class="input-box">
							<input type="text" class="input" placeholder="부서명을 입력하세요" />
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
								>
								</el-tree>
							</div>
						</div>
					</div>
				</div>
			</div>
			<button type="button" class="button__close" @click="setDeptModal">
				<span class="icon icon-close"></span>
				<span class="blind">닫기</span>
			</button>
		</div>
	</div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
	methods: {
		...mapMutations(['setDeptModal']),
	},
	data() {
		return {
			defaultProps: {},
		};
	},
};
</script>

<style></style>

<template>
	<div class="container admin-container">
		<section class="section__tree">
			<h4 class="section__title">
				<span>조직도</span>
			</h4>
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
		</section>
		<section class="section__contents">
			<div class="inner-wrap">
				<div class="section-top">
					<h3 class="section__title">사용자 등록</h3>
					<div class="buttons">
						<button type="button" class="button button__add">
							<span class="icon icon-add"></span>사용자 추가
						</button>
						<button type="button" class="button button__delete">
							<span class="icon icon-delete"></span>선택 삭제
						</button>
					</div>
				</div>

				<div class="component-area lst-user">
					<div class="component-box">
						<strong class="content__title">
							컨설팅 본부
						</strong>
					</div>
					<div class="table-wrap">
						<table class="table">
							<thead>
								<tr>
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
									<td></td>
									<td></td>
									<td></td>
									<td></td>
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
						<button type="button" class="button button__cancel">취소</button>
						<button type="button" class="button button__temp-save">임시저장</button>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
import { selectDeptList } from '@/api/admin/dept';
export default {
	created() {
		this.selectDeptList();
	},
	methods: {
		async selectDeptList() {
			let res = await selectDeptList();
			if (res.result == 0) {
				this.treeData = res.data;
				this.treeData.isOpen = true;
			}
		},
	},
	data() {
		return {
			treeData: [],
			defaultProps: {
				children: 'children',
				label: 'deptNm',
			},
		};
	},
};
</script>

<style></style>

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
import { selectDeptList, insertDept, updateDept, moveDept, deleteDept } from '@/api/admin/dept';
export default {
	methods: {
		async selectDeptList() {
			let res = await selectDeptList();
			if (res.result == 0) {
				this.treeData = res.data;
				this.treeData.isOpen = true;
			}
		},
		choiceAll() {
			this.addFlag = false;
			this.deptVO = {};
		},
		async addMenu() {
			this.sConfirm('추가하시겠습니까?', async () => {
				if (!this.deptVO.deptNm) {
					this.sAlert('부서 명을 입력해 주세요.');
					this.$refs.deptNm.focus();
					return;
				}
				let res = await insertDept(this.deptVO);
				if (res.result == 0) {
					this.selectDeptList();
					this.deptVO = res.data;
				}
				this.sAlert(res.resultMsg);
			});
		},
		// 메뉴 선택 이벤트
		choiceDept(data) {
			if (data.deptId == 0) {
				this.parDeptNm = '전체';
				this.deptVO = { menuYn: 1, useYn: 'Y', parDeptId: 0, crtId: this.$store.getters.getUserId };
			} else {
				this.deptVO = JSON.parse(JSON.stringify(data));
				this.choiceDeptNm = data.deptNm;
				this.deptVO.chgId = this.$store.getters.getUserId;
				this.childCnt = this.deptVO.children.length;
				delete this.deptVO.children;
			}
		},
		// 하위 메뉴 추가 버튼 클릭 이벤트
		addSubDept() {
			let parDeptId = this.deptVO.deptId;
			this.parDeptNm = this.deptVO.deptNm;
			this.deptVO = {
				useYn: 'Y',
				parDeptId,
				crtId: this.$store.getters.getUserId,
			};
		},
		modifyDept() {
			this.sConfirm('수정하시겠습니까?', async () => {
				if (!this.deptVO.deptNm) {
					this.sAlert('부서 명을 입력해 주세요.');
					this.$refs.deptNm.focus();
					return;
				}
				this.deptVO.chgId = this.$store.getters.getUserId;
				let res = await updateDept(this.deptVO);
				this.sAlert(res.resultMsg);
				if (res.result == 0) {
					this.selectDeptList();
					this.deptVO = res.data;
				}
			});
		},
		async deleteDept() {
			this.sConfirm('삭제하시겠습니까?\n상위부서인 경우 하위 부서도 함께 삭제됩니다.', async () => {
				let res = await deleteDept(this.deptVO.deptId);
				if (res.result == 0) {
					this.selectDeptList();
					this.deptVO = {
						parDeptId: 0,
						menuYn: 1,
						useYn: 'Y',
						crtId: this.$store.getters.getUserId,
					};
				}
				this.sAlert(res.resultMsg);
			});
		},
		// 최상단으로 순서 변경
		async moveTop() {
			if (this.deptVO.ord == 1) {
				return;
			}
			this.changeOrd(1);
		},
		// 상단으로 변경
		async moveUp() {
			this.changeOrd(2);
		},
		// 하단으로 순서 변경
		async moveDown() {
			this.changeOrd(3);
		},
		// 최하단으로 순서 변경
		moveBottom() {
			if (this.childCnt == this.deptVO.ord) {
				return;
			}
			this.changeOrd(4);
		},
		async changeOrd(gu) {
			let res = await moveDept(gu, this.deptVO.ord, this.deptVO.parDeptId);
			if (res.result == 0) {
				this.deptVO.ord = res.data + 1;
			}
			this.selectDeptList();
		},
	},
	data() {
		return {
			treeData: [],
			parDeptNm: '',
			childCnt: 0,
			choiceDeptNm: '',
			addFlag: false,
			deptVO: {
				parDeptId: 0,
				menuYn: 1,
				useYn: 'Y',
				crtId: this.$store.getters.getUserId,
			},
			defaultProps: {
				children: 'children',
				label: 'name',
			},
		};
	},
};
</script>

<style></style>

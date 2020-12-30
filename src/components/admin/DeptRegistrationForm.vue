<template>
	<div class="container admin-container">
		<section class="section__tree">
			<h4 class="section__title">
				<span>조직도</span>
			</h4>
			<div class="tree-area">
				<!-- tree menu -->
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
					<h3 class="section__title">
						<button type="button" class="button__back">
							<span class="icon icon-prev-page-white"></span>
							<span class="blind">이전페이지</span>
						</button>
						부서 등록
					</h3>
				</div>
				<div class="component-area">
					<div class="component-box component-box-top">
						<h5 class="content__title" v-if="!addFlag && parDeptNm">{{ parDeptNm }}</h5>
						<h5 class="content__title" v-else>
							{{ choiceDeptNm }}
						</h5>
						<button
							type="button"
							class="button button-state__add add"
							@click="addSubDept"
							v-if="deptVO.deptId"
						>
							<span class="icon icon-add"></span>
							하위 부서 추가
						</button>
						<button type="button" class="button button-red-full" disabled v-else>
							하위 부서 등록 중
						</button>
					</div>
					<div class="component-box">
						<div class="component-box-top">
							<p class="component__title">부서 명</p>
						</div>
						<div class="component-box-cnt">
							<div class="input-box">
								<input
									class="input"
									type="text"
									placeholder="입력하세요"
									v-model="deptVO.deptNm"
									ref="deptNm"
								/>
							</div>
						</div>
					</div>

					<div class="component-box" v-if="deptVO.deptId">
						<div class="component-box-top">
							<p class="component__title">순서 변경</p>
						</div>
						<div class="component-box-cnt">
							<div class="buttons">
								<button type="button" class="button button__move-top" @click="moveTop">
									최상단으로 올리기
								</button>
								<button type="button" class="button button__move-up" @click="moveUp">
									한칸 위로 올리기
								</button>
								<button type="button" class="button button__move-down" @click="moveDown">
									한칸 아래로 내리기
								</button>
								<button type="button" class="button button__move-bottom" @click="moveBottom">
									최하단으로 내리기
								</button>
							</div>
						</div>
					</div>
					<div class="component-box">
						<div class="component-box-top">
							<p class="component__title">사용여부</p>
						</div>
						<div class="component-box-cnt">
							<ul class="radio-options">
								<li class="radio-options__item">
									<input
										type="radio"
										name="pageActive"
										value="Y"
										id="pageActiveY"
										class="input input-radio"
										v-model="deptVO.useYn"
									/>
									<label for="pageActiveY">사용</label>
								</li>
								<li class="radio-options__item">
									<input
										type="radio"
										name="pageActive"
										value="N"
										id="pageActiveN"
										class="input input-radio"
										v-model="deptVO.useYn"
									/>
									<label for="pageActiveN">미사용</label>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="buttons-complete">
					<div class="buttons" v-if="deptVO.deptId">
						<button type="button" class="button button__submit" @click="modifyDept">
							수정
						</button>
						<button type="button" class="button" @click="deleteDept">
							삭제
						</button>
					</div>
					<div class="buttons" v-else>
						<button type="button" class="button button__submit" @click="addMenu">
							추가
						</button>
						<button type="button" class="button button__cancel">초기화</button>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
import { selectDeptList, insertDept, updateDept, moveDept, deleteDept } from '@/api/admin/dept';
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
				this.parDeptNm = res.data[0].deptNm;
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
				this.choiceDeptNm = data.deptNm;
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
		// 부서 수정
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
		// 부서 삭제
		async deleteDept() {
			this.sConfirm('삭제하시겠습니까?\n상위부서인 경우 하위 부서도 함께 삭제됩니다.', async () => {
				let res = await deleteDept(this.deptVO.deptId);
				if (res.result == 0) {
					this.selectDeptList();
					this.deptVO = {
						parDeptId: 0,
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
				useYn: 'Y',
				crtId: this.$store.getters.getUserId,
			},
			defaultProps: {
				children: 'children',
				label: 'deptNm',
			},
		};
	},
};
</script>

<style></style>

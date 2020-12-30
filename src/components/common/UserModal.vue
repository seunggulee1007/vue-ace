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
									:data="getTreeData"
									node-key="deptId"
									:default-expanded-keys="[0]"
									:props="defaultProps"
									accordion
									@node-click="choiceDept"
								>
								</el-tree>
							</div>
						</div>
						<div class="search-result-wrap">
							<div class="component-box search-result-box">
								<div class="component-box-top">
									<p class="component__title">검색 결과</p>
								</div>
								<div class="component-box-cnt">
									<ul class="lst-search-result">
										<li class="lst-search__item" v-for="item in userList" :key="item.userId">
											<div class="input-checkbox">
												<input
													type="checkbox"
													:id="item.userId"
													:value="item"
													v-model="checkList"
												/>
												<label
													:for="item.userId"
													class="input-checkbox__label icon-checkbox-purple"
												>
													<span class="item__user-name"
														>{{ item.userNm }} {{ item.rankCdNm }}</span
													>
													<span class="item__user-dept">{{ item.deptNm }}</span>
												</label>
											</div>
										</li>
									</ul>
								</div>
							</div>
							<div class="component-box buttons">
								<button type="button" class="button" @click="addUser">선택 추가</button>
								<button type="button" class="button" @click="deleteUser">선택 제외</button>
							</div>
							<div class="component-box search-result-box">
								<div class="component-box-top">
									<p class="component__title">선택된 사용자</p>
								</div>
								<div class="component-box-cnt">
									<ul class="lst-search-result">
										<li class="lst-search__item" v-for="item in choicedList" :key="item.userId">
											<div class="input-checkbox">
												<input
													type="checkbox"
													:id="`delete${item.userId}`"
													:value="item"
													v-model="deleteList"
												/>
												<label
													:for="`delete${item.userId}`"
													class="input-checkbox__label icon-checkbox-purple"
												>
													<span class="item__user-name"
														>{{ item.userNm }} {{ item.rankCdNm }}</span
													>
													<span class="item__user-dept">{{ item.deptNm }}</span>
												</label>
											</div>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div class="popup-bottom buttons-complete">
						<div class="buttons">
							<button type="submit" class="button button__save" @click="choiceUser">선택</button>
							<button type="button" class="button button__cancel" @click="closeModal">취소</button>
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
import { mapGetters, mapActions } from 'vuex';
import { selectUserList } from '@/api/admin/user';
export default {
	created() {
		this.selectDeptList();
	},
	computed: {
		...mapGetters(['getTreeData']),
	},
	data() {
		return {
			defaultProps: {
				children: 'children',
				label: 'deptNm',
			},
			deptInfo: {
				deptNm: '',
				deptId: 0,
			},
			userList: [],
			deleteList: [],
			choicedList: [],
			checkList: [],
		};
	},
	methods: {
		...mapActions(['DEPTLIST']),
		// 부서리스트 조회
		async selectDeptList() {
			await this.DEPTLIST();
			if (this.getTreeData.length > 0) {
				this.choiceDept(this.getTreeData[0].children[0]);
			}
		},
		async selectUserList() {
			let res = await selectUserList(this.deptInfo.deptId);
			console.log(res);
			if (res.result == 0) {
				this.userList = res.data;
			}
		},
		// 부서 선택
		choiceDept(item) {
			this.deptInfo.deptNm = item.deptNm;
			this.deptInfo.deptId = item.deptId;
			this.selectUserList();
		},
		// 사용자 선택 이벤트
		addUser() {
			if (this.checkList.length == 0) {
				this.sAlert('사용자를 선택해 주세요.');
				return;
			}
			for (let item of this.checkList) {
				if (!this.checkRetain(item.userId)) {
					this.choicedList.push(item);
				}
			}
			this.checkList = [];
		},
		// 사용자 제거 이벤트
		deleteUser() {
			if (this.deleteList.length == 0) {
				this.sAlert('삭제할 사용자를 선택해 주세요.');
				return;
			}
			for (let item of this.deleteList) {
				let idx = this.choicedList.indexOf(item);
				if (idx != -1) {
					this.choicedList.splice(idx, 1);
				}
			}
			this.deleteList = [];
		},
		closeModal() {
			this.$emit('closeModal');
		},
		choiceUser() {
			if (this.choicedList.length == 0) {
				this.sAlert('사용자를 선택해 주세요.');
				return;
			}
			this.$emit('sendData', this.choicedList);
			this.closeModal();
		},
		// 중복 체크
		checkRetain(data) {
			for (let user of this.choicedList) {
				if (user.userId == data) {
					return true;
				}
			}
			return false;
		},
	},
};
</script>

<style></style>

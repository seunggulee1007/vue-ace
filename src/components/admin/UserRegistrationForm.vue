<template>
	<div class="container admin-container">
		<section class="section__tree">
			<h4 class="section__title">
				<span>조직도</span>
			</h4>
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
		</section>
		<section class="section__contents">
			<div class="inner-wrap">
				<div class="section-top">
					<h3 class="section__title">사용자 등록</h3>
					<div class="buttons">
						<button
							type="button"
							class="button button__add"
							@click="modalFlag = true"
							v-if="deptInfo.deptId > 0"
						>
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
							{{ deptInfo.deptNm }}
						</strong>
					</div>
					<div class="table-wrap">
						<table class="table">
							<thead>
								<tr>
									<th>No.</th>
									<th>사원명</th>
									<th>사원번호</th>
									<th>휴대폰번호</th>
									<th>Email</th>
									<th>직위</th>
									<th>재직여부</th>
								</tr>
							</thead>
							<tbody>
								<tr v-if="userList.length == 0" class="row">
									<td colspan="8" style="text-align:center;">조회된 데이터가 없습니다.</td>
								</tr>
								<tr
									class="row"
									v-for="(item, idx) in userList"
									:key="item.userId"
									@dblclick="modifyUser(item)"
									v-else
								>
									<td>{{ idx + 1 }}</td>
									<td>{{ item.userNm }}</td>
									<td>{{ item.empNo }}</td>
									<td>{{ item.phone | phoneFormat }}</td>
									<td>{{ item.email }}</td>
									<td>{{ item.rankCdNm }}</td>
									<td>{{ item.empStatusNm }}</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</section>
		<RegUserModal
			v-if="modalFlag"
			class="show"
			:deptInfo="deptInfo"
			:userInfo="userInfo"
			@reSelectUserList="selectUserList"
			@sendData="receiveData"
		></RegUserModal>
	</div>
</template>

<script>
import RegUserModal from '@/components/common/RegUserModal.vue';
import { mapGetters, mapActions } from 'vuex';
import { selectUserList } from '@/api/admin/user';
export default {
	created() {
		this.selectDeptList();
	},
	computed: {
		...mapGetters(['getTreeData']),
	},
	components: {
		RegUserModal,
	},
	methods: {
		...mapActions(['DEPTLIST']),
		// 부서 리스트 조회
		async selectDeptList() {
			await this.DEPTLIST();
			if (this.getTreeData.length > 0) {
				this.choiceDept(this.getTreeData[0].children[0]);
			}
		},
		// 부서 선택 이벤트
		choiceDept(item) {
			this.deptInfo.deptNm = item.deptNm;
			this.deptInfo.deptId = item.deptId;

			this.selectUserList();
		},
		// 사용자 선택 이벤트
		async selectUserList() {
			let res = await selectUserList(this.deptInfo.deptId);
			if (res.result == 0) {
				this.userList = res.data;
			}
		},
		// 사용자 수정 이벤트 (더블 클릭시 사용자 모달로 해당 내용 전송)
		modifyUser(item) {
			this.modalFlag = true;
			this.userInfo = item;
		},
		// 모달 창에서 보낸 정보 받는 함수
		receiveData() {
			this.modalFlag = false;
			this.userInfo = {};
		},
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
			userInfo: {},
			modalFlag: false,
		};
	},
};
</script>

<style></style>

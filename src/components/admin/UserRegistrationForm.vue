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
						<button
							type="button"
							class="button button__add"
							@click="setUserModal"
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
								<tr v-if="userList.lengh == 0">
									<td colspan="8">조회된 데이터가 없습니다.</td>
								</tr>
								<tr class="row" v-for="(item, idx) in userList" :key="item.userId">
									<td>{{ idx + 1 }}</td>
									<td>{{ item.userNm }}</td>
									<td>{{ item.empNo }}</td>
									<td>{{ item.phone }}</td>
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
		<user-modal
			:class="{ show: showUserModal }"
			:deptInfo="deptInfo"
			@reSelectUserList="selectUserList"
		></user-modal>
	</div>
</template>

<script>
import { selectDeptList } from '@/api/admin/dept';
import UserModal from '@/components/common/UserModal.vue';
import { mapGetters, mapMutations } from 'vuex';
import { selectUserList } from '@/api/user';
export default {
	created() {
		this.selectDeptList();
	},
	computed: {
		...mapGetters(['showUserModal']),
	},
	components: {
		UserModal,
	},
	methods: {
		...mapMutations(['setUserModal']),
		async selectDeptList() {
			let res = await selectDeptList();
			if (res.result == 0) {
				this.treeData = res.data;
				this.treeData.isOpen = true;
				if (this.treeData.length > 0) {
					this.choiceDept(this.treeData[0].children[0]);
				}
			}
		},
		choiceDept(item) {
			this.deptInfo.deptNm = item.deptNm;
			this.deptInfo.deptId = item.deptId;

			this.selectUserList();
		},
		async selectUserList() {
			let res = await selectUserList(this.deptInfo.deptId);
			if (res.result == 0) {
				this.userList = res.data;
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
			deptInfo: {
				deptNm: '',
				deptId: 0,
			},
			userList: [],
		};
	},
};
</script>

<style></style>

<template>
	<div class="container admin-container">
		<section class="section__list">
			<div class="section-top">
				<h4 class="section__title">
					<span>권한그룹</span>
				</h4>
				<button type="button" class="button button__delete">
					<span class="icon icon-delete"></span>선택 삭제
				</button>
			</div>
			<div class="table-wrap">
				<table class="table">
					<thead>
						<tr>
							<th class="column-check">
								<div class="input-box">
									<span class="input-checkbox">
										<input type="checkbox" id="checkboxSelectAll2" />
										<label
											for="checkboxSelectAll2"
											class="input-checkbox__label icon-checkbox-purple"
										>
											<span class="blind">선택</span>
										</label>
									</span>
								</div>
							</th>
							<th>그룹명</th>
							<th>그룹코드</th>
							<th>등록일자</th>
						</tr>
					</thead>
					<tbody>
						<tr class="row">
							<td class="column-check">
								<div class="input-box">
									<span class="input-checkbox">
										<input type="checkbox" id="" />
										<label for="" class="input-checkbox__label icon-checkbox-purple">
											<span class="blind">선택</span>
										</label>
									</span>
								</div>
							</td>
							<td>그룹명1</td>
							<td>그룹코드1</td>
							<td>2020-12-01</td>
						</tr>
					</tbody>
				</table>
			</div>
		</section>
		<section class="section__contents">
			<div class="inner-wrap">
				<div class="section-top">
					<h3 class="section__title">권한그룹 등록</h3>
				</div>
				<div class="component-area">
					<div class="component-box">
						<div class="component-box-top">
							<p class="component__title">그룹명</p>
							<div class="input-box">
								<span class="input-checkbox">
									<input
										type="checkbox"
										id="checkboxNotUse"
										v-model="authGroupVO.useYn"
										true-value="N"
										false-value="Y"
									/>
									<label for="checkboxNotUse" class="input-checkbox__label  icon-checkbox-purple">
										<span>미 사용 시, 체크하세요</span>
									</label>
								</span>
							</div>
						</div>
						<div class="input-box" v-if="!authGroupNmDuple">
							<input
								class="input"
								type="text"
								placeholder="입력하세요"
								v-model="authGroupVO.authGroupNm"
							/>
							<button type="button" class="button" @click="confirmDuple">
								<span class="icon icon-check"></span>
								중복확인
							</button>
						</div>
						<div class="input-box" v-else>
							<input type="text" class="input" v-model="authGroupVO.authGroupNm" readonly />
							<button class="button" type="button" @click="reSearchDuple">
								<span class="icon icon-check"></span>
								재조회
							</button>
						</div>
						<p class="msg-state">{{ authGroupNmDupleResultMsg }}</p>
					</div>
					<div class="component-box">
						<div class="component-box-top">
							<p class="component__title">그룹코드</p>
						</div>
						<div class="input-box">
							<input class="input " type="text" placeholder="저장 시, 자동 생성" readonly />
						</div>
					</div>
					<div class="component-box">
						<div class="component-box component-box-top">
							<p class="component__title">대상자</p>
							<div class="buttons">
								<button type="button" class="button button__add" @click="modalFlag = !modalFlag">
									<span class="icon icon-add"></span>사원 추가
								</button>
								<button type="button" class="button button__delete">
									<span class="icon icon-delete"></span>선택 삭제
								</button>
							</div>
						</div>
						<div class="table-wrap">
							<table class="table table-hover">
								<thead>
									<tr class="row">
										<th class="column-check">
											<div class="input-box">
												<span class="input-checkbox">
													<input type="checkbox" id="checkboxSelectAll1" />
													<label
														for="checkboxSelectAll1"
														class="input-checkbox__label icon-checkbox-purple"
													>
														<span class="blind">선택</span>
													</label>
												</span>
											</div>
										</th>
										<th>No.</th>
										<th>부서명</th>
										<th>사원명</th>
										<th>재직여부</th>
									</tr>
								</thead>
								<tbody>
									<tr class="row" v-for="(user, idx) in userList" :key="user.userId">
										<td class="column-check">
											<div class="input-box">
												<span class="input-checkbox">
													<input type="checkbox" :id="user.userId" />
													<label
														:for="user.userId"
														class="input-checkbox__label icon-checkbox-purple"
													>
														<span class="blind">선택</span>
													</label>
												</span>
											</div>
										</td>
										<td>{{ idx + 1 }}</td>
										<td>{{ user.deptNm }}</td>
										<td>{{ user.userNm }} {{ user.rankCdNm }}</td>
										<td>{{ user.empStatusNm }}</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<div class="component-box">
						<div class="component-box-top">
							<p class="component__title">등록일자</p>
						</div>
						<div class="input-box">
							<input class="input" type="text" placeholder="저장 시, 자동 생성" readonly />
						</div>
					</div>
				</div>
				<div class="buttons-complete">
					<div class="buttons">
						<button type="submit" class="button button__save" @click="saveAuthGroup">등록</button>
					</div>
				</div>
			</div>
		</section>

		<!-- popup -->
		<user-modal
			v-if="modalFlag"
			:class="{ show: modalFlag }"
			@closeModal="closeModal"
			@sendData="receiveData"
		></user-modal>
	</div>
</template>

<script>
import UserModal from '@/components/common/UserModal.vue';
import { confirmDuple, insertAuthGroup, updateAuthGroup } from '@/api/admin/authGroup';
export default {
	components: {
		UserModal,
	},
	data() {
		return {
			modalFlag: false,
			userList: [],
			authGroupVO: {
				useYn: 'Y',
				authGroupNm: '',
			},
			authGroupNmDuple: false,
			authGroupNmDupleResultMsg: '중복 체크해 주세요.',
		};
	},
	methods: {
		closeModal() {
			this.modalFlag = false;
		},
		receiveData(itemList) {
			for (let item of itemList) {
				if (!this.checkRetain(item.userId)) {
					this.userList.push(item);
				}
			}
		},
		checkRetain(data) {
			for (let user of this.userList) {
				if (user.userId == data) {
					return true;
				}
			}
			return false;
		},
		async confirmDuple() {
			if (!this.authGroupVO.authGroupNm) {
				this.sAlert('그룹명을 입력해 주세요.');
				return;
			}
			let res = await confirmDuple(this.authGroupVO.authGroupNm);
			if (res.result == 0) {
				this.authGroupNmDuple = true;
			}
			this.authGroupNmDupleResultMsg = res.resultMsg;
		},
		saveAuthGroup() {
			let txt = '등록';
			if (this.authGroupVO.authGroupId) {
				txt = '수정';
			}
			this.sConfirm(txt + '하시겠습니까?', async () => {
				if (!this.authGroupVO.authGroupNm) {
					this.sAlert('그룹명을 입력해 주세요.');
					return;
				} else if (!this.authGroupNmDuple) {
					this.sAlert('그룹 명 중복 체크를 진행해 주세요.');
					return;
				} else if (this.userList.length == 0) {
					this.sAlert('대상자를 선택해 주세요.');
					return;
				}
				let formData = new FormData();
				for (let i = 0; i < this.userList.length; i++) {
					let user = this.userList[i];
					formData.append(`authUserList[${i}].userId`, user.userId);
				}
				for (let key in this.authGroupVO) {
					if (!this.authGroupVO[key]) {
						continue;
					}
					formData.append(key, this.authGroupVO[key]);
				}

				let res;
				if (!this.authGroupVO.authGroupId) {
					res = await insertAuthGroup(formData);
				} else {
					res = await updateAuthGroup(formData);
				}
				this.sAlert(res.resultMsg);
			});
		},
		reSearchDuple() {
			this.authGroupNmDuple = false;
			this.authGroupNmDupleResultMsg = '중복 체크해 주세요.';
		},
	},
};
</script>

<style></style>

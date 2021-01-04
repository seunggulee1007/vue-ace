<template>
	<div class="container user-container">
		<section class="section__contents">
			<div class="inner-wrap">
				<div class="section-top">
					<h3 class="section__title">유연 근무 등록</h3>
				</div>
				<div class="component-area">
					<div class="component-box">
						<div class="component-box-top">
							<p class="component__title">유연 근무 유형</p>
						</div>
						<div class="component-box-cnt">
							<div class="select-options">
								<radio-btn
									:codeGroup="'workType'"
									@input="
										value => {
											workGroupVO.workType = value;
										}
									"
								></radio-btn>
							</div>
						</div>
					</div>
					<div class="component-box">
						<div class="component-box-top">
							<p class="component__title">근무 그룹명</p>
						</div>
						<div class="component-box-cnt">
							<div class="input-box" v-if="!workGroupNmDuple">
								<input
									class="input "
									type="text"
									placeholder="입력하세요"
									maxlength="50"
									v-model="workGroupVO.workGroupNm"
									ref="workGroupNm"
								/>
								<button type="button" class="button" @click="confirmDuple">
									<span class="icon icon-check"></span>
									중복 확인
								</button>
							</div>
							<div class="input-box" v-else>
								<input type="text" class="input" v-model="workGroupVO.workGroupNm" readonly />
								<button class="button" type="button" @click="reSearchDuple">
									<span class="icon icon-check"></span>
									재조회
								</button>
							</div>
							<p class="msg-state">{{ workGroupNmDupleResultMsg }}</p>
						</div>
					</div>
					<div class="component-box">
						<div class="component-box-top">
							<p class="component__title">1일 표준 근로시간</p>
						</div>
						<div class="component-box-cnt">
							<div class="select-options">
								<radio-btn
									:codeGroup="'stdWorkingHours'"
									@input="
										value => {
											workGroupVO.stdWorkingHours = value;
										}
									"
								></radio-btn>
							</div>
						</div>
					</div>
					<div class="component-box">
						<div class="component-box-top">
							<p class="component__title">근무요일</p>
						</div>
						<div class="component-box-cnt">
							<div class="select-options">
								<div class="input-box select-options__item">
									<input
										type="checkbox"
										id="workdayMon"
										class="input"
										v-model="workWeekList"
										value="2"
									/>
									<label for="workdayMon">월요일</label>
								</div>
								<div class="input-box select-options__item">
									<input
										type="checkbox"
										id="workdayTue"
										class="input"
										v-model="workWeekList"
										value="3"
									/>
									<label for="workdayTue">화요일</label>
								</div>
								<div class="input-box select-options__item">
									<input
										type="checkbox"
										id="workdayWed"
										class="input"
										v-model="workWeekList"
										value="4"
									/>
									<label for="workdayWed">수요일</label>
								</div>
								<div class="input-box select-options__item">
									<input
										type="checkbox"
										id="workdayThu"
										class="input"
										v-model="workWeekList"
										value="5"
									/>
									<label for="workdayThu">목요일</label>
								</div>
								<div class="input-box select-options__item">
									<input
										type="checkbox"
										id="workdayFri"
										class="input"
										v-model="workWeekList"
										value="6"
									/>
									<label for="workdayFri">금요일</label>
								</div>
								<div class="input-box select-options__item">
									<input
										type="checkbox"
										id="workdaySat"
										class="input"
										v-model="workWeekList"
										value="7"
									/>
									<label for="workdaySat">토요일</label>
								</div>
								<div class="input-box select-options__item">
									<input
										type="checkbox"
										id="workdaySun"
										class="input"
										v-model="workWeekList"
										value="1"
									/>
									<label for="workdaySun">일요일</label>
								</div>
							</div>
						</div>
					</div>
					<div class="component-box">
						<div class="component-box-top">
							<p class="component__title">정산 단위 기간</p>
						</div>
						<div class="component-box-cnt">
							<div class="select-options">
								<radio-btn
									:codeGroup="'settlementUnit'"
									@input="
										value => {
											workGroupVO.settlementUnit = value;
										}
									"
								></radio-btn>
							</div>
						</div>
					</div>
					<div class="component-box">
						<div class="component-box-top">
							<p class="component__title">휴게시간</p>
							<div class="input-checkbox">
								<input type="checkbox" id="restUseYn" v-model="restUseYn" />
								<label for="restUseYn" class="input-checkbox__label  icon-checkbox-purple">
									<span>휴게시간 없음</span>
								</label>
							</div>
						</div>
						<div class="component-box-cnt" v-if="!restUseYn">
							<div class="input-box" v-for="(item, idx) in restList" :key="item.id">
								<el-time-picker
									is-range
									range-separator="~"
									start-placeholder="시작 시간"
									end-placeholder="종료 시간"
									v-model="item.restTime"
									format="HH:mm"
									step="00:10"
								>
								</el-time-picker>
								<button type="button" class="button button__add" @click="addRestList" v-if="idx == 0">
									<span class="icon icon-add"></span>
									추가
								</button>
								<button type="button" class="button button__delete" @click="removeRestList(idx)" v-else>
									<span class="icon icon-delete"></span>
									삭제
								</button>
							</div>
						</div>
					</div>
					<div class="component-box">
						<div class="component-box-top">
							<p class="component__title">의무시간 (Core Time)</p>
							<div class="input-checkbox">
								<input type="checkbox" id="coreUseYn" v-model="coreUseYn" />
								<label for="coreUseYn" class="input-checkbox__label  icon-checkbox-purple">
									<span>의무시간 없음</span>
								</label>
							</div>
						</div>
						<div class="component-box-cnt" v-if="!coreUseYn">
							<div class="input-box" v-for="(item, idx) in coreList" :key="item.id">
								<el-time-picker
									is-range
									range-separator="~"
									start-placeholder="시작 시간"
									end-placeholder="종료 시간"
									v-model="item.coreTime"
									format="HH:mm"
									@change="selectRange(idx)"
								>
								</el-time-picker>
								<button type="button" class="button button__add" @click="addCoreList" v-if="idx == 0">
									<span class="icon icon-add"></span>
									추가
								</button>
								<button type="button" class="button button__delete" @click="removeCoreList(idx)" v-else>
									<span class="icon icon-delete"></span>
									삭제
								</button>
							</div>
						</div>
					</div>
					<div class="component-box">
						<div class="component-box-top">
							<p class="component__title">근무 시간</p>
						</div>
						<div class="component-box-cnt">
							<div class="input-box input-box-icon">
								<el-time-picker
									is-range
									range-separator="~"
									start-placeholder="시작 시간"
									end-placeholder="종료 시간"
									v-model="workingTime"
									format="HH:mm"
								>
								</el-time-picker>
							</div>
						</div>
					</div>
					<div class="component-box">
						<div class="component-box-top">
							<p class="component__title">적용 기간</p>
						</div>
						<div class="component-box-cnt">
							<div class="input-box input-box-icon">
								<input class="input input-icon" type="text" placeholder="입력하세요" />
								<span class="icon icon-calendar"></span>
							</div>
						</div>
					</div>
					<div class="component-box">
						<div class="component-box component-box-top">
							<p class="component__title">근무 대상자 등록</p>
							<div class="buttons">
								<button type="button" class="button button__dept">부서별 등록</button>
								<button type="button" class="button button__member" @click="modalFlag = !modalFlag">
									사원별 등록
								</button>
							</div>
						</div>
						<div class="component-box-cnt">
							<div class="lst-cards lst-cards__4colums">
								<div
									class="lst-cards__item cards__member"
									v-for="(item, idx) in userList"
									:key="item.userId"
								>
									<div class="user-name">
										<div class="img-user">
											<img :src="SERVER_URL + item.photo" alt="" />
										</div>
										<p>
											{{ item.userNm }}
											<span class="user-position">{{ item.rankCdNm }}</span>
											<span class="user-dept">{{ item.deptNm }}</span>
										</p>
									</div>
									<button type="button" class="button__delete" @click="userList.splice(idx, 1)">
										<span class="icon icon-close"></span>
										<span class="blind">삭제</span>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="buttons-complete">
					<div class="buttons">
						<button type="submit" class="button button__submit" @click="saveWorkGroup">등록</button>
						<button type="button" class="button button__copy-save">복사 저장</button>
					</div>
				</div>
			</div>
		</section>
		<user-modal
			v-if="modalFlag"
			:class="{ show: modalFlag }"
			@closeModal="closeModal"
			@sendData="receiveData"
		></user-modal>
	</div>
</template>

<script>
import RadioBtn from '@/components/common/RadioBtn.vue';
import UserModal from '@/components/common/UserModal.vue';
import { confirmDuple, insertWorkGroup, updateWorkGroup } from '@/api/agile/workGroup';
export default {
	components: {
		RadioBtn,
		UserModal,
	},
	data() {
		return {
			workGroupVO: {
				workType: '',
				stdWorkingHours: '',
				settlementUnit: '',
			},
			workGroupNmDuple: false,
			workGroupNmDupleResultMsg: '중복 체크해 주세요.',
			modalFlag: false, // 모달 여부
			userList: [],
			deptList: [],
			workWeekList: [], // 근무 요일 리스트
			restUseYn: false, // 휴게시간 유무
			coreUseYn: false, // 의무시간 유무
			restList: [
				{
					id: 0,
					restTime: this.getTodayFromTo(),
				},
			],
			coreList: [
				{
					id: 0,
					coreTime: this.getTodayFromTo(),
				},
			],
			workingTime: this.getTodayFromTo(),
		};
	},
	methods: {
		// 모달 창 닫기
		closeModal() {
			this.modalFlag = false;
		},
		// 모달창으로 부터 데이터 받는 함수
		receiveData(itemList) {
			for (let item of itemList) {
				if (!this.checkRetain(item.userId)) {
					this.userList.push(item);
				}
			}
		},
		// 중복 체크
		checkRetain(data) {
			for (let user of this.userList) {
				if (user.userId == data) {
					return true;
				}
			}
			return false;
		},
		// 휴식 시간 리스트 추가
		addRestList() {
			this.restList.push({
				id: this.restList.length,
				restTime: this.getTodayFromTo(),
			});
		},
		// 코어 시간리스트 추가
		addCoreList() {
			this.coreList.push({
				id: this.coreList.length,
				coreTime: this.getTodayFromTo(),
			});
		},
		selectRange(idx) {
			console.log(idx + '번째 변경이벤트인가 ??');
		},
		removeRestList(idx) {
			this.restList.splice(idx, 1);
		},
		removeCoreList(idx) {
			this.coreList.splice(idx, 1);
		},
		// 그룹명 중복 체크
		async confirmDuple() {
			if (!this.workGroupVO.workGroupNm) {
				this.sAlert('그룹명을 입력해 주세요.');
				this.$refs.workGroupNm.focus();
				return;
			}
			let res = await confirmDuple(this.workGroupVO.workGroupNm);
			console.log(res);
			if (res.result == 0) {
				this.workGroupNmDuple = true;
			}
			this.workGroupNmDupleResultMsg = res.resultMsg;
		},
		reSearchDuple() {
			this.workGroupNmDuple = false;
			this.workGroupNmDupleResultMsg = '중복 체크해 주세요.';
		},
		// 근무 그룹 저장
		saveWorkGroup() {
			let txt = '저장';
			if (this.workGroupVO.workGroupId) {
				txt = '수정';
			}
			this.sConfirm(`${txt} 하시겠습니까?`, async () => {
				let res;
				let formData = new FormData();
				if (!this.workGroupVO.workGroupNm) {
					this.sAlert('그룹명을 입력해 주세요.');
					this.$refs.workGroupNm.focus();
					return;
				} else if (!this.workGroupNmDuple) {
					this.sAlert('그룹 명 중복 체크를 진행해 주세요.');
					return;
				} else if (this.workWeekList.length == 0) {
					this.sAlert('근무 요일을 선택해 주세요.');
					return;
				}
				for (let temp in this.workGrupoVO) {
					formData.append(temp, this.workGruopVO[temp]);
				}
				let cnt = 0; // 근무시간 저장용 변수
				if (!this.restUseYn) {
					for (let temp of this.restList) {
						formData.append(`workTimeList[${cnt}].workType`, 'R');
						console.log(temp.restTime[0]);
						console.log(typeof temp.restTime[0]);
						formData.append(`workTimeList[${cnt}].workTimeFr`, this.formatTime(temp.restTime[0]));
						formData.append(`workTimeList[${cnt}].workTimeTo`, this.formatTime(temp.restTime[1]));
						cnt++;
					}
				}
				if (!this.coreUseYn) {
					for (let temp of this.coreList) {
						formData.append(`workTimeList[${cnt}].workType`, 'C');
						formData.append(`workTimeList[${cnt}].workTimeFr`, this.formatTime(temp.coreTime[0]));
						formData.append(`workTimeList[${cnt}].workTimeTo`, this.formatTime(temp.coreTime[1]));
						cnt++;
					}
				}

				formData.append(`workTimeList[${cnt}].workType`, 'W');
				formData.append(`workTimeList[${cnt}].workTimeFr`, this.formatTime(this.workingTime[0]));
				formData.append(`workTimeList[${cnt}].workTimeTo`, this.formatTime(this.workingTime[1]));
				cnt = 0;
				for (let temp of this.workWeekList) {
					formData.append(`workWeekList[${cnt}].weekCd`, temp);
					cnt++;
				}
				cnt = 0;
				for (let temp of this.userList) {
					formData.append(`workUserList[${cnt}].userId`, temp.userId);
					cnt++;
				}
				cnt = 0;
				for (let temp of this.deptList) {
					formData.append(`workDeptList[${cnt}].deptId`, temp.deptId);
					cnt++;
				}

				if (this.workGroupVO.workGroupId) {
					res = await updateWorkGroup(formData);
				} else {
					res = await insertWorkGroup(formData);
				}
				console.log(res);
				if (res.result == 0) {
					console.log('저장 성공');
				}
				this.sAlert(res.resultMsg);
			});
		},
	},
};
</script>

<style></style>

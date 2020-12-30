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
							<div class="input-box">
								<input class="input " type="text" placeholder="입력하세요" />
								<button type="button" class="button">
									<span class="icon icon-check"></span>
									중복 확인
								</button>
							</div>
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
									<input type="checkbox" id="workdayMon" class="input" name="workday" value="mon" />
									<label for="workdayMon">월요일</label>
								</div>
								<div class="input-box select-options__item">
									<input type="checkbox" id="workdayTue" class="input" name="workday" value="tue" />
									<label for="workdayTue">화요일</label>
								</div>
								<div class="input-box select-options__item">
									<input type="checkbox" id="workdayWed" class="input" name="workday" value="wed" />
									<label for="workdayWed">수요일</label>
								</div>
								<div class="input-box select-options__item">
									<input type="checkbox" id="workdayThu" class="input" name="workday" value="thu" />
									<label for="workdayThu">목요일</label>
								</div>
								<div class="input-box select-options__item">
									<input type="checkbox" id="workdayFri" class="input" name="workday" value="fri" />
									<label for="workdayFri">금요일</label>
								</div>
								<div class="input-box select-options__item">
									<input type="checkbox" id="workdaySat" class="input" name="workday" value="sat" />
									<label for="workdaySat">토요일</label>
								</div>
								<div class="input-box select-options__item">
									<input type="checkbox" id="workdaySun" class="input" name="workday" value="sun" />
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
								<input type="checkbox" id="checkboxNotUse" />
								<label for="checkboxNotUse" class="input-checkbox__label  icon-checkbox-purple">
									<span>휴게시간 없음</span>
								</label>
							</div>
						</div>
						<div class="component-box-cnt">
							<div class="input-box">
								<input class="input" type="text" placeholder="입력하세요" />
								<button type="button" class="button button__add">
									<span class="icon icon-add"></span>
									추가
								</button>
							</div>
						</div>
					</div>
					<div class="component-box">
						<div class="component-box-top">
							<p class="component__title">의무시간 (Core Time)</p>
							<div class="input-checkbox">
								<input type="checkbox" id="checkboxNotUse" />
								<label for="checkboxNotUse" class="input-checkbox__label  icon-checkbox-purple">
									<span>의무시간 없음</span>
								</label>
							</div>
						</div>
						<div class="component-box-cnt">
							<div class="input-box">
								<input class="input" type="text" placeholder="입력하세요" />
								<button type="button" class="button button__add">
									<span class="icon icon-add"></span>
									추가
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
								<input class="input input-icon" type="text" placeholder="입력하세요" />
								<span class="icon icon-clock"></span>
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
						<button type="submit" class="button button__submit">등록</button>
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
export default {
	components: {
		RadioBtn,
		UserModal,
	},
	data() {
		return {
			workGroupVO: { workType: '', stdWorkingHours: '', settlementUnit: '' },
			modalFlag: false,
			userList: [],
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
	},
};
</script>

<style></style>

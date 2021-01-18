<template>
	<div class="container user-container">
		<section class="section__contents">
			<div class="inner-wrap">
				<div class="section-top">
					<h3 class="section__title">고객 등록</h3>
				</div>
				<div class="component-area">
					<div class="component-box">
						<div class="component-box-top">
							<p class="component__title">고객명</p>
							<div class="input-checkbox">
								<input
									type="checkbox"
									id="resignationYn"
									true-value="Y"
									false-value="N"
									v-model="customerVO.resignationYn"
								/>
								<label for="resignationYn" class="input-checkbox__label  icon-checkbox-purple">
									<span>퇴사 시, 체크하세요</span>
								</label>
							</div>
						</div>
						<div class="component-box-cnt">
							<div class="input-box" v-if="!idDupleResult">
								<input
									class="input "
									type="text"
									placeholder="입력하세요"
									v-model="customerVO.customerNm"
									maxlength="150"
									ref="customerNm"
								/>
								<button type="button" class="button" @click="confirmDuple" ref="dupleBtn">
									<span class="icon icon-check"></span>
									중복확인
								</button>
							</div>
							<div class="input-box" v-else>
								<input class="input" type="text" v-model="customerVO.customerNm" readonly />
								<button type="button" class="button" @click="researchClientNm">
									<span class="icon icon-check"></span>
									재조회
								</button>
							</div>
							<p class="msg-state">고객명 중복확인을 해주세요.</p>
						</div>
					</div>
					<div class="component-box">
						<div class="component-box-top">
							<p class="component__title">거래처</p>
						</div>
						<div class="component-box-cnt">
							<div class="input-box">
								<input class="input" type="text" placeholder="입력하세요" />
							</div>
						</div>
					</div>
					<div class="component-box">
						<div class="component-box-top">
							<p class="component__title">직위/직책</p>
						</div>
						<div class="component-box-cnt">
							<select-box
								:codeGroup="'empRank'"
								v-model="customerVO.rankCd"
								:defaultVal="customerVO.rankCd"
								ref="empRank"
								@input="
									value => {
										customerVO.rankCd = value;
									}
								"
							></select-box>
						</div>
					</div>
					<div class="component-box">
						<div class="component-box-top">
							<p class="component__title">부서</p>
						</div>
						<div class="component-box-cnt">
							<div class="input-box">
								<input class="input" type="text" placeholder="입력하세요" />
							</div>
						</div>
					</div>
					<div class="component-box">
						<div class="component-box-top">
							<p class="component__title">휴대전화</p>
						</div>
						<div class="component-box-cnt">
							<div class="input-box">
								<input
									class="input"
									type="text"
									placeholder="입력하세요"
									maxlength="11"
									v-model="customerVO.phone"
									ref="phone"
								/>
							</div>
						</div>
					</div>
					<div class="component-box">
						<div class="component-box-top">
							<p class="component__title">E-Mail</p>
						</div>
						<div class="component-box-cnt">
							<div class="input-box">
								<input
									class="input"
									type="text"
									placeholder="입력하세요"
									v-model="customerVO.email"
									maxlength="50"
									ref="email"
								/>
							</div>
						</div>
					</div>
					<div class="component-box">
						<div class="component-box-top">
							<p class="component__title">영업 담당자</p>
						</div>
						<div class="component-box-cnt">
							<div class="input-box">
								<input class="input" type="text" />
								<button type="button" class="button button__add" @click="modalFlag = !modalFlag">
									<span class="icon icon-user"></span>검색
								</button>
							</div>
						</div>
					</div>
					<div class="component-box">
						<div class="component-box-top">
							<p class="component__title">비고</p>
						</div>
						<div class="component-box-cnt">
							<div class="input-box">
								<input class="input" type="text" placeholder="입력하세요" />
							</div>
						</div>
					</div>
					<div class="component-box">
						<div class="component-box-top">
							<p class="component__title">등록일자</p>
						</div>
						<div class="input-box">
							<input class="input" type="text" readonly />
						</div>
					</div>
				</div>
				<div class="buttons-complete">
					<div class="buttons">
						<button type="submit" class="button button__save" @click="saveCustomer" v-if="!customerId">
							등록
						</button>
						<button type="submit" class="button button__save" @click="saveCustomer" v-else>
							수정
						</button>
						<button type="button" class="button button__cancel">취소</button>
						<button type="button" class="button button__back">이전페이지</button>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
import SelectBox from '@/components/common/SelectBox.vue';
import {
	confirmDuple,
	insertCustomer,
	updateCustomer,
	// selectCustomer,
} from '@/api/crm/customer/customer';
export default {
	data() {
		return {
			idDupleResult: false, // 아이디 중복 체크 여부
			idDupleResultMsg: '고객명 중복 체크를 해 주세요.',
			customerVO: {
				rankCd: 0,
				crtId: this.$store.getters.getUserId,
				resignationYn: 'N',
			},
		};
	},
	props: ['customerId'],
	components: {
		SelectBox,
	},
	methods: {
		// 아이디 중복 체크
		async confirmDuple() {
			if (!this.customerVO.customerNm) {
				this.sAlert('고객 명을 입력해 주세요');
				this.$refs.customerNm.focus();
				return;
			}
			let res = await confirmDuple(this.customerVO.customerNm);
			if (res.result == 0) {
				this.idDupleResult = true;
			} else {
				this.idDupleResult = false;
			}
			this.idDupleResultMsg = res.resultMsg;
		},
		// 거래처명 중복 재조회
		researchClientNm() {
			this.idDupleResult = false;
			this.idDupleResultMsg = '고객명 중복 체크를 해 주세요.';
		},
		async saveCustomer() {
			let txt = '등록';
			if (this.clientId) {
				txt = '수정';
			}
			this.sConfirm(`${txt}하시겠습니까?`, async () => {
				if (!this.idDupleResult) {
					this.sAlert('고객명 중복 체크를 진행해 주세요.');
					this.$refs.dupleBtn.focus();
					return;
				} else if (!this.customerVO.phone) {
					this.sAlert('휴대전화 번호를 입력해 주세요.');
					this.$refs.phone.focus();
					return;
				} else if (!this.customerVO.email) {
					this.sAlert('이메일을 입력해 주세요.');
					this.$refs.email.focus();
					return;
				}
				let res;
				if (!this.customerId) {
					res = await insertCustomer(this.customerVO);
				} else {
					res = await updateCustomer(this.customerVO);
				}
				console.log(res);
				if (res.result == 0) {
					this.sAlert(res.resultMsg);
				}
			});
		},
	},
};
</script>

<style></style>

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
								<input type="checkbox" id="coreUseYn" v-model="coreUseYn" />
								<label for="coreUseYn" class="input-checkbox__label  icon-checkbox-purple">
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
									v-model="clientVO.clientNm"
									maxlength="150"
									ref="clientNm"
								/>
								<button type="button" class="button" @click="confirmDuple" ref="dupleBtn">
									<span class="icon icon-check"></span>
									중복확인
								</button>
							</div>
							<div class="input-box" v-else>
								<input class="input" type="text" v-model="clientVO.clientNm" readonly />
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
							<div class="input-box">
								<select-box
									class="input-select"
									:codeGroup="'empRank'"
									v-model="clientVO.rankCd"
									:defaultVal="clientVO.rankCd"
									ref="empRank"
									@input="
										value => {
											clientVO.rankCd = value;
										}
									"
								></select-box>
							</div>
						</div>
					</div>
					<div class="component-box">
						<div class="component-box-top">
							<p class="component__title">대표자명</p>
						</div>
						<div class="component-box-cnt">
							<div class="input-box">
								<input
									class="input"
									type="text"
									placeholder="입력하세요"
									v-model="clientVO.ceoNm"
									maxlength="30"
									ref="ceoNm"
								/>
							</div>
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
									v-model="clientVO.phone"
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
									v-model="clientVO.email"
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
						<button type="submit" class="button button__save" @click="saveClient" v-if="!clientId">
							등록
						</button>
						<button type="submit" class="button button__save" @click="saveClient" v-else>
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
export default {
	data() {
		return {
			idDupleResult: false, // 아이디 중복 체크 여부
			idDupleResultMsg: '거래처명 중복 체크를 해 주세요.',
			bizResearchFlag: false,
			contractDateFrom: new Date(),
			contractDateTo: new Date(),
			clientVO: {
				contractAmt: 0,
				bizResultMsg: '',
				address: '',
				crtId: this.$store.getters.getUserId,
			},
			contractAmt: 0,
			openPostFlag: false,
		};
	},
	components: {
		SelectBox,
	},
	methods: {
		getPostData(data) {
			this.openPostFlag = false;
			this.clientVO.postNo = data.zonecode; // 우편번호
			this.clientVO.addr = data.address; // 주소
			this.clientVO.addrEng = data.addressEnglish; // 영문 주소
			this.clientVO.addrType = data.addressType; // 주소 타입
			this.clientVO.apartYn = data.apartment; // 연립주택 여부
			this.clientVO.roadNm = data.roadname; // 도로명
			this.clientVO.roadNmCd = data.roadnameCode; // 도로명 코드
			this.clientVO.bcode = data.bcode;
			this.clientVO.bname = data.bname;
			this.clientVO.buildingCd = data.buildingCode;
			this.clientVO.buildingNm = data.buildingName;
			this.clientVO.sido = data.sido;
			this.clientVO.sigungu = data.sigungu;
			this.clientVO.sigunguCd = data.sigunguCode;
		},
		openPostData() {
			this.openPostFlag = true;
		},
		closeModal() {
			this.openPostFlag = false;
		},

		// 아이디 중복 체크
		async confirmDuple() {
			if (!this.clientVO.clientNm) {
				this.sAlert('거래처 명을 입력해 주세요');
				this.$refs.clientNm.focus();
				return;
			}
			// let res = await confirmDuple(this.clientVO.clientNm);
			// if (res.result == 0) {
			// 	this.idDupleResult = true;
			// } else {
			// 	this.idDupleResult = false;
			// }
			// this.idDupleResultMsg = res.resultMsg;
		},
		// 거래처명 중복 재조회
		researchClientNm() {
			this.idDupleResult = false;
			this.idDupleResultMsg = '거래처명 중복 체크를 해 주세요.';
		},
		// 휴폐업 재 조회
		reSearchBizInfo() {
			this.bizResearchFlag = false;
			this.clientVO.bizResultMsg = '';
		},
		async saveClient() {
			let txt = '등록';
			if (this.clientId) {
				txt = '수정';
			}
			this.sConfirm(`${txt}하시겠습니까?`, async () => {
				if (!this.idDupleResult) {
					this.sAlert('거래처명 중복 체크를 진행해 주세요.');
					this.$refs.dupleBtn.focus();
					return;
				} else if (!this.bizResearchFlag) {
					this.sAlert('사업자 휴/폐업 조회를 진행해 주세요.');
					this.$refs.bizSearchBtn.focus();
					return;
				} else if (!this.clientVO.ceoNm) {
					this.sAlert('대표자 명을 입력해 주세요.');
					this.$refs.ceoNm.focus();
					return;
				} else if (!this.clientVO.coRegNo) {
					this.sAlert('법인 등록 번호를 입력해 주세요.');
					this.$refs.bizRegNo.focus();
					return;
				} else if (!this.clientVO.postNo) {
					this.sAlert('주소를 입력해 주세요.');
					this.$refs.postSearch.focus();
					return;
				} else if (!this.clientVO.addrDetail) {
					this.sAlert('상세 주소를 입력해 주세요.');
					this.$refs.addrDetail.focus();
					return;
				} else if (!this.clientVO.telNo) {
					this.sAlert('대표 전화번호를 입력해 주세요.');
					this.$refs.telNo.focus();
					return;
				} else if (!this.clientVO.manager) {
					this.sAlert('담당자를 입력해 주세요');
					this.$refs.manager.focus();
					return;
				} else if (!this.clientVO.phone) {
					this.sAlert('휴대전화 번호를 입력해 주세요.');
					this.$refs.phone.focus();
					return;
				} else if (!this.clientVO.email) {
					this.sAlert('이메일을 입력해 주세요.');
					this.$refs.email.focus();
					return;
				} else if (!this.contractAmt || this.contractAmt < 1) {
					this.sAlert('계약금액을 입력해 주세요.');
					this.$refs.contractAmt.focus();
					return;
				} else if (!this.contractDateFrom) {
					this.sAlert('계약 기간 시작일자를 입력해 주세요.');
					this.$refs.contractDateFrom.focus();
					return;
				} else if (!this.contractDateTo) {
					this.sAlert('계약 기간 종료 일자를 입력해 주세요.');
					this.$refs.contractDateTo.focus();
					return;
				}
				if (this.clientVO.bizNo.indexOf('-') != -1) {
					this.clientVO.bizNo = this.clientVO.bizNo.replace(/-/gi, '');
				}
				this.clientVO.contractDateFrom = this.formatDate(this.contractDateFrom);
				this.clientVO.contractDateTo = this.formatDate(this.contractDateTo);
				let contractAmt = this.contractAmt;
				if (contractAmt.indexOf(',') != -1) {
					contractAmt = contractAmt.replace(/,/gi, '');
				}
				this.clientVO.contractAmt = contractAmt;
				let res;
				if (!this.clientId) {
					// res = await saveClient(this.clientVO);
				} else {
					// res = await modifyClient(this.clientVO);
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

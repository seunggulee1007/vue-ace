<template>
	<div class="container user-container">
		<section class="section__contents">
			<div class="inner-wrap">
				<div class="section-top">
					<h3 class="section__title">거래처 등록</h3>
				</div>
				<div class="component-area">
					<div class="component-box">
						<div class="component-box-top">
							<p class="component__title">거래처명</p>
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
							<p class="msg-state">{{ idDupleResultMsg }}</p>
						</div>
					</div>
					<div class="component-box">
						<div class="component-box-top">
							<p class="component__title">거래처 종류</p>
						</div>
						<div class="component-box-cnt">
							<select-box
								:codeGroup="'clientKind'"
								v-model="clientVO.clientKind"
								ref="clientKind"
								@input="
									value => {
										clientVO.clientKind = value;
									}
								"
							></select-box>
						</div>
					</div>
					<div class="component-box">
						<div class="component-box-top">
							<p class="component__title">사업자번호</p>
						</div>
						<div class="component-box-cnt">
							<div class="input-box" v-if="!bizResearchFlag">
								<input
									class="input "
									type="text"
									placeholder="입력하세요"
									v-model="clientVO.bizNo"
									maxlength="12"
									ref="bizNo"
								/>
								<button type="button" class="button" @click="searchBizInfo" ref="bizSearchBtn">
									<span class="icon icon-check"></span>
									휴/폐업 조회
								</button>
							</div>
							<div class="input-box" v-else>
								<input class="input" type="text" v-model="clientVO.bizNo" readonly />
								<button type="button" class="button" @click="reSearchBizInfo">
									<span class="icon icon-check"></span>
									재 조회
								</button>
							</div>
							<p class="msg-state">{{ clientVO.bizResultMsg }}</p>
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
							<p class="component__title">법인등록번호</p>
						</div>
						<div class="component-box-cnt">
							<div class="input-box">
								<input
									class="input"
									type="text"
									placeholder="입력하세요"
									v-model="clientVO.coRegNo"
									ref="coRegNo"
									maxlength="13"
								/>
							</div>
						</div>
					</div>
					<div class="component-box">
						<div class="component-box-top">
							<p class="component__title">업태</p>
						</div>
						<div class="component-box-cnt">
							<select-box
								:codeGroup="'bizCond'"
								v-model="clientVO.bizCond"
								:codeFlag="true"
								ref="bizCond"
							>
							</select-box>
						</div>
					</div>
					<div class="component-box">
						<div class="component-box-top">
							<p class="component__title">업종</p>
						</div>
						<div class="component-box-cnt">
							<select-box :codeGroup="'bizKind'" v-model="clientVO.bizKind" ref="bizCond"></select-box>
						</div>
						<select-box
							:codeGroup="'contractStatus'"
							v-model="clientVO.contractStatus"
							style="display:none;"
						>
						</select-box>
					</div>
					<div class="component-box">
						<div class="component-box-top">
							<p class="component__title">주소</p>
						</div>
						<div class="component-box-cnt">
							<div class="input-box">
								<input class="input" type="text" v-model="clientVO.addr" readonly />
								<button type="button" class="button" @click="openPostData()">
									<span class="icon icon-search"></span>
									주소 검색
								</button>
							</div>
							<div class="input-box">
								<input
									class="input"
									type="text"
									placeholder="상세주소"
									v-model="clientVO.addrDetail"
									ref="addrDetail"
								/>
							</div>
						</div>
					</div>
					<div class="component-box">
						<div class="component-box-top">
							<p class="component__title">대표 전화번호</p>
						</div>
						<div class="component-box-cnt">
							<div class="input-box">
								<input
									class="input"
									type="text"
									placeholder="입력하세요"
									v-model="clientVO.telNo"
									maxlength="11"
									ref="telNo"
								/>
							</div>
						</div>
					</div>
					<div class="component-box">
						<div class="component-box-top">
							<p class="component__title">담당자</p>
						</div>
						<div class="component-box-cnt">
							<div class="input-box">
								<input
									class="input"
									type="text"
									placeholder="입력하세요"
									v-model="clientVO.manager"
									maxlength="15"
									ref="manager"
								/>
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
		<div class="popup" :class="{ show: openPostFlag }">
			<div class="component-area">
				<div class="inner-wrap">
					<div class="popup-top">
						<strong class="popup__title">주소 검색</strong>
					</div>
					<div class="popup-contents" v-if="openPostFlag">
						<vue-daum-postcode @complete="getPostData($event)" />
					</div>
				</div>
				<button type="button" class="button__close" @click="closeModal">
					<span class="icon icon-close"></span>
					<span class="blind">닫기</span>
				</button>
			</div>
		</div>
	</div>
</template>

<script>
import SelectBox from '@/components/common/SelectBox.vue';
import { searchBizInfo, confirmDuple, saveClient, selectClient, modifyClient } from '@/api/crm/client/client';
export default {
	async created() {
		if (this.clientId) {
			let res = await selectClient(this.clientId);
			this.clientVO = res.data;
			this.contractDateFrom = new Date(this.dateFormat(res.data.contractDateFrom));
			this.contractDateTo = new Date(this.dateFormat(res.data.contractDateTo));
			this.contractAmt = res.data.contractAmt;
			this.idDupleResult = true;
			this.bizResearchFlag = true;
		}
	},
	props: ['clientId'],
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
	watch: {
		contractDateFrom(value, oldValue) {
			if (value > this.contractDateTo) {
				this.sAlert('계약 시작일은 계약 종료일보다 클 수 없습니다.');
				this.contractDateFrom = oldValue;
				return;
			}
		},
		contractDateTo(value, oldValue) {
			if (value < this.contractDateFrom) {
				this.sAlert('계약 종료일은 계약 시작일보다 작을 수 없습니다.');
				this.contractDateTo = oldValue;
				return;
			}
		},
		contractAmt() {
			let contractAmt = this.contractAmt;
			if (typeof contractAmt == 'number') {
				contractAmt = contractAmt.toString();
			}
			let numbersOnly = Number(contractAmt.replace(/[^0-9]/g, '')).toString();
			return (this.contractAmt = numbersOnly.replace(/\B(?=(\d{3})+(?!\d))/g, ','));
		},
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
		async searchBizInfo() {
			if (!this.clientVO.bizNo) {
				this.sAlert('사업자번호를 입력해 주세요.');
				return;
			}
			let bizNo = this.clientVO.bizNo;
			if (bizNo.indexOf('-') != -1) {
				bizNo.replace(/-/gi, '');
			}

			if (!this.checkBizNo(bizNo)) {
				this.sAlert('사업자번호가 유효하지 않습니다.');
				return;
			}
			let res = await searchBizInfo(bizNo);
			if (res.result == 0) {
				this.clientVO.bizResultMsg = res.data.resultMsg;
				this.clientVO.bizResultDetailMsg = res.data.detailMsg;
				this.clientVO.bizResultDetailEngMsg = res.data.detailMsgEngl;
				this.bizResearchFlag = true;
			}
		},
		// 아이디 중복 체크
		async confirmDuple() {
			if (!this.clientVO.clientNm) {
				this.sAlert('거래처 명을 입력해 주세요');
				this.$refs.clientNm.focus();
				return;
			}
			let res = await confirmDuple(this.clientVO.clientNm);
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
				}
				if (this.clientVO.bizNo.indexOf('-') != -1) {
					this.clientVO.bizNo = this.clientVO.bizNo.replace(/-/gi, '');
				}

				let res;
				if (!this.clientId) {
					res = await saveClient(this.clientVO);
				} else {
					res = await modifyClient(this.clientVO);
				}
				if (res.result == 0) {
					this.sAlert(res.resultMsg);
				}
			});
		},
		goList() {
			this.$emit('clearClient');
		},
	},
};
</script>

<style></style>

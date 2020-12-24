<template>
	<div class="popup">
		<div class="component-area">
			<div class="inner-wrap">
				<div class="popup-top">
					<strong class="popup__title">사용자 등록</strong>
				</div>
				<div class="popup-contents">
					<div class="component-box">
						<div class="component-box-top">
							<p class="component__title">부서명</p>
						</div>
						<div class="component-box-cnt">
							<div class="input-box">
								<input type="text" class="input" v-model="deptInfo.deptNm" readonly />
							</div>
						</div>
					</div>
					<div class="component-box">
						<div class="component-box-top">
							<p class="component__title">로그인 아이디</p>
						</div>
						<div class="component-box-cnt">
							<div class="input-box">
								<input
									type="text"
									class="input"
									@keyup="engNumberOnly"
									ref="userId"
									v-model="userVO.userId"
								/>
							</div>
						</div>
					</div>
					<div class="component-box">
						<div class="component-box-top">
							<p class="component__title">사원명</p>
						</div>
						<div class="component-box-cnt">
							<div class="input-box">
								<input type="text" class="input" ref="userNm" v-model="userVO.userNm" />
							</div>
						</div>
					</div>
					<div class="component-box">
						<div class="component-box-top">
							<p class="component__title">사원번호</p>
						</div>
						<div class="component-box-cnt">
							<div class="input-box">
								<input type="text" class="input" v-int ref="empNo" v-model="userVO.empNo" />
							</div>
						</div>
					</div>
					<div class="component-box">
						<div class="component-box-top">
							<p class="component__title">휴대폰번호</p>
						</div>
						<div class="component-box-cnt">
							<div class="input-box">
								<input type="text" class="input" v-model="userVO.phone" />
							</div>
						</div>
					</div>
					<div class="component-box">
						<div class="component-box-top">
							<p class="component__title">Email</p>
						</div>
						<div class="component-box-cnt">
							<div class="input-box">
								<input type="email" class="input" ref="email" v-model="userVO.email" />
							</div>
						</div>
					</div>
					<div class="component-box">
						<div class="component-box-top">
							<p class="component__title">직위</p>
						</div>
						<div class="component-box-cnt">
							<div class="input-box">
								<select-box
									class="input-select"
									:codeGroup="'empRank'"
									v-model="userVO.rankCd"
									ref="empRank"
									@input="
										value => {
											userVO.rankCd = value;
										}
									"
								></select-box>
							</div>
						</div>
					</div>
					<div class="component-box">
						<div class="component-box-top">
							<p class="component__title">사진 등록</p>
						</div>
						<div class="component-box-cnt">
							<div class="input-box">
								<input
									type="file"
									class="input"
									ref="files"
									@change="handleFilesUpload"
									accept="image/*"
								/>
							</div>
							<canvas id="imageCanvas" ref="imageCanvas" :src="uploadImagefile" height="0"></canvas>
						</div>
					</div>
					<div class="popup-bottom buttons-complete">
						<div class="buttons">
							<button type="submit" class="button button__save" @click="saveUser">등록</button>
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
import SelectBox from '@/components/common/SelectBox.vue';
import { mapMutations } from 'vuex';
import { insertUser } from '@/api/user';
import { validateEmail } from '@/utils/validation';

export default {
	components: {
		SelectBox,
	},
	props: ['deptInfo'],
	data() {
		return {
			userVO: {},
			files: {},
			uploadImagefile: '',
		};
	},
	methods: {
		...mapMutations(['setUserModal']),
		handleFilesUpload(event) {
			let uploadedFiles = {}; // 해당 파일의 엘리먼트에 접근해서 변수에 담는다.

			uploadedFiles = this.$refs.files.files;

			let fileSize = uploadedFiles.size;
			if (fileSize / 1e8 > 1) {
				alert('100MB 이상의 파일은 올리실 수 없습니다.');
				return;
			}
			this.files = uploadedFiles;
			console.log(this.files);
			let input = event.target;
			if (input.files && input.files[0]) {
				let reader = new FileReader();
				reader.onload = e => {
					let canvas = this.$refs.imageCanvas;
					let ctx = canvas.getContext('2d');
					let img = new Image();
					img.onload = () => {
						canvas.width = 100;
						canvas.height = 100;
						ctx.drawImage(img, 0, 0, 100, 100);
					};
					img.src = e.target.result;
				};
				reader.readAsDataURL(input.files[0]);
			}
		},
		closeModal() {
			this.setUserModal();
			this.userVO = {};
			this.files = {};
			let canvas = this.$refs.imageCanvas;
			let ctx = canvas.getContext('2d');
			this.$refs.files.value = null;
			// 픽셀 정리
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			// 컨텍스트 리셋
			ctx.beginPath();
		},
		saveUser() {
			this.userVO.deptId = this.deptInfo.deptId;
			console.log(this.userVO);
			this.sConfirm('등록하시겠습니까?', async () => {
				if (!this.userVO.userId) {
					this.sAlert('로그인 아이디를 입력해 주세요');
					this.$refs.userId.focus();
					return;
				}
				if (!this.userVO.userNm) {
					this.sAlert('사원명을 입력해 주세요.');
					this.$refs.userNm.focus();
					return;
				}
				if (this.userVO.email && !validateEmail(this.userVO.email)) {
					this.sAlert('이메일 형식이 맞지 않습니다.');
					this.$refs.email.focus();
					return;
				}

				let formData = new FormData();
				for (let key in this.userVO) {
					const val = this.userVO[key];
					if (!val) {
						continue;
					}
					formData.append(key, val);
				}

				for (let i = 0; i < this.files.length; i++) {
					formData.append(`files[${i}]`, this.files[i]);
				}

				let res = await insertUser(formData);
				console.log(res);
				this.sAlert(res.resultMsg);
				if (res.result == 0) {
					this.$emit('reSelectUserList');
					this.closeModal();
				}
			});
		},
	},
};
</script>

<style></style>

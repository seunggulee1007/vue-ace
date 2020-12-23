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
							<p class="component__title">사원명</p>
						</div>
						<div class="component-box-cnt">
							<div class="input-box">
								<input type="text" class="input" />
							</div>
						</div>
					</div>
					<div class="component-box">
						<div class="component-box-top">
							<p class="component__title">사원번호</p>
						</div>
						<div class="component-box-cnt">
							<div class="input-box">
								<input type="text" class="input" />
							</div>
						</div>
					</div>
					<div class="component-box">
						<div class="component-box-top">
							<p class="component__title">휴대폰번호</p>
						</div>
						<div class="component-box-cnt">
							<div class="input-box">
								<input type="text" class="input" />
							</div>
						</div>
					</div>
					<div class="component-box">
						<div class="component-box-top">
							<p class="component__title">Email</p>
						</div>
						<div class="component-box-cnt">
							<div class="input-box">
								<input type="email" class="input" />
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
									ref="clientKind"
									@input="
										value => {
											userVO.rankCd = value;
										}
									"
								></select-box>
								<select name="" id="" class="input-select">
									<option value="인턴">사원</option>
									<option value="사원">사원</option>
									<option value="주임">주임</option>
									<option value="대리">대리</option>
									<option value="과장">과장</option>
									<option value="차장">차장</option>
									<option value="팀장">차장</option>
									<option value="부장">차장</option>
								</select>
							</div>
						</div>
					</div>
					<div class="component-box">
						<div class="component-box-top">
							<p class="component__title">사진 등록</p>
						</div>
						<div class="component-box-cnt">
							<div class="input-box">
								<canvas id="imageCanvas" ref="imageCanvas" :src="uploadImagefile"></canvas>
								<input
									type="file"
									class="input"
									ref="files"
									@change="handleFilesUpload"
									accept="image/*"
								/>
							</div>
						</div>
					</div>
				</div>
				<div class="popup-bottom buttons-complete">
					<div class="buttons">
						<button type="submit" class="button button__save">등록</button>
						<button type="button" class="button button__cancel" @click="closeModal">취소</button>
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
			let input = event.target;
			if (input.files && input.files[0]) {
				let reader = new FileReader();
				reader.onload = e => {
					let canvas = this.$refs.imageCanvas;
					let ctx = canvas.getContext('2d');
					let img = new Image();
					img.onload = () => {
						canvas.width = 150;
						canvas.height = 150;
						ctx.drawImage(img, 0, 0, 150, 150);
					};
					img.src = e.target.result;
				};
				reader.readAsDataURL(input.files[0]);
			}
		},
		closeModal() {
			this.setUserModal();
			this.files = {};
			let canvas = this.$refs.imageCanvas;
			let ctx = canvas.getContext('2d');
			this.$refs.files.value = null;
			// 픽셀 정리
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			// 컨텍스트 리셋
			ctx.beginPath();
		},
	},
};
</script>

<style></style>

<template>
	<div class="container user-container">
		<section class="section__contents">
			<div class="inner-wrap">
				<div class="section-top">
					<h3 class="section__title">근무 계획 변경 신청</h3>
				</div>
				<div class="component-area lst-info">
					<p class="content__title">변경 전 근무 계획</p>
					<div class="lst-info__item">
						<p class="component__title">유연 근무 유형</p>
						<p>시차 출퇴근제</p>
					</div>
					<div class="lst-info__item">
						<p class="component__title">근무시간</p>
						<p>09:00 ~ 18:00</p>
					</div>
				</div>
				<div class="component-area">
					<p class="content__title">변경 후 근무 계획</p>
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
								<input class="input" type="text" placeholder="입력하세요" />
								<button type="button" class="button">
									<span class="icon icon-search"></span>
									조회
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
								<button type="button" class="button button__add-dept">부서별 등록</button>
								<button type="button" class="button button__add-dept">사원별 등록</button>
							</div>
						</div>
						<div class="component-box-cnt">
							<div class="lst-cards lst-cards__4colums">
								<div class="lst-cards__item cards__member">
									<div class="user-name">
										<div class="img-user">
											<img src="/images/sample1.jpeg" alt="" />
										</div>
										<p>
											홍길동
											<span class="user-position">차장</span>
											<span class="user-dept">개발1팀</span>
										</p>
									</div>
									<button type="button" class="button__delete">
										<span class="icon icon-close"></span>
										<span class="blind">삭제</span>
									</button>
								</div>
								<div class="lst-cards__item cards__member">
									<div class="user-name">
										<div class="img-user">
											<img src="/images/sample2.jpeg" alt="" />
										</div>
										<p>
											최수현
											<span class="user-position">과장</span>
											<span class="user-dept">개발2팀</span>
										</p>
									</div>
									<button type="button" class="button__delete">
										<span class="icon icon-close"></span>
										<span class="blind">삭제</span>
									</button>
								</div>
								<div class="lst-cards__item cards__member">
									<div class="user-name">
										<div class="img-user">
											<img src="/images/sample3.jpeg" alt="" />
										</div>
										<p>
											김우중
											<span class="user-position">대리</span>
											<span class="user-dept">개발1팀</span>
										</p>
									</div>
									<button type="button" class="button__delete">
										<span class="icon icon-close"></span>
										<span class="blind">삭제</span>
									</button>
								</div>
								<div class="lst-cards__item cards__member">
									<div class="user-name">
										<div class="img-user">
											<img src="/images/sample1.jpeg" alt="" />
										</div>
										<p>
											김영희
											<span class="user-position">사원</span>
											<span class="user-dept">개발1팀</span>
										</p>
									</div>
									<button type="button" class="button__delete">
										<span class="icon icon-close"></span>
										<span class="blind">삭제</span>
									</button>
								</div>
								<div class="lst-cards__item cards__dept">
									<div class="dept-name">
										<span class="icon icon-dept"></span>
										<p>
											개발사업부
										</p>
									</div>

									<button type="button" class="button__delete">
										<span class="icon icon-close"></span>
										<span class="blind">삭제</span>
									</button>
								</div>
							</div>
						</div>
					</div>
					<div class="component-box">
						<div class="component-box-top">
							<p class="component__title">작성일자</p>
						</div>
						<div class="component-box-cnt">
							<div class="input-box">
								<input class="input " type="text" placeholder="자동 생성" readonly />
							</div>
						</div>
					</div>
					<div class="component-box">
						<div class="component-box-top">
							<p class="component__title">근무 그룹명</p>
						</div>
						<div class="component-box-cnt">
							<div class="input-box">
								<input class="input " type="text" placeholder="자동 생성" readonly />
							</div>
						</div>
					</div>
				</div>
				<div class="buttons-complete">
					<div class="buttons">
						<button type="submit" class="button button__submit">승인요청</button>
					</div>
				</div>
			</div>
		</section>
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
		}
	}
};
</script>

<style></style>

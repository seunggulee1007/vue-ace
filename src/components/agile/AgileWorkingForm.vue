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
							<ul class="select-options">
								<li class="select-options__item select">
									<span>시차 출퇴근제</span>
								</li>
								<li class="select-options__item">
									<span>선택적 근무제</span>
								</li>
								<li class="select-options__item">
									<span>탄력 근무제</span>
								</li>
								<li class="select-options__item">
									<span>재택근무제</span>
								</li>
							</ul>
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
							<ul class="select-options">
								<li class="select-options__item">
									<span>6시간</span>
								</li>
								<li class="select-options__item">
									<span>7시간</span>
								</li>
								<li class="select-options__item select">
									<span>8시간</span>
								</li>
							</ul>
						</div>
					</div>
					<div class="component-box">
						<div class="component-box-top">
							<p class="component__title">근무요일</p>
						</div>
						<div class="component-box-cnt">
							<ul class="select-options">
								<li class="select-options__item select">
									<span>월요일</span>
								</li>
								<li class="select-options__item select">
									<span>화요일</span>
								</li>
								<li class="select-options__item select">
									<span>수요일</span>
								</li>
								<li class="select-options__item select">
									<span>목요일</span>
								</li>
								<li class="select-options__item select">
									<span>금요일</span>
								</li>
								<li class="select-options__item">
									<span>토요일</span>
								</li>
								<li class="select-options__item">
									<span>일요일</span>
								</li>
							</ul>
						</div>
					</div>
					<div class="component-box">
						<div class="component-box-top">
							<p class="component__title">정산 단위 기간</p>
						</div>
						<div class="component-box-cnt">
							<ul class="select-options">
								<li class="select-options__item">
									<span>1주</span>
								</li>
								<li class="select-options__item">
									<span>2주</span>
								</li>
								<li class="select-options__item select">
									<span>1개월</span>
								</li>
								<li class="select-options__item">
									<span>3개월</span>
								</li>
							</ul>
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
								<button type="button" class="button button__member">사원별 등록</button>
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
										<span class="icon icon-dept__large"></span>
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
				</div>
				<div class="buttons-complete">
					<div class="buttons">
						<button type="submit" class="button button__submit">등록</button>
						<button type="button" class="button button__copy-save">복사 저장</button>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
export default {};
</script>

<style></style>

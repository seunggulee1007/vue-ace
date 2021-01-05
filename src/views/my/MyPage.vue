<template>
	<div class="container mypage-container">
		<section class="section__contents section__mypage">
			<div class="inner-wrap">
				<div class="component-area">
					<div class="component-box">
						<div class="user-info">
							<div class="img-user img-user--large">
								<img src="/images/sample1.jpeg" alt="" />
							</div>
							<div class="user-info-box">
								<p class="info__name"><span class="bold">홍길동</span> 차장</p>
								<p class="info__dept">컨설팅본부</p>
								<p class="info__id">사원번호 <span class="bold">676324</span></p>
							</div>
						</div>
					</div>
					<div class="component-box">
						<div class="component-box-top">
							<p class="component__title">아이디</p>
						</div>
						<div class="component-box-cnt">
							<div class="input-box">
								<input class="input" type="text" placeholder="아이디" readonly />
							</div>
						</div>
					</div>
					<div class="component-box">
						<div class="component-box-top">
							<p class="component__title">비밀번호</p>
						</div>
						<div class="component-box-cnt">
							<button type="button" class="button">비밀번호 변경</button>
						</div>
					</div>
					<div class="component-box">
						<div class="component-box-top">
							<p class="component__title">휴대폰번호</p>
						</div>
						<div class="component-box-cnt">
							<div class="input-box">
								<input class="input" type="text" placeholder="010-1234-5678" readonly />
							</div>
							<button type="button" class="button">휴대폰번호 변경</button>
						</div>
					</div>
					<div class="component-box">
						<div class="component-box-top">
							<p class="component__title">E-mail</p>
						</div>
						<div class="component-box-cnt">
							<div class="input-box">
								<input class="input" type="email" placeholder="email@email.com" readonly />
							</div>
							<button type="button" class="button">E-mail 변경</button>
						</div>
					</div>
					<div class="component-box">
						<div class="component-box-top">
							<p class="component__title">사진 변경</p>
						</div>
						<div class="component-box-cnt">
							<div class="input-box">
								<input class="input" type="file" />
							</div>
							<p class="msg-state">3MB 미만의 JPG, GIF, PNG 파일만 등록 가능합니다.</p>
						</div>
					</div>
				</div>
				<div class="buttons-complete">
					<button type="button" class="button button__submit">
						수정
					</button>
				</div>
			</div>
		</section>

		<div class="popup popup__info-change popup__pw">
			<div class="component-area">
				<div class="inner-wrap">
					<div class="popup-top">
						<strong class="popup__title">비밀번호 변경</strong>
					</div>
					<div class="popup-contents">
						<div class="component-box">
							<div class="input-box">
								<input type="password" class="input" placeholder="현재 비밀번호를 입력하세요" />
							</div>
							<div class="input-box">
								<input type="password" class="input" placeholder="새 비밀번호를 입력하세요" />
							</div>
							<div class="input-box">
								<input type="password" class="input" placeholder="새 비밀번호를 다시 입력하세요" />
							</div>
						</div>
						<div class="component-box">
							<p class="msg-info">- 영문, 숫자, 특수문자 조합 6~12 자리로 설정</p>
							<p class="msg-info">- 아이디와 동일한 비밀번호는 사용 불가</p>
							<p class="msg-info">- 3자리 이상 동일문구(영문, 숫자, 특수문자)는 사용 불가</p>
						</div>
						<div class="popup-bottom buttons-complete">
							<div class="buttons">
								<button type="submit" class="button button__save">변경</button>
								<button type="button" class="button button__cancel">취소</button>
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
		<div class="popup popup__info-change popup__phone">
			<div class="component-area">
				<div class="inner-wrap">
					<div class="popup-top">
						<strong class="popup__title">휴대폰번호 변경</strong>
					</div>
					<div class="popup-contents">
						<div class="component-box">
							<div class="input-box">
								<input type="text" class="input" placeholder="'010-XXXX-XXXX' 형식으로 입력하세요" />
							</div>
						</div>
						<div class="popup-bottom buttons-complete">
							<div class="buttons">
								<button type="submit" class="button button__save">변경</button>
								<button type="button" class="button button__cancel">취소</button>
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
		<div class="popup popup__info-change popup__email">
			<div class="component-area">
				<div class="inner-wrap">
					<div class="popup-top">
						<strong class="popup__title">E-mail 변경</strong>
					</div>
					<div class="popup-contents">
						<div class="component-box">
							<div class="input-box">
								<input type="text" class="input" />
							</div>
						</div>
						<div class="popup-bottom buttons-complete">
							<div class="buttons">
								<button type="submit" class="button button__save">변경</button>
								<button type="button" class="button button__cancel">취소</button>
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
	</div>
</template>

<script>
export default {};
</script>

<style></style>

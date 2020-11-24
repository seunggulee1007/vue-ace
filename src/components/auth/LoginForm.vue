<template>
	<section class="container login-container">
		<section class="article section__login">
			<h1 class="logo logo-rec">
				<!-- <img src="images/logo-login.png" alt="ACE Business Portal"> -->
				<p class="mark">
					<span>A</span>
				</p>
				<p>
					<span><span class="color">ACE</span> Business Portal</span>
					<span>Agile Centric Efficiency</span>
				</p>
			</h1>
			<h2 class="section-title">로그인</h2>
			<form action="" method="post" class="form__login">
				<div class="input-box input-box-icon">
					<span class="icon icon__large icon-user"></span>
					<input
						class="input input-icon input--large"
						type="text"
						placeholder="아이디"
						v-model="userId"
						ref="userId"
					/>
				</div>
				<div class="input-box input-box-icon">
					<span class="icon icon__large icon-pw"></span>
					<input
						class="input input-icon input--large"
						type="password"
						placeholder="비밀번호"
						ref="password"
						v-model="password"
					/>
				</div>
				<div class="login-option">
					<div>
						<div class="input-box">
							<span class="input-checkbox">
								<input type="checkbox" id="checkboxId" />
								<label for="checkboxId" class="input-checkbox__label">
									<span>아이디 저장</span>
								</label>
							</span>
						</div>
						<div class="input-box">
							<span class="input-checkbox">
								<input type="checkbox" id="checkboxPw" />
								<label for="checkboxPw" class="input-checkbox__label">
									<span>비밀번호 저장</span>
								</label>
							</span>
						</div>
					</div>
					<a href="#" class="link">아이디/비밀번호 찾기</a>
				</div>
				<button type="button" class="button button-red-full button__login" @click="login">로그인</button>
			</form>
		</section>
	</section>
</template>

<script>
import { mapActions } from 'vuex';
export default {
	data() {
		return {
			userId: '',
			password: '',
		};
	},
	methods: {
		...mapActions(['LOGIN']),
		async login() {
			if (!this.userId) {
				this.sAlert('아이디를 입력해 주세요');
				this.$refs.userId.focus();
				return;
			} else if (!this.password) {
				this.sAlert('비밀번호를 입력해 주세요');
				this.$refs.password.focus();
				return;
			}
			const params = {
				userId: this.userId,
				password: this.password,
			};
			try {
				let res = await this.LOGIN(params);
				console.log(res);
				if (res.result == 0) {
					this.$router.push('/menu/module');
				} else {
					this.sAlert(res.resultMsg);
				}
			} catch (e) {
				console.log(e);
			}
		},
	},
};
</script>

<style></style>

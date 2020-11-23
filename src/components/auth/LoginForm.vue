<template>
	<div>
		<span> 아이디 : </span><input type="text" v-model="userId" /> <span> 비밀번호 : </span
		><input type="password" v-model="password" />
		<button type="button" @click="login" class="btn">
			로그인
		</button>
	</div>
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
				if (res.result == 0) {
					this.$router.push('/flexible/workPlan');
				} else {
					this.sAlert(res.resultMsg);
				}
			} catch (e) {
				console.log(e);
				// this.logMessage = e.response.data.resultMsg;
			}
		},
	},
};
</script>

<style></style>

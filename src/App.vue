<template>
	<div id="app" class="wrap">
		<app-header v-if="!this.$store.getters.adminView && isUserLogin"></app-header>
		<app-navi v-if="!this.$store.getters.adminView && isUserLogin"></app-navi>
		<admin-header v-if="this.$store.getters.adminView && isUserLogin"></admin-header>
		<transition name="fade">
			<router-view />
		</transition>
	</div>
</template>

<script>
import AppHeader from '@/components/common/AppHeader.vue';
import AdminHeader from '@/components/common/AdminHeader.vue';
import AppNavi from '@/components/common/AppNavi.vue';

export default {
	computed: {
		isUserLogin() {
			return this.$store.getters.isLogin;
		},
	},
	components: {
		AppHeader,
		AdminHeader,
		AppNavi,
	},
};
</script>
<style>
@import './css/style.css';
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
	opacity: 0;
}
</style>

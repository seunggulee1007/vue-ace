<template>
	<div class="lnb">
		<ul v-for="(item, idx) in menuList" :key="idx" class="lst-lnb">
			<tree-view :item="item"></tree-view>
		</ul>
	</div>
</template>

<script>
import TreeView from '@/components/common/TreeView.vue';
import { mapGetters } from 'vuex';
export default {
	computed: {
		...mapGetters(['menuList']),
		isUserLogin() {
			return this.$store.getters.isLogin;
		},
	},
	components: {
		TreeView,
	},
};
</script>

<style></style>

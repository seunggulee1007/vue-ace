<template>
	<div id="app" class="wrap">
		<app-header></app-header>
		<router-view />
	</div>
</template>

<script>
import AppHeader from '@/components/common/AppHeader.vue';
export default {
	components: {
		AppHeader,
	},
};
</script>
<style>
@import './css/style.css';
</style>

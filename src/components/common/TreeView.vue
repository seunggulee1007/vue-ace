<template>
	<li class="lst-lnb__item">
		<div v-if="item.pageUrl">
			<router-link :to="item.pageUrl" class="lst-lnb__link">
				{{ item.menuNm }}
			</router-link>
			<span v-if="isFolder && !isOpen">+</span>
			<span v-if="isFolder && isOpen">-</span>
		</div>
		<div v-else>
			{{ item.menuNm }}
			<span v-if="isFolder && !isOpen">+</span>
			<span v-if="isFolder && isOpen">-</span>
		</div>
		<ul class="lst-lnb__item">
			<tree-item v-for="(children, idx) in item.children" :key="idx" :item="children"> </tree-item>
		</ul>
	</li>
</template>

<script>
export default {
	name: 'tree-item',
	props: {
		item: Object,
	},
	created() {
		this.isOpen = this.item.isOpen;
	},
	data() {
		return {
			isOpen: false, // tree가 열렸는지 확인.
		};
	},
	computed: {
		isFolder() {
			return this.item.children && this.item.children.length;
		},
	},
};
</script>

<style></style>

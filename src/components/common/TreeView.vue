<template>
	<li class="lst-lnb__item" :class="{ show: isOpen }">
		<div v-if="item.pageUrl">
			<router-link :to="item.pageUrl" class="lst-lnb__link">
				{{ item.menuNm }}
			</router-link>
			<span v-if="isFolder && !isOpen">+</span>
			<span v-if="isFolder && isOpen">-</span>
		</div>
		<div v-else @click="toggle">
			{{ item.menuNm }}
			<span v-if="isFolder && !isOpen && !isFirst">+</span>
			<span v-if="isFolder && isOpen && !isFirst">-</span>
		</div>
		<ul>
			<tree-item v-for="(children, idx) in item.children" :key="idx" :item="children"> </tree-item>
		</ul>
	</li>
</template>

<script>
export default {
	name: 'tree-item',
	props: ['item', 'isFirst'],
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
	methods: {
		toggle() {
			if (this.isFirst) return;
			this.isOpen = !this.isOpen;
		},
	},
};
</script>

<style></style>

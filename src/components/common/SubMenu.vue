<template>
	<div>
		<el-submenu :index="menu.menuId" v-for="menu in menuList" :key="menu.menuId">
			<template slot="title">
				<i calss=""></i>
				<span>{{ menu.menuNm }}</span>
			</template>
		</el-submenu>
		<el-menu-item index="2">
			<i class="el-icon-menu"></i>
			<span>Navigator Two</span>
		</el-menu-item>
	</div>
</template>

<script>
export default {
	props: {
		item: Object,
	},
	computed: {
		isFolder() {
			return this.item.children && this.item.children.length;
		},
	},
};
</script>

<style></style>

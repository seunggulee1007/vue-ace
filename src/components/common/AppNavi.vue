<template>
	<el-row class="tac">
		<el-col :span="12">
			<h5>Custom colors</h5>
			<el-menu
				default-active="2"
				class="el-menu-vertical-demo"
				@open="handleOpen"
				@close="handleClose"
				background-color="#545c64"
				text-color="#fff"
				active-text-color="#ffd04b"
			>
				<div v-for="item in menuList" :key="item.menuId">
					<el-submenu index="item.menuId">
						<template slot="title">
							<i calss=""></i>
							<span>{{ item.menuNm }}</span>
						</template>
					</el-submenu>
				</div>

				<div>
					<el-submenu index="1">
						<template slot="title">
							<i class="el-icon-location"></i>
							<span>Navigator One</span>
						</template>
						<el-menu-item-group title="Group One">
							<el-menu-item index="1-1">item one</el-menu-item>
							<el-menu-item index="1-2">item one</el-menu-item>
						</el-menu-item-group>
						<el-menu-item-group title="Group Two">
							<el-menu-item index="1-3">item three</el-menu-item>
						</el-menu-item-group>
						<el-submenu index="1-4">
							<template slot="title">item four</template>
							<el-menu-item index="1-4-1">item one</el-menu-item>
						</el-submenu>
					</el-submenu>
				</div>
				<div>
					<el-menu-item index="2">
						<i class="el-icon-menu"></i>
						<span>Navigator Two</span>
					</el-menu-item>
				</div>
				<div>
					<el-menu-item index="3">
						<i class="el-icon-document"></i>
						<span>Navigator Three</span>
					</el-menu-item>
				</div>
				<div>
					<el-menu-item index="4">
						<i class="el-icon-setting"></i>
						<span>Navigator Four</span>
					</el-menu-item>
				</div>
			</el-menu>
		</el-col>
	</el-row>
</template>

<script>
import { selectMenuList } from '@/api/menu';
export default {
	async created() {
		console.log(this.$store.state.token);
		await this.selectMenuList();
	},
	data() {
		return {
			menuList: [],
		};
	},
	methods: {
		async selectMenuList() {
			let res = await selectMenuList();
			console.log(res);
			if (res.result == 0) {
				this.menuList = res.data;
			}
		},
		handleOpen(key, keyPath) {
			console.log(key, keyPath);
		},
		handleClose(key, keyPath) {
			console.log(key, keyPath);
		},
	},
};
</script>

<style></style>

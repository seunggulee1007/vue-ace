<template>
	<div class="container admin-container">
		<section class="section__tree">
			<h4 class="section__title">
				<span>메뉴</span>
			</h4>
			<div class="tree-area">
				<el-tree
					:data="treeData"
					node-key="menuId"
					:default-expanded-keys="[0]"
					:props="defaultProps"
					accordion
					@node-click="choiceMenu"
				>
				</el-tree>
			</div>
		</section>
		<section class="section__contents">
			<div class="inner-wrap">
				<div class="section-top">
					<h3 class="section__title">권한 등록</h3>
				</div>
				<div class="component-area">
					<div class="component-top">
						<strong class="content__title">{{ choicedMenuNm }}</strong>
					</div>
					<div class="table-wrap">
						<table class="table">
							<thead>
								<tr class="row">
									<th>순서</th>
									<th>권한그룹명</th>
									<th>권한 범위</th>
								</tr>
							</thead>
							<tbody>
								<tr class="row" v-for="(item, idx) in authMenuList" :key="item.menuNm">
									<td>{{ idx + 1 }}</td>
									<td>{{ item.authGroupNm }}</td>
									<td>
										<button
											type="button"
											class="button button-state button-state__3options"
											:class="{
												opt1: item.authType == 'W',
												opt2: item.authType == 'R',
												opt3: item.authType == 'N',
											}"
											@click="changeAuth(item)"
										>
											<span class="button-txt button-txt__opt1">읽기&amp;쓰기</span>
											<span class="button-txt button-txt__opt2">읽기</span>
											<span class="button-txt button-txt__opt3">권한 없음</span>
										</button>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
import { selectMenuList, selectAuthMenuList } from '@/api/menu';
import { insertMenuAuth, updateMenuAuth } from '@/api/admin/menuAuth';
export default {
	created() {
		this.selectMenuList();
	},
	data() {
		return {
			treeData: [],
			defaultProps: {
				children: 'children',
				label: 'name',
			},
			choicedMenuNm: '',
			choicedMenuId: '',
			authMenuList: [],
		};
	},
	methods: {
		choiceMenu(item) {
			this.choicedMenuNm = item.menuNm;
			this.choicedMenuId = item.menuId;
			this.selectAuthMenuList(item.menuId);
		},
		async selectMenuList() {
			let res = await selectMenuList();
			if (res.result == 0) {
				this.treeData = res.data.menuList;
			}
		},
		async selectAuthMenuList(menuId) {
			let res = await selectAuthMenuList(menuId);
			console.log(res);
			if (res.result == 0) {
				this.authMenuList = res.data;
			}
		},
		async changeAuth(item) {
			let authType = item.authType;
			switch (authType) {
				case 'N':
					item.authType = 'W';
					break;
				case 'W':
					item.authType = 'R';
					break;
				case 'R':
					item.authType = 'N';
					break;
			}
			let res;
			if (item.menuAuthId) {
				res = await updateMenuAuth(item);
			} else {
				item.menuId = this.choicedMenuId;
				res = await insertMenuAuth(item);
				if (res.result == 0) {
					item.menuAuthId = res.data.menuAuthId;
				}
			}
			if (res.result != 0) {
				this.sAlert(res.resultMsg);
				item.authType = authType;
			}
		},
	},
};
</script>

<style></style>

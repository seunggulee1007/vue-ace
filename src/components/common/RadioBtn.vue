<template>
	<div class="select-options">
		<div class="input-radio select-options__item " v-for="item in codeList" :key="item.codeId">
			<input
				type="radio"
				:id="item.codeId"
				class="input"
				:name="codeGroup"
				:value="item.codeId"
				v-model="selected"
			/>
			<label :for="item.codeId">{{ item.codeNm }}</label>
		</div>
	</div>
</template>

<script>
import { getCodeList } from '@/api/common/common';
export default {
	created() {
		this.getCode();
	},
	watch: {
		selected(val) {
			this.$emit('input', val);
		},
	},
	props: ['codeGroup', 'codeFlag', 'defaultVal'],
	methods: {
		async getCode() {
			let res = await getCodeList(this.codeGroup);
			this.codeList = res.data[this.codeGroup];
			if (this.defaultVal) {
				this.selected = this.defaultVal;
			} else if (this.codeList.length > 0) {
				this.selected = this.codeList[0].codeId;
			}
		},
	},
	data() {
		return {
			codeList: [],
			selected: '',
		};
	},
};
</script>

<style></style>

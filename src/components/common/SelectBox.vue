<template>
	<div class="input-select input-box input-box-icon">
		<select class="selectbox" v-if="codeFlag" @input="updateVal($event.target.value)" v-model="selected">
			<option v-for="item in codeList" :key="item.codeId" :value="item.codeId"
				>{{ `${item.int_1}(${item.codeNm})-${item.codeInfo}` }}
			</option>
		</select>
		<select class="selectbox" v-else @input="updateVal($event.target.value)" v-model="selected">
			<option v-for="item in codeList" :key="item.codeId" :value="item.codeId">{{ item.codeNm }} </option>
		</select>
		<span class="icon icon-arrow"></span>
	</div>
</template>

<script>
import { getCodeList } from '@/api/common/common';
export default {
	created() {
		this.getCode();
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
			this.updateVal(this.selected);
		},
		updateVal(val) {
			this.$emit('input', val);
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

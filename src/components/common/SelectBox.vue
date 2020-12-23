<template>
	<select class="input-select" v-if="codeFlag" @input="updateVal($event.target.value)">
		<option v-for="item in codeList" :key="item.codeId" :value="item.codeId"
			>{{ `${item.int_1}(${item.codeNm})-${item.codeInfo}` }}
		</option>
	</select>
	<select class="input-select" v-else @input="updateVal($event.target.value)">
		<option v-for="item in codeList" :key="item.codeId" :value="item.codeId">{{ item.codeNm }} </option>
	</select>
</template>

<script>
import { getSelectBox } from '@/api/common/common';
export default {
	created() {
		this.getCode();
	},
	props: ['codeGroup', 'codeFlag'],
	methods: {
		async getCode() {
			let res = await getSelectBox(this.codeGroup);
			this.codeList = res.data[this.codeGroup];
			if (this.codeList.length > 0) {
				this.$emit('input', this.codeList[0].code);
			}
		},
		updateVal(val) {
			this.$emit('input', val);
		},
	},
	data() {
		return {
			codeList: [],
		};
	},
};
</script>

<style></style>

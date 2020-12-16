<template>
	<div class="container admin-container">
		<section class="section__tree">
			<h4 class="section__title">
				<span>조직도</span>
			</h4>
			<div class="tree-area">
				<ul class="tree-container tree__module">
					<li class="tree-item on">
						<a href="#" class="tree-item__link">
							<span class="icon-tree"></span>
							컨설팅 본부
						</a>
						<ul class="tree-sub-container">
							<li class="tree-item">
								<a href="#" class="tree-item__link tree-item__no-icon">
									<span class="icon-tree"></span>
									고객전략 및 마케팅
								</a>
							</li>
							<li class="tree-item">
								<a href="#" class="tree-item__link tree-item__no-icon">
									<span class="icon-tree"></span>
									M&A
								</a>
							</li>
							<li class="tree-item">
								<a href="#" class="tree-item__link tree-item__no-icon">
									<span class="icon-tree"></span>
									기업금융
								</a>
							</li>
						</ul>
					</li>
					<li class="tree-item">
						<a href="#" class="tree-item__link">
							<span class="icon-tree"></span>
							개발 본부
						</a>
					</li>
					<li class="tree-item">
						<a href="#" class="tree-item__link">
							<span class="icon-tree"></span>
							경영관리 본부
						</a>
					</li>
					<li class="tree-item">
						<a href="#" class="tree-item__link">
							<span class="icon-tree"></span>
							영업 사업부
						</a>
					</li>
				</ul>
			</div>
		</section>
		<section class="section__contents">
			<div class="inner-wrap">
				<div class="section-top">
					<h3 class="section__title">사용자 등록</h3>
					<div class="buttons">
						<button type="button" class="button button__add">
							<span class="icon icon-add"></span>사용자 추가
						</button>
						<button type="button" class="button button__delete">
							<span class="icon icon-delete"></span>선택 삭제
						</button>
					</div>
				</div>

				<article class="article lst-user">
					<div class="article-top">
						<strong class="content__title">
							컨설팅 본부
						</strong>
					</div>
					<div class="article-content">
						<div class="table-wrap">
							<vue-good-table
								:columns="columns"
								:rows="rows"
								:fixed-header="true"
								max-height="50vh"
								styleClass="vgt-table"
								:select-options="{ enable: true }"
								@on-selected-rows-change="selectionChanged"
							/>
						</div>
					</div>
				</article>
				<div class="buttons-complete">
					<div class="buttons">
						<button type="submit" class="button button__save">저장</button>
						<button type="button" class="button button__cancel">취소</button>
						<button type="button" class="button button__temp-save">임시저장</button>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
import 'vue-good-table/dist/vue-good-table.css';
import { VueGoodTable } from 'vue-good-table';
export default {
	data: function() {
		return {
			columns: [
				{
					label: 'No.',
					field: 'num',
				},
				{
					label: '부서명',
					field: 'deptName',
				},
				{
					label: '사원명',
					field: 'name',
				},
				{
					label: '사원번호',
					field: 'id',
				},
				{
					label: '휴대폰번호',
					field: 'phone',
				},
				{
					label: 'Email',
					field: 'email',
				},
				{
					label: '직위',
					field: 'position',
				},
				{
					label: '재직여부',
					field: 'status',
				},
			],
			rows: [
				{
					num: '1',
					deptName: '컨설팅본부',
					name: '홍길동',
					id: '20190101',
					phone: '010-0000-0000',
					email: 'abcde123@inno-soft.co.kr',
					position: '차장',
					status: '재직',
				},
				{
					num: '2',
					deptName: '컨설팅본부',
					name: '최수현',
					id: '20190101',
					phone: '010-0000-0000',
					email: 'efgh9@inno-soft.co.kr',
					position: '과장',
					status: '재직',
				},
				{
					num: '3',
					deptName: '컨설팅본부',
					name: '김우중',
					id: '20190101',
					phone: '010-0000-0000',
					email: '123456x@inno-soft.co.kr',
					position: '대리',
					status: '재직',
				},
			],
		};
	},
	components: {
		VueGoodTable,
	},
	metohds: {
		selectionChanged() {
			// params.selectedRows - all rows that are selected (this page)
		},
	},
};
</script>

<style></style>

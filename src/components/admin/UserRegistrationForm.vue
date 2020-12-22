<template>
	<div class="container admin-container">
		<section class="section__tree">
			<h4 class="section__title">
				<span>조직도</span>
			</h4>
			<div class="tree-area">
				<el-tree
					:data="treeData"
					node-key="deptId"
					:default-expanded-keys="[0]"
					:props="defaultProps"
					accordion
					@node-click="choiceDept"
				>
				</el-tree>
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

				<div class="component-area lst-user">
					<div class="component-box">
						<strong class="content__title">
							컨설팅 본부
						</strong>
					</div>
					<div class="table-wrap">
						<table class="table">
							<thead>
								<tr>
									<th>No.</th>
									<th>부서명</th>
									<th>사원명</th>
									<th>사원번호</th>
									<th>휴대폰번호</th>
									<th>Email</th>
									<th>직위</th>
									<th>재직여부</th>
								</tr>
							</thead>
							<tbody>
								<tr class="row">
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="buttons-complete">
					<div class="buttons">
						<button type="submit" class="button button__save">저장</button>
						<button type="button" class="button button__cancel">취소</button>
						<button type="button" class="button button__temp-save">임시저장</button>
					</div>
				</div>
			</div>
		</section>
		<div class="popup">
			<div class="component-area">
				<div class="inner-wrap">
					<div class="popup-top">
						<strong class="popup__title">사용자 등록</strong>
					</div>
					<div class="popup-contents">
						<div class="component-box">
							<div class="component-box-top">
								<p class="component__title">부서명</p>
							</div>
							<div class="component-box-cnt">
								<div class="input-box">
									<input type="text" class="input" />
									<button type="button" class="button">부서찾기</button>
								</div>
							</div>
						</div>
						<div class="component-box">
							<div class="component-box-top">
								<p class="component__title">사원명</p>
							</div>
							<div class="component-box-cnt">
								<div class="input-box">
									<input type="text" class="input" />
								</div>
							</div>
						</div>
						<div class="component-box">
							<div class="component-box-top">
								<p class="component__title">사원번호</p>
							</div>
							<div class="component-box-cnt">
								<div class="input-box">
									<input type="text" class="input" />
								</div>
							</div>
						</div>
						<div class="component-box">
							<div class="component-box-top">
								<p class="component__title">휴대폰번호</p>
							</div>
							<div class="component-box-cnt">
								<div class="input-box">
									<input type="text" class="input" />
								</div>
							</div>
						</div>
						<div class="component-box">
							<div class="component-box-top">
								<p class="component__title">Email</p>
							</div>
							<div class="component-box-cnt">
								<div class="input-box">
									<input type="email" class="input" />
								</div>
							</div>
						</div>
						<div class="component-box">
							<div class="component-box-top">
								<p class="component__title">직위</p>
							</div>
							<div class="component-box-cnt">
								<div class="input-box">
									<select name="" id="" class="input-select">
										<option value="인턴">사원</option>
										<option value="사원">사원</option>
										<option value="주임">주임</option>
										<option value="대리">대리</option>
										<option value="과장">과장</option>
										<option value="차장">차장</option>
										<option value="팀장">차장</option>
										<option value="부장">차장</option>
									</select>
								</div>
							</div>
						</div>
					</div>
					<div class="popup-bottom buttons-complete">
						<div class="buttons">
							<button type="submit" class="button button__save">등록</button>
							<button type="button" class="button button__cancel">취소</button>
						</div>
					</div>
				</div>
				<button type="button" class="button__close" @click="closeModal">
					<span class="icon icon-close"></span>
					<span class="blind">닫기</span>
				</button>
			</div>
		</div>
	</div>
</template>

<script>
import { selectDeptList } from '@/api/admin/dept';
export default {
	created() {
		this.selectDeptList();
	},
	methods: {
		async selectDeptList() {
			let res = await selectDeptList();
			if (res.result == 0) {
				this.treeData = res.data;
				this.treeData.isOpen = true;
			}
		},
	},
	data() {
		return {
			treeData: [],
			defaultProps: {
				children: 'children',
				label: 'deptNm',
			},
		};
	},
};
</script>

<style></style>
